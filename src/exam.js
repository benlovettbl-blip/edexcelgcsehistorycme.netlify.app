import { state } from './state.js';
import { AudioEngine } from './audio.js';
import { Confetti } from './confetti.js';
import { switchView } from './navigation.js';
import { initExamLeaderboard } from './views.js';

// --- Quiz Generator Engine ---
function showExamSetup() {
  document.getElementById('exam-setup-panel').style.display = 'flex';
  document.getElementById('exam-runner-panel').style.display = 'none';
  document.getElementById('exam-results-panel').style.display = 'none';
  state.examSession.isActive = false;
  
  if (state.examSession.timerInterval) {
    clearInterval(state.examSession.timerInterval);
  }
}

function startExam(scope, length, timeLimit) {
  state.examSession.isActive = true;
  state.examSession.scope = scope;
  state.examSession.length = parseInt(length);
  state.examSession.timeLimit = parseInt(timeLimit);
  state.examSession.timeRemaining = parseInt(timeLimit);
  state.examSession.timeElapsed = 0;
  state.examSession.activeIndex = 0;
  state.examSession.answers = {};
  state.examSession.grades = {};
  state.examSession.startTime = Date.now();

  // Filter pool of questions based on chosen Scope
  let pool = [...state.allQuestions];
  if (scope !== 'all') {
    if (scope.startsWith('subtopic_')) {
      pool = pool.filter(q => q.subtopicId === scope);
    } else {
      pool = pool.filter(q => q.topicId === scope);
    }
  }

  // Cap requested length to the size of the question pool
  if (state.examSession.length > pool.length) {
    state.examSession.length = pool.length;
  }

  // Balanced Split selection (2/3 standard, 1/3 depth)
  const standardPool = pool.filter(q => q.type === 'standard');
  const depthPool = pool.filter(q => q.type === 'depth');

  let stdCount = Math.round(state.examSession.length * (2/3));
  let depthCount = state.examSession.length - stdCount;

  // Borrow count if one pool does not have enough questions
  if (standardPool.length < stdCount) {
    const diff = stdCount - standardPool.length;
    stdCount = standardPool.length;
    depthCount += diff;
  }
  if (depthPool.length < depthCount) {
    const diff = depthCount - depthPool.length;
    depthCount = depthPool.length;
    stdCount += diff;
  }

  // Ensure counts are bounded
  stdCount = Math.min(stdCount, standardPool.length);
  depthCount = Math.min(depthCount, depthPool.length);

  // Shuffle pools before slicing
  const shuffledStd = [...standardPool].sort(() => Math.random() - 0.5);
  const shuffledDepth = [...depthPool].sort(() => Math.random() - 0.5);

  const selection = [
    ...shuffledStd.slice(0, stdCount),
    ...shuffledDepth.slice(0, depthCount)
  ];

  // Optional: Chronological sort or randomized shuffle
  const sortOrder = document.getElementById('exam-order-select').value;
  if (sortOrder === 'chronological') {
    selection.sort((a, b) => a.year - b.year);
  } else {
    selection.sort(() => Math.random() - 0.5);
  }

  state.examSession.questions = selection;

  // Set up panels
  document.getElementById('exam-setup-panel').style.display = 'none';
  document.getElementById('exam-runner-panel').style.display = 'flex';
  
  // Timer Setup
  if (state.examSession.timerInterval) {
    clearInterval(state.examSession.timerInterval);
  }
  
  updateExamTimerDisplay();
  
  state.examSession.timerInterval = setInterval(() => {
    if (state.examSession.timeLimit > 0) {
      state.examSession.timeRemaining--;
      updateExamTimerDisplay();
      if (state.examSession.timeRemaining <= 0) {
        clearInterval(state.examSession.timerInterval);
        AudioEngine.play('fail');
        alert("Time is up! Submitting your recall test.");
        finishExam();
      }
    } else {
      state.examSession.timeElapsed = Math.floor((Date.now() - state.examSession.startTime) / 1000);
      updateExamTimerDisplay(true);
    }
  }, 1000);

  displayExamQuestion();
}

function updateExamTimerDisplay(incrementing = false) {
  const display = document.getElementById('exam-timer-text');
  
  if (incrementing) {
    const elapsed = state.examSession.timeElapsed;
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');
    display.textContent = `${mins}:${secs}`;
    display.style.color = 'var(--text-main)';
  } else {
    const remaining = state.examSession.timeRemaining;
    const mins = Math.floor(remaining / 60).toString().padStart(2, '0');
    const secs = (remaining % 60).toString().padStart(2, '0');
    display.textContent = `${mins}:${secs}`;
    
    // Alert color change if less than 1 minute
    if (remaining < 60) {
      display.style.color = 'var(--accent)';
    } else {
      display.style.color = 'var(--secondary)';
    }
  }
}

function getMultipleChoiceOptions(q) {
  const correct = q.answer.trim();
  
  // Gather other answers of similar types (or all answers)
  const pool = state.allQuestions
    .map(other => other.answer.trim())
    .filter(ans => ans.toLowerCase() !== correct.toLowerCase() && ans.length > 0);
  
  // Get unique answers from pool
  const uniquePool = Array.from(new Set(pool));
  
  // Shuffle unique pool and take 3
  const shuffled = uniquePool.sort(() => Math.random() - 0.5);
  const distractors = shuffled.slice(0, 3);
  
  // Combine correct answer and distractors, then shuffle again
  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
  return options;
}

function displayExamQuestion() {
  const index = state.examSession.activeIndex;
  const questions = state.examSession.questions;
  const q = questions[index];
  
  document.getElementById('exam-progress-text').textContent = `Question ${index + 1} of ${questions.length}`;
  
  // Update Grade Estimate during exam based on progress
  const gradesMap = Object.values(state.examSession.grades);
  const correctCount = gradesMap.filter(g => g === true).length;
  const gradedQuestionsCount = gradesMap.length;
  const scoreRatio = gradedQuestionsCount > 0 ? (correctCount / gradedQuestionsCount) : 1; // Start high
  
  document.getElementById('exam-current-mastery').textContent = getGcseLevel(scoreRatio * 100) + " Est.";
  
  // Question Card elements
  const badge = document.getElementById('exam-q-badge');
  badge.textContent = q.type === 'standard' ? 'Standard' : 'Top Tier Trivia';
  badge.className = `badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}`;
  
  document.getElementById('exam-q-text').textContent = q.question;
  
  // Toggle states
  document.getElementById('exam-input-section').style.display = 'flex';
  document.getElementById('exam-review-section').style.display = 'none';
  
  // Generate MCQ Options
  const options = getMultipleChoiceOptions(q);
  const container = document.getElementById('exam-mcq-options-container');
  container.innerHTML = '';
  
  const letters = ['A', 'B', 'C', 'D'];
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'mcq-option-btn';
    btn.innerHTML = `<span class="mcq-option-prefix">${letters[i]}</span> <span>${opt}</span>`;
    btn.addEventListener('click', () => {
      selectMCQOption(opt);
    });
    container.appendChild(btn);
  });
}

function selectMCQOption(optionText) {
  const index = state.examSession.activeIndex;
  const questions = state.examSession.questions;
  const q = questions[index];
  
  const isCorrect = (optionText === q.answer.trim());
  state.examSession.answers[q.id] = optionText;
  state.examSession.grades[q.id] = isCorrect;
  
  // Play sound
  AudioEngine.play(isCorrect ? 'success' : 'fail');
  
  // Set review contents
  document.getElementById('exam-correct-term').textContent = q.answer;
  document.getElementById('exam-correct-exp').textContent = q.explanation;
  
  const reviewAnswer = document.getElementById('exam-review-user-answer');
  reviewAnswer.textContent = optionText;
  reviewAnswer.style.color = isCorrect ? 'var(--success)' : 'var(--accent)';
  
  // Update result banner
  const banner = document.getElementById('exam-result-banner');
  if (banner) {
    if (isCorrect) {
      banner.className = 'exam-result-banner correct';
      banner.innerHTML = '<i class="fa-solid fa-circle-check"></i> Correct Choice! (+1 Point)';
    } else {
      banner.className = 'exam-result-banner incorrect';
      banner.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Incorrect Choice!';
    }
  }
  
  // Toggle displays
  document.getElementById('exam-input-section').style.display = 'none';
  document.getElementById('exam-review-section').style.display = 'flex';
}

function nextExamQuestion() {
  const questions = state.examSession.questions;
  state.examSession.activeIndex++;
  
  if (state.examSession.activeIndex >= questions.length) {
    finishExam();
  } else {
    displayExamQuestion();
  }
}

function finishExam() {
  clearInterval(state.examSession.timerInterval);
  state.examSession.isActive = false;
  
  const questions = state.examSession.questions;
  const grades = state.examSession.grades;
  
  let score = 0;
  questions.forEach(q => {
    if (grades[q.id] === true) score++;
  });
  
  const pct = Math.round((score / questions.length) * 100);
  const grade = getLetterGrade(pct);
  
  // Time Taken
  let timeStr = "N/A";
  if (state.examSession.timeLimit > 0) {
    const elapsed = state.examSession.timeLimit - state.examSession.timeRemaining;
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');
    timeStr = `${mins}:${secs}`;
  } else {
    const elapsed = state.examSession.timeElapsed;
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');
    timeStr = `${mins}:${secs}`;
  }
  
  // Render results
  document.getElementById('results-grade').textContent = grade;
  document.getElementById('results-score').textContent = `${score} / ${questions.length}`;
  document.getElementById('results-percent').textContent = `${pct}%`;
  document.getElementById('results-time').textContent = timeStr;

  // Initialize Exam Leaderboard
  initExamLeaderboard(state.examSession.scope || 'all', pct);
  
  // Grade Feedback
  const feedbackEl = document.getElementById('results-feedback-text');
  const gcseGrade = getGcseLevel(pct);
  if (pct >= 85) {
    feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Superb historical recall! You demonstrated excellent command of key terms and deep analysis. Keep this standard up!`;
    AudioEngine.play('cheer');
    Confetti.spawn(120);
  } else if (pct >= 70) {
    feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Strong performance. You recalled most key events, but reviewing the details-explanations will push your grades higher.`;
    AudioEngine.play('cheer');
    Confetti.spawn(50);
  } else if (pct >= 50) {
    feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Pass standard met. Spend more time in Flashcards Study mode to build active recall on key years and organizations.`;
  } else {
    feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Focus required. Revise the timeline and study standard recall definitions before re-attempting the quiz generator.`;
  }
  
  // Build scorecard list
  const breakdownList = document.getElementById('exam-results-breakdown-list');
  breakdownList.innerHTML = '';
  
  questions.forEach((q, idx) => {
    const correct = grades[q.id] === true;
    const item = document.createElement('div');
    item.className = 'topic-list-card';
    item.style.cursor = 'default';
    item.style.borderColor = correct ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)';
    
    item.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
        <span style="font-weight: 600; font-size: 0.85rem;">Q${idx + 1}: ${q.question}</span>
        <span style="font-size: 1rem; color: ${correct ? 'var(--success)' : 'var(--accent)'};">
          <i class="fa-solid ${correct ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
        </span>
      </div>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
        <div><strong>Your Answer:</strong> <span style="font-style: italic;">${state.examSession.answers[q.id]}</span></div>
        <div style="margin-top: 2px;"><strong>Correct Term:</strong> <span style="color: var(--success); font-weight: 600;">${q.answer}</span></div>
      </div>
    `;
    breakdownList.appendChild(item);
  });
  
  document.getElementById('exam-runner-panel').style.display = 'none';
  document.getElementById('exam-results-panel').style.display = 'flex';
}

function getLetterGrade(percentage) {
  if (percentage >= 90) return 'A*';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 50) return 'D';
  if (percentage >= 40) return 'E';
  return 'U';
}

function getGcseLevel(percentage) {
  if (percentage >= 90) return 'Grade 9';
  if (percentage >= 80) return 'Grade 8';
  if (percentage >= 70) return 'Grade 7';
  if (percentage >= 60) return 'Grade 6';
  if (percentage >= 50) return 'Grade 5';
  if (percentage >= 40) return 'Grade 4';
  return 'Below Grade 4';
}

export {
  showExamSetup,
  startExam,
  updateExamTimerDisplay,
  getMultipleChoiceOptions,
  displayExamQuestion,
  selectMCQOption,
  nextExamQuestion,
  finishExam,
  getLetterGrade,
  getGcseLevel
};
