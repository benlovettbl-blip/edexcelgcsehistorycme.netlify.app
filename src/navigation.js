import { state } from './state.js';
import { 
  renderDashboard, 
  renderBookmarksView, 
  renderTimelineView, 
  renderExamSkillsView, 
  renderClassicView,
  startFlashcardSession,
  renderGamesView,
  renderGoingBeyond,
  renderKeyTopicOverview,
  renderAiVideosView,
  openStreakLeaderboard,
  addXp,
  renderKeyIndividualsView
} from './views.js';
import { showExamSetup } from './exam.js';
import { renderPastPapersView } from './past_papers.js';
import { renderMasteryView } from './lessons.js';
import { updateBrandBanner } from './brand_config.js';
import { closeMobileSidebar } from './layout.js';
import { AudioEngine } from './audio.js';

let lastViewSwitchTime = 0;

const INQUIRY_QUESTIONS = {
  "subtopic_1_1": "How did the British withdrawal lead to the creation of Israel, 1945–48?",
  "subtopic_1_2": "What were the causes and consequences of the 1948–49 Arab-Israeli War?",
  "subtopic_1_3": "Why did the nationalisation of the Suez Canal spark a major international crisis in 1956?",
  "subtopic_2_1": "How did tensions escalate to cause the outbreak and swift outcome of the 1967 Six Day War?",
  "subtopic_2_2": "Why did Palestinian nationalism grow and what impact did it have on the conflict?",
  "subtopic_2_3": "Why did the Yom Kippur War break out in 1973 and how did it change the balance of power?",
  "subtopic_3_1": "How was a historic peace accord achieved between Egypt and Israel at Camp David?",
  "subtopic_3_2": "What were the causes and consequences of the Israeli invasion of Lebanon and the First Intifada?",
  "subtopic_3_3": "How did the Oslo Accords attempt to resolve the conflict, and why did they ultimately stall?"
};

// --- Navigation Controller ---
export function switchView(viewName, subtopicId = null) {
  AudioEngine.stopSpeaking();
  state.currentView = viewName;

  const backBtn = document.getElementById('header-back-btn');
  if (backBtn) {
    if (viewName === 'dashboard') {
      backBtn.style.display = 'none';
    } else {
      backBtn.style.display = 'flex';
    }
  }

  const logoEl = document.getElementById('header-brand-logo');
  if (logoEl) {
    if (viewName === 'leaderboard') {
      logoEl.className = "bouncy-chimney brand-icon";
      logoEl.title = "Fareham Chimney Sweep (Click to cycle quote)";
      logoEl.innerHTML = `
        <div class="smoke-particle smoke-1"></div>
        <div class="smoke-particle smoke-2"></div>
        <div class="smoke-particle smoke-3"></div>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="24" width="14" height="2" rx="0.5" fill="#a03018" />
          <polygon points="6,24 8,4 16,4 18,24" fill="#e65c00" />
          <rect x="7" y="2" width="10" height="2" rx="0.5" fill="#b34700" />
          <rect x="7.8" y="6" width="8.4" height="1.5" fill="#ffffff" />
          <rect x="8.0" y="9.5" width="8.0" height="1.5" fill="#ffffff" />
          <rect x="8.2" y="13" width="7.6" height="1.5" fill="#ffffff" />
        </svg>
      `;
    } else {
      logoEl.className = "brand-icon";
      logoEl.title = "Conflict in the Middle East (Click to cycle study tips)";
      logoEl.innerHTML = `<i class="fa-solid fa-globe"></i>`;
    }
  }

  const now = Date.now();
  if (now - lastViewSwitchTime > 3000) {
    lastViewSwitchTime = now;
    addXp(1);
  }

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
    if (viewTitle) viewTitle.textContent = "Conflict in the Middle East (1945–1995)";
    state.selectedSubtopicId = null;
    renderDashboard();
  } else if (viewName === 'leaderboard') {
    const leaderboardNav = document.getElementById('nav-leaderboard');
    if (leaderboardNav) leaderboardNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Streak & Level Leaderboard";
    state.selectedSubtopicId = null;
    openStreakLeaderboard();
  } else if (viewName === 'map') {
    const mapNav = document.getElementById('nav-map');
    if (mapNav) mapNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Geographic Map Explorer";
    state.selectedSubtopicId = null;
    window.dispatchEvent(new CustomEvent('mapViewActivated'));
  } else if (viewName === 'bookmarks') {
    const bookmarksNav = document.getElementById('nav-bookmarks');
    if (bookmarksNav) bookmarksNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Bookmarked Deck";
    state.selectedSubtopicId = null;
    renderBookmarksView();
  } else if (viewName === 'individuals') {
    const individualsNav = document.getElementById('nav-individuals');
    if (individualsNav) individualsNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Key Individuals";
    state.selectedSubtopicId = null;
    renderKeyIndividualsView();
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
  } else if (viewName === 'going-beyond') {
    const goingBeyondNav = document.getElementById('nav-going-beyond');
    if (goingBeyondNav) goingBeyondNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "Going Beyond: Modern Realities";
    state.selectedSubtopicId = null;
    renderGoingBeyond();
  } else if (viewName === 'ai-videos') {
    const aiVideosNav = document.getElementById('nav-ai-videos');
    if (aiVideosNav) aiVideosNav.classList.add('active');
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) viewTitle.textContent = "2min AI Videos";
    state.selectedSubtopicId = null;
    renderAiVideosView();
  } else if (viewName === 'subtopic' && subtopicId) {
    state.selectedSubtopicId = subtopicId;
    state.selectedKeyTopicId = null;
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
    
    // Remove active from any topic headers
    document.querySelectorAll('.nav-section-header').forEach(hdr => hdr.classList.remove('active'));
    
    switchSubtopicMode(state.currentMode);
  } else if (viewName === 'key-topic' && subtopicId) {
    state.selectedSubtopicId = null;
    state.selectedKeyTopicId = subtopicId;
    if (headerModeSwitcher) headerModeSwitcher.style.display = 'none';
    
    // Highlight correct topic header in sidebar
    document.querySelectorAll('.nav-section-header').forEach(hdr => {
      if (hdr.getAttribute('data-topic-id') === subtopicId) {
        hdr.classList.add('active');
      } else {
        hdr.classList.remove('active');
      }
    });
    
    const viewTitle = document.getElementById('current-view-title');
    if (viewTitle) {
      const titles = {
        'topic_1': 'Key Topic 1 Overview',
        'topic_2': 'Key Topic 2 Overview',
        'topic_3': 'Key Topic 3 Overview'
      };
      viewTitle.textContent = titles[subtopicId] || "Key Topic Overview";
    }
    renderKeyTopicOverview(subtopicId);
  }

  // Remove active from topic headers if navigating to other non-key-topic views
  if (viewName !== 'key-topic' && viewName !== 'subtopic') {
    document.querySelectorAll('.nav-section-header').forEach(hdr => hdr.classList.remove('active'));
    state.selectedKeyTopicId = null;
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
    'exam-skills': 'view-exam-skills',
    'past-papers': 'view-past-papers',
    'games': 'view-games',
    'going-beyond': 'view-going-beyond',
    'key-topic': 'view-key-topic',
    'ai-videos': 'view-ai-videos',
    'map': 'view-map',
    'leaderboard': 'view-leaderboard',
    'individuals': 'view-individuals'
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