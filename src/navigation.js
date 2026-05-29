// --- Navigation Controller ---
function switchView(viewName, subtopicId = null) {
  state.currentView = viewName;
  stopJswLoop();

  if (state.tugGameSession && state.tugGameSession.timeoutId) {
    clearTimeout(state.tugGameSession.timeoutId);
    state.tugGameSession.timeoutId = null;
  }
  
  // Remove active from all sidebar nav items
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.classList.remove('active');
  });

  const headerModeSwitcher = document.getElementById('subtopic-mode-switcher');
  
  if (viewName === 'dashboard') {
    document.getElementById('nav-dashboard').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Study Dashboard";
    state.selectedSubtopicId = null;
    renderDashboard();
  } else if (viewName === 'bookmarks') {
    document.getElementById('nav-bookmarks').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Bookmarked Deck";
    state.selectedSubtopicId = null;
    renderBookmarksView();
  } else if (viewName === 'timeline') {
    document.getElementById('nav-timeline').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Chronology Timeline";
    state.selectedSubtopicId = null;
    renderTimelineView();
  } else if (viewName === 'exam') {
    document.getElementById('nav-exam-sim').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Quiz Generator";
    state.selectedSubtopicId = null;
    // Don't interrupt if an exam is already running
    if (!state.examSession.isActive) {
      showExamSetup();
    }
  } else if (viewName === 'exam-skills') {
    document.getElementById('nav-exam-skills').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Exam Practice (Q1-Q3)";
    state.selectedSubtopicId = null;
    renderExamSkillsView();
  } else if (viewName === 'past-papers') {
    document.getElementById('nav-past-papers').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Past Exam Papers";
    state.selectedSubtopicId = null;
    renderPastPapersView();
  } else if (viewName === 'crisis-game') {
    document.getElementById('nav-crisis-game').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Crisis Hotline: 1973";
    state.selectedSubtopicId = null;
    initCrisisGame();
  } else if (viewName === 'tug-game') {
    document.getElementById('nav-tug-game').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Timeline Intercept";
    state.selectedSubtopicId = null;
    initTugGame();
  } else if (viewName === 'jsw-game') {
    document.getElementById('nav-jsw-game').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Jet Set Willy";
    state.selectedSubtopicId = null;
    initJswGame();
  } else if (viewName === 'firefly') {
    document.getElementById('nav-firefly').classList.add('active');
    headerModeSwitcher.style.display = 'none';
    document.getElementById('current-view-title').textContent = "Firefly HTML Export";
    state.selectedSubtopicId = null;
    renderFireflyView();
  } else if (viewName === 'subtopic' && subtopicId) {
    state.selectedSubtopicId = subtopicId;
    headerModeSwitcher.style.display = 'flex';
    
    // Highlight correct subtopic in sidebar
    const subNavBtn = document.getElementById(`nav-subtopic-${subtopicId}`);
    if (subNavBtn) subNavBtn.classList.add('active');
    
    const subtopic = state.allQuestions.find(q => q.subtopicId === subtopicId);
    document.getElementById('current-view-title').textContent = subtopic ? subtopic.subtopicTitle.replace(/^Topic \d\.\d:\s*/, "") : "Study Mode";
    
    // Switch to active subtopic sub-mode (classic accordion list or flashcard view)
    switchSubtopicMode(state.currentMode);
  }

  // Toggle active CSS view containers
  const viewIdMap = {
    'dashboard': 'view-dashboard',
    'bookmarks': 'view-bookmarks',
    'timeline': 'view-timeline',
    'exam': 'view-exam',
    'classic': 'view-classic',
    'flashcards': 'view-flashcards',
    'lessons': 'view-mastery',
    'firefly': 'view-firefly',
    'exam-skills': 'view-exam-skills',
    'past-papers': 'view-past-papers',
    'crisis-game': 'view-crisis-game',
    'tug-game': 'view-tug-game',
    'jsw-game': 'view-jsw-game'
  };

  const targetViewId = viewName === 'subtopic' ? viewIdMap[state.currentMode] : viewIdMap[viewName];
  
  document.querySelectorAll('.content-view').forEach(view => {
    view.classList.remove('active');
  });
  
  const targetView = document.getElementById(targetViewId);
  if (targetView) targetView.classList.add('active');
  
  // Close mobile sidebar if overlay is open
  closeMobileSidebar();
}
function switchSubtopicMode(mode) {
  state.currentMode = mode;
  
  // Update header buttons active state
  document.querySelectorAll('#subtopic-mode-switcher .mode-btn').forEach(btn => {
    if (btn.getAttribute('data-mode') === mode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Switch displayed container
  document.querySelectorAll('.content-view').forEach(view => {
    view.classList.remove('active');
  });

  if (mode === 'lessons') {
    document.getElementById('view-mastery').classList.add('active');
    renderMasteryView(state.selectedSubtopicId);
  } else if (mode === 'classic') {
    document.getElementById('view-classic').classList.add('active');
    renderClassicView();
  } else if (mode === 'flashcards') {
    document.getElementById('view-flashcards').classList.add('active');
    startFlashcardSession(state.selectedSubtopicId);
  }
}
