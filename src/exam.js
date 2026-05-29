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
    pool = pool.filter(q => q.topicId === scope);
  }

  // Balanced Split selection (2/3 standard, 1/3 depth)
  const standardPool = pool.filter(q => q.type === 'standard');
  const depthPool = pool.filter(q => q.type === 'depth');

  let stdCount = Math.round(state.examSession.length * (2/3));
  let depthCount = state.examSession.length - stdCount;

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
  
  document.getElementById('exam-current-mastery').textContent = getKnessetStanding(scoreRatio * 100) + " Est.";
  
  // Question Card elements
  const badge = document.getElementById('exam-q-badge');
  badge.textContent = q.type === 'standard' ? 'Standard' : 'Top Tier Trivia';
  badge.className = `badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}`;
  
  document.getElementById('exam-q-text').textContent = q.question;
  
  // Reset Text area
  const textInput = document.getElementById('exam-user-answer');
  textInput.value = '';
  textInput.placeholder = `Type key details here... e.g. (${q.answer.charAt(0)}...)`;
  
  // Toggle states
  document.getElementById('exam-input-section').style.display = 'flex';
  document.getElementById('exam-review-section').style.display = 'none';
  
  textInput.focus();
}

function extractKeywords(q) {
  const text = (q.answer + " " + q.explanation).replace(/<\/?[^>]+(>|$)/g, ""); // remove HTML
  
  // Specification terms mapping
  const specKeywords = [
    "Mandate", "Zionism", "Balfour", "Holocaust", "Haganah", "Irgun", "Jerusalem", "Exodus", "United Nations", "UN",
    "Jordan", "Egypt", "Green Line", "Al-Nakba", "Nakba", "UNRWA", "IDF", "Conscription", "Law of Return", "Fedayeen",
    "Black Arrow", "Ariel Sharon", "Sharon", "Eilat", "King Farouk", "Farouk", "Reparations", "Nasser", "Pan-Arabism",
    "Gaza", "Czechoslovakia", "Aswan", "USA", "US", "Suez", "Sèvres", "Sinai", "UNEF", "Kinneret", "Moshe Sharett", 
    "Sharm el-Sheikh", "Kadesh", "Ultimatum", "Cairo", "PLO", "Fatah", "Arafat", "River Jordan", "Samu", "MiG", "MiGs",
    "USSR", "Soviets", "Soviet Union", "Tiran", "Pre-emptive", "Levi Eshkol", "Eshkol", "Defence Pact", "Focus",
    "Johnson", "Resolution 242", "Khartoum", "Three Nos", "Attrition", "Golan", "Refugees", "PFLP", "Dawson",
    "Munich", "Jarring", "George Habash", "Wrath of God", "Golda Meir", "Sadat", "Bar-Lev", "Settlements",
    "Yom Kippur", "Water Cannons", "SAM-3", "Nixon", "Embargo", "Resolution 338", "Agranat", "Elazar", "Sagger",
    "Conception", "Hussein", "OPEC", "Kissinger", "Shuttle Diplomacy", "Camp David", "Jimmy Carter", "Knesset"
  ];
  
  const foundSpec = new Set();
  const textLower = text.toLowerCase();
  
  specKeywords.forEach(kw => {
    const regex = new RegExp('\\b' + kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');
    if (regex.test(textLower)) {
      foundSpec.add(kw);
    }
  });
  
  // Extract percentages, numbers, and years
  const numRegex = /\b(\d+%?|\d+,\d+|\d+\s*percent|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|hundred|thousand|million)\b)/gi;
  let numMatch;
  while ((numMatch = numRegex.exec(text)) !== null) {
    const numStr = numMatch[1].trim();
    if (numStr.length > 1 || /\d/.test(numStr)) {
      foundSpec.add(numStr);
    }
  }
  
  // Extract words from the correct answer
  const stopwords = new Set(["the", "a", "an", "and", "or", "but", "of", "to", "in", "for", "with", "by", "on", "at", "from", "that", "this", "these", "those", "is", "are", "was", "were", "be", "been", "has", "have", "had", "it", "its", "their", "they", "them", "as", "about", "into", "over", "under", "through", "after", "before", "during"]);
  const answerWords = q.answer.split(/[^a-zA-Z0-9%]+/).map(w => w.trim()).filter(w => w.length > 2);
  answerWords.forEach(w => {
    if (!stopwords.has(w.toLowerCase())) {
      foundSpec.add(w);
    }
  });
  
  return Array.from(foundSpec);
}

function spotKeywordsInAnswer(typedAnswer, keywords) {
  const typedLower = typedAnswer.toLowerCase().replace(/[^a-z0-9\s%]+/g, " ");
  const matched = [];
  const missed = [];
  
  keywords.forEach(kw => {
    const normalizedKw = kw.toLowerCase().replace(/[^a-z0-9\s%]+/g, " ");
    const regex = new RegExp('\\b' + normalizedKw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');
    if (regex.test(typedLower) || typedLower.includes(normalizedKw)) {
      matched.push(kw);
    } else {
      missed.push(kw);
    }
  });
  
  return { matched, missed };
}

function submitExamAnswer() {
  if (state.examSession.activeIndex >= state.examSession.questions.length) return;
  const textInput = document.getElementById('exam-user-answer');
  const typedAnswer = textInput.value.trim();
  const q = state.examSession.questions[state.examSession.activeIndex];
  
  state.examSession.answers[q.id] = typedAnswer || "(Skipped)";
  
  // Toggle displays
  document.getElementById('exam-input-section').style.display = 'none';
  document.getElementById('exam-review-section').style.display = 'flex';
  
  // Set review contents
  document.getElementById('exam-correct-term').textContent = q.answer;
  document.getElementById('exam-correct-exp').textContent = q.explanation;
  
  const reviewAnswer = document.getElementById('exam-review-user-answer');
  
  // Run keyword spotter
  const feedbackBox = document.getElementById('exam-keyword-feedback');
  if (typedAnswer && feedbackBox) {
    const keywords = extractKeywords(q);
    const { matched, missed } = spotKeywordsInAnswer(typedAnswer, keywords);
    
    // Highlight matched words in the user's answer (escaped for safety)
    const escapedAnswer = typedAnswer.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let highlightedAnswer = escapedAnswer;
    matched.forEach(kw => {
      const regex = new RegExp('\\b(' + kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')\\b', 'gi');
      highlightedAnswer = highlightedAnswer.replace(regex, '<span style="color: var(--success); font-weight: bold; text-decoration: underline;">$1</span>');
    });
    reviewAnswer.innerHTML = highlightedAnswer;
    
    // Render feedback tags
    let tagsHTML = `
      <div class="keyword-spotter-title" style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-wand-magic-sparkles" style="color: var(--primary);"></i> Examiner Keyword Spotter:
      </div>
      <div class="keyword-tags-container" style="display: flex; flex-wrap: wrap; gap: 6px;">
    `;
    
    if (matched.length > 0) {
      matched.forEach(kw => {
        tagsHTML += `<span class="keyword-tag matched">${kw} <i class="fa-solid fa-check"></i></span>`;
      });
    }
    if (missed.length > 0) {
      missed.forEach(kw => {
        tagsHTML += `<span class="keyword-tag missed">${kw} <i class="fa-solid fa-xmark"></i></span>`;
      });
    }
    
    if (matched.length === 0 && missed.length === 0) {
      tagsHTML += `<span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">No key terms detected in correct answer pool.</span>`;
    }
    
    tagsHTML += `</div>`;
    feedbackBox.innerHTML = tagsHTML;
    feedbackBox.style.display = 'block';
  } else {
    reviewAnswer.textContent = typedAnswer || "(No answer typed)";
    if (feedbackBox) feedbackBox.style.display = 'none';
  }
  
  // Play subtle sound
  AudioEngine.play('flip');
}

function gradeExamQuestion(isCorrect) {
  if (state.examSession.activeIndex >= state.examSession.questions.length) return;
  const index = state.examSession.activeIndex;
  const questions = state.examSession.questions;
  const q = questions[index];
  
  state.examSession.grades[q.id] = isCorrect;
  
  if (isCorrect) {
    AudioEngine.play('success');
  } else {
    AudioEngine.play('fail');
  }
  
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
  
  // Grade Feedback
  const feedbackEl = document.getElementById('results-feedback-text');
  const knessetRank = getKnessetStanding(pct);
  if (pct >= 85) {
    feedbackEl.innerHTML = `<strong>Knesset Standing: ${knessetRank}</strong><br><br>Superb historical recall! You demonstrated excellent command of key terms and deep analysis. Keep this standard up!`;
    AudioEngine.play('cheer');
    Confetti.spawn(120);
  } else if (pct >= 70) {
    feedbackEl.innerHTML = `<strong>Knesset Standing: ${knessetRank}</strong><br><br>Strong performance. You recalled most key events, but reviewing the details-explanations will push your grades higher.`;
    AudioEngine.play('cheer');
    Confetti.spawn(50);
  } else if (pct >= 50) {
    feedbackEl.innerHTML = `<strong>Knesset Standing: ${knessetRank}</strong><br><br>Pass standard met. Spend more time in Flashcards Study mode to build active recall on key years and organizations.`;
  } else {
    feedbackEl.innerHTML = `<strong>Knesset Standing: ${knessetRank}</strong><br><br>Focus required. Revise the timeline and study standard recall definitions before re-attempting the quiz generator.`;
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

function getKnessetStanding(percentage) {
  if (percentage >= 90) return 'Prime Minister';
  if (percentage >= 80) return 'Foreign Envoy';
  if (percentage >= 70) return 'Ambassador';
  if (percentage >= 60) return 'Diplomat';
  if (percentage >= 50) return 'Attaché';
  if (percentage >= 40) return 'Observer';
  return 'Historian';
}
