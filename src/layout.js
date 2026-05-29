// --- Sidebar Overlay Drawer (Mobile UI) ---
function toggleMobileSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('sidebar-overlay').classList.toggle('active');
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function updateSoundBtnUI() {
  const btn = document.getElementById('sound-toggle-btn');
  if (state.soundEnabled) {
    btn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Sound Effects: On`;
  } else {
    btn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> Sound Effects: Off`;
  }
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
  
  document.getElementById('nav-firefly').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('firefly');
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
      activeClassicFilter = btn.getAttribute('data-filter');
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

  document.getElementById('btn-exam-submit').addEventListener('click', submitExamAnswer);
  
  document.getElementById('btn-exam-grade-wrong').addEventListener('click', () => gradeExamQuestion(false));
  document.getElementById('btn-exam-grade-right').addEventListener('click', () => gradeExamQuestion(true));
  
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

  // Bottom Settings Utilities
  document.getElementById('sound-toggle-btn').addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('edexcel_sound', JSON.stringify(state.soundEnabled));
    updateSoundBtnUI();
    AudioEngine.play('click');
  });

  document.getElementById('theme-selector').addEventListener('change', (e) => {
    const nextTheme = e.target.value;
    state.theme = nextTheme;
    localStorage.setItem('edexcel_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    AudioEngine.play('click');
  });

  document.getElementById('reset-progress-btn').addEventListener('click', () => {
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

  document.getElementById('btn-copy-firefly-code').addEventListener('click', () => {
    const textarea = document.getElementById('firefly-code-textarea');
    textarea.select();
    try {
      document.execCommand('copy');
      const btn = document.getElementById('btn-copy-firefly-code');
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
      AudioEngine.play('success');
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy to Clipboard`;
      }, 2000);
    } catch (err) {
      alert("Failed to copy code. Please select all text and copy manually.");
    }
  });

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

    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-importance-rubric-${i}`);
      if (chk) chk.checked = false;
    }

    document.getElementById('importance-clue-text').innerHTML = `<strong>Clue 1:</strong> ${data.clue1}<br><br><strong>Clue 2:</strong> ${data.clue2}`;
    document.getElementById('importance-model-answer-text').innerHTML = data.answer;

    document.getElementById('importance-input-area').style.display = 'flex';
    document.getElementById('importance-user-answer').focus();
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

  // Crisis Hotline Game Controls
  document.getElementById('shortcut-crisis-game').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('crisis-game');
  });

  document.getElementById('nav-crisis-game').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('crisis-game');
  });

  // Timeline Intercept Game Controls
  document.getElementById('shortcut-tug-game').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('tug-game');
  });

  document.getElementById('nav-tug-game').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('tug-game');
  });

  // Jet Set Willy Game Controls
  document.getElementById('shortcut-jsw-game').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('jsw-game');
  });

  document.getElementById('nav-jsw-game').addEventListener('click', () => {
    AudioEngine.play('click');
    switchView('jsw-game');
  });

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
}
