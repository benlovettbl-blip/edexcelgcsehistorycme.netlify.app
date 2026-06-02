import { state } from './state.js';
import { AudioEngine } from './audio.js';
import { switchView, switchSubtopicMode } from './navigation.js';
import { 
  flipFlashcard, 
  handleFlashcardGrade, 
  renderTimelineView, 
  renderClassicView, 
  evaluateStudentAnswer, 
  renderSidebarNav, 
  updateGlobalStats,
  setActiveClassicFilter
} from './views.js';
import { showExamSetup, startExam, nextExamQuestion, displayExamQuestion, finishExam } from './exam.js';
import { saveProgress } from './storage.js';
import { startPastPaper, generateMockExam } from './past_papers.js';
import { CONSEQUENCE_SKILLS_DATA, NARRATIVE_SKILLS_DATA, EXAM_SKILLS_DATA } from '../questions.js';

// --- Sidebar Overlay Drawer (Mobile UI) ---
function toggleMobileSidebar() {
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sidebar-overlay').classList.toggle('active');
  } else {
    document.querySelector('.app-container').classList.toggle('collapsed-sidebar');
  }
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function updateSoundBtnUI() {
  const ids = ['sound-toggle-btn', 'sidebar-sound-toggle-btn'];
  ids.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      if (state.soundEnabled) {
        btn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Sound: On`;
      } else {
        btn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> Sound: Off`;
      }
    }
  });
}

// --- Bind Event Listeners ---
function bindEvents() {
  // Navigation Sidebar
  document.getElementById('nav-dashboard').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('dashboard');
  });
  
  document.getElementById('nav-bookmarks').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('bookmarks');
  });
  
  document.getElementById('nav-timeline').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('timeline');
  });
  
  document.getElementById('nav-exam-sim').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('exam');
  });

  document.getElementById('nav-going-beyond').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('going-beyond');
  });

  // Dashboard Shortcuts
  document.getElementById('shortcut-timeline').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('timeline');
  });

  document.getElementById('shortcut-exam-sim').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('exam');
  });

  document.getElementById('shortcut-exam-skills').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('exam-skills');
  });

  // Mobile Menu Toggle
  document.getElementById('menu-toggle').addEventListener('click', toggleMobileSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);

  // Fullscreen Toggle
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Handle Fullscreen state change icon toggle
  document.addEventListener('fullscreenchange', () => {
    const btn = document.getElementById('fullscreen-btn');
    const container = document.querySelector('.app-container');
    if (document.fullscreenElement) {
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-compress"></i>`;
        btn.setAttribute('title', 'Exit Fullscreen');
      }
      if (container) {
        container.classList.add('fullscreen-active');
      }
    } else {
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
        btn.setAttribute('title', 'Toggle Fullscreen');
      }
      if (container) {
        container.classList.remove('fullscreen-active');
      }
    }
  });

  // Subtopic View mode tabs (Accordions vs Flashcards)
  document.querySelectorAll('#subtopic-mode-switcher .mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      switchSubtopicMode(btn.getAttribute('data-mode'));
    });
  });

  // Classic Accordion View Filters
  document.querySelectorAll('.filter-btn-group .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      document.querySelectorAll('.filter-btn-group .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setActiveClassicFilter(btn.getAttribute('data-filter'));
      renderClassicView();
    });
  });

  // Flashcards study actions
  document.getElementById('flashcard-stage').addEventListener('click', flipFlashcard);
  document.getElementById('btn-flashcard-reveal').addEventListener('click', (e) => {
    e.stopPropagation();
    flipFlashcard();
  });
  
  document.getElementById('btn-flashcard-incorrect').addEventListener('click', (e) => {
    e.stopPropagation();
    handleFlashcardGrade(false);
  });
  
  document.getElementById('btn-flashcard-correct').addEventListener('click', (e) => {
    e.stopPropagation();
    handleFlashcardGrade(true);
  });

  // Timeline Filter Action
  document.getElementById('timeline-era-select').addEventListener('change', () => {
    AudioEngine.play('click');
    renderTimelineView();
  });

  // Timeline Search Input Event Listener
  const searchInput = document.getElementById('timeline-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderTimelineView();
    });
  }

  // Timeline People Filter Event Listeners
  const filterAllBtn = document.getElementById('btn-timeline-filter-all');
  const filterPeopleBtn = document.getElementById('btn-timeline-filter-people');
  if (filterAllBtn && filterPeopleBtn) {
    filterAllBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      filterAllBtn.classList.add('active');
      filterPeopleBtn.classList.remove('active');
      renderTimelineView();
    });
    filterPeopleBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      filterPeopleBtn.classList.add('active');
      filterAllBtn.classList.remove('active');
      renderTimelineView();
    });
  }


  // Quiz generator controls
  document.getElementById('btn-quick-exam-start').addEventListener('click', () => {
    AudioEngine.play('click');
    const scope = document.getElementById('quick-exam-scope').value;
    const len = document.getElementById('quick-exam-count').value;
    switchView('exam');
    startExam(scope, len, 600); // Defaults to 10 minutes (600s)
  });

  document.getElementById('btn-exam-start').addEventListener('click', () => {
    AudioEngine.play('click');
    const scope = document.getElementById('exam-scope-select').value;
    const len = document.getElementById('exam-length-select').value;
    const limit = document.getElementById('exam-timer-select').value;
    startExam(scope, len, limit);
  });

  document.getElementById('btn-exam-skip').addEventListener('click', () => {
    if (state.examSession.activeIndex >= state.examSession.questions.length) return;
    // Record empty answer and grade incorrect
    const q = state.examSession.questions[state.examSession.activeIndex];
    state.examSession.answers[q.id] = "(Skipped)";
    state.examSession.grades[q.id] = false;
    
    AudioEngine.play('fail');
    state.examSession.activeIndex++;
    
    if (state.examSession.activeIndex >= state.examSession.questions.length) {
      finishExam();
    } else {
      displayExamQuestion();
    }
  });

  // Quiz Generator Next Question
  document.getElementById('btn-exam-next').addEventListener('click', () => {
    AudioEngine.play('click');
    nextExamQuestion();
  });
  
  // Self-Grading buttons removed (dead code)
  
  document.getElementById('btn-exam-quit').addEventListener('click', () => {
    AudioEngine.play('click');
    if (confirm("Are you sure you want to stop this recall test? Your progress will be lost.")) {
      showExamSetup();
    }
  });

  document.getElementById('btn-results-finish').addEventListener('click', () => {
    AudioEngine.play('click');
    showExamSetup();
    switchView('dashboard');
  });

  // Settings Utilities (Sync between Header and Sidebar copies)
  const bindSoundBtn = (id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('edexcel_sound', JSON.stringify(state.soundEnabled));
        updateSoundBtnUI();
        AudioEngine.play('click');
      });
    }
  };
  bindSoundBtn('sound-toggle-btn');
  bindSoundBtn('sidebar-sound-toggle-btn');

  const bindThemeSelector = (id) => {
    const select = document.getElementById(id);
    if (select) {
      select.addEventListener('change', (e) => {
        const nextTheme = e.target.value;
        state.theme = nextTheme;
        localStorage.setItem('edexcel_theme', nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
        
        // Sync selectors
        const otherId = id === 'theme-selector' ? 'sidebar-theme-selector' : 'theme-selector';
        const otherSelect = document.getElementById(otherId);
        if (otherSelect) otherSelect.value = nextTheme;
        
        AudioEngine.play('click');
      });
    }
  };
  bindThemeSelector('theme-selector');
  bindThemeSelector('sidebar-theme-selector');

  const bindResetBtn = (id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        if (confirm("WARNING: This will completely erase all your mastery stats. Bookmarks will be kept. Proceed?")) {
          state.mastery = {};
          saveProgress();
          renderSidebarNav();
          updateGlobalStats();
          if (state.currentView === 'dashboard') {
            renderDashboard();
          } else if (state.currentView === 'classic') {
            renderClassicView();
          }
          AudioEngine.play('fail');
        }
      });
    }
  };
  bindResetBtn('reset-progress-btn');
  bindResetBtn('sidebar-reset-progress-btn');



  // Exam Practice Nav Click
  document.getElementById('nav-exam-skills').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('exam-skills');
  });

  // Tab Switcher
  document.querySelectorAll('.exam-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      const targetPanel = btn.getAttribute('data-panel');
      
      document.querySelectorAll('.exam-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      document.querySelectorAll('.exam-panel-content').forEach(panel => {
        panel.style.display = 'none';
      });
      document.getElementById(`panel-${targetPanel}`).style.display = 'block';
    });
  });

  // Q1: Consequence Handler
  const consequenceSelect = document.getElementById('consequence-topic-select');
  consequenceSelect.addEventListener('change', (e) => {
    const topicId = e.target.value;
    if (!topicId || !CONSEQUENCE_SKILLS_DATA[topicId]) return;

    AudioEngine.play('click');
    const data = CONSEQUENCE_SKILLS_DATA[topicId];

    document.getElementById('consequence-question-text').textContent = data.question;
    document.getElementById('consequence-question-card').style.display = 'block';

    document.getElementById('consequence-user-answer').value = '';
    document.getElementById('consequence-clue-box').style.display = 'none';
    document.getElementById('consequence-answer-box').style.display = 'none';
    document.getElementById('draft-feedback-consequence').style.display = 'none';

    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-consequence-rubric-${i}`);
      if (chk) chk.checked = false;
    }

    document.getElementById('consequence-clue-text').innerHTML = `<strong>Clue:</strong> ${data.clue}`;
    document.getElementById('consequence-model-answer-text').innerHTML = highlightCausalConnectives(data.answer);

    // Hide Step 2 writing zone initially
    document.getElementById('consequence-input-area').style.display = 'none';

    // Show Step 1 MCQ area
    const mcqArea = document.getElementById('consequence-mcq-area');
    mcqArea.style.display = 'block';

    const mcqRow = document.getElementById('consequence-mcq-row');
    mcqRow.className = 'sequence-item-container';

    const statusMsg = document.getElementById('consequence-mcq-status-msg');
    statusMsg.innerHTML = 'Choose the correct starter sentence to unlock the writing zone.';

    // Generate MCQ opener choices dynamically
    const correctOpener = data.answer.split('.')[0].trim() + '.';

    // Collect all other openers as potential distractors
    const allOtherOpeners = [];
    for (const [key, item] of Object.entries(CONSEQUENCE_SKILLS_DATA)) {
      if (key !== topicId) {
        const opener = item.answer.split('.')[0].trim() + '.';
        if (opener && !allOtherOpeners.includes(opener)) {
          allOtherOpeners.push(opener);
        }
      }
    }

    // Pick 2 random distractors from the other 17 topics
    const shuffledDistractors = allOtherOpeners.sort(() => 0.5 - Math.random());
    const distractor1 = shuffledDistractors[0];
    const distractor2 = shuffledDistractors[1];

    // Combine and shuffle the 3 choices
    const choices = [correctOpener, distractor1, distractor2];
    const shuffledChoices = choices.sort(() => 0.5 - Math.random());

    const mcqSelect = document.getElementById('consequence-mcq-select');
    mcqSelect.innerHTML = '<option value="" disabled selected>-- Choose the correct starter sentence --</option>';
    shuffledChoices.forEach(choice => {
      mcqSelect.innerHTML += `<option value="${choice === correctOpener ? 'correct' : 'incorrect'}">${choice}</option>`;
    });
  });

  // Verify Consequence MCQ choice
  document.getElementById('btn-consequence-mcq-verify').addEventListener('click', () => {
    const topicId = consequenceSelect.value;
    if (!topicId || !CONSEQUENCE_SKILLS_DATA[topicId]) return;

    const mcqSelect = document.getElementById('consequence-mcq-select');
    const selectedValue = mcqSelect.value;
    const statusMsg = document.getElementById('consequence-mcq-status-msg');
    const mcqRow = document.getElementById('consequence-mcq-row');

    if (!selectedValue) {
      AudioEngine.play('fail');
      statusMsg.innerHTML = '<span style="color: var(--accent);">Please choose an option before verifying.</span>';
      return;
    }

    mcqRow.className = 'sequence-item-container';

    if (selectedValue === 'correct') {
      AudioEngine.play('success');
      mcqRow.classList.add('correct-sequence');
      statusMsg.innerHTML = '<span style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Correct! Opener Verified. Step 2 Unlocked.</span>';
      document.getElementById('consequence-input-area').style.display = 'flex';
      document.getElementById('consequence-user-answer').focus();
      document.getElementById('draft-feedback-consequence').style.display = 'block';
      updateRealTimeFeedback('consequence', '', CONSEQUENCE_SKILLS_DATA[topicId], topicId);
    } else {
      AudioEngine.play('fail');
      mcqRow.classList.add('incorrect-sequence');
      statusMsg.innerHTML = '<span style="color: var(--accent);"><i class="fa-solid fa-circle-xmark"></i> Incorrect. That did not happen as a result of this event. Try again!</span>';
      document.getElementById('consequence-input-area').style.display = 'none';
    }
  });

  document.getElementById('btn-consequence-clue').addEventListener('click', () => {
    const box = document.getElementById('consequence-clue-box');
    const isHidden = box.style.display === 'none';
    box.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      AudioEngine.play('flip');
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      AudioEngine.play('click');
    }
  });

  document.getElementById('btn-consequence-selfcheck').addEventListener('click', () => {
    const box = document.getElementById('consequence-answer-box');
    const isHidden = box.style.display === 'none';
    
    if (isHidden) {
      const topicId = document.getElementById('consequence-topic-select').value;
      const questionObj = CONSEQUENCE_SKILLS_DATA[topicId];
      const userAnswer = document.getElementById('consequence-user-answer').value;
      
      if (questionObj) {
        const evaluation = evaluateStudentAnswer('consequence', questionObj, userAnswer);
        
        // Auto check rubrics
        for (let i = 1; i <= 4; i++) {
          const chk = document.getElementById(`chk-consequence-rubric-${i}`);
          if (chk) chk.checked = evaluation.scores[i - 1];
        }
        
        // Show feedback report
        const feedbackContainer = document.getElementById('consequence-heuristic-feedback');
        if (feedbackContainer) {
          feedbackContainer.innerHTML = evaluation.feedback;
          feedbackContainer.style.display = 'block';
        }
      }
      
      box.style.display = 'block';
      AudioEngine.play('success');
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      box.style.display = 'none';
      const feedbackContainer = document.getElementById('consequence-heuristic-feedback');
      if (feedbackContainer) feedbackContainer.style.display = 'none';
      AudioEngine.play('click');
    }
  });

  document.getElementById('btn-consequence-reset').addEventListener('click', () => {
    AudioEngine.play('click');
    document.getElementById('consequence-user-answer').value = '';
    document.getElementById('consequence-clue-box').style.display = 'none';
    document.getElementById('consequence-answer-box').style.display = 'none';
    document.getElementById('draft-feedback-consequence').style.display = 'none';
    const feedbackContainer = document.getElementById('consequence-heuristic-feedback');
    if (feedbackContainer) {
      feedbackContainer.innerHTML = '';
      feedbackContainer.style.display = 'none';
    }
    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-consequence-rubric-${i}`);
      if (chk) chk.checked = false;
    }
  });

  document.getElementById('consequence-user-answer').addEventListener('input', (e) => {
    const topicId = consequenceSelect.value;
    if (topicId && CONSEQUENCE_SKILLS_DATA[topicId]) {
      updateRealTimeFeedback('consequence', e.target.value, CONSEQUENCE_SKILLS_DATA[topicId], topicId);
    }
  });

  // Q2: Narrative Handler
  const narrativeSelect = document.getElementById('narrative-topic-select');
  const nSelect1 = document.getElementById('seq-select-1');
  const nSelect2 = document.getElementById('seq-select-2');
  const nSelect3 = document.getElementById('seq-select-3');

  narrativeSelect.addEventListener('change', (e) => {
    const topicId = e.target.value;
    if (!topicId || !NARRATIVE_SKILLS_DATA[topicId]) return;

    AudioEngine.play('click');
    const data = NARRATIVE_SKILLS_DATA[topicId];

    document.getElementById('narrative-question-text').textContent = data.question;
    document.getElementById('narrative-question-card').style.display = 'block';
    document.getElementById('narrative-sorter-area').style.display = 'block';
    document.getElementById('narrative-input-area').style.display = 'none';
    document.getElementById('narrative-answer-box').style.display = 'none';

    const kwFeedbackContainer = document.getElementById('narrative-keyword-feedback');
    if (kwFeedbackContainer) {
      kwFeedbackContainer.innerHTML = '';
      kwFeedbackContainer.style.display = 'none';
    }

    // Populate dropdowns with out-of-order events
    const optionsHtml = `
      <option value="" disabled selected>-- Choose Event --</option>
      ${data.events.map((evt, idx) => `<option value="${idx}">${evt}</option>`).join('')}
    `;
    nSelect1.innerHTML = optionsHtml;
    nSelect2.innerHTML = optionsHtml;
    nSelect3.innerHTML = optionsHtml;

    document.getElementById('seq-row-1').className = 'sequence-item-container';
    document.getElementById('seq-row-2').className = 'sequence-item-container';
    document.getElementById('seq-row-3').className = 'sequence-item-container';
    document.getElementById('sequence-status-msg').innerHTML = "Select all three events to verify chronology.";
    document.getElementById('narrative-user-answer').value = '';
    document.querySelectorAll('.process-word').forEach(chip => chip.classList.remove('used'));
    document.getElementById('draft-feedback-narrative').style.display = 'none';
    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-narrative-rubric-${i}`);
      if (chk) chk.checked = false;
    }
  });

  document.getElementById('btn-narrative-verify').addEventListener('click', () => {
    const topicId = narrativeSelect.value;
    if (!topicId || !NARRATIVE_SKILLS_DATA[topicId]) return;
    const data = NARRATIVE_SKILLS_DATA[topicId];

    const v1 = parseInt(nSelect1.value);
    const v2 = parseInt(nSelect2.value);
    const v3 = parseInt(nSelect3.value);
    const statusMsg = document.getElementById('sequence-status-msg');

    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
      AudioEngine.play('fail');
      statusMsg.innerHTML = "Please select all three events before verifying.";
      return;
    }

    const isCorrect = (v1 === data.correct[0] && v2 === data.correct[1] && v3 === data.correct[2]);
    const r1 = document.getElementById('seq-row-1');
    const r2 = document.getElementById('seq-row-2');
    const r3 = document.getElementById('seq-row-3');

    r1.className = 'sequence-item-container';
    r2.className = 'sequence-item-container';
    r3.className = 'sequence-item-container';

    if (isCorrect) {
      AudioEngine.play('success');
      r1.classList.add('correct-sequence');
      r2.classList.add('correct-sequence');
      r3.classList.add('correct-sequence');
      statusMsg.innerHTML = '<span style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Chronology Verified! Step 2 Unlocked.</span>';
      document.getElementById('narrative-input-area').style.display = 'flex';
      document.getElementById('draft-feedback-narrative').style.display = 'block';
      updateRealTimeFeedback('narrative', '', data, topicId);
    } else {
      AudioEngine.play('fail');
      r1.classList.add('incorrect-sequence');
      r2.classList.add('incorrect-sequence');
      r3.classList.add('incorrect-sequence');
      statusMsg.innerHTML = '<span style="color: var(--accent);"><i class="fa-solid fa-circle-xmark"></i> Incorrect sequence. Check chronology and try again.</span>';
      document.getElementById('narrative-input-area').style.display = 'none';
    }
  });

  document.getElementById('narrative-user-answer').addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const wordMappings = {
      'pw-intensified': 'intensified',
      'pw-triggered': 'triggered',
      'pw-escalated': 'escalated',
      'pw-forced': 'forced',
      'pw-deteriorated': 'deteriorated',
      'pw-provoked': 'provoked',
      'pw-resulted': 'resulted',
      'pw-enabled': 'enabled'
    };
    for (const [id, word] of Object.entries(wordMappings)) {
      const chip = document.getElementById(id);
      if (chip) {
        if (text.includes(word)) {
          chip.classList.add('used');
        } else {
          chip.classList.remove('used');
        }
      }
    }
    const topicId = narrativeSelect.value;
    if (topicId && NARRATIVE_SKILLS_DATA[topicId]) {
      updateRealTimeFeedback('narrative', e.target.value, NARRATIVE_SKILLS_DATA[topicId], topicId);
    }
  });

  // Highlight matched terms in the narrative student response
  function highlightKeywords(text, keywords) {
    let escaped = (text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    
    if (!keywords || keywords.length === 0) return escaped;
    
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    const placeholders = [];
    
    sortedKeywords.forEach((kw) => {
      const escapedKw = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKw}\\b`, 'gi');
      
      escaped = escaped.replace(regex, (match) => {
        const placeholder = `___KEYWORD_PLACEHOLDER_${placeholders.length}___`;
        placeholders.push({
          placeholder: placeholder,
          content: `<span class="highlight-word" style="font-weight: 600;">${match}</span>`
        });
        return placeholder;
      });
      
      if (!/\w/.test(kw[0]) || !/\w/.test(kw[kw.length - 1])) {
        const fallbackRegex = new RegExp(escapedKw, 'gi');
        escaped = escaped.replace(fallbackRegex, (match) => {
          const placeholder = `___KEYWORD_PLACEHOLDER_${placeholders.length}___`;
          placeholders.push({
            placeholder: placeholder,
            content: `<span class="highlight-word" style="font-weight: 600;">${match}</span>`
          });
          return placeholder;
        });
      }
    });
    
    for (let i = placeholders.length - 1; i >= 0; i--) {
      escaped = escaped.replace(placeholders[i].placeholder, placeholders[i].content);
    }
    
    return escaped;
  }

  document.getElementById('btn-narrative-selfcheck').addEventListener('click', () => {
    const topicId = narrativeSelect.value;
    if (!topicId || !NARRATIVE_SKILLS_DATA[topicId]) return;
    const box = document.getElementById('narrative-answer-box');
    const isHidden = box.style.display === 'none';
    
    if (isHidden) {
      const questionObj = NARRATIVE_SKILLS_DATA[topicId];
      const userAnswer = document.getElementById('narrative-user-answer').value;
      
      const evaluation = evaluateStudentAnswer('narrative', questionObj, userAnswer);
      
      // Auto check rubrics
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-narrative-rubric-${i}`);
        if (chk) chk.checked = evaluation.scores[i - 1];
      }
      
      // Show feedback report
      const feedbackContainer = document.getElementById('narrative-heuristic-feedback');
      if (feedbackContainer) {
        feedbackContainer.innerHTML = evaluation.feedback;
        feedbackContainer.style.display = 'block';
      }

      // Render keyword spotter feedback
      const kwFeedbackContainer = document.getElementById('narrative-keyword-feedback');
      if (kwFeedbackContainer) {
        const keywords = evaluation.keywords || [];
        const matchedKeywords = evaluation.matchedKeywords || [];
        
        // Highlight terms in user answer
        const highlightedUserAns = highlightKeywords(userAnswer, matchedKeywords);
        
        let kwHtml = `
          <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; color: var(--primary);">
            <i class="fa-solid fa-magnifying-glass"></i> Historical Keyword Spotter
          </div>
          <p style="font-size: 0.85rem; margin-bottom: 12px; color: var(--text-muted);">
            Matched keywords are highlighted in your response below:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
        `;
        
        keywords.forEach(kw => {
          const isMatched = matchedKeywords.some(m => m.toLowerCase() === kw.toLowerCase());
          const statusClass = isMatched ? 'matched' : 'missed';
          const icon = isMatched ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>';
          kwHtml += `<span class="keyword-tag ${statusClass}">${icon} ${kw}</span>`;
        });
        
        kwHtml += `
          </div>
          <div class="user-highlighted-answer" style="padding: 12px; background: rgba(255, 255, 255, 0.05); border-left: 3px solid var(--primary); border-radius: var(--border-radius-sm); font-size: 0.9rem; line-height: 1.5; color: var(--text-main); font-style: italic; overflow-wrap: break-word;">
            ${highlightedUserAns || '<span style="color: var(--text-muted);">[No answer provided]</span>'}
          </div>
        `;
        
        kwFeedbackContainer.innerHTML = kwHtml;
        kwFeedbackContainer.style.display = 'block';
      }
      
      box.style.display = 'block';
      AudioEngine.play('success');
      document.getElementById('narrative-model-answer-text').innerHTML = NARRATIVE_SKILLS_DATA[topicId].model;
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      box.style.display = 'none';
      const feedbackContainer = document.getElementById('narrative-heuristic-feedback');
      if (feedbackContainer) feedbackContainer.style.display = 'none';
      const kwFeedbackContainer = document.getElementById('narrative-keyword-feedback');
      if (kwFeedbackContainer) kwFeedbackContainer.style.display = 'none';
      AudioEngine.play('click');
    }
  });

  document.getElementById('btn-narrative-reset').addEventListener('click', () => {
    AudioEngine.play('click');
    document.getElementById('narrative-user-answer').value = '';
    document.getElementById('narrative-answer-box').style.display = 'none';
    document.querySelectorAll('.process-word').forEach(chip => chip.classList.remove('used'));
    document.getElementById('draft-feedback-narrative').style.display = 'none';
    
    const feedbackContainer = document.getElementById('narrative-heuristic-feedback');
    if (feedbackContainer) {
      feedbackContainer.innerHTML = '';
      feedbackContainer.style.display = 'none';
    }

    const kwFeedbackContainer = document.getElementById('narrative-keyword-feedback');
    if (kwFeedbackContainer) {
      kwFeedbackContainer.innerHTML = '';
      kwFeedbackContainer.style.display = 'none';
    }

    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-narrative-rubric-${i}`);
      if (chk) chk.checked = false;
    }
  });

  // Q3: Importance Handler
  const importanceSelect = document.getElementById('importance-topic-select');
  importanceSelect.addEventListener('change', (e) => {
    const topicId = e.target.value;
    if (!topicId || !EXAM_SKILLS_DATA[topicId]) return;

    AudioEngine.play('click');
    const data = EXAM_SKILLS_DATA[topicId];

    document.getElementById('importance-question-text').textContent = data.question;
    document.getElementById('importance-question-card').style.display = 'block';

    document.getElementById('importance-user-answer').value = '';
    document.getElementById('importance-clue-box').style.display = 'none';
    document.getElementById('importance-answer-box').style.display = 'none';
    document.getElementById('draft-feedback-importance').style.display = 'none';

    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-importance-rubric-${i}`);
      if (chk) chk.checked = false;
    }

    document.getElementById('importance-clue-text').innerHTML = `<strong>Clue 1:</strong> ${data.clue1}<br><br><strong>Clue 2:</strong> ${data.clue2}`;
    document.getElementById('importance-model-answer-text').innerHTML = data.answer;

    document.getElementById('importance-input-area').style.display = 'flex';
    document.getElementById('importance-user-answer').focus();
    document.getElementById('draft-feedback-importance').style.display = 'block';
    updateRealTimeFeedback('importance', '', data, topicId);
  });

  document.getElementById('btn-importance-clue').addEventListener('click', () => {
    const box = document.getElementById('importance-clue-box');
    const isHidden = box.style.display === 'none';
    box.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      AudioEngine.play('flip');
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      AudioEngine.play('click');
    }
  });

  document.getElementById('btn-importance-selfcheck').addEventListener('click', () => {
    const box = document.getElementById('importance-answer-box');
    const isHidden = box.style.display === 'none';
    
    if (isHidden) {
      const topicId = document.getElementById('importance-topic-select').value;
      const questionObj = EXAM_SKILLS_DATA[topicId];
      const userAnswer = document.getElementById('importance-user-answer').value;
      
      if (questionObj) {
        const evaluation = evaluateStudentAnswer('importance', questionObj, userAnswer);
        
        // Auto check rubrics
        for (let i = 1; i <= 4; i++) {
          const chk = document.getElementById(`chk-importance-rubric-${i}`);
          if (chk) chk.checked = evaluation.scores[i - 1];
        }
        
        // Show feedback report
        const feedbackContainer = document.getElementById('importance-heuristic-feedback');
        if (feedbackContainer) {
          feedbackContainer.innerHTML = evaluation.feedback;
          feedbackContainer.style.display = 'block';
        }
      }
      
      box.style.display = 'block';
      AudioEngine.play('success');
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      box.style.display = 'none';
      const feedbackContainer = document.getElementById('importance-heuristic-feedback');
      if (feedbackContainer) feedbackContainer.style.display = 'none';
      AudioEngine.play('click');
    }
  });

  document.getElementById('btn-importance-reset').addEventListener('click', () => {
    AudioEngine.play('click');
    document.getElementById('importance-user-answer').value = '';
    document.getElementById('importance-clue-box').style.display = 'none';
    document.getElementById('importance-answer-box').style.display = 'none';
    document.getElementById('draft-feedback-importance').style.display = 'none';
    const feedbackContainer = document.getElementById('importance-heuristic-feedback');
    if (feedbackContainer) {
      feedbackContainer.innerHTML = '';
      feedbackContainer.style.display = 'none';
    }
    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-importance-rubric-${i}`);
      if (chk) chk.checked = false;
    }
  });

  // Past Papers Controls
  document.getElementById('shortcut-past-papers').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('past-papers');
  });

  document.getElementById('nav-past-papers').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('past-papers');
  });

  // Revision Games Hub Controls
  const navGames = document.getElementById('nav-games');
  if (navGames) {
    navGames.addEventListener('click', () => {
      AudioEngine.play('click');
      switchView('games');
    });
  }

  const shortcutGames = document.getElementById('shortcut-games');
  if (shortcutGames) {
    shortcutGames.addEventListener('click', () => {
      AudioEngine.play('click');
      switchView('games');
    });
  }

  document.getElementById('btn-start-past-paper').addEventListener('click', () => {
    const val = document.getElementById('past-paper-select').value;
    if (!val) return;
    AudioEngine.play('click');
    startPastPaper(val);
  });

  document.getElementById('btn-generate-mock').addEventListener('click', () => {
    AudioEngine.play('click');
    generateMockExam();
  });

  document.getElementById('importance-user-answer').addEventListener('input', (e) => {
    const topicId = importanceSelect.value;
    if (topicId && EXAM_SKILLS_DATA[topicId]) {
      updateRealTimeFeedback('importance', e.target.value, EXAM_SKILLS_DATA[topicId], topicId);
    }
  });
}

// --- Real-time Fact / Connective Verification Checklist for Essay Writing ---

function extractKeywordsFromAnswer(htmlAnswer) {
  if (!htmlAnswer) return [];
  // Strip HTML tags
  const cleanText = htmlAnswer.replace(/<[^>]*>/g, ' ');
  
  const candidates = [];
  // Match capitalized sequences (Proper nouns)
  const propReg = /\b[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)*\b/g;
  let match;
  while ((match = propReg.exec(cleanText)) !== null) {
    const term = match[0].trim();
    if (term.length > 2 && !candidates.includes(term)) {
      candidates.push(term);
    }
  }
  
  // Match numbers (especially years or quantities)
  const numReg = /\b\d{2,4}\b/g;
  while ((match = numReg.exec(cleanText)) !== null) {
    const term = match[0].trim();
    if (!candidates.includes(term)) {
      candidates.push(term);
    }
  }

  // Common stopwords or noisy words to filter out
  const stopWords = ['One', 'This', 'The', 'Following', 'Point', 'It', 'By', 'In', 'Explain', 'Both', 'To', 'Arab', 'Jewish', 'Israel', 'Israeli', 'Egypt', 'Egyptian', 'Palestine', 'Palestinian', 'Jordan', 'Syria', 'Syrian', 'British', 'Britain'];
  
  const filtered = candidates.filter(term => {
    return !stopWords.includes(term);
  });
  
  return filtered.slice(0, 5);
}

function getKeywordsForQuestion(type, questionId, questionObj) {
  if (!questionObj) return [];
  if (questionObj.keywords && Array.isArray(questionObj.keywords)) {
    return questionObj.keywords;
  }
  
  const predefined = {
    consequence: {
      "1.1a": ["Irgun", "91 deaths", "UN", "1947", "Mandate"],
      "1.1b": ["Resolution 181", "civil war", "partition plan", "invading Arab armies"],
      "1.2a": ["IDF", "Haganah", "Irgun", "Lehi", "coordinated defence"],
      "1.2b": ["Law of Return", "immigration", "refugees", "demographic shift"],
      "1.3a": ["Gaza", "Nasser", "Soviet arms", "Czechoslovak arms deal"],
      "1.3b": ["UNEF", "Sinai Peninsula", "Straits of Tiran", "Fedayeen raids"],
      "2.1a": ["Cairo Conference", "PLO", "Arab leaders", "national aspirations"],
      "2.1b": ["water diversion", "Fatah raids", "demilitarised zones", "Syria"],
      "2.2a": ["UN Resolution 242", "territories", "peace for land", "diplomatic deadlock"],
      "2.2b": ["refugee crisis", "Six Day War", "Gaza Strip", "West Bank"],
      "2.3a": ["October War", "Suez Canal", "air defense", "surprise attack"],
      "2.3b": ["oil weapon", "embargo", "OPEC", "inflation"],
      "3.1a": ["Sadat visit", "Jerusalem", "Knesset speech", "psychological barrier"],
      "3.1b": ["Camp David Accords", "peace treaty", "Sinai", "recognition of Israel"],
      "3.2a": ["invasion of Lebanon", "Operation Peace for Galilee", "Ariel Sharon", "Sabra and Shatila"],
      "3.2b": ["First Intifada", "stone-throwing", "civil disobedience", "Iron Fist policy"],
      "3.3a": ["Oslo Accords", "Yasser Arafat", "Yitzhak Rabin", "PNA", "mutual recognition"],
      "3.3b": ["assassination of Rabin", "nationalist extremist", "peace rally", "interim agreements"]
    },
    importance: {
      "1.1a": ["King David Hotel", "British morale", "91 deaths", "UN hand-over", "1947"],
      "1.1b": ["UN Resolution 181", "Jewish state", "partition plan", "civil war", "legitimacy"],
      "1.2a": ["IDF", "co-ordinated defence", "conscription", "invading Arab armies"],
      "1.3a": ["Suez Crisis", "Fedayeen bases", "UNEF", "Straits of Tiran", "Eilat"],
      "2.1a": ["Straits of Tiran", "blockade", "Eilat", "Iranian oil", "pre-emptive strike"],
      "2.2a": ["occupied territories", "buffer zones", "peace for land", "Resolution 242"],
      "2.3a": ["Yom Kippur War", "Suez Canal", "Kissinger shuttle diplomacy", "Sadat visit"],
      "3.1a": ["Sadat Knesset speech", "Menachem Begin", "psychological barrier", "Camp David"],
      "3.2a": ["Hebron", "Oslo Accords", "Likud opposition", "settler violence"],
      "3.3a": ["Oslo Accords", "Yasser Arafat", "Yitzhak Rabin", "PNA", "mutual recognition"],
      "3.3b": ["peace treaty with Jordan", "King Hussein", "Rabin", "normalized relations"]
    }
  };
  
  if (predefined[type] && predefined[type][questionId]) {
    return predefined[type][questionId];
  }
  
  return extractKeywordsFromAnswer(questionObj.answer || "");
}

function updateRealTimeFeedback(type, value, questionObj, questionId) {
  const feedbackCard = document.getElementById(`draft-feedback-${type}`);
  if (!feedbackCard) return;

  feedbackCard.style.display = 'flex';

  const text = (value || "").toLowerCase();
  
  // 1. Causal Connectives checklist
  const connectives = ["as a result", "consequently", "this led to", "therefore"];
  const matchedConnectives = [];
  
  const connectiveTagsContainer = document.getElementById(`connective-tags-${type}`);
  if (connectiveTagsContainer) {
    connectiveTagsContainer.innerHTML = "";
    connectives.forEach(conn => {
      const isMatched = text.includes(conn.toLowerCase());
      if (isMatched) matchedConnectives.push(conn);
      
      const tag = document.createElement("span");
      tag.className = `feedback-tag ${isMatched ? "matched" : ""}`;
      tag.innerHTML = isMatched ? `<i class="fa-solid fa-check"></i> ${conn}` : conn;
      connectiveTagsContainer.appendChild(tag);
    });
  }
  
  // 2. Key Terms checklist
  const keywords = getKeywordsForQuestion(type, questionId, questionObj);
  const matchedKeywords = [];
  
  const keywordTagsContainer = document.getElementById(`keyword-tags-${type}`);
  const keywordRow = document.getElementById(`keyword-feedback-row-${type}`);
  
  if (keywords && keywords.length > 0) {
    if (keywordRow) keywordRow.style.display = "block";
    if (keywordTagsContainer) {
      keywordTagsContainer.innerHTML = "";
      keywords.forEach(kw => {
        const isMatched = text.includes(kw.toLowerCase());
        if (isMatched) matchedKeywords.push(kw);
        
        const tag = document.createElement("span");
        tag.className = `feedback-tag ${isMatched ? "matched" : ""}`;
        tag.innerHTML = isMatched ? `<i class="fa-solid fa-check"></i> ${kw}` : kw;
        keywordTagsContainer.appendChild(tag);
      });
    }
  } else {
    if (keywordRow) keywordRow.style.display = "none";
  }
  
  // 3. Compute Progress & Badge Status
  const totalItems = connectives.length + keywords.length;
  const matchedItems = matchedConnectives.length + matchedKeywords.length;
  const pct = totalItems > 0 ? Math.round((matchedItems / totalItems) * 100) : 0;
  
  const fillEl = document.getElementById(`feedback-fill-${type}`);
  if (fillEl) {
    fillEl.style.width = `${pct}%`;
  }
  
  const badgeEl = document.getElementById(`feedback-badge-${type}`);
  if (badgeEl) {
    badgeEl.className = "feedback-badge";
    if (pct === 100) {
      badgeEl.classList.add("status-outstanding");
      badgeEl.textContent = "Structure: Outstanding";
    } else if (pct >= 70) {
      badgeEl.classList.add("status-strong");
      badgeEl.textContent = "Structure: Strong";
    } else if (pct >= 30) {
      badgeEl.classList.add("status-developing");
      badgeEl.textContent = "Structure: Developing";
    } else {
      badgeEl.textContent = "Structure: Drafting";
    }
  }
}

export {
  toggleMobileSidebar,
  closeMobileSidebar,
  updateSoundBtnUI,
  bindEvents,
  extractKeywordsFromAnswer,
  getKeywordsForQuestion,
  updateRealTimeFeedback
};
