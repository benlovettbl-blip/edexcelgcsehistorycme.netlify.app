import { state } from './state.js';
import { stopJswLoop } from './games.js';
import { 
  renderDashboard, 
  renderBookmarksView, 
  renderTimelineView, 
  renderExamSkillsView, 
  renderFireflyView,
  renderClassicView,
  startFlashcardSession,
  renderGamesView
} from './views.js';
import { showExamSetup } from './exam.js';
import { renderPastPapersView } from './past_papers.js';
import { renderMasteryView } from './lessons.js';
import { updateBrandBanner } from './brand_config.js';
import { closeMobileSidebar } from './layout.js';
import { AudioEngine } from './audio.js';

const INQUIRY_QUESTIONS = {
  "subtopic_1_1": "Inquiry: How did the British withdrawal lead to the creation of Israel, 1945–48?",
  "subtopic_1_2": "Inquiry: What were the causes and consequences of the 1948–49 Arab-Israeli War?",
  "subtopic_1_3": "Inquiry: Why did the nationalisation of the Suez Canal spark a major international crisis in 1956?",
  "subtopic_2_1": "Inquiry: How did tensions escalate to cause the outbreak and swift outcome of the 1967 Six Day War?",
  "subtopic_2_2": "Inquiry: Why did Palestinian nationalism grow and what impact did it have on the conflict?",
  "subtopic_2_3": "Inquiry: Why did the Yom Kippur War break out in 1973 and how did it change the balance of power?",
  "subtopic_3_1": "Inquiry: How was a historic peace accord achieved between Egypt and Israel at Camp David?",
  "subtopic_3_2": "Inquiry: What were the causes and consequences of the Israeli invasion of Lebanon and the First Intifada?",
  "subtopic_3_3": "Inquiry: How did the Oslo Accords attempt to resolve the conflict, and why did they ultimately stall?"
};

// --- Navigation Controller ---
export function switchView(viewName, subtopicId = null) {
  state.currentView = viewName;
  stopJswLoop();

  const inquiryEl = document.getElementById('header-inquiry-question');
  if (inquiryEl) {
    inquiryEl.style.display = 'none';
  }

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
    const dashboardNav = document.getElementById('nav-dashboard');
    if (dashboardNav) dashboardNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Study Dashboard";
    state.selectedSubtopicId = null;
    renderDashboard();
  } else if (viewName === 'bookmarks') {
    const bookmarksNav = document.getElementById('nav-bookmarks');
    if (bookmarksNav) bookmarksNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Bookmarked Deck";
    state.selectedSubtopicId = null;
    renderBookmarksView();
  } else if (viewName === 'timeline') {
    const timelineNav = document.getElementById('nav-timeline');
    if (timelineNav) timelineNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Chronology Timeline";
    state.selectedSubtopicId = null;
    renderTimelineView();
  } else if (viewName === 'exam') {
    const examNav = document.getElementById('nav-exam-sim');
    if (examNav) examNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Quiz Generator";
    state.selectedSubtopicId = null;
    if (!state.examSession.isActive) {
      showExamSetup();
    }
  } else if (viewName === 'exam-skills') {
    const skillsNav = document.getElementById('nav-exam-skills');
    if (skillsNav) skillsNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Exam Practice (Q1-Q3)";
    state.selectedSubtopicId = null;
    renderExamSkillsView();
  } else if (viewName === 'past-papers') {
    const papersNav = document.getElementById('nav-past-papers');
    if (papersNav) papersNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Past Exam Papers";
    state.selectedSubtopicId = null;
    renderPastPapersView();
  } else if (viewName === 'games') {
    const gamesNav = document.getElementById('nav-games');
    if (gamesNav) gamesNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Revision Games Hub";
    state.selectedSubtopicId = null;
    renderGamesView();
  } else if (viewName === 'firefly') {
    const fireflyNav = document.getElementById('nav-firefly');
    if (fireflyNav) fireflyNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Firefly HTML Export";
    state.selectedSubtopicId = null;
    renderFireflyView();
  } else if (viewName === 'subtopic' && subtopicId) {
    state.selectedSubtopicId = subtopicId;
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'flex';
    
    // Highlight correct subtopic in sidebar
    const subNavBtn = document.getElementById(`nav-subtopic-${subtopicId}`);
    if (subNavBtn) subNavBtn.classList.add('active');
    
    const subtopic = state.allQuestions.find(q => q.subtopicId === subtopicId);
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) {
      viewTitle.textContent = subtopic ? subtopic.subtopicTitle.replace(/^Topic \d\.\d:\s*/, "") : "Study Mode";
    }
    
    if (inquiryEl && INQUIRY_QUESTIONS[subtopicId]) {
      inquiryEl.textContent = INQUIRY_QUESTIONS[subtopicId];
      inquiryEl.style.display = 'block';
    }
    
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
    'games': 'view-games'
  };

  const targetViewId = viewName === 'subtopic' ? viewIdMap[state.currentMode] : viewIdMap[viewName];
  
  document.querySelectorAll('.content-view').forEach(view => {
    view.classList.remove('active');
  });
  
  const targetView = document.getElementById(targetViewId);
  if (targetView) targetView.classList.add('active');
  
  closeMobileSidebar();
  updateBrandBanner();
}

export function switchSubtopicMode(mode) {
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
    const masteryView = document.getElementById('view-mastery');
    if (masteryView) masteryView.classList.add('active');
    renderMasteryView(state.selectedSubtopicId);
  } else if (mode === 'classic') {
    const classicView = document.getElementById('view-classic');
    if (classicView) classicView.classList.add('active');
    renderClassicView();
  } else if (mode === 'flashcards') {
    const flashcardsView = document.getElementById('view-flashcards');
    if (flashcardsView) flashcardsView.classList.add('active');
    startFlashcardSession(state.selectedSubtopicId);
  }

  updateBrandBanner();
}