// --- START OF MODULE state.js ---
/*
   Edexcel GCSE History Paper 2 Conflict in the Middle East Mastery - Application Controller
   Handles SPA routing, progress syncing, audio synthesis, exam timing, 
   flashcard sessions, global search, and timeline assembly.
*/

// --- Global Application State ---
const state = {
  currentView: 'dashboard',         // 'dashboard' | 'classic' | 'flashcards' | 'exam' | 'timeline' | 'bookmarks'
  selectedSubtopicId: null,         // Active sub-topic ID (e.g. 'subtopic_1_1')
  currentMode: 'lessons',           // 'lessons' | 'classic' | 'flashcards' (sub-topic study modes)
  mastery: {},                      // { questionId: boolean }
  bookmarks: [],                     // Array of questionIds
  soundEnabled: true,
  theme: 'desert',
  
  // Flashcard Session State
  flashcardSession: {
    deck: [],
    activeIndex: 0,
    originalLength: 0,
    masteredCount: 0
  },
  
  // Quiz Generator State
  examSession: {
    isActive: false,
    questions: [],
    activeIndex: 0,
    answers: {},                     // { questionId: string (written answer) }
    grades: {},                      // { questionId: boolean (self-graded correct) }
    startTime: null,
    timerInterval: null,
    timeRemaining: 0,
    timeLimit: 0,
    timeElapsed: 0,
    scope: 'all',
    length: 15
  },
  
  // Cache flattened questions list for quick access
  allQuestions: [],

  // Past Exam Session State
  pastPaperSession: {
    activePaperId: null,
    activePaperData: null,
    answers: {},                     // { questionId: string }
    completedQuestions: []           // Array of questionIds
  },

  // Crisis Hotline: 1973 Game State
  crisisGameSession: {
    currentStep: 0,
    metrics: { tension: 50, arab: 50, israel: 50, oil: 50 }
  },

  // Chronological Tug-of-War Game State
  tugGameSession: {
    score: 0,
    streak: 0,
    defcon: 5,
    currentEvent: null,
    gameEvents: []
  },

  // Jet Set Willy: The War Room Game State
  jswGameSession: {
    score: 0,
    lives: 3,
    loopActive: false,
    player: { x: 50, y: 200, width: 16, height: 24, vx: 0, vy: 0, isJumping: false, color: "#ffff00" },
    platforms: [
      { x: 0, y: 260, width: 600, height: 40, color: "#0000ff" },
      { x: 120, y: 190, width: 140, height: 12, color: "#00ff00" },
      { x: 340, y: 190, width: 140, height: 12, color: "#00ff00" },
      { x: 200, y: 120, width: 200, height: 12, color: "#ff0000" }
    ],
    items: [
      { x: 180, y: 160, collected: false, spec: "OPERATION NICKEL GRASS: Massive US airlift helps stabilize IDF lines in October 1973." },
      { x: 400, y: 160, collected: false, spec: "OPEC OIL EMBARGO: Arab oil ministers use production cuts as economic leverage against the West." },
      { x: 300, y: 80, collected: false, spec: "UN RESOLUTION 338: Superpower-brokered ceasefire calls for immediate end to hostilities." },
      { x: 50, y: 230, collected: false, spec: "DEFCON 3 ALERT: High strategic readiness level triggered during US-Soviet brinkmanship." }
    ],
    hazards: [
      { x: 200, y: 104, width: 16, height: 16, vx: 2, rangeMin: 200, rangeMax: 380, color: "#ff00ff", label: "☢" },
      { x: 150, y: 174, width: 12, height: 16, vx: 1.5, rangeMin: 120, rangeMax: 240, color: "#00ffff", label: "☎" }
    ]
  }
};

// --- END OF MODULE state.js ---

// --- START OF MODULE audio.js ---
// --- Web Audio API Synth Engine ---
const AudioEngine = {
  ctx: null,
  init() {
    if (!this.ctx) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      } catch (e) {
        console.warn("Could not initialize AudioContext:", e);
      }
    }
  },
  play(type) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const ctx = this.ctx;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(e => console.warn("Failed to resume AudioContext:", e));
      }
      
      const now = ctx.currentTime;
      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'flip') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'success') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);       // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08);  // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16);  // G5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.setValueAtTime(0.05, now + 0.08);
        gain.gain.setValueAtTime(0.05, now + 0.16);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'fail') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.2);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, now);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'cheer') {
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C major chord climb
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.04, now + idx * 0.06 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.3);
        });
      }
    } catch (e) {
      console.warn("Audio Context synth error:", e);
    }
  }
};

// --- END OF MODULE audio.js ---

// --- START OF MODULE confetti.js ---
// --- HTML5 Canvas Confetti Celebrator ---
const Confetti = {
  canvas: null,
  ctx: null,
  particles: [],
  animationId: null,
  init() {
    this.canvas = document.getElementById('confetti-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.removeEventListener('resize', this.resizeBound);
    this.resizeBound = () => this.resize();
    window.addEventListener('resize', this.resizeBound);
  },
  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  },
  spawn(count = 80) {
    this.init();
    if (!this.ctx) return;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.particles = [];
    const colors = ['#a855f7', '#6366f1', '#06b6d4', '#10b981', '#f43f5e', '#facc15'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height - 20,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 6 - 3,
        opacity: 1
      });
    }
    this.loop();
  },
  loop() {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let active = false;
    
    this.particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      
      if (p.y > this.canvas.height - 20) {
        p.opacity -= 0.015;
      }
      
      if (p.opacity > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });
    
    if (active) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};

// --- END OF MODULE confetti.js ---

// --- START OF MODULE storage.js ---
// --- Storage & Data Prep ---
function initData() {
  // Flatten hierarchical quiz data into single array for utility operations
  state.allQuestions = [];
  QUIZ_DATA.forEach(topic => {
    topic.subtopics.forEach(subtopic => {
      subtopic.standard.forEach(q => {
        state.allQuestions.push({
          ...q,
          type: 'standard',
          topicId: topic.id,
          topicTitle: topic.title,
          subtopicId: subtopic.id,
          subtopicTitle: subtopic.title
        });
      });
      subtopic.depth.forEach(q => {
        state.allQuestions.push({
          ...q,
          type: 'depth',
          topicId: topic.id,
          topicTitle: topic.title,
          subtopicId: subtopic.id,
          subtopicTitle: subtopic.title
        });
      });
    });
  });

  // Load progress and user settings from LocalStorage
  try {
    const storedMastery = localStorage.getItem('edexcel_mastery') || localStorage.getItem('firefly_mastery');
    const storedBookmarks = localStorage.getItem('edexcel_bookmarks') || localStorage.getItem('firefly_bookmarks');
    const storedSound = localStorage.getItem('edexcel_sound') || localStorage.getItem('firefly_sound');
    const storedTheme = localStorage.getItem('edexcel_theme') || localStorage.getItem('firefly_theme');
    const storedPastAnswers = localStorage.getItem('edexcel_past_answers');
    const storedPastCompleted = localStorage.getItem('edexcel_past_completed');
    
    if (storedMastery) state.mastery = JSON.parse(storedMastery);
    if (storedBookmarks) state.bookmarks = JSON.parse(storedBookmarks);
    if (storedSound) state.soundEnabled = JSON.parse(storedSound);
    if (storedTheme) state.theme = storedTheme;
    if (storedPastAnswers) state.pastPaperSession.answers = JSON.parse(storedPastAnswers);
    if (storedPastCompleted) state.pastPaperSession.completedQuestions = JSON.parse(storedPastCompleted);
  } catch (e) {
    console.error("LocalStorage load error:", e);
  }
  
  // Set theme attributes on HTML root
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-selector').value = state.theme;
  updateSoundBtnUI();
}

function saveProgress() {
  try {
    localStorage.setItem('edexcel_mastery', JSON.stringify(state.mastery));
    localStorage.setItem('edexcel_bookmarks', JSON.stringify(state.bookmarks));
    localStorage.setItem('edexcel_past_answers', JSON.stringify(state.pastPaperSession.answers));
    localStorage.setItem('edexcel_past_completed', JSON.stringify(state.pastPaperSession.completedQuestions));
  } catch (e) {
    console.error("LocalStorage save error:", e);
  }
  updateGlobalStats();
}

// Helper to set question mastery and check for sub-topic 100% completion celebration
function setMastered(questionId, isMastered) {
  const previousStatus = !!state.mastery[questionId];
  if (previousStatus === isMastered) return;
  
  state.mastery[questionId] = isMastered;
  saveProgress();

  if (isMastered) {
    // Check if the subtopic this question belongs to is now 100% completed
    const question = state.allQuestions.find(q => q.id === questionId);
    if (question) {
      const subtopicQuestions = state.allQuestions.filter(q => q.subtopicId === question.subtopicId);
      const masteredInSubtopic = subtopicQuestions.filter(q => state.mastery[q.id]);
      
      if (masteredInSubtopic.length === subtopicQuestions.length) {
        // Trigger congratulations!
        AudioEngine.play('cheer');
        Confetti.spawn(100);
      }
    }
  }
}

function toggleBookmark(questionId) {
  const idx = state.bookmarks.indexOf(questionId);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
  } else {
    state.bookmarks.push(questionId);
  }
  saveProgress();
  updateBookmarksUI();
  AudioEngine.play('click');
}

// --- END OF MODULE storage.js ---

// --- START OF MODULE navigation.js ---
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

// --- END OF MODULE navigation.js ---

// --- START OF MODULE views.js ---
// --- Dynamic Renders ---

// 1. Sidebar sub-topic items
function renderSidebarNav() {
  const container = document.getElementById('topics-nav-list');
  container.innerHTML = '';
  
  QUIZ_DATA.forEach(topic => {
    const section = document.createElement('div');
    section.style.marginBottom = '12px';
    
    const title = document.createElement('span');
    title.className = 'nav-section-title';
    title.style.fontSize = '0.7rem';
    title.style.color = 'var(--text-muted)';
    title.textContent = topic.title.split(':')[0]; // e.g. "Key Topic 1"
    section.appendChild(title);
    
    topic.subtopics.forEach(sub => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.id = `nav-subtopic-${sub.id}`;
      
      const numCode = sub.title.match(/Topic\s(\d\.\d)/);
      const shortName = numCode ? `Topic ${numCode[1]}` : sub.title;
      
      // Calculate individual subtopic progress
      const subQuestions = state.allQuestions.filter(q => q.subtopicId === sub.id);
      const mastered = subQuestions.filter(q => state.mastery[q.id]);
      const pct = subQuestions.length > 0 ? Math.round((mastered.length / subQuestions.length) * 100) : 0;
      
      a.innerHTML = `
        <span class="nav-item-content">
          <i class="fa-solid fa-circle-question"></i>
          ${shortName}
        </span>
        <span class="nav-item-progress" id="nav-pct-${sub.id}">${pct}%</span>
      `;
      
      a.addEventListener('click', () => {
        AudioEngine.play('click');
        switchView('subtopic', sub.id);
      });
      
      section.appendChild(a);
    });
    
    container.appendChild(section);
  });
  
  updateBookmarksUI();
}

function updateBookmarksUI() {
  const badge = document.getElementById('bookmarks-count-badge');
  if (badge) badge.textContent = state.bookmarks.length;
  
  const sideCount = document.getElementById('bookmarks-count-display');
  if (sideCount) sideCount.textContent = `${state.bookmarks.length} card${state.bookmarks.length === 1 ? '' : 's'} bookmarked`;
}

// 2. Global statistics calculation
function updateGlobalStats() {
  const total = state.allQuestions.length;
  const totalMastered = state.allQuestions.filter(q => state.mastery[q.id]).length;
  const overallPct = total > 0 ? Math.round((totalMastered / total) * 100) : 0;
  
  // Standard Recall
  const standardQuestions = state.allQuestions.filter(q => q.type === 'standard');
  const standardMastered = standardQuestions.filter(q => state.mastery[q.id]).length;
  const standardPct = standardQuestions.length > 0 ? Math.round((standardMastered / standardQuestions.length) * 100) : 0;
  
  // Top Tier Trivia
  const depthQuestions = state.allQuestions.filter(q => q.type === 'depth');
  const depthMastered = depthQuestions.filter(q => state.mastery[q.id]).length;
  const depthPct = depthQuestions.length > 0 ? Math.round((depthMastered / depthQuestions.length) * 100) : 0;
  
  // Update DOM values
  document.getElementById('stat-overall-progress').textContent = `${overallPct}%`;
  document.getElementById('stat-overall-progress-bar').style.width = `${overallPct}%`;
  document.getElementById('stat-overall-fraction').textContent = `${totalMastered} / ${total} Accords Signed`;
  
  document.getElementById('stat-standard-progress').textContent = `${standardPct}%`;
  document.getElementById('stat-standard-progress-bar').style.width = `${standardPct}%`;
  document.getElementById('stat-standard-fraction').textContent = `${standardMastered} / ${standardQuestions.length} Milestones Recalled`;
  
  document.getElementById('stat-depth-progress').textContent = `${depthPct}%`;
  document.getElementById('stat-depth-progress-bar').style.width = `${depthPct}%`;
  document.getElementById('stat-depth-fraction').textContent = `${depthMastered} / ${depthQuestions.length} Top Tier Trivia Secured`;
  
  // Update sidebar subtopic nav percentages
  QUIZ_DATA.forEach(topic => {
    topic.subtopics.forEach(sub => {
      const subQuestions = state.allQuestions.filter(q => q.subtopicId === sub.id);
      const mastered = subQuestions.filter(q => state.mastery[q.id]);
      const pct = subQuestions.length > 0 ? Math.round((mastered.length / subQuestions.length) * 100) : 0;
      
      const badge = document.getElementById(`nav-pct-${sub.id}`);
      if (badge) badge.textContent = `${pct}%`;
    });
  });
}

// 3. Render Dashboard list
function renderDashboard() {
  const container = document.getElementById('dashboard-topics-list');
  container.innerHTML = '';
  
  QUIZ_DATA.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-list-card';
    
    // Topic header progress
    const topicQuestions = state.allQuestions.filter(q => q.topicId === topic.id);
    const mastered = topicQuestions.filter(q => state.mastery[q.id]);
    const pct = topicQuestions.length > 0 ? Math.round((mastered.length / topicQuestions.length) * 100) : 0;
    
    let subtopicsHTML = '';
    topic.subtopics.forEach(sub => {
      const subQs = state.allQuestions.filter(q => q.subtopicId === sub.id);
      const subMastered = subQs.filter(q => state.mastery[q.id]).length;
      const subPct = subQs.length > 0 ? Math.round((subMastered / subQs.length) * 100) : 0;
      
      subtopicsHTML += `
        <div style="margin-top: 10px; padding-left: 12px; border-left: 2px solid var(--border-glass);">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
            <span style="color: var(--text-main); font-weight: 500;">${sub.title.replace(/^Topic \d\.\d:\s*/, "")}</span>
            <span style="color: var(--primary); font-weight: 600;">${subMastered}/${subQs.length} Secured</span>
          </div>
          <div class="topic-list-progress-bar" style="height: 3px;">
            <div class="topic-list-progress-fill" style="width: ${subPct}%;"></div>
          </div>
        </div>
      `;
    });
    
    card.innerHTML = `
      <div class="topic-list-info">
        <span class="topic-list-name" style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700;">${topic.title}</span>
        <span class="nav-item-progress" style="font-size: 0.8rem;">${pct}% Secured</span>
      </div>
      <div class="topic-list-progress-bar">
        <div class="topic-list-progress-fill" style="width: ${pct}%;"></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${subtopicsHTML}
      </div>
    `;
    
    // Clicking anywhere on topic card takes user to the first subtopic of that topic
    card.addEventListener('click', (e) => {
      // Don't trigger if click was inside interactive elements
      if (e.target.closest('a') || e.target.closest('button')) return;
      AudioEngine.play('click');
      switchView('subtopic', topic.subtopics[0].id);
    });
    
    container.appendChild(card);
  });

  // Render OneNote board of videos
  renderOneNoteBoard();
}

function renderOneNoteBoard() {
  const boardContainer = document.getElementById('onenote-video-board');
  if (!boardContainer) return;
  
  boardContainer.innerHTML = '';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'onenote-header';
  header.innerHTML = `
    <h2 class="onenote-title"><i class="fa-solid fa-thumbtack" style="color: var(--accent);"></i> 📌 GCSE 2-Minute Revision Videos</h2>
    <p class="onenote-subtitle">Watch quick spec-aligned video summaries on the board to review key topics.</p>
  `;
  boardContainer.appendChild(header);
  
  // Create grid
  const grid = document.createElement('div');
  grid.className = 'onenote-grid';
  
  let colorIndex = 1;
  QUIZ_DATA.forEach(topic => {
    topic.subtopics.forEach(sub => {
      if (sub.embedVideo) {
        const card = document.createElement('div');
        card.className = `onenote-card onenote-color-${colorIndex}`;
        
        // Match numbers like "Topic 1.1" or "1.1"
        const numCodeMatch = sub.title.match(/Topic\s+(\d\.\d)/i) || sub.title.match(/(\d\.\d)/);
        const subtopicNum = numCodeMatch ? `Topic ${numCodeMatch[1]}` : 'Revision';
        const cleanTitle = sub.title.replace(/^Topic\s+\d\.\d:\s*/i, "");
        
        card.innerHTML = `
          <div class="onenote-pin"></div>
          <span class="onenote-card-topic">${subtopicNum}</span>
          <h3 class="onenote-card-title">${cleanTitle}</h3>
          <div class="onenote-iframe-container">
            <div class="onenote-video-thumbnail" data-video-src="${sub.embedVideo}" data-video-title="${subtopicNum}: ${cleanTitle}">
              <div class="onenote-thumbnail-placeholder">
                <i class="fa-regular fa-circle-play"></i>
              </div>
            </div>
          </div>
        `;
        
        // Bind video play thumbnail click to open modal
        const thumbnail = card.querySelector('.onenote-video-thumbnail');
        thumbnail.addEventListener('click', (e) => {
          e.stopPropagation();
          openVideoModal(sub.embedVideo, `${subtopicNum}: ${cleanTitle}`);
        });
        
        // Click on sticky note navigates to subtopic lessons (excluding thumbnail interaction)
        card.addEventListener('click', (e) => {
          if (e.target.closest('.onenote-iframe-container')) return;
          AudioEngine.play('click');
          switchView('subtopic', sub.id);
        });
        
        grid.appendChild(card);
        
        // Cycle colors 1 to 5
        colorIndex = (colorIndex % 5) + 1;
      }
    });
  });
  
  boardContainer.appendChild(grid);
}


function highlightCausalConnectives(text) {
  if (!text) return "";
  return text.replace(/\b(As\s+a\s+result|Consequently|This\s+led\s+to|led\s+directly\s+to|leading\s+directly\s+to|One\s+consequence\s+was|Because)\b/gi, '<strong>$1</strong>');
}

async function renderFireflyView() {
  const textarea = document.getElementById('firefly-code-textarea');
  if (!textarea) return;
  textarea.value = 'Loading compiled Firefly HTML Export...';
  
  try {
    const res = await fetch('firefly_embed.html');
    if (res.ok) {
      const code = await res.text();
      textarea.value = code;
    } else {
      throw new Error();
    }
  } catch (e) {
    textarea.value = '<!-- Standalone Firefly Export -->\n<!-- The fully-featured offline SPA is compiled directly to firefly_embed.html in your project folder. -->\n<!-- If you are running on a local web server, the compiled code will load here automatically. -->\n<!-- Please locate "firefly_embed.html" on your disk to copy the full HTML code. -->';
  }
}

// 8. Exam Skills Practice View (SPA Integration)
// 8. Exam Skills Practice View (SPA Integration)
function renderExamSkillsView() {
  // Consequence reset
  const consSelect = document.getElementById('consequence-topic-select');
  if (consSelect) consSelect.value = "";
  document.getElementById('consequence-question-card').style.display = 'none';
  document.getElementById('consequence-input-area').style.display = 'none';
  document.getElementById('consequence-clue-box').style.display = 'none';
  document.getElementById('consequence-answer-box').style.display = 'none';
  for (let i = 1; i <= 4; i++) {
    const chk = document.getElementById(`chk-consequence-rubric-${i}`);
    if (chk) chk.checked = false;
  }

  // Narrative reset
  const narSelect = document.getElementById('narrative-topic-select');
  if (narSelect) narSelect.value = "";
  document.getElementById('narrative-question-card').style.display = 'none';
  document.getElementById('narrative-sorter-area').style.display = 'none';
  document.getElementById('narrative-input-area').style.display = 'none';
  document.getElementById('narrative-answer-box').style.display = 'none';
  document.getElementById('seq-select-1').innerHTML = '<option value="" disabled selected>-- Choose Event --</option>';
  document.getElementById('seq-select-2').innerHTML = '<option value="" disabled selected>-- Choose Event --</option>';
  document.getElementById('seq-select-3').innerHTML = '<option value="" disabled selected>-- Choose Event --</option>';
  document.getElementById('seq-row-1').className = 'sequence-item-container';
  document.getElementById('seq-row-2').className = 'sequence-item-container';
  document.getElementById('seq-row-3').className = 'sequence-item-container';
  document.getElementById('sequence-status-msg').innerHTML = "Select all three events to verify chronology.";
  document.getElementById('narrative-user-answer').value = "";
  document.querySelectorAll('.process-word').forEach(chip => chip.classList.remove('used'));
  for (let i = 1; i <= 4; i++) {
    const chk = document.getElementById(`chk-narrative-rubric-${i}`);
    if (chk) chk.checked = false;
  }

  // Importance reset
  const impSelect = document.getElementById('importance-topic-select');
  if (impSelect) impSelect.value = "";
  document.getElementById('importance-question-card').style.display = 'none';
  document.getElementById('importance-input-area').style.display = 'none';
  document.getElementById('importance-clue-box').style.display = 'none';
  document.getElementById('importance-answer-box').style.display = 'none';
  for (let i = 1; i <= 4; i++) {
    const chk = document.getElementById(`chk-importance-rubric-${i}`);
    if (chk) chk.checked = false;
  }

  // Default to Consequence tab active
  document.querySelectorAll('.exam-tab-btn').forEach(btn => btn.classList.remove('active'));
  const firstTab = document.getElementById('tab-consequence');
  if (firstTab) firstTab.classList.add('active');
  document.querySelectorAll('.exam-panel-content').forEach(p => p.style.display = 'none');
  const firstPanel = document.getElementById('panel-consequence');
  if (firstPanel) firstPanel.style.display = 'block';
}

// 4. Render Classic Accordion List View
let activeClassicFilter = 'all';

function renderClassicView() {
  const container = document.getElementById('classic-list-container');
  container.innerHTML = '';
  
  const subtopicId = state.selectedSubtopicId;
  let questions = state.allQuestions.filter(q => q.subtopicId === subtopicId);
  
  // Filter questions
  if (activeClassicFilter === 'standard') {
    questions = questions.filter(q => q.type === 'standard');
  } else if (activeClassicFilter === 'depth') {
    questions = questions.filter(q => q.type === 'depth');
  } else if (activeClassicFilter === 'unmastered') {
    questions = questions.filter(q => !state.mastery[q.id]);
  }
  
  // Update count display
  document.getElementById('subtopic-count-display').textContent = `${questions.length} question${questions.length === 1 ? '' : 's'} displayed`;
  
  if (questions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-box-open"></i>
        <h3>No Questions Found</h3>
        <p>Try changing your filter settings or complete more study cards to populate this list.</p>
      </div>
    `;
    return;
  }
  
  questions.forEach((q, idx) => {
    const isMastered = !!state.mastery[q.id];
    const isBookmarked = state.bookmarks.includes(q.id);
    
    const details = document.createElement('details');
    details.className = 'quiz-card-details';
    details.id = `accordion-${q.id}`;
        details.innerHTML = `
      <summary class="quiz-card-summary">
        <div class="summary-content">
          <span class="summary-num">${idx + 1}</span>
          <span class="summary-text">${q.question}</span>
        </div>
        <div class="summary-badges">
          <span class="badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}">${q.type === 'standard' ? 'Standard' : 'Top Tier Trivia'}</span>
          <span class="badge badge-year">${q.year}</span>
          <div class="mastery-checkbox-container ${isMastered ? 'mastered' : ''}" data-qid="${q.id}" title="Mark as Mastered">
            <i class="fa-solid fa-check"></i>
          </div>
          <i class="fa-solid fa-chevron-down summary-arrow"></i>
        </div>
      </summary>
      <div class="details-content">
        <div class="answer-header">
          <i class="fa-solid fa-circle-check"></i> Correct Key Term / Answer
        </div>
        <div class="answer-value">${q.answer}</div>
        <div class="explanation-value">${q.explanation}</div>
      </div>
    `;
    const checkBtn = details.querySelector('.mastery-checkbox-container');
    checkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const nextState = !checkBtn.classList.contains('mastered');
      setMastered(q.id, nextState);
      checkBtn.classList.toggle('mastered', nextState);
      
      // Update checkmark UI inside
      if (nextState) {
        AudioEngine.play('success');
      } else {
        AudioEngine.play('click');
      }
    });

    details.addEventListener('toggle', () => {
      if (details.open) {
        AudioEngine.play('flip');
      }
    });
    
    container.appendChild(details);
  });
}

// 5. Flashcard View logic
function startFlashcardSession(subtopicId) {
  const questions = state.allQuestions.filter(q => q.subtopicId === subtopicId);
  
  // Shuffle cards for study session
  state.flashcardSession.deck = [...questions].sort(() => Math.random() - 0.5);
  state.flashcardSession.activeIndex = 0;
  state.flashcardSession.originalLength = questions.length;
  state.flashcardSession.masteredCount = 0;
  
  renderFlashcard();
}

function renderFlashcard() {
  const deck = state.flashcardSession.deck;
  const idx = state.flashcardSession.activeIndex;
  
  // Update progress headers
  document.getElementById('flashcard-counter-text').textContent = `Card ${idx + 1} of ${deck.length}`;
  const masteryPct = deck.length > 0 ? Math.round((state.flashcardSession.masteredCount / state.flashcardSession.originalLength) * 100) : 0;
  document.getElementById('flashcard-mastery-text').textContent = `${masteryPct}% resolved this session`;
  document.getElementById('flashcard-progress-bar-fill').style.width = `${Math.min(100, Math.round(((idx) / deck.length) * 100))}%`;
  
  if (idx >= deck.length) {
    // Finished session
    showFlashcardCompletion();
    return;
  }
  
  const q = deck[idx];
  const isBookmarked = state.bookmarks.includes(q.id);
  
  // Render Front & Back Content
  const frontBadge = document.getElementById('card-front-badge');
  frontBadge.textContent = q.type === 'standard' ? 'Standard' : 'Top Tier Trivia';
  frontBadge.className = `badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}`;
  
  const backBadge = document.getElementById('card-back-badge');
  backBadge.textContent = q.type === 'standard' ? 'Standard' : 'Top Tier Trivia';
  backBadge.className = `badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}`;
  
  document.getElementById('card-front-question').textContent = q.question;
  document.getElementById('card-back-answer').textContent = q.answer;
  document.getElementById('card-back-explanation').textContent = q.explanation;
  
  // Set bookmark states on flashcard faces
  const frontBkmk = document.getElementById('card-front-bookmark');
  const backBkmk = document.getElementById('card-back-bookmark');
  
  [frontBkmk, backBkmk].forEach(b => {
    b.setAttribute('data-qid', q.id);
    b.className = `bookmark-icon-container ${isBookmarked ? 'bookmarked' : ''}`;
    b.querySelector('i').className = isBookmarked ? 'fa-solid fa-star' : 'fa-regular fa-star';
  });

  // Ensure card is unflipped
  const cardEl = document.getElementById('flashcard-card');
  cardEl.classList.remove('flipped');
  cardEl.className = 'flashcard-card'; // Clear swipe animations
  
  // Reset buttons
  document.getElementById('btn-flashcard-reveal').style.display = 'flex';
  document.getElementById('flashcard-self-grade-actions').style.display = 'none';
}

function handleFlashcardGrade(correct) {
  if (state.flashcardSession.activeIndex >= state.flashcardSession.deck.length) return;
  
  const cardEl = document.getElementById('flashcard-card');
  if (cardEl.classList.contains('swipe-right') || cardEl.classList.contains('swipe-left')) return;
  
  const deck = state.flashcardSession.deck;
  const idx = state.flashcardSession.activeIndex;
  const q = deck[idx];
  
  if (correct) {
    setMastered(q.id, true);
    state.flashcardSession.masteredCount++;
    AudioEngine.play('success');
    
    // Swipe Right Animation
    cardEl.classList.add('swipe-right');
    setTimeout(() => {
      state.flashcardSession.activeIndex++;
      renderFlashcard();
    }, 300);
  } else {
    setMastered(q.id, false);
    AudioEngine.play('fail');
    
    // Spaced Repetition: Push card to end of deck to challenge student again!
    cardEl.classList.add('swipe-left');
    setTimeout(() => {
      // Push back to deck
      state.flashcardSession.deck.push(q);
      state.flashcardSession.activeIndex++;
      renderFlashcard();
    }, 300);
  }
}

function showFlashcardCompletion() {
  AudioEngine.play('cheer');
  Confetti.spawn(100);
  
  const container = document.getElementById('view-flashcards');
  container.innerHTML = `
    <div class="empty-state" style="padding: 60px 20px;">
      <div class="results-grade-circle" style="width: 90px; height: 90px; font-size: 2.2rem; margin: 0 auto 20px; animation: pulse 2s infinite;">
        <i class="fa-solid fa-flag-checkered" style="color: var(--text-inverse);"></i>
      </div>
      <h3>Study Deck Resolved!</h3>
      <p>Excellent active recall training. You finished all flashcards in this subtopic.</p>
      <div style="display: flex; gap: 16px; margin-top: 24px; justify-content: center; width: 100%; max-width: 400px; margin-left: auto; margin-right: auto;">
        <button class="btn-secondary" id="btn-fc-restart">Study Again</button>
        <button class="btn-primary" id="btn-fc-finish">Return Dashboard</button>
      </div>
    </div>
  `;
  
  document.getElementById('btn-fc-restart').addEventListener('click', () => {
    AudioEngine.play('click');
    // Restore normal structure first
    restoreFlashcardSkeleton();
    startFlashcardSession(state.selectedSubtopicId);
  });
  
  document.getElementById('btn-fc-finish').addEventListener('click', () => {
    AudioEngine.play('click');
    restoreFlashcardSkeleton();
    switchView('dashboard');
  });
}

function restoreFlashcardSkeleton() {
  const container = document.getElementById('view-flashcards');
  container.innerHTML = `
    <div class="flashcard-view-container">
      <div class="flashcard-progress-header">
        <span id="flashcard-counter-text">Card 1 of 15</span>
        <span id="flashcard-mastery-text">0% resolved this session</span>
      </div>
      <div class="flashcard-progress-bar">
        <div class="flashcard-progress-fill" id="flashcard-progress-bar-fill"></div>
      </div>
      <div class="flashcard-stage" id="flashcard-stage">
        <div class="flashcard-card" id="flashcard-card">
          <div class="flashcard-face flashcard-front">
            <div class="card-top">
              <span class="badge" id="card-front-badge">Standard</span>
              <span class="bookmark-icon-container" id="card-front-bookmark"><i class="fa-regular fa-star"></i></span>
            </div>
            <div class="card-body"><h3 class="card-question" id="card-front-question"></h3></div>
            <div class="card-bottom"><i class="fa-solid fa-rotate"></i> Click card to flip and reveal answer</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="card-top">
              <span class="badge badge-standard" id="card-back-badge">Standard</span>
              <span class="bookmark-icon-container" id="card-back-bookmark"><i class="fa-regular fa-star"></i></span>
            </div>
            <div class="card-body">
              <span class="card-answer-label">Correct Answer</span>
              <h2 class="card-answer-text" id="card-back-answer"></h2>
              <p class="card-explanation-text" id="card-back-explanation"></p>
            </div>
            <div class="card-bottom"><i class="fa-solid fa-rotate"></i> Click card to flip back</div>
          </div>
        </div>
      </div>
      <div class="flashcard-controls">
        <button class="btn-secondary" id="btn-flashcard-reveal"><i class="fa-solid fa-rotate"></i> Flip Card</button>
        <div id="flashcard-self-grade-actions" style="display: none; width: 100%; gap: 16px;">
          <button class="btn-incorrect" id="btn-flashcard-incorrect"><i class="fa-solid fa-xmark"></i> Study Again</button>
          <button class="btn-correct" id="btn-flashcard-correct"><i class="fa-solid fa-check"></i> Got It!</button>
        </div>
      </div>
    </div>
  `;
  
  // Re-attach card flip listener
  document.getElementById('flashcard-stage').addEventListener('click', flipFlashcard);
  document.getElementById('btn-flashcard-reveal').addEventListener('click', flipFlashcard);
  document.getElementById('btn-flashcard-incorrect').addEventListener('click', () => handleFlashcardGrade(false));
  document.getElementById('btn-flashcard-correct').addEventListener('click', () => handleFlashcardGrade(true));
  
  const bkmks = [document.getElementById('card-front-bookmark'), document.getElementById('card-back-bookmark')];
  bkmks.forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(b.getAttribute('data-qid'));
    });
  });
}

function flipFlashcard() {
  const card = document.getElementById('flashcard-card');
  card.classList.toggle('flipped');
  AudioEngine.play('flip');
  
  const isFlipped = card.classList.contains('flipped');
  const revealBtn = document.getElementById('btn-flashcard-reveal');
  const actionBtns = document.getElementById('flashcard-self-grade-actions');
  
  if (isFlipped) {
    revealBtn.style.display = 'none';
    actionBtns.style.display = 'flex';
  } else {
    revealBtn.style.display = 'flex';
    actionBtns.style.display = 'none';
  }
}

// 6. Timeline View Assembly
function renderTimelineView() {
  const wrapper = document.getElementById('timeline-items-wrapper');
  wrapper.innerHTML = '';
  
  const eraFilter = document.getElementById('timeline-era-select').value;
  let questions = [...state.allQuestions];
  
  if (eraFilter !== 'all') {
    questions = questions.filter(q => q.topicId === eraFilter);
  }
  
  // Sort chronologically by year ascending
  questions.sort((a, b) => a.year - b.year);
  
  document.getElementById('timeline-count-display').textContent = `${questions.length} chronological milestones mapped`;
  
  if (questions.length === 0) {
    wrapper.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-timeline"></i>
        <h3>No milestones found</h3>
      </div>
    `;
    return;
  }
  
  questions.forEach(q => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    let topicName = "Key Topic 1";
    if (q.topicId === 'topic_2') topicName = "Key Topic 2";
    if (q.topicId === 'topic_3') topicName = "Key Topic 3";
    
    item.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-year">${q.year}</div>
      <div class="timeline-content-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
          <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">${topicName}</span>
          <span class="badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}">${q.type === 'standard' ? 'Standard' : 'Top Tier Trivia'}</span>
        </div>
        <div class="timeline-q-title">${q.question}</div>
        
        <details class="quiz-card-details" style="border: none; border-radius: 0; background: none; box-shadow: none; margin-top: 4px;">
          <summary style="padding: 4px 0; font-size: 0.8rem; font-weight: 600; color: var(--primary); display: flex; align-items: center; gap: 6px;">
            Reveal Historical Key Term & Analysis <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem;"></i>
          </summary>
          <div class="timeline-a-box" style="margin-top: 8px;">
            <div class="timeline-a-text">${q.answer}</div>
            <p class="timeline-exp">${q.explanation}</p>
          </div>
        </details>
      </div>
    `;
    
    wrapper.appendChild(item);
  });
}


function evaluateStudentAnswer(type, questionObj, userAnswer) {
  const cleanAns = (userAnswer || "").trim().toLowerCase();
  
  // Base checks
  const wordCount = cleanAns.split(/\s+/).filter(w => w.length > 0).length;
  const hasMinLength = wordCount >= 10;
  
  // Check for causal connectives
  const connectives = ["led to", "resulted in", "caused", "forced", "provoked", "as a result", "consequently", "because", "this meant", "this caused", "therefore"];
  const matchedConnectives = connectives.filter(c => cleanAns.includes(c));
  const hasCausal = matchedConnectives.length > 0;
  
  // Extract or get key historical nouns/dates
  let keywords = [];
  if (questionObj.keywords && questionObj.keywords.length > 0) {
    keywords = questionObj.keywords;
  } else {
    const answerText = questionObj.answer || questionObj.model || "";
    const modelWords = answerText.replace(/<[^>]*>/g, '').split(/\s+/);
    modelWords.forEach(w => {
      const cleanW = w.replace(/[^a-zA-Z0-9]/g, '');
      if (cleanW.length > 2) {
        const isNum = !isNaN(cleanW);
        const isCap = cleanW[0] === cleanW[0].toUpperCase() && cleanW[0] !== cleanW[0].toLowerCase();
        if (isNum || isCap) {
          const lower = cleanW.toLowerCase();
          // Skip common words
          const skip = ["the", "and", "one", "this", "that", "was", "for", "with", "from", "after", "israel", "palestine", "arab", "jewish", "egypt", "jordan", "syria", "zionist"];
          if (!skip.includes(lower) && !keywords.includes(cleanW)) {
            keywords.push(cleanW);
          }
        }
      }
    });
  }

  const matchedKeywords = keywords.filter(kw => cleanAns.includes(kw.toLowerCase()));
  const hasKeywords = matchedKeywords.length >= (type === 'consequence' ? 1 : 2);

  // Structural checks
  let scoreRules = [false, false, false, false];
  let feedbackHtml = "";

  if (type === 'consequence') {
    scoreRules[0] = wordCount >= 8;
    scoreRules[1] = hasKeywords;
    scoreRules[2] = hasCausal;
    scoreRules[3] = wordCount >= 30 && matchedConnectives.length >= 1;

    const missed = [];
    if (!scoreRules[0]) missed.push("State a clear, direct consequence at the beginning.");
    if (!scoreRules[1]) missed.push(`Include more specific historical details (e.g., matching keywords like: ${keywords.slice(0, 4).join(', ')})`);
    if (!scoreRules[2]) missed.push("Use causal connectives (e.g., 'resulted in', 'led to', 'consequently') to link your points.");
    if (!scoreRules[3]) missed.push("Expand your explanation to trace the full cause-and-effect chain (aim for at least 30-40 words).");

    if (missed.length === 0) {
      feedbackHtml = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Excellent Critique!</span> Your response meets all mark scheme criteria. It is well-structured, detailed, and utilizes causal links.`;
    } else {
      feedbackHtml = `<strong style="color: var(--accent); display: block; margin-bottom: 6px;"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Feedback & Recommendations:</strong>
      <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        ${missed.map(m => `<li>${m}</li>`).join('')}
      </ul>`;
    }
  } else if (type === 'narrative') {
    scoreRules[0] = wordCount >= 30;
    scoreRules[1] = matchedConnectives.length >= 2;
    scoreRules[2] = matchedKeywords.length >= 3;
    
    const processWords = ["forced", "provoked", "led to", "caused", "resulted in"];
    const matchedProcess = processWords.filter(pw => cleanAns.includes(pw));
    scoreRules[3] = matchedProcess.length >= 1;

    const missed = [];
    if (!scoreRules[0]) missed.push("Expand your narrative to fully cover the chronological sequence of events.");
    if (!scoreRules[1]) missed.push("Clearly link the events using transitional connectives showing how one event triggered the next.");
    if (!scoreRules[2]) missed.push(`Add more precise historical facts (e.g. key terms like: ${keywords.slice(0, 5).join(', ')})`);
    if (!scoreRules[3]) missed.push("Integrate at least one core Edexcel process word (e.g., 'forced', 'provoked', 'resulted in') to elevate your academic tone.");

    if (missed.length === 0) {
      feedbackHtml = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Excellent Critique!</span> Your narrative account effectively links events chronologically and uses solid analytical process terminology.`;
    } else {
      feedbackHtml = `<strong style="color: var(--accent); display: block; margin-bottom: 6px;"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Feedback & Recommendations:</strong>
      <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        ${missed.map(m => `<li>${m}</li>`).join('')}
      </ul>`;
    }
  } else if (type === 'importance') {
    const paragraphs = userAnswer.split(/\n+/).map(p => p.trim()).filter(p => p.length > 20);
    scoreRules[0] = paragraphs.length >= 2;
    scoreRules[1] = matchedKeywords.length >= 3;
    scoreRules[2] = wordCount >= 50 && hasCausal;
    scoreRules[3] = matchedConnectives.length >= 2;

    const missed = [];
    if (!scoreRules[0]) missed.push("Structure your answer into two distinct paragraphs (use double-enter to separate them), each dealing with a different aspect of importance.");
    if (!scoreRules[1]) missed.push(`Include more specific historical facts (e.g., keywords like: ${keywords.slice(0, 5).join(', ')})`);
    if (!scoreRules[2]) missed.push("Explicitly explain the outcomes and 'what difference the event made' rather than just describing the event itself.");
    if (!scoreRules[3]) missed.push("Use multiple analytical connectives (e.g., 'this meant that', 'consequently') to clearly outline the long-term impact.");

    if (missed.length === 0) {
      feedbackHtml = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Excellent Critique!</span> Your response is well-structured in two distinct paragraphs and highlights the historical significance of the event with precise detail.`;
    } else {
      feedbackHtml = `<strong style="color: var(--accent); display: block; margin-bottom: 6px;"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Feedback & Recommendations:</strong>
      <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        ${missed.map(m => `<li>${m}</li>`).join('')}
      </ul>`;
    }
  }

  return { scores: scoreRules, feedback: feedbackHtml, keywords: keywords, matchedKeywords: matchedKeywords };
}

// 7. Bookmarks Deck Rendering
function renderBookmarksView() {
  const container = document.getElementById('bookmarks-list-container');
  container.innerHTML = '';
  
  const bookmarkedQs = state.allQuestions.filter(q => state.bookmarks.includes(q.id));
  
  if (bookmarkedQs.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-star" style="color: var(--scrollbar-thumb);"></i>
        <h3>No bookmarked cards</h3>
        <p>Click the star icon in Accordions or Flashcards to compile a custom deck of hard questions here.</p>
      </div>
    `;
    return;
  }
  
  bookmarkedQs.forEach((q, idx) => {
    const isMastered = !!state.mastery[q.id];
    
    const details = document.createElement('details');
    details.className = 'quiz-card-details';
    
    details.innerHTML = `
      <summary class="quiz-card-summary">
        <div class="summary-content">
          <span class="summary-num">${idx + 1}</span>
          <span class="summary-text">${q.question}</span>
        </div>
        <div class="summary-badges">
          <span class="badge ${q.type === 'standard' ? 'badge-standard' : 'badge-depth'}">${q.type === 'standard' ? 'Standard' : 'Top Tier Trivia'}</span>
          <span class="badge badge-year">${q.year}</span>
          <div class="bookmark-icon-container bookmarked" data-qid="${q.id}" title="Remove Bookmark">
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="mastery-checkbox-container ${isMastered ? 'mastered' : ''}" data-qid="${q.id}" title="Mark as Mastered">
            <i class="fa-solid fa-check"></i>
          </div>
          <i class="fa-solid fa-chevron-down summary-arrow"></i>
        </div>
      </summary>
      <div class="details-content">
        <div class="answer-header">
          <i class="fa-solid fa-circle-check"></i> Correct Key Term
        </div>
        <div class="answer-value">${q.answer}</div>
        <div class="explanation-value">${q.explanation}</div>
      </div>
    `;
    
    details.querySelector('.bookmark-icon-container').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleBookmark(q.id);
      renderBookmarksView(); // Refresh layout immediately
    });
    
    const checkBtn = details.querySelector('.mastery-checkbox-container');
    checkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const nextState = !checkBtn.classList.contains('mastered');
      setMastered(q.id, nextState);
      checkBtn.classList.toggle('mastered', nextState);
      if (nextState) AudioEngine.play('success');
      else AudioEngine.play('click');
    });

    details.addEventListener('toggle', () => {
      if (details.open) {
        AudioEngine.play('flip');
      }
    });
    
    container.appendChild(details);
  });
}

function openVideoModal(src, title) {
  const modal = document.getElementById('video-modal-overlay');
  const iframe = document.getElementById('video-modal-iframe');
  const modalTitle = document.getElementById('video-modal-title');
  
  if (!modal || !iframe || !modalTitle) return;
  
  modalTitle.textContent = title;
  iframe.src = src;
  modal.style.display = 'flex';
  AudioEngine.play('click');
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal-overlay');
  const iframe = document.getElementById('video-modal-iframe');
  
  if (!modal || !iframe) return;
  
  iframe.src = '';
  modal.style.display = 'none';
  AudioEngine.play('click');
}



// --- END OF MODULE views.js ---

// --- START OF MODULE exam.js ---
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

// --- END OF MODULE exam.js ---

// --- START OF MODULE layout.js ---
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

// --- END OF MODULE layout.js ---

// --- START OF MODULE past_papers.js ---
// --- Past Exam Papers Engine ---
function getKeywordsForQuestion(questionObj) {
  if (questionObj.keywords && questionObj.keywords.length > 0) {
    return questionObj.keywords;
  }
  
  const textToScan = (questionObj.question || '') + ' ' + (questionObj.clue || '') + ' ' + (questionObj.answer || questionObj.model || '');
  
  // Extract proper noun phrases (sequences of capitalized words)
  const words = textToScan.match(/(?:[A-Z][a-zA-Z0-9\-]+)(?:\s+[A-Z][a-zA-Z0-9\-]+)*/g) || [];
  
  const uniqueWords = [];
  const ignored = [
    'Explain', 'Consequence', 'One', 'Another', 'Think', 'Also', 'Section', 'Question', 
    'Write', 'Narrative', 'Topic', 'Summer', 'Autumn', 'Winter', 'Spring', 'Year', 
    'Level', 'Point', 'For', 'The', 'In', 'This', 'To', 'And', 'Of', 'With', 'How', 
    'Who', 'What', 'Where', 'Why', 'When', 'Detail', 'Start', 'You', 'Your', 'About', 
    'Are', 'Was', 'Were', 'Is', 'Not', 'Or', 'As', 'At', 'By', 'An', 'It', 'From', 
    'Be', 'They', 'Them', 'Their', 'He', 'She', 'His', 'Her', 'Its', 'But', 'No', 
    'Has', 'Have', 'Had', 'Been', 'Will', 'Would', 'Can', 'Could', 'Should', 'May', 
    'Might', 'Must', 'Choose', 'Select', 'Draft', 'Key', 'Terms', 'Clue', 'Official',
    'Answer', 'Model', 'Section', 'Marks', 'Total'
  ];
  
  words.forEach(w => {
    const cleaned = w.trim().replace(/[.,;:()?!]/g, '');
    if (cleaned.length > 2 && !ignored.includes(cleaned) && !uniqueWords.includes(cleaned)) {
      // Don't add if it's a sub-part of an existing phrase
      if (!uniqueWords.some(existing => existing.includes(cleaned))) {
        uniqueWords.push(cleaned);
      }
    }
  });
  
  // Also scan for predefined critical historical Middle East keywords in lowercase/anycase
  const historicalTerms = [
    "Nakba", "refugee", "West Bank", "Gaza", "partition", "mandate", "Suez", "nationalise",
    "Fedayeen", "Sinai", "Tiran", "Cairo", "Samu", "PLO", "Six Day", "Resolution 242",
    "Three Nos", "Khartoum", "Yom Kippur", "Sadat", "Knesset", "shuttle diplomacy",
    "Camp David", "peace treaty", "Fatah", "Lebanon", "Litani", "Hezbollah", "Intifada",
    "Oslo", "Rabin", "Arafat", "Hamas"
  ];
  
  historicalTerms.forEach(term => {
    if (textToScan.toLowerCase().includes(term.toLowerCase()) && !uniqueWords.some(w => w.toLowerCase().includes(term.toLowerCase()))) {
      uniqueWords.push(term);
    }
  });
  
  return uniqueWords.slice(0, 5); // Max 5 keywords
}

function updateDraftFeedback(qId, value, questionObj) {
  const badge = document.getElementById(`feedback-badge-${qId}`);
  const fill = document.getElementById(`feedback-fill-${qId}`);
  const connTags = document.getElementById(`connective-tags-${qId}`);
  const keyTags = document.getElementById(`keyword-tags-${qId}`);
  const keyRow = document.getElementById(`keyword-feedback-row-${qId}`);
  
  if (!badge || !fill) return;
  
  const text = (value || '').toLowerCase().trim();
  
  // Causal connectives check
  const connectives = ["because", "as a result", "led to", "resulted in", "provoked", "consequently", "enabled", "intensified", "forced", "therefore"];
  const matchedConnectives = connectives.filter(c => text.includes(c));
  
  // Keywords check
  const keywords = getKeywordsForQuestion(questionObj);
  const matchedKeywords = keywords.filter(k => text.includes(k.toLowerCase()));
  
  // Scoring
  const connectivesScore = Math.min(50, matchedConnectives.length * 10);
  const keywordsScore = keywords.length > 0 ? Math.min(50, matchedKeywords.length * (50 / keywords.length)) : 50;
  const totalScore = Math.round(connectivesScore + keywordsScore);
  
  // Update progress bar
  fill.style.width = `${totalScore}%`;
  
  // Update status badge
  badge.className = "feedback-badge";
  if (totalScore <= 20) {
    badge.textContent = "Structure: Drafting";
  } else if (totalScore <= 50) {
    badge.textContent = "Structure: Developing";
    badge.classList.add('status-developing');
  } else if (totalScore <= 80) {
    badge.textContent = "Structure: Strong";
    badge.classList.add('status-strong');
  } else {
    badge.textContent = "Structure: Exam-Ready";
    badge.classList.add('status-outstanding');
  }
  
  // Render connectives pills
  if (connTags) {
    connTags.innerHTML = connectives.map(c => {
      const matched = matchedConnectives.includes(c);
      return `<span class="feedback-tag ${matched ? 'matched' : ''}">${matched ? '✔ ' : ''}${c}</span>`;
    }).join('');
  }
  
  // Render keywords pills
  if (keywords.length > 0) {
    if (keyRow) keyRow.style.display = 'block';
    if (keyTags) {
      keyTags.innerHTML = keywords.map(k => {
        const matched = matchedKeywords.includes(k);
        return `<span class="feedback-tag ${matched ? 'matched' : ''}">${matched ? '✔ ' : ''}${k}</span>`;
      }).join('');
    }
  } else {
    if (keyRow) keyRow.style.display = 'none';
  }
}
function renderPastPapersView() {
  const container = document.getElementById('past-paper-sheet-container');
  if (state.pastPaperSession.activePaperId) {
    renderExamSheet();
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
}

function startPastPaper(paperId) {
  const paper = PAST_PAPERS_DATA.find(p => p.id === paperId);
  if (!paper) return;

  state.pastPaperSession.activePaperId = paperId;
  state.pastPaperSession.activePaperData = paper;
  if (!state.pastPaperSession.answers[paperId]) {
    state.pastPaperSession.answers[paperId] = {};
  }
  
  renderExamSheet();
  document.getElementById('past-paper-sheet-container').style.display = 'block';
}

function generateMockExam() {
  const consequenceKeys = Object.keys(CONSEQUENCE_SKILLS_DATA);
  const randomC1 = consequenceKeys[Math.floor(Math.random() * consequenceKeys.length)];
  const randomC2 = consequenceKeys.filter(k => k !== randomC1)[Math.floor(Math.random() * (consequenceKeys.length - 1))];
  
  const narrativeKeys = Object.keys(NARRATIVE_SKILLS_DATA);
  const randomN = narrativeKeys[Math.floor(Math.random() * narrativeKeys.length)];
  
  const importanceKeys = Object.keys(EXAM_SKILLS_DATA);
  const selectedImp = [];
  while (selectedImp.length < 3) {
    const rKey = importanceKeys[Math.floor(Math.random() * importanceKeys.length)];
    if (!selectedImp.includes(rKey)) {
      selectedImp.push(rKey);
    }
  }

  const paper = {
    id: "mock_random_" + Date.now(),
    title: "Random Mock Exam",
    year: "Mock",
    q1: {
      type: "consequence_split_4",
      question: "Section A: Consequence sub-questions",
      subQuestions: [
        {
          id: randomC1,
          title: `Q1(a): ${CONSEQUENCE_SKILLS_DATA[randomC1].question} (4 marks)`,
          clue: CONSEQUENCE_SKILLS_DATA[randomC1].clue,
          model: CONSEQUENCE_SKILLS_DATA[randomC1].answer
        },
        {
          id: randomC2,
          title: `Q1(b): ${CONSEQUENCE_SKILLS_DATA[randomC2].question} (4 marks)`,
          clue: CONSEQUENCE_SKILLS_DATA[randomC2].clue,
          model: CONSEQUENCE_SKILLS_DATA[randomC2].answer
        }
      ]
    },
    q2: {
      type: "narrative",
      question: NARRATIVE_SKILLS_DATA[randomN].question + " (8 marks)",
      stimulus: NARRATIVE_SKILLS_DATA[randomN].events.slice(0, 2),
      clue: "Verify the correct chronological order, then write the narrative. Integrate analytical process words (intensified, provoked, resulted in, enabled).",
      model: NARRATIVE_SKILLS_DATA[randomN].model
    },
    q3: {
      type: "importance_choice",
      question: "Explain two of the following: (16 marks)",
      choices: selectedImp.map((key, idx) => {
        const letter = ['a', 'b', 'c'][idx];
        return {
          id: key,
          title: `The importance of ${EXAM_SKILLS_DATA[key].question.replace("Explain the importance of ", "").replace(" for ", " for the ").replace("?", "")}.`,
          clue: `${EXAM_SKILLS_DATA[key].clue1} ${EXAM_SKILLS_DATA[key].clue2}`,
          model: EXAM_SKILLS_DATA[key].answer
        };
      })
    }
  };

  state.pastPaperSession.activePaperId = paper.id;
  state.pastPaperSession.activePaperData = paper;
  state.pastPaperSession.answers[paper.id] = {};

  renderExamSheet();
  document.getElementById('past-paper-sheet-container').style.display = 'block';
}

function togglePastClue(qId) {
  const box = document.getElementById(`past-clue-box-${qId}`);
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = isHidden ? 'block' : 'none';
  AudioEngine.play(isHidden ? 'flip' : 'click');
}

function togglePastAnswer(qId) {
  const box = document.getElementById(`past-answer-box-${qId}`);
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = isHidden ? 'block' : 'none';
  AudioEngine.play(isHidden ? 'success' : 'click');
}

function togglePastQuestionComplete(qId, checked) {
  const session = state.pastPaperSession;
  if (checked) {
    if (!session.completedQuestions.includes(qId)) {
      session.completedQuestions.push(qId);
      AudioEngine.play('success');
    }
  } else {
    const idx = session.completedQuestions.indexOf(qId);
    if (idx > -1) {
      session.completedQuestions.splice(idx, 1);
      AudioEngine.play('click');
    }
  }
  saveProgress();
}

function renderExamSheet() {
  const session = state.pastPaperSession;
  const paper = session.activePaperData;
  const container = document.getElementById('past-paper-sheet-container');
  if (!paper) return;

  const questionsList = [];
  if (paper.q1) {
    if (paper.q1.type === 'consequence_split_4') {
      questionsList.push(paper.q1.subQuestions[0].id, paper.q1.subQuestions[1].id);
    } else if (paper.q1.type === 'consequence_8') {
      questionsList.push(paper.id + '_q1');
    }
  }
  if (paper.q2 && paper.q2.type !== 'none') {
    questionsList.push(paper.id + '_q2');
  }
  if (paper.q3 && paper.q3.type !== 'none') {
    paper.q3.choices.forEach(c => questionsList.push(c.id));
  }

  const completedCount = questionsList.filter(id => session.completedQuestions.includes(id)).length;
  const pct = questionsList.length > 0 ? Math.round((completedCount / questionsList.length) * 100) : 0;

  let html = `
    <div class="exam-sheet">
      <div class="exam-sheet-header">
        <h3>${paper.title}</h3>
        <div class="exam-metadata">
          <span><i class="fa-solid fa-calendar"></i> Year: ${paper.year}</span>
          <span><i class="fa-solid fa-check-double"></i> Complete: ${completedCount}/${questionsList.length} (${pct}%)</span>
        </div>
      </div>
  `;

  if (paper.q1) {
    html += `<div class="exam-sheet-section">`;
    if (paper.q1.type === 'consequence_split_4') {
      html += `<h4>Section A: Consequence Questions (8 marks total)</h4>`;
      paper.q1.subQuestions.forEach(sq => {
        html += renderPastQuestionMarkup(sq.id, sq.title, sq.clue, sq.model, 4);
      });
    } else if (paper.q1.type === 'consequence_8') {
      html += `<h4>Section A: Consequence Question (8 marks)</h4>`;
      html += renderPastQuestionMarkup(paper.id + '_q1', paper.q1.question, paper.q1.clue, paper.q1.model, 8);
    } else {
      html += `<h4>Section A: Consequence Question</h4><p style="font-style: italic; color: var(--text-muted);">${paper.q1.question}</p>`;
    }
    html += `</div>`;
  }

  if (paper.q2) {
    html += `<div class="exam-sheet-section">`;
    if (paper.q2.type === 'narrative') {
      html += `<h4>Section B: Narrative Account (8 marks)</h4>`;
      html += renderPastQuestionMarkup(paper.id + '_q2', paper.q2.question, paper.q2.clue, paper.q2.model, 8, paper.q2.stimulus);
    } else {
      html += `<h4>Section B: Narrative Account</h4><p style="font-style: italic; color: var(--text-muted);">${paper.q2.question}</p>`;
    }
    html += `</div>`;
  }

  if (paper.q3) {
    html += `<div class="exam-sheet-section">`;
    if (paper.q3.type === 'importance_choice') {
      html += `<h4>Section C: Importance Choice (16 marks total, answer TWO of three)</h4>`;
      html += `<p style="font-size: 0.9rem; margin-bottom: 12px; font-weight: bold; color: var(--primary);">Choose any two questions to answer:</p>`;
      paper.q3.choices.forEach((choice, idx) => {
        const indexStr = ['a', 'b', 'c'][idx];
        const titleText = `Q3(${indexStr}): ${choice.title} (8 marks)`;
        html += renderPastQuestionMarkup(choice.id, titleText, choice.clue, choice.model, 8);
      });
    } else {
      html += `<h4>Section C: Importance Question</h4><p style="font-style: italic; color: var(--text-muted);">${paper.q3.question}</p>`;
    }
    html += `</div>`;
  }

  html += `
      <div style="display: flex; justify-content: flex-end; margin-top: 16px;">
        <button class="btn-secondary" id="btn-close-exam-sheet" style="font-weight: 600;">
          Close Paper & Save Draft
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;

  questionsList.forEach(qId => {
    // Find the question object in the active paper
    let qObj = null;
    if (paper.q1) {
      if (paper.q1.type === 'consequence_split_4') {
        qObj = paper.q1.subQuestions.find(sq => sq.id === qId);
      } else if (paper.id + '_q1' === qId) {
        qObj = paper.q1;
      }
    }
    if (!qObj && paper.q2 && paper.id + '_q2' === qId) {
      qObj = paper.q2;
    }
    if (!qObj && paper.q3 && paper.q3.type === 'importance_choice') {
      qObj = paper.q3.choices.find(c => c.id === qId);
    }

    const textarea = document.getElementById(`past-textarea-${qId}`);
    if (textarea && qObj) {
      textarea.value = session.answers[paper.id][qId] || '';
      updateDraftFeedback(qId, textarea.value, qObj);
      textarea.addEventListener('input', (e) => {
        session.answers[paper.id][qId] = e.target.value;
        updateDraftFeedback(qId, e.target.value, qObj);
        saveProgress();
      });
    }

    const chk = document.getElementById(`past-chk-${qId}`);
    if (chk) {
      chk.checked = session.completedQuestions.includes(qId);
      chk.addEventListener('change', (e) => {
        togglePastQuestionComplete(qId, e.target.checked);
        renderExamSheetStats();
      });
    }

    const btnClue = document.getElementById(`past-btn-clue-${qId}`);
    if (btnClue) {
      btnClue.addEventListener('click', () => togglePastClue(qId));
    }

    const btnCheck = document.getElementById(`past-btn-check-${qId}`);
    if (btnCheck) {
      btnCheck.addEventListener('click', () => togglePastAnswer(qId));
    }
  });

  document.getElementById('btn-close-exam-sheet').addEventListener('click', () => {
    AudioEngine.play('click');
    state.pastPaperSession.activePaperId = null;
    state.pastPaperSession.activePaperData = null;
    document.getElementById('past-paper-sheet-container').style.display = 'none';
    document.getElementById('past-paper-select').value = '';
  });
}

function renderPastQuestionMarkup(qId, questionText, clue, modelAnswer, marks, stimulus = null) {
  let stimulusHTML = '';
  if (stimulus && stimulus.length > 0) {
    stimulusHTML = `
      <div class="stimulus-container">
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); display: flex; align-items: center;">Stimulus:</span>
        ${stimulus.map(s => `<span class="stimulus-item">${s}</span>`).join('')}
      </div>
    `;
  }

  return `
    <div class="exam-question-block" id="exam-q-block-${qId}">
      <div class="exam-question-header">
        <h5 class="exam-question-title">${questionText}</h5>
        <span class="exam-question-marks">${marks} Marks</span>
      </div>
      ${stimulusHTML}
      <textarea class="exam-textarea" id="past-textarea-${qId}" placeholder="Draft your answer here..." style="min-height: 120px;"></textarea>
      
      <!-- Live feedback card -->
      <div class="draft-feedback-card" id="draft-feedback-${qId}">
        <div class="feedback-stats">
          <div class="feedback-badge" id="feedback-badge-${qId}">Structure: Drafting</div>
          <div class="feedback-progress-bar">
            <div class="feedback-progress-fill" id="feedback-fill-${qId}" style="width: 0%;"></div>
          </div>
        </div>
        <div class="feedback-checklist">
          <div class="feedback-item">
            <strong>Causal Connectives:</strong>
            <div class="feedback-tags" id="connective-tags-${qId}"></div>
          </div>
          <div class="feedback-item" id="keyword-feedback-row-${qId}">
            <strong>Key Terms:</strong>
            <div class="feedback-tags" id="keyword-tags-${qId}"></div>
          </div>
        </div>
      </div>

      <div class="exam-sheet-actions">
        <button class="btn-secondary" id="past-btn-clue-${qId}" style="flex: 1; min-width: 130px; font-size: 0.85rem; padding: 8px 12px;">
          <i class="fa-solid fa-lightbulb"></i> Educator Clue
        </button>
        <button class="btn-primary" id="past-btn-check-${qId}" style="flex: 2; min-width: 180px; font-size: 0.85rem; padding: 8px 12px;">
          <i class="fa-solid fa-clipboard-check"></i> Self-Check Answer
        </button>
      </div>

      <div class="past-clue-box" id="past-clue-box-${qId}" style="display: none;">
        <strong>Clue:</strong> ${clue}
      </div>

      <div class="past-model-answer" id="past-answer-box-${qId}" style="display: none;">
        <div class="past-model-answer-title"><i class="fa-solid fa-star"></i> Level 3/4 Model Answer</div>
        <div class="past-model-answer-content">${modelAnswer}</div>
      </div>

      <label class="completion-check-row">
        <input type="checkbox" id="past-chk-${qId}">
        Mark this question as complete
      </label>
    </div>
  `;
}

function renderExamSheetStats() {
  const session = state.pastPaperSession;
  const paper = session.activePaperData;
  if (!paper) return;

  const questionsList = [];
  if (paper.q1) {
    if (paper.q1.type === 'consequence_split_4') {
      questionsList.push(paper.q1.subQuestions[0].id, paper.q1.subQuestions[1].id);
    } else if (paper.q1.type === 'consequence_8') {
      questionsList.push(paper.id + '_q1');
    }
  }
  if (paper.q2 && paper.q2.type !== 'none') {
    questionsList.push(paper.id + '_q2');
  }
  if (paper.q3 && paper.q3.type !== 'none') {
    paper.q3.choices.forEach(c => questionsList.push(c.id));
  }

  const completedCount = questionsList.filter(id => session.completedQuestions.includes(id)).length;
  const pct = questionsList.length > 0 ? Math.round((completedCount / questionsList.length) * 100) : 0;

  const metaEl = document.querySelector('.exam-sheet-header .exam-metadata');
  if (metaEl) {
    metaEl.innerHTML = `
      <span><i class="fa-solid fa-calendar"></i> Year: ${paper.year}</span>
      <span><i class="fa-solid fa-check-double"></i> Complete: ${completedCount}/${questionsList.length} (${pct}%)</span>
    `;
  }
}

const CRISIS_SCENARIOS = [
  {
    text: "FLASHPOINT I [6 Oct 1973]: Egypt and Syria have launched a surprise assault on Yom Kippur. The Pentagon reports heavy armor losses. The Joint Chiefs want to send tanks immediately, but doing so might upset the delicate balance of global energy stocks.",
    choices: [
      {
        text: "DENY KNOWLEDGE: Inform Prime Minister Golda Meir that the US Switchboard is down for scheduled maintenance until next Tuesday.",
        effects: { tension: -10, oil: +15, arab: +10, israel: -25 }
      },
      {
        text: "SABOTAGE NEGOTIATIONS: Order a massive, highly visible military transport airlift (Nickel Grass) directly into the warzone to see how much smoke the Kremlin breathes.",
        effects: { tension: +25, oil: -20, arab: -15, israel: +30 }
      }
    ]
  },
  {
    text: "FLASHPOINT II [17 Oct 1973]: King Faisal and OAPEC are furious about the US airlift. They threaten to cut off the West's petroleum supply entirely, plunging civilization into a pre-industrial horse-and-carriage era.",
    choices: [
      {
        text: "PANIC BUYING: Ration domestic fuel to 3 drops per citizen. Mandate that all American commuters must roller-skate to work to preserve industrial vitality.",
        effects: { tension: -5, oil: +25, arab: +15, israel: -10 }
      },
      {
        text: "DOUBLE DOWN: Inform OPEC that we have invented a secret nuclear-powered automobile and do not require their organic dinosaur fluids anyway.",
        effects: { tension: +15, oil: -35, arab: -20, israel: +5 }
      }
    ]
  },
  {
    text: "FLASHPOINT III [22 Oct 1973]: UN Resolution 338 demands a truce, but Israel's General Sharon has fully encircled Egypt's Third Army. Leonid Brezhnev sends an angry telegram threatening to deploy Soviet paratroopers to Cairo.",
    choices: [
      {
        text: "DEFCON 3 BLUFF: Crank the global military alert scale to DEFCON 3. Order strategic bombers to circle the North Pole while playing high-volume jazz over the radio frequencies to confuse Russian radar.",
        effects: { tension: +35, oil: -10, arab: -15, israel: +25 }
      },
      {
        text: "DIPLOMATIC SURRENDER: Apologize profusely, demand Israel surrender the Sinai, and offer Brezhnev a signed portrait of President Nixon as a peace offering.",
        effects: { tension: -30, oil: +10, arab: +20, israel: -35 }
      }
    ]
  }
];

// --- END OF MODULE past_papers.js ---

// --- START OF MODULE games.js ---
function formatDoomsdayTime(pct) {
  if (pct >= 90) return '11:59 PM (ALARM)';
  if (pct <= 10) return '11:40 PM (ICE AGE)';
  let mins = 60 - Math.floor(pct / 2);
  return `11:${mins < 10 ? '0' : ''}${mins} PM`;
}

function getCrisisColor(value) {
  if (value > 80 || value < 20) return 'var(--accent)';
  if (value > 65 || value < 35) return '#f59e0b';
  return 'var(--primary)';
}

function initCrisisGame() {
  state.crisisGameSession.currentStep = 0;
  state.crisisGameSession.metrics = { tension: 50, oil: 50, arab: 50, israel: 50 };
  
  const panel = document.getElementById('crisis-game-panel');
  if (panel) {
    panel.innerHTML = `
      <div class="crisis-header">
        <h2 class="crisis-title">STRATEGIC AIR COMMAND: 1973</h2>
        <p class="crisis-subtitle">CLASSIFICATION: TOP SECRET // NOFORN // KISSINGER EYE ONLY</p>
      </div>

      <div class="meters-grid">
        <div class="meter-card">
          <div class="meter-label"><span>DOOMSDAY CLOCK</span><span id="val-tension">11:50 PM</span></div>
          <div class="meter-bg"><div id="bar-tension" class="meter-fill"></div></div>
        </div>
        <div class="meter-card">
          <div class="meter-label"><span>OIL LEVERAGE RATIO</span><span id="val-oil">50%</span></div>
          <div class="meter-bg"><div id="bar-oil" class="meter-fill"></div></div>
        </div>
        <div class="meter-card">
          <div class="meter-label"><span>SADAT ALLIANCE UNITY</span><span id="val-arab">50%</span></div>
          <div class="meter-bg"><div id="bar-arab" class="meter-fill"></div></div>
        </div>
        <div class="meter-card">
          <div class="meter-label"><span>MINESHAFTS RESERVED</span><span id="val-israel">50%</span></div>
          <div class="meter-bg"><div id="bar-israel" class="meter-fill"></div></div>
        </div>
      </div>

      <div class="scenario-box" style="margin-bottom: 24px;">
        <p id="crisis-scenario-text" class="scenario-text"></p>
      </div>

      <div class="choices-container" id="crisis-choices-box"></div>
    `;
  }
  
  updateCrisisUI();
  renderCrisisScenario();
}

function updateCrisisUI() {
  const session = state.crisisGameSession;
  
  const tensionEl = document.getElementById('val-tension');
  const tensionBar = document.getElementById('bar-tension');
  if (tensionEl) tensionEl.innerText = formatDoomsdayTime(session.metrics.tension);
  if (tensionBar) {
    tensionBar.style.width = `${session.metrics.tension}%`;
    tensionBar.style.backgroundColor = getCrisisColor(session.metrics.tension);
  }

  const metrics = ['oil', 'arab', 'israel'];
  metrics.forEach(m => {
    const val = session.metrics[m];
    const valEl = document.getElementById(`val-${m}`);
    const barEl = document.getElementById(`bar-${m}`);
    if (valEl) valEl.innerText = `${val}%`;
    if (barEl) {
      barEl.style.width = `${val}%`;
      barEl.style.backgroundColor = getCrisisColor(val);
    }
  });
}

function checkCrisisGameOver() {
  const m = state.crisisGameSession.metrics;
  if (m.tension >= 100) return "MUTUAL ASSURED DESTRUCTION VALIDATED: The Doomsday Clock strikes midnight. Strategic missiles launched. There is no recovery program for Paper 2.";
  if (m.tension <= 0) return "GEOPOLITICAL ERASURE: The US surrenders global relevance. Washington is converted into a collective wheat farm for the Eastern Bloc.";
  if (m.israel <= 0) return "STRATEGIC SURRENDER: The Israeli front collapses completely. The Joint Chiefs must now book alternative vacation properties.";
  if (m.oil <= 0) return "ECONOMIC EXTINCTION: Global oil drops to zero. Wall Street closes forever; the President is traded for three barrels of crude and an old bicycle.";
  if (m.arab <= 0) return "TOTAL REGIONAL ANARCHY: The Arab Alliance shatters into a billion decentralized factions, making subsequent exam answers impossibly complicated.";
  return null;
}

function selectCrisisChoice(index) {
  const session = state.crisisGameSession;
  const choice = CRISIS_SCENARIOS[session.currentStep].choices[index];
  
  for (let key in choice.effects) {
    session.metrics[key] = Math.max(0, Math.min(100, session.metrics[key] + choice.effects[key]));
  }
  
  updateCrisisUI();
  const failMessage = checkCrisisGameOver();
  
  if (failMessage) {
    AudioEngine.play('click');
    endCrisisGame(failMessage, false);
    return;
  }

  session.currentStep++;
  if (session.currentStep >= CRISIS_SCENARIOS.length) {
    AudioEngine.play('success');
    endCrisisGame("CONGRATULATIONS: You successfully completed the 1973 October Crisis without triggering an accidental global nuclear holocaust. The Prime Minister is marginally pleased.", true);
  } else {
    AudioEngine.play('flip');
    renderCrisisScenario();
  }
}

function renderCrisisScenario() {
  const session = state.crisisGameSession;
  const current = CRISIS_SCENARIOS[session.currentStep];
  const textEl = document.getElementById('crisis-scenario-text');
  const boxEl = document.getElementById('crisis-choices-box');
  
  if (textEl) textEl.innerText = current.text;
  if (boxEl) {
    boxEl.innerHTML = '';
    current.choices.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerText = c.text;
      btn.onclick = () => selectCrisisChoice(idx);
      boxEl.appendChild(btn);
    });
  }
}

function endCrisisGame(msg, isWin) {
  const panel = document.getElementById('crisis-game-panel');
  if (!panel) return;
  
  panel.innerHTML = `
    <div class="game-over-screen">
      <div class="game-over-title ${isWin ? 'win' : 'fail'}">${isWin ? 'WAR COMPLETED' : 'GLOBAL TERMINATION'}</div>
      <p class="scenario-text" style="margin-bottom: 20px; max-width: 500px; color: var(--accent);">${msg}</p>
      <div class="history-link-box">
        <strong>MEMORANDUM FOR EDEXCEL REVISION:</strong> Despite the absurdity, remember the real historical anchors here: the sheer risk of the US airlift (**Operation Nickel Grass**), the crippling weaponization of fuel via the **OPEC Embargo**, and the terrifying geopolitical pressure that led directly to **UN Resolution 338**.
      </div>
      <button class="restart-btn" id="btn-restart-crisis">RE-INITIALIZE COMPUTER</button>
    </div>
  `;
  
  document.getElementById('btn-restart-crisis').addEventListener('click', () => {
    AudioEngine.play('click');
    initCrisisGame();
  });
}

const TUG_HISTORICAL_POOL = [
  { text: "1947: The UN votes on the Partition Plan (Resolution 181) to divide Palestine.", type: "deescalation" },
  { text: "1948: David Ben-Gurion officially proclaims the establishment of the State of Israel.", type: "escalation" },
  { text: "1956: President Nasser nationalises the Suez Canal Company.", type: "escalation" },
  { text: "1967: Israel launches preemptive air strikes destroying the Egyptian air force (Six-Day War).", type: "escalation" },
  { text: "1967: The UN Security Council passes Resolution 242 introducing 'Land for Peace'.", type: "deescalation" },
  { text: "1970: King Hussein orders the military expulsion of the PLO from Jordan (Black September).", type: "escalation" },
  { text: "1973: Egypt and Syria launch a coordinated surprise assault on the festival of Yom Kippur.", type: "escalation" },
  { text: "1978: Anwar Sadat and Menachem Begin sign the Camp David Accords.", type: "deescalation" },
  { text: "1987: The First Intifada breaks out in the Gaza Strip and West Bank.", type: "escalation" },
  { text: "1993: Yitzhak Rabin and Yasser Arafat shake hands on the White House lawn over the Oslo I Accord.", type: "deescalation" },
  { text: "1950: Israel passes the Law of Return, granting Jews worldwide the right to immigrate.", type: "escalation" },
  { text: "1979: The formal Egypt-Israel Peace Treaty is signed in Washington DC.", type: "deescalation" }
];

function initTugGame() {
  if (state.tugGameSession.timeoutId) {
    clearTimeout(state.tugGameSession.timeoutId);
    state.tugGameSession.timeoutId = null;
  }

  state.tugGameSession.score = 0;
  state.tugGameSession.streak = 0;
  state.tugGameSession.defcon = 5;
  state.tugGameSession.gameEvents = [...TUG_HISTORICAL_POOL].sort(() => Math.random() - 0.5);

  const panel = document.getElementById('tug-game-panel');
  if (panel) {
    panel.innerHTML = `
      <div class="game-header">
        <h2 class="game-title">CHRONOLOGICAL TUG-OF-WAR</h2>
        <div style="font-size: 0.75rem; color: #22c55e; margin-top: 4px; font-weight: bold; letter-spacing: 0.05em;">OPERATION: TIMELINE INTERCEPT</div>
      </div>

      <div class="stats-banner">
        <div>INTERCEPTS SECURED: <span id="stat-score">0</span></div>
        <div>STREAK: <span id="stat-streak">0</span></div>
        <div>SECURITY LEVEL: <span id="stat-lives">DEFCON 5</span></div>
      </div>

      <div class="intercept-card-zone">
        <div class="intercept-label">Incoming Telemetry Intercept</div>
        <p id="event-display" class="event-text">INITIALIZING TIMELINE RADAR...</p>
      </div>

      <div class="control-grid">
        <button class="action-btn btn-escalate" id="btn-escalate">◄ ESCALATION (Conflict)</button>
        <button class="action-btn btn-deescalate" id="btn-deescalate">DE-ESCALATION (Peace) ►</button>
      </div>

      <div id="feedback-display" class="feedback-overlay"></div>
    `;

    document.getElementById('btn-escalate').addEventListener('click', () => processTugIntercept('escalation'));
    document.getElementById('btn-deescalate').addEventListener('click', () => processTugIntercept('deescalation'));
  }

  updateTugUI();
  nextTugEvent();
}

function updateTugUI() {
  const session = state.tugGameSession;
  const scoreEl = document.getElementById('stat-score');
  const streakEl = document.getElementById('stat-streak');
  const livesEl = document.getElementById('stat-lives');

  if (scoreEl) scoreEl.innerText = session.score;
  if (streakEl) streakEl.innerText = session.streak;
  if (livesEl) {
    livesEl.innerText = `DEFCON ${session.defcon}`;
    livesEl.className = "";
    if (session.defcon === 2) {
      livesEl.classList.add('alarm-text');
      livesEl.style.color = "#f97316";
    } else if (session.defcon === 1) {
      livesEl.classList.add('alarm-text');
      livesEl.style.color = "#ef4444";
    } else {
      livesEl.style.color = "#22c55e";
    }
  }
}

function nextTugEvent() {
  if (state.tugGameSession.timeoutId) {
    clearTimeout(state.tugGameSession.timeoutId);
    state.tugGameSession.timeoutId = null;
  }

  if (state.currentView !== 'tug-game') {
    return;
  }

  const session = state.tugGameSession;
  if (session.gameEvents.length === 0) {
    endTugGame(true);
    return;
  }

  const btnEsc = document.getElementById('btn-escalate');
  const btnDeesc = document.getElementById('btn-deescalate');
  if (btnEsc) btnEsc.disabled = false;
  if (btnDeesc) btnDeesc.disabled = false;

  session.currentEvent = session.gameEvents.pop();
  
  const eventEl = document.getElementById('event-display');
  const feedbackEl = document.getElementById('feedback-display');
  if (eventEl) eventEl.innerText = session.currentEvent.text;
  if (feedbackEl) feedbackEl.innerText = "";
}

function processTugIntercept(playerChoice) {
  const session = state.tugGameSession;
  const feedback = document.getElementById('feedback-display');
  
  const btnEsc = document.getElementById('btn-escalate');
  const btnDeesc = document.getElementById('btn-deescalate');
  if (btnEsc) btnEsc.disabled = true;
  if (btnDeesc) btnDeesc.disabled = true;

  if (playerChoice === session.currentEvent.type) {
    session.score += 10 + (session.streak * 2);
    session.streak++;
    AudioEngine.play('success');
    if (feedback) {
      feedback.style.color = "#22c55e";
      feedback.innerText = "✓ INTERCEPT VALIDATED: DATA ALIGNED CORRECTLY.";
    }
  } else {
    session.streak = 0;
    session.defcon--;
    AudioEngine.play('fail');
    if (feedback) {
      feedback.style.color = "#ef4444";
      feedback.innerText = "✗ SECURITY BREACH: Misclassified timeline vector.";
    }
    
    if (session.defcon <= 1) {
      updateTugUI();
      endTugGame(false);
      return;
    }
  }

  updateTugUI();
  state.tugGameSession.timeoutId = setTimeout(nextTugEvent, 900);
}

function endTugGame(isWin) {
  if (state.tugGameSession.timeoutId) {
    clearTimeout(state.tugGameSession.timeoutId);
    state.tugGameSession.timeoutId = null;
  }

  const panel = document.getElementById('tug-game-panel');
  if (!panel) return;

  AudioEngine.play(isWin ? 'cheer' : 'fail');

  if (isWin) {
    panel.innerHTML = `
      <div style="padding: 20px 0;">
        <h3 style="color:#22c55e; font-size:1.8rem; margin-bottom:10px; font-weight:800; font-family:'Courier New', Courier, monospace;">TIMELINE RESTORED</h3>
        <p style="color:#fff; line-height: 1.5; font-size: 0.95rem;">Excellent processing speed. You have mapped the dialectical rhythm of Paper 2 perfectly.</p>
        <div class="history-box">
          <strong>Narrative Architecture Note:</strong> Notice how periods of explosive escalation (1948, 1967, 1973) are consistently countered by fragile superpower-brokered de-escalation vectors (Resolution 242, Camp David, Oslo). Remembering this oscillation helps structure any <strong>8-mark Narrative Account</strong> question.
        </div>
        <button class="restart-btn" id="btn-restart-tug">RELOAD SIMULATOR</button>
      </div>
    `;
  } else {
    panel.innerHTML = `
      <div style="padding: 20px 0;">
        <h3 style="color:#ef4444; font-size:1.8rem; margin-bottom:10px; font-weight:800; font-family:'Courier New', Courier, monospace;">SYSTEM LOCKDOWN</h3>
        <p style="color:#fff; line-height: 1.5; font-size: 0.95rem;">DEFCON 1 reached. The timeline has collapsed into unresolvable chronological anomalies.</p>
        <div class="history-box">
          <strong>Review Vector:</strong> Make sure you aren't confusing structural flashpoints with diplomacy. For example, sorting the <em>Suez Crisis</em> or <em>First Intifada</em> as de-escalation will consistently compromise your essay structures.
        </div>
        <button class="restart-btn" id="btn-restart-tug">RE-INITIALIZE RADAR</button>
      </div>
    `;
  }

  document.getElementById('btn-restart-tug').addEventListener('click', () => {
    AudioEngine.play('click');
    initTugGame();
  });
}

const jswKeys = {};
window.addEventListener("keydown", e => {
  if (state.currentView === 'jsw-game') {
    const keysToPrevent = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"];
    if (keysToPrevent.includes(e.code)) {
      e.preventDefault();
    }
  }
  jswKeys[e.code] = true;
});
window.addEventListener("keyup", e => {
  jswKeys[e.code] = false;
});

function initJswGame() {
  const session = state.jswGameSession;
  session.score = 0;
  session.lives = 3;
  session.isGameOver = false;
  session.isGameWon = false;
  
  session.player.x = 50;
  session.player.y = 200;
  session.player.vx = 0;
  session.player.vy = 0;
  session.player.isJumping = false;

  session.items.forEach(i => i.collected = false);

  session.hazards[0].x = 200;
  session.hazards[0].vx = 2;
  session.hazards[1].x = 150;
  session.hazards[1].vx = 1.5;

  const scoreEl = document.getElementById("jsw-score");
  const itemsEl = document.getElementById("jsw-items");
  const livesEl = document.getElementById("jsw-lives");
  const reviewEl = document.getElementById("jsw-review");

  if (scoreEl) scoreEl.innerText = "00000";
  if (itemsEl) itemsEl.innerText = "4";
  if (livesEl) livesEl.innerText = "★★★";
  if (reviewEl) reviewEl.innerHTML = `<strong>INTELLIGENCE FEED:</strong> Collect the 4 floating white spec dispatch cubes to decrypt critical Paper 2 data files. Avoid moving hazards and structural dead zones.`;

  startJswLoop();
}

function stopJswLoop() {
  state.jswGameSession.loopActive = false;
}

function startJswLoop() {
  if (state.jswGameSession.loopActive) return;
  state.jswGameSession.loopActive = true;
  requestAnimationFrame(jswGameLoop);
}

function jswGameLoop() {
  const session = state.jswGameSession;
  if (!session.loopActive || state.currentView !== 'jsw-game') {
    session.loopActive = false;
    return;
  }
  updateJswGame();
  drawJswGame();
  requestAnimationFrame(jswGameLoop);
}

function updateJswGame() {
  const session = state.jswGameSession;
  const player = session.player;

  if (session.isGameOver || session.isGameWon) {
    if (jswKeys["Space"]) {
      AudioEngine.play('click');
      initJswGame();
    }
    return;
  }

  if (jswKeys["KeyA"] || jswKeys["ArrowLeft"]) player.vx = -3;
  else if (jswKeys["KeyD"] || jswKeys["ArrowRight"]) player.vx = 3;
  else player.vx = 0;

  if ((jswKeys["Space"] || jswKeys["ArrowUp"] || jswKeys["KeyW"]) && !player.isJumping) {
    player.vy = -7.5;
    player.isJumping = true;
    AudioEngine.play('click');
  }

  player.vy += 0.4;
  player.x += player.vx;
  player.y += player.vy;

  player.isJumping = true;
  for (let plat of session.platforms) {
    if (player.x < plat.x + plat.width &&
        player.x + player.width > plat.x &&
        player.y < plat.y + plat.height &&
        player.y + player.height > plat.y) {
        
      if (player.vy > 0 && player.y + player.height - player.vy <= plat.y + 4) {
        player.y = plat.y - player.height;
        player.vy = 0;
        player.isJumping = false;
      }
    }
  }

  if (player.x < 0) player.x = 0;
  if (player.x + player.width > 600) player.x = 600 - player.width;

  if (player.y > 300) {
    handleJswDeath();
    return;
  }

  for (let haz of session.hazards) {
    haz.x += haz.vx;
    if (haz.x > haz.rangeMax || haz.x < haz.rangeMin) {
      haz.vx *= -1;
    }

    if (player.x < haz.x + haz.width &&
        player.x + player.width > haz.x &&
        player.y < haz.y + haz.height &&
        player.y + player.height > haz.y) {
      handleJswDeath();
      return;
    }
  }

  for (let item of session.items) {
    if (!item.collected &&
        player.x < item.x + 12 && player.x + player.width > item.x &&
        player.y < item.y + 12 && player.y + player.height > item.y) {
        
      item.collected = true;
      session.score += 250;
      AudioEngine.play('success');
      
      const scoreEl = document.getElementById("jsw-score");
      const reviewEl = document.getElementById("jsw-review");
      const itemsEl = document.getElementById("jsw-items");
      
      if (scoreEl) scoreEl.innerText = String(session.score).padStart(5, '0');
      if (reviewEl) reviewEl.innerHTML = `<strong>DECRYPTED DATA:</strong> ${item.spec}`;
      
      const remaining = session.items.filter(i => !i.collected).length;
      if (itemsEl) itemsEl.innerText = remaining;

      if (remaining === 0) {
        handleJswVictory();
        return;
      }
    }
  }
}

function handleJswDeath() {
  const session = state.jswGameSession;
  session.lives--;
  
  const livesEl = document.getElementById("jsw-lives");
  if (livesEl) livesEl.innerText = "★".repeat(session.lives).padEnd(3, ' ');
  
  session.player.x = 50;
  session.player.y = 200;
  session.player.vx = 0;
  session.player.vy = 0;

  if (session.lives <= 0) {
    AudioEngine.play('fail');
    session.isGameOver = true;
  } else {
    AudioEngine.play('fail');
  }
}

function handleJswVictory() {
  const session = state.jswGameSession;
  AudioEngine.play('cheer');
  session.isGameWon = true;
}

function drawJswGame() {
  const canvas = document.getElementById("jswCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const session = state.jswGameSession;
  const player = session.player;

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let plat of session.platforms) {
    ctx.fillStyle = plat.color;
    ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.strokeRect(plat.x, plat.y, plat.width, plat.height);
  }

  for (let item of session.items) {
    if (!item.collected) {
      ctx.fillStyle = Math.floor(Date.now() / 200) % 2 === 0 ? "#ffffff" : "#ffff00";
      ctx.fillRect(item.x, item.y, 10, 10);
    }
  }

  for (let haz of session.hazards) {
    ctx.fillStyle = haz.color;
    ctx.font = "bold 14px Courier New";
    ctx.fillText(haz.label, haz.x, haz.y + 12);
  }

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(player.x - 2, player.y, player.width + 4, 4);

  if (session.isGameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ef4444";
    ctx.font = "bold 22px Courier New";
    ctx.fillText("GAME OVER: TIMELINE DESTABILIZED", 90, 110);
    ctx.fillStyle = "#ffff00";
    ctx.font = "14px Courier New";
    ctx.fillText("The Big Board has gone dark.", 180, 150);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px Courier New";
    ctx.fillText("PRESS [SPACE] TO RE-INITIALIZE COMPUTER", 130, 200);
  } else if (session.isGameWon) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#22c55e";
    ctx.font = "bold 22px Courier New";
    ctx.fillText("GEOPOLITICAL ORDER RESTORED!", 110, 110);
    ctx.fillStyle = "#00ffff";
    ctx.font = "14px Courier New";
    ctx.fillText("All dispatches successfully decrypted.", 140, 150);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px Courier New";
    ctx.fillText("PRESS [SPACE] TO RE-START RADAR", 170, 200);
  }
}

const PRACTICE_ROOM_DATA = [
  {
    id: 'practice_1',
    subtopicId: 'subtopic_1_1',
    question: "Explain the importance of the King David Hotel Bombing (1946) for the British withdrawal from Palestine.",
    rawAnswer: 'In July 1946, the Jewish paramilitary group <span class="exam-error-span" data-error-idx="0">Haganah</span> blew up the King David Hotel in Jerusalem. This building was used as the <span class="exam-error-span" data-error-idx="1">Arab</span> military and administrative headquarters. The massive explosion killed <span class="exam-error-span" data-error-idx="2">910</span> people. Because of the outrage caused by this event, Britain decided the Mandate was unworkable and handed the problem over to the <span class="exam-error-span" data-error-idx="3">League of Nations</span>.',
    corrections: [
      { wrong: 'Haganah', right: 'Irgun' },
      { wrong: 'Arab', right: 'British' },
      { wrong: '910', right: '91' },
      { wrong: 'League of Nations', right: 'United Nations (UN)' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Examiners hate it when you mix up your Jewish paramilitary groups! The Haganah was the main defence force, but it was the extreme splinter group <em>Irgun</em> who carried out the King David Hotel bombing."
  },
  {
    id: 'practice_2',
    subtopicId: 'subtopic_1_2',
    question: "Explain the consequences of the 1948–49 Arab-Israeli War for the Palestinian Arabs.",
    rawAnswer: 'Following the 1948–49 Arab-Israeli War, Israel expanded its territory to cover <span class="exam-error-span" data-error-idx="0">55%</span> of mandate Palestine. Meanwhile, Egypt took military control of the <span class="exam-error-span" data-error-idx="1">West Bank</span> and Transjordan annexed the <span class="exam-error-span" data-error-idx="2">Gaza Strip</span>. Because of the war, over 700,000 Palestinian Arabs became refugees, a catastrophe they refer to as the <span class="exam-error-span" data-error-idx="3">Aliyah</span>.',
    corrections: [
      { wrong: '55%', right: '79%' },
      { wrong: 'West Bank', right: 'Gaza Strip' },
      { wrong: 'Gaza Strip', right: 'West Bank' },
      { wrong: 'Aliyah', right: 'Nakba' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Examiners frequently see students mix up which Arab country took which territory! Remember: Egypt took the Gaza Strip, and Jordan took the West Bank. Also, the Arabic term for the 1948 refugee catastrophe is the <em>Nakba</em>."
  },
  {
    id: 'practice_3',
    subtopicId: 'subtopic_1_3',
    question: "Explain the consequences of the Suez Crisis (1956) for Egypt's position in the Middle East.",
    rawAnswer: 'The Suez Crisis began in 1956 when Egyptian President <span class="exam-error-span" data-error-idx="0">Anwar Sadat</span> nationalised the Suez Canal Company to pay for the Aswan High Dam. Secretly, Britain, France and <span class="exam-error-span" data-error-idx="1">the USA</span> met at Sèvres to plan a coordinated attack. When the invasion happened, both the USA and the Soviet Union strongly <span class="exam-error-span" data-error-idx="2">supported</span> the attack, but eventually the invaders had to withdraw in humiliation.',
    corrections: [
      { wrong: 'Anwar Sadat', right: 'Gamal Abdel Nasser' },
      { wrong: 'the USA', right: 'Israel' },
      { wrong: 'supported', right: 'condemned' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Do not confuse your Egyptian Presidents! Nasser was the hero of 1956, Sadat was the leader during the 1973 Yom Kippur War. Also, remember that the USA <em>opposed</em> the invasion because they feared it would push Arab states toward the Soviet Union!"
  },
  {
    id: 'practice_4',
    subtopicId: 'subtopic_1_3',
    question: "Explain how border raids and the arms race increased tension in the years 1955–1956.",
    rawAnswer: 'Tension increased in 1955 when an intense Israeli military reprisal raid on <span class="exam-error-span" data-error-idx="0">Cairo</span> showed that the Egyptian army was too weak to defend itself. This provoked President Nasser to sign the <span class="exam-error-span" data-error-idx="1">US Arms Deal</span> to buy massive quantities of modern weapons. To pay for the Aswan High Dam, Nasser nationalised the <span class="exam-error-span" data-error-idx="2">Straits of Tiran</span> in 1956, directly leading to the Suez Crisis.',
    corrections: [
      { wrong: 'Cairo', right: 'Gaza' },
      { wrong: 'US Arms Deal', right: 'Czech Arms Deal (or Soviet)' },
      { wrong: 'Straits of Tiran', right: 'Suez Canal' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Always be precise with your locations and treaties! The 1955 Israeli raid was on Gaza, not Cairo. Nasser bought his weapons from the Soviet bloc via Czechoslovakia, and he nationalised the Suez Canal Company to fund his dam project."
  },
  {
    id: 'practice_5',
    subtopicId: 'subtopic_2_1',
    question: "Write a narrative account analysing the key events of the years 1964–1967 that led to the outbreak of the Six Day War.",
    rawAnswer: 'At the 1964 <span class="exam-error-span" data-error-idx="0">Khartoum</span> Conference, Arab leaders agreed to divert the River Jordan away from Israel and created the <span class="exam-error-span" data-error-idx="1">IDF</span>. Tension escalated in November 1966 when Israel launched a massive reprisal raid against the Jordanian village of <span class="exam-error-span" data-error-idx="2">Deir Yassin</span>. Finally, in May 1967, the <span class="exam-error-span" data-error-idx="3">USA</span> falsely warned Nasser that Israel was massing troops on the Syrian border.',
    corrections: [
      { wrong: 'Khartoum', right: 'Cairo' },
      { wrong: 'IDF', right: 'PLO' },
      { wrong: 'Deir Yassin', right: 'Samu' },
      { wrong: 'USA', right: 'USSR (Soviet Union)' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Keep your conferences and raids strictly chronological! The PLO was formed at the <em>Cairo</em> Conference in 1964. Deir Yassin was a massacre in 1948; the 1966 reprisal raid was against <em>Samu</em>. And it was the Soviet Union, not the USA, that provided the false intelligence in 1967."
  },
  {
    id: 'practice_6',
    subtopicId: 'subtopic_2_2',
    question: "Explain the importance of UN Resolution 242 for the Middle East peace process.",
    rawAnswer: "Following the Six Day War, the UN passed Resolution <span class=\"exam-error-span\" data-error-idx=\"0\">181</span>, which proposed the 'Land for Peace' formula. However, Arab leaders met at Khartoum and issued the 'Three Nos'. Frustrated by the lack of progress, a radical Palestinian group called the <span class=\"exam-error-span\" data-error-idx=\"1\">PLO</span> hijacked four international passenger jets to Dawson's Field in <span class=\"exam-error-span\" data-error-idx=\"2\">Egypt</span> in 1970.",
    corrections: [
      { wrong: '181', right: '242' },
      { wrong: 'PLO', right: 'PFLP' },
      { wrong: 'Egypt', right: 'Jordan' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Always double-check your UN Resolutions! Resolution 181 was the 1947 Partition Plan. Resolution 242 was the 1967 'Land for Peace' agreement."
  },
  {
    id: 'practice_7',
    subtopicId: 'subtopic_2_2',
    question: "Explain the consequences of the Six Day War (1967) for the map of the Middle East.",
    rawAnswer: 'On 5 June 1967, Israel launched a pre-emptive <span class="exam-error-span" data-error-idx="0">naval</span> strike that destroyed the Arab forces. Within six days, Israel completely redrew the map. They captured the <span class="exam-error-span" data-error-idx="1">Golan Heights</span> from Egypt and the <span class="exam-error-span" data-error-idx="2">Sinai Peninsula</span> from Syria. In response to the war, the UN passed Resolution <span class="exam-error-span" data-error-idx="3">181</span>, which established the \'Land for Peace\' formula.',
    corrections: [
      { wrong: 'naval', right: 'air' },
      { wrong: 'Golan Heights', right: 'Sinai Peninsula / Gaza' },
      { wrong: 'Sinai Peninsula', right: 'Golan Heights' },
      { wrong: '181', right: '242' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Territorial knowledge is crucial for AO1 marks! Israel took Sinai and Gaza from Egypt, and the Golan Heights from Syria. Make sure you don't confuse UN Resolution 181 (the 1947 Partition Plan) with Resolution 242 (the 1967 'Land for Peace' formula)."
  },
  {
    id: 'practice_8',
    subtopicId: 'subtopic_2_3',
    question: "Explain the consequences of the 1973 Yom Kippur War for relations between Arab nations and the West.",
    rawAnswer: 'In October 1973, <span class="exam-error-span" data-error-idx="0">King Hussein</span> of Egypt launched a coordinated surprise attack on Israel. Egyptian engineers successfully used water cannons to blast through the <span class="exam-error-span" data-error-idx="1">Green Line</span>, a massive sand-wall fortification along the Suez Canal. During the war, Arab states used the <span class="exam-error-span" data-error-idx="2">\'water weapon\'</span> to punish the West, causing a global economic crisis.',
    corrections: [
      { wrong: 'King Hussein', right: 'Anwar Sadat' },
      { wrong: 'Green Line', right: 'Bar Lev Line' },
      { wrong: '\'water weapon\'', right: '\'oil weapon\' (or oil embargo)' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Don't confuse your Arab leaders or Israeli defensive lines! Sadat was President of Egypt in 1973 (Hussein was King of Jordan). The sand wall on the Suez Canal was the <em>Bar Lev Line</em> (the Green Line was the 1949 armistice border). OPEC used the 'oil weapon' to put pressure on the USA."
  },
  {
    id: 'practice_9',
    subtopicId: 'subtopic_3_1',
    question: "Explain the importance of the Camp David Accords (1978) for the relations between Egypt and Israel.",
    rawAnswer: 'Following the 1973 war, US Secretary of State <span class="exam-error-span" data-error-idx="0">Jimmy Carter</span> engaged in months of \'shuttle diplomacy\'. This eventually led to a major breakthrough when Egyptian President Sadat visited the <span class="exam-error-span" data-error-idx="1">White House</span> in 1977 to offer peace. In 1978, the two sides met at <span class="exam-error-span" data-error-idx="2">Geneva</span> for 13 days of secret talks, resulting in the historic Treaty of Washington.',
    corrections: [
      { wrong: 'Jimmy Carter', right: 'Henry Kissinger' },
      { wrong: 'White House', right: 'Knesset (in Jerusalem)' },
      { wrong: 'Geneva', right: 'Camp David' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Be careful with your American politicians! Kissinger did the 'shuttle diplomacy' in 1974–75, while President Jimmy Carter mediated the 1978 accords at Camp David. Sadat’s historic 1977 speech took place at the Israeli parliament, the Knesset."
  },
  {
    id: 'practice_10',
    subtopicId: 'subtopic_3_2',
    question: "Explain the consequences of the 1982 Israeli invasion of Lebanon.",
    rawAnswer: 'In June 1982, Israel launched Operation <span class="exam-error-span" data-error-idx="0">Wrath of God</span> to push the PLO out of southern Lebanon. Defence Minister <span class="exam-error-span" data-error-idx="1">Yitzhak Rabin</span> secretly planned to bypass UN peacekeepers and drive all the way to Beirut. After a devastating two-month siege of the Lebanese capital, Yasser Arafat and the PLO were forced to evacuate to <span class="exam-error-span" data-error-idx="2">Jordan</span>.',
    corrections: [
      { wrong: 'Wrath of God', right: 'Peace for Galilee' },
      { wrong: 'Yitzhak Rabin', right: 'Ariel Sharon' },
      { wrong: 'Jordan', right: 'Tunisia (Tunis)' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> Operation 'Wrath of God' was the Israeli assassination campaign after the 1972 Munich Olympics; the 1982 invasion of Lebanon was Operation 'Peace for Galilee'. It was Ariel Sharon who drove the army to Beirut, resulting in the PLO being exiled to Tunis (they had already been expelled from Jordan in 1970!)."
  },
  {
    id: 'practice_11',
    subtopicId: 'subtopic_3_2',
    question: "Explain the consequences of the First Intifada (1987–1993) for relations between Israel and Palestinians.",
    rawAnswer: 'The First Intifada was an armed military uprising led by the <span class="exam-error-span" data-error-idx="0">Egyptian army</span> that began in Gaza in December 1987. Palestinian youths famously fought Israeli troops using <span class="exam-error-span" data-error-idx="1">suicide bombs</span>. The Israeli government responded with a harsh <span class="exam-error-span" data-error-idx="2">\'Land for Peace\'</span> policy, which drew massive international condemnation and damaged Israel\'s global reputation.',
    corrections: [
      { wrong: 'Egyptian army', right: 'Palestinian civilians (or grassroots/youth)' },
      { wrong: 'suicide bombs', right: 'stones and petrol bombs' },
      { wrong: '\'Land for Peace\'', right: '\'Iron Fist\'' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> The First Intifada was a spontaneous, grassroots uprising by civilians in the Occupied Territories, not a conventional war fought by an Arab army. They primarily used stones, boycotts, and strikes, not suicide bombs (which became common later with Hamas in the 1990s). Israel's harsh military response was known as the 'Iron Fist' policy."
  },
  {
    id: 'practice_12',
    subtopicId: 'subtopic_3_3',
    question: "Write a narrative account analysing the key developments in the Middle East peace process in the years 1993–1995.",
    rawAnswer: 'In 1993, highly secret peace talks took place in <span class="exam-error-span" data-error-idx="0">Geneva</span>. This led to a historic breakthrough and a famous handshake on the White House lawn between Yasser Arafat and Israeli Prime Minister <span class="exam-error-span" data-error-idx="1">Golda Meir</span>. This agreement created the Palestinian National Authority. However, the optimism was shattered when the Israeli Prime Minister was assassinated by a <span class="exam-error-span" data-error-idx="2">Hamas</span> extremist in 1995.',
    corrections: [
      { wrong: 'Geneva', right: 'Oslo / Norway' },
      { wrong: 'Golda Meir', right: 'Yitzhak Rabin' },
      { wrong: 'Hamas', right: 'Right-wing Jewish / Israeli' }
    ],
    examinerTip: "💡 <strong>AO1 Examiner Tip:</strong> It is crucial to remember who assassinated Yitzhak Rabin! He was not killed by Palestinian terrorists, but by Yigal Amir, an <em>Israeli religious extremist</em> who viewed the Oslo Accords as a betrayal of the Jewish people."
  }
];

let practiceState = {
  currentExampleIndex: 0,
  clickedErrors: new Set()
};

// --- END OF MODULE games.js ---

// --- START OF MODULE lessons.js ---
function renderPracticeRoomContent() {
  const example = PRACTICE_ROOM_DATA[practiceState.currentExampleIndex];
  
  const questionTitle = document.getElementById('practice-question-title');
  const answerBody = document.getElementById('practice-answer-body');
  const counter = document.getElementById('practice-mistakes-counter');
  const successContainer = document.getElementById('practice-success-container');
  const examinerTip = document.getElementById('practice-examiner-tip');

  if (!questionTitle || !answerBody || !counter || !successContainer || !examinerTip) return;

  questionTitle.innerText = "Question: " + example.question;
  answerBody.innerHTML = example.rawAnswer;
  
  const totalMistakes = example.corrections.length;
  const foundMistakes = practiceState.clickedErrors.size;
  counter.innerText = `Mistakes found: ${foundMistakes}/${totalMistakes}`;
  
  successContainer.style.display = 'none';

  // Bind click event listeners to error spans
  const errorSpans = answerBody.querySelectorAll('.exam-error-span');
  errorSpans.forEach(span => {
    const idx = parseInt(span.getAttribute('data-error-idx'));
    
    if (practiceState.clickedErrors.has(idx)) {
      span.classList.add('stricken');
      const correction = document.createElement('span');
      correction.className = 'correction-bubble';
      correction.innerHTML = example.corrections[idx].right;
      span.appendChild(correction);
    } else {
      span.addEventListener('click', function onClick(e) {
        if (span.classList.contains('stricken')) return;
        
        AudioEngine.play('success');
        
        span.classList.add('stricken');
        practiceState.clickedErrors.add(idx);
        
        const correction = document.createElement('span');
        correction.className = 'correction-bubble';
        correction.innerHTML = example.corrections[idx].right;
        span.appendChild(correction);
        
        const floatMark = document.createElement('span');
        floatMark.className = 'mark-float-badge';
        floatMark.innerText = "+1 Examiner Mark!";
        
        floatMark.style.left = `${span.offsetLeft + (span.offsetWidth / 2)}px`;
        floatMark.style.top = `${span.offsetTop - 15}px`;
        span.parentElement.appendChild(floatMark);
        
        setTimeout(() => {
          floatMark.remove();
        }, 800);
        
        const updatedFound = practiceState.clickedErrors.size;
        counter.innerText = `Mistakes found: ${updatedFound}/${totalMistakes}`;
        
        if (updatedFound === totalMistakes) {
          AudioEngine.play('cheer');
          
          successContainer.style.display = 'block';
          examinerTip.innerHTML = example.examinerTip;
          
          if (typeof Confetti !== 'undefined' && typeof Confetti.spawn === 'function') {
            Confetti.spawn(100);
          }
        }
      });
    }
  });
}

function renderMasteryView(subtopicId) {
  const container = document.getElementById('mastery-content-container');
  if (!container) return;

  if (subtopicId !== 'subtopic_1_1' && subtopicId !== 'subtopic_1_2' && subtopicId !== 'subtopic_1_3' && subtopicId !== 'subtopic_2_1' && subtopicId !== 'subtopic_2_2' && subtopicId !== 'subtopic_2_3' && subtopicId !== 'subtopic_3_1' && subtopicId !== 'subtopic_3_2' && subtopicId !== 'subtopic_3_3') {
    container.innerHTML = `
      <div class="mastery-card" style="text-align: center; padding: 40px;">
        <i class="fa-solid fa-person-digging" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <h3 class="mastery-card-title" style="border: none;">Lessons In Development</h3>
        <p class="mastery-card-body" style="color: var(--text-muted);">
          Lesson content is currently being drafted for this Key Topic. 
          Please navigate to <strong>Topic 1.1: The British withdrawal and the creation of Israel</strong> or <strong>Topic 1.2: Aftermath of the 1948-49 war</strong> in the sidebar to test the active prototypes!
        </p>
      </div>
    `;
    return;
  }

  if (subtopicId === 'subtopic_1_1') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 1.1 - British Withdrawal & Creation of Israel (1945–1949)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you cannot just tell a story. You need to know the exact names, dates, and statistics that <span class="analytical-linkage">caused</span> the British to flee Palestine and <span class="analytical-linkage">led to</span> the violent birth of Israel.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: The Conflicting Demands</h3>
      <div class="mastery-card-body card-content">
        <p>After the Second World War, the British Mandate became impossible to govern. Britain was caught between two opposing forces:</p>
        <ul>
          <li><strong>The Jewish/Zionist Demand:</strong> Following the <strong>Holocaust</strong>, Zionists demanded a safe Jewish homeland in Palestine and immediate, unlimited immigration for Jewish refugees stranded in Europe.</li>
          <li><strong>The Palestinian Arab Demand:</strong> The Arab majority demanded independence and self-rule. They completely opposed mass Jewish immigration, fearing they would lose their land and be outnumbered.</li>
          <li><strong>The British Dilemma:</strong> Exhausted and bankrupt after <strong>WWII</strong>, Britain restricted Jewish immigration to a strict quota of just <strong>1,500</strong> people a month to avoid sparking an Arab civil war and to protect their access to Middle Eastern oil.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: The Jewish Insurgency & The King David Hotel</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <p>Furious at the immigration restrictions, Jewish paramilitary groups (the <strong>Haganah</strong>, <strong>Irgun</strong>, and <strong>Lehi</strong>) launched a violent uprising against the British.</p>
            <ul>
              <li><strong>The King David Hotel Bombing (July 1946):</strong> The extreme group <strong>Irgun</strong> blew up the southern wing of the King David Hotel in Jerusalem, which housed the British military and administrative headquarters.</li>
              <li><strong>The Devastating Impact:</strong> The blast killed <strong>91</strong> people. It shattered British morale, <span class="analytical-linkage">caused</span> massive outrage among the British public, and made the Mandate far too expensive and dangerous to run.</li>
              <li><strong>The <span class="analytical-linkage">Breaking Point</span>:</strong> In <strong>February 1947</strong>, a broken Britain officially handed the problem over to the newly formed United Nations.</li>
            </ul>
            
            <div class="examiner-tip-box">
              <span class="tip-icon">💡</span>
              <div>
                <strong>Examiner Tip:</strong> Use the exact statistic of <strong>91</strong> deaths to guarantee top marks in a 4-mark 'Explain one consequence of the King David Hotel bombing' question!
              </div>
            </div>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: Irgun Communiqué (1946)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "We targeted the British administrative headquarters to make it clear that the occupier cannot reside in peace. The King David Hotel was warned, but the authorities refused to evacuate, leading to this tragic, necessary cost of liberation."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: UN Resolution 181 (The Partition Plan)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <p>In <strong>November 1947</strong>, the UN passed <strong>Resolution 181</strong>, which recommended dividing Palestine into two separate states.</p>
            <ul>
              <li><strong>The Terms:</strong> Palestine would be partitioned. <strong>Jerusalem</strong> and <strong>Bethlehem</strong> would become an 'international zone' controlled by neither side.</li>
              <li><strong>The Jewish Reaction:</strong> Most Jews reluctantly accepted the plan because it gave them international recognition for a sovereign state, even though they were disappointed <strong>Jerusalem</strong> was excluded.</li>
              <li><strong>The Arab Reaction:</strong> Arab leaders furiously rejected the plan. They felt the UN had no right to give away their land, especially since the proposed Jewish state was awarded over half (<strong>55%</strong>) of the territory even though Jews only made up one third (<strong>33%</strong>) of the total population.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="map-vector-box" style="padding: 0;">
            <img id="map-image-placeholder" class="map-image-display" src="assets/map_1947.png" alt="UN Partition Plan" style="width: 100%; height: 100%; object-fit: contain; display: block; border-radius: var(--border-radius-md);">
          </div>
          <div class="map-toggles">
            <button class="map-toggle-btn active" id="btn-map-partition">[1947 UN Partition Plan]</button>
            <button class="map-toggle-btn" id="btn-map-borders">[1949 Post-War Borders]</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: The 1948–49 Arab-Israeli War</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <p>On <strong>14 May 1948</strong>, the British Mandate officially ended and <strong>David Ben-Gurion</strong> immediately declared the creation of the State of Israel.</p>
            <ul>
              <li><strong>The Invasion:</strong> The very next day, armies from five Arab nations (<strong>Egypt</strong>, <strong>Syria</strong>, <strong>Transjordan</strong>, <strong>Lebanon</strong>, and <strong>Iraq</strong>) invaded Israel.</li>
              <li><strong>Why did Israel win?</strong>
                <ul>
                  <li><strong>Arab Disunity:</strong> The Arab armies had no single commander and different goals.</li>
                  <li><strong>The First UN Truce (June 1948):</strong> Israel used a crucial month-long ceasefire to reorganise and illegally import massive amounts of modern weapons from <strong>Czechoslovakia</strong>.</li>
                  <li><strong>The IDF:</strong> During the truce, Israel reorganised its rival militias into a single, unified army: the <strong>Israeli Defence Forces (IDF)</strong>. Through mandatory conscription, their troop numbers doubled from about <strong>35,000</strong> to <strong>108,000</strong> by the end of 1948, allowing them to outnumber the Arab forces.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source B: From David Ben-Gurion's Diary (July 1948)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "The truce was a godsend. It has given us the precious weeks we needed to coordinate our defense under a single flag, consolidate our forces into the IDF, and bring in the modern equipment needed to secure our borders."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Narrative Chain interactive Card -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. What was the strict monthly limit the British placed on Jewish immigration?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: 1,500</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. Which specific Jewish paramilitary group carried out the King David Hotel bombing?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Irgun</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. Exactly how many people died in the King David Hotel bombing?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: 91</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. Under UN Resolution 181, what percentage of the land was given to the proposed Jewish State?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: 55%</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. What was the name of the new, unified army Israel created during the First UN Truce?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: The IDF</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of the King David Hotel Bombing.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was the King David Hotel Bombing (1946) important for the British withdrawal from Palestine?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> The bombing was highly important because it targeted the heart of British rule in Palestine, killing 91 administrative and military personnel. The massive loss of life and subsequent negative media coverage shattered British public morale, rendering the mandate politically and financially unsustainable, which directly pressured the British government to hand Palestine over to the UN in February 1947.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the King David Hotel bombing (1946). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the King David Hotel bombing was that it shattered British political will to maintain the Mandate. The loss of 91 personnel made the administration extremely dangerous and costly to run, leading directly to Britain's decision to announce its withdrawal and hand the territory over to the UN.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key events of 1947–48 that led to the outbreak of the Arab-Israeli War. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>In November 1947, the UN passed Resolution 181 to partition Palestine, which was accepted by the Jews but rejected by the Arabs, sparking immediate civil violence.</li>
              <li>As violence escalated, the British officially declared they would end their mandate on 14 May 1948, creating a power vacuum.</li>
              <li>On 14 May 1948, David Ben-Gurion declared the creation of the State of Israel, which immediately <em>provoked</em> the invasion by five Arab nations the very next day.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the UN Partition Plan (Resolution 181) for the creation of Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> Resolution 181 was highly important because it provided crucial international legitimacy and legal recognition for a sovereign Jewish state. Furthermore, by allocating 55% of mandate Palestine to the proposed Jewish state, it established clear borders that allowed Zionists to prepare their administrative and military structures for independent governance.
          </div>
        </div>
      </div>
    </div>

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        ✓ Mark Topic 1.1 as Mastered
      </button>
    </div>
    `;
  } else if (subtopicId === 'subtopic_1_2') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 1.2 - The Aftermath of the 1948–49 War
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand how the 1948–49 war completely redrew the map of the Middle East, created a massive refugee crisis, and shaped Israel's aggressive security and immigration policies.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: Territorial Changes and the New Map</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <p>As a <span class="analytical-linkage">result of</span> the war, the proposed independent Arab state was completely wiped off the map.</p>
            <ul>
              <li><strong>Israel's Expansion:</strong> Israel captured significantly more land than the UN originally allocated, expanding its territory to cover <strong>79%</strong> of mandate Palestine.</li>
              <li><strong>Jordan and Egypt:</strong> Transjordan occupied and later annexed the <strong>West Bank</strong> and East Jerusalem. Egypt took military control of the <strong>Gaza Strip</strong>.</li>
              <li><strong>The Green Line:</strong> The new borders were defined by the 1949 Armistice Agreements and became known as the <strong>Green Line</strong>.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="map-vector-box" style="padding: 0;">
            <img id="map-image-placeholder" class="map-image-display" src="assets/map_1947.png" alt="UN Partition Plan" style="width: 100%; height: 100%; object-fit: contain; display: block; border-radius: var(--border-radius-md);">
          </div>
          <div class="map-toggles">
            <button class="map-toggle-btn active" id="btn-map-partition">[1947 UN Partition Plan]</button>
            <button class="map-toggle-btn" id="btn-map-borders">[1949 Post-War Borders]</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: The Palestinian Refugee Crisis (The Nakba)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <p>The war was a disaster for Palestinian Arabs, who refer to the events of 1948 as the <strong>Nakba</strong> ('The Catastrophe').</p>
            <ul>
              <li><strong>The Exodus:</strong> Over <strong>700,000</strong> Palestinians fled or were forcibly expelled from their homes in the territory that became Israel.</li>
              <li><strong>The Camps:</strong> Most fled to squalid, overcrowded refugee camps in the Gaza Strip, West Bank, Lebanon, Syria, and Jordan. Israel strictly refused to allow the refugees to return home.</li>
              <li><strong>UNRWA:</strong> In December 1949, the UN established the United Nations Relief and Works Agency (<strong>UNRWA</strong>) to provide emergency food, health care, and schooling in these camps.</li>
            </ul>
            
            <div class="examiner-tip-box">
              <span class="tip-icon">💡</span>
              <div>
                <strong>Examiner Tip:</strong> When answering a 4-mark consequence question on the 1948-49 war, always use the Arabic term <strong>Nakba</strong> and the specific statistic of <strong>700,000</strong> refugees to secure top marks for your AO1 knowledge!
              </div>
            </div>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: UN Refugee Report (1949)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "Hundreds of thousands of Arab families are housed in makeshift tents without sanitation. The situation in the Gaza and West Bank areas requires immediate international intervention to avert total famine."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: Consolidating the State of Israel</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Law of Return (1950):</strong> This Israeli law gave any Jew in the world the right to immigrate and become a citizen. As a <span class="analytical-linkage">result of</span> this, Israel's population almost doubled within three years as Holocaust survivors and Middle Eastern Jews arrived.</li>
              <li><strong>The IDF:</strong> Prime Minister David Ben-Gurion united rival militias into the <strong>Israeli Defence Forces (IDF)</strong>. Strict conscription (30 months for men, 18 for women) integrated new immigrants and created a massive reserve army.</li>
              <li><strong>US Aid:</strong> The USA provided crucial financial aid (including a $65 million grant) which <span class="analytical-linkage">resulted in</span> Israel being able to feed and house the massive influx of new immigrants.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source B: Israeli Government Statement (1950)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "This state will be open for Jewish immigration and for the Ingathering of the Exiles. It will promote the development of the country for the benefit of all its inhabitants."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: Hostile Relations with Egypt</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <p>Relations between Israel and its Arab neighbours remained incredibly tense, particularly with Egypt.</p>
            <ul>
              <li><strong>Economic Blockade:</strong> Egypt blocked Israeli shipping from using the <strong>Suez Canal</strong> and the Straits of Tiran, attempting to strangle the Israeli economy.</li>
              <li><strong>The Fedayeen:</strong> Palestinian refugees in Egyptian-controlled Gaza formed guerrilla groups called the <strong>Fedayeen</strong> ('those who sacrifice themselves').</li>
              <li><strong>The Cycle of Violence:</strong> The Fedayeen launched constant cross-border raids into Israel to attack settlements. This <span class="analytical-linkage">provoked</span> Israel into launching fierce, disproportionate military reprisal attacks, steadily escalating the tension.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source C: From an Egyptian Radio Broadcast (1953)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "The Fedayeen will strike at the Zionist settlements day and night until our brothers' lands are returned. Let the enemy know there is no security on stolen land."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider -->
    <div class="dual-perspective-card left-active"
         data-left-headline="The War of Independence"
         data-left-text="Israel miraculously survived a coordinated invasion by five hostile Arab armies. Through the heroic defence by the newly formed IDF, the Jewish people secured their sovereign state and gained vital extra territory to protect their borders from future attacks."
         data-right-headline="The Nakba (The Catastrophe)"
         data-right-text="The war was a devastating tragedy. Israel aggressively expanded its borders to seize 79% of mandate Palestine. As a result, over 700,000 Palestinian Arabs were forced to flee their ancestral homes, creating a massive, permanent refugee crisis in squalid camps.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The Outcome of the 1948–49 War</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">The War of Independence</h4>
        <p class="dual-perspective-text">Israel miraculously survived a coordinated invasion by five hostile Arab armies. Through the heroic defence by the newly formed IDF, the Jewish people secured their sovereign state and gained vital extra territory to protect their borders from future attacks.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Narrative Chain interactive Card -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. What percentage of mandate Palestine did Israel control by the end of the 1948-49 war?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: 79%</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. Which Arab country took control of the West Bank and East Jerusalem?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Transjordan / Jordan</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. What is the Arabic term for the 'Catastrophe' that saw 700,000 Palestinians become refugees?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: The Nakba</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. In what year did Israel pass the 'Law of Return'?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: 1950</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. What was the name of the Palestinian guerrilla fighters who launched raids from Gaza?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: Fedayeen</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of the Palestinian Refugee Crisis.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was the Palestinian Refugee Crisis (Nakba) important for relations between Israel and Arab states?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> The refugee crisis was highly important because Israel's absolute refusal to allow 700,000 displaced Palestinians to return created a permanent source of regional conflict. Squalid border refugee camps became breeding grounds for the Fedayeen guerrilla groups, whose cross-border raids provoked heavy Israeli military reprisals, ensuring permanent hostility with Egypt and Jordan.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the 1948-49 Arab-Israeli War for the Palestinian Arabs. (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the 1948-49 war was the creation of a massive Palestinian refugee crisis, known as the Nakba. Over 700,000 Palestinian Arabs were displaced or fled from their homes in Israel, and because Israel refused to let them return, they were forced into squalid, temporary refugee camps in Gaza, the West Bank, and neighbouring countries.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key events of the 1948–49 war that led to Israel's victory. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>Israel was invaded on 15 May 1948, but the Arab forces lacked unified command and coordination, allowing Israel to hold the lines initially.</li>
              <li>A crucial one-month UN truce in June 1948 allowed Israel to reorganise and illegally import large shipments of weapons from Czechoslovakia.</li>
              <li>Israel used this time to combine rival paramilitaries into the single IDF, doubling their troops to 108,000, which outpaced and overwhelmed Arab armies.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the Fedayeen raids for relations between Egypt and Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Fedayeen raids were important because they created an escalating cycle of cross-border violence. Since Egypt allowed the Fedayeen to operate from Gaza, their attacks on Israeli civilians <em>provoked</em> fierce IDF military reprisal raids, which destroyed any potential diplomatic reconciliation and ultimately pushed Egypt closer to signing the Czech Arms Deal.
          </div>
        </div>
      </div>
    </div>

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        ✓ Mark Topic 1.2 as Mastered
      </button>
    </div>
    `;
  } else if (subtopicId === 'subtopic_1_3') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 1.3 - Increased Tension and the Suez Crisis (1955–1963)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand how the rise of Nasser, escalating border raids, and Cold War superpower politics <span class="analytical-linkage">resulted in</span> the 1956 Suez Crisis and the creation of the United Arab Republic.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: The Rise of Nasser and the Czech Arms Deal (1955)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>Pan-Arabism:</strong> Gamal Abdel <strong>Nasser</strong> became the leader of Egypt and the champion of Pan-Arabism—the idea of uniting the Arab world against Western imperialism and Israeli influence.</li>
          <li><strong>The Gaza Raid:</strong> Following an intense Israeli military raid on <strong>Gaza in 1955</strong> (a reprisal for Palestinian *Fedayeen* attacks), Nasser realised the Egyptian army was too weak to defend itself.</li>
          <li><strong>The Turning Point:</strong> This <span class="analytical-linkage">provoked</span> Nasser to sign the <strong>Czech Arms Deal</strong> in September 1955. This allowed Egypt to buy vast quantities of modern weapons from the Soviet bloc, which dramatically shifted the balance of power and terrified Israel.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: The Build-up to the Suez Crisis (1956)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Aswan High Dam:</strong> Nasser needed money to build a massive dam across the River Nile. When the USA and Britain withdrew their funding (angered by Nasser's ties with the USSR), it <span class="analytical-linkage">caused</span> Nasser to retaliate.</li>
          <li><strong>Nationalisation:</strong> In July 1956, Nasser <strong>nationalised the Suez Canal</strong>, taking control of it from its British and French owners, intending to use the toll money to fund the dam.</li>
          <li><strong>The Protocol of Sèvres:</strong> This <span class="analytical-linkage">led to</span> Britain, France, and Israel holding a secret meeting in France. They agreed that Israel would invade the Sinai Peninsula so that Britain and France could intervene as "peacekeepers" and seize the canal back.</li>
        </ul>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: The Invasion and the Superpower Response</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Attack:</strong> On 29 October 1956, Israel invaded the Sinai and rapidly defeated the Egyptian army. Britain and France then bombed Egyptian airfields and landed troops at Port Said.</li>
              <li><strong>Superpower Anger:</strong> Both the USA and the USSR furiously condemned the invasion. The USA applied massive economic pressure and threatened to ruin the British economy.</li>
              <li><strong>Humiliation:</strong> This <span class="analytical-linkage">forced</span> a humiliating withdrawal for Britain, France, and eventually Israel, marking the end of British dominance in the Middle East.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: US President Dwight D. Eisenhower (November 1956)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "We cannot subscribe to the use of force for settling international disputes. The actions of Britain, France, and Israel in Egypt are a serious error, and we insist upon an immediate ceasefire and the withdrawal of all forces."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: The Aftermath and the UAR (1958)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>Nasser the Hero:</strong> Although defeated militarily, Nasser emerged as a massive political hero in the Arab world for standing up to Britain and France.</li>
          <li><strong>UNEF Peacekeepers:</strong> To prevent future conflict, the UN Emergency Force (<strong>UNEF</strong>) was stationed in the Sinai buffer zone. This <span class="analytical-linkage">resulted in</span> a decade of secure borders for Israel and stopped the *Fedayeen* raids.</li>
          <li><strong>The United Arab Republic:</strong> Nasser's soaring popularity <span class="analytical-linkage">led to</span> the creation of the <strong>United Arab Republic (UAR)</strong> in 1958. This was a short-lived political union between Egypt and Syria, which surrounded Israel with a unified, hostile Arab front.</li>
        </ul>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider -->
    <div class="dual-perspective-card left-active"
         data-left-headline="A Campaign of Border Terrorism"
         data-left-text="The Fedayeen were ruthless terrorist groups who used bases in the Egyptian-controlled Gaza Strip to launch unprovoked, violent cross-border raids into Israel, murdering innocent Israeli civilians and destabilising the new state."
         data-right-headline="A Campaign of Nationalist Freedom Fighters"
         data-right-text="The Fedayeen were brave Palestinian nationalists. Having had their land and homes stolen by Israel during the Nakba, these displaced refugees launched legitimate resistance operations to fight for their legal right to return to their homeland.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The Palestinian 'Fedayeen' (1950s)</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">A Campaign of Border Terrorism</h4>
        <p class="dual-perspective-text">The Fedayeen were ruthless terrorist groups who used bases in the Egyptian-controlled Gaza Strip to launch unprovoked, violent cross-border raids into Israel, murdering innocent Israeli civilians and destabilising the new state.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. Which political ideology did Nasser champion to unite the Arab world?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: Pan-Arabism</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. From which Soviet-bloc country did Egypt buy weapons in 1955?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Czechoslovakia</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. What was the name of the secret agreement between Britain, France, and Israel to invade Egypt?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: The Protocol of Sèvres</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. Which massive engineering project did Nasser want to fund by nationalising the Suez Canal?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: The Aswan High Dam</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. Which country joined with Egypt to form the United Arab Republic (UAR) in 1958?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: Syria</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of Nasser's importance.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was Nasser important for tension in the Middle East in the years 1955–63?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> Nasser was highly important for increasing tension because his ideology of Pan-Arabism aggressively challenged Western influence and Israel. His decision to sign the 1955 Czech Arms Deal brought the Soviet Union into the Middle East, terrifying Israel and leading directly to the 1956 Suez Crisis.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the Suez Crisis (1956). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the Suez Crisis was the complete humiliation and decline of British influence in the Middle East. After both superpowers condemned the invasion and the USA threatened to destroy the British pound, Britain was forced to make a humiliating withdrawal, showing they could no longer act independently without US support.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key events of 1955–56 that led to the Suez Crisis. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>The 1955 Gaza Raid showed Egyptian military weakness, which <em>provoked</em> Nasser to sign the Czech Arms Deal to buy Soviet bloc weapons.</li>
              <li>This deal alarmed the West, leading the USA and Britain to withdraw funding for the Aswan High Dam. Nasser retaliated by nationalising the Suez Canal.</li>
              <li>This <em>led to</em> the secret Protocol of Sèvres, where Britain, France, and Israel agreed to invade Egypt, triggering the crisis.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the Suez Crisis (1956) for the security of Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Suez Crisis was highly important for Israel's security because it led directly to the deployment of the United Nations Emergency Force (UNEF) along the Sinai border. This secure buffer zone stopped the Palestinian Fedayeen raids from Gaza and kept the Straits of Tiran open for Israeli shipping, bringing a decade of relative border stability.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of the Israeli raids on Gaza (1955) and the Sinai (1956) for relations between Egypt and Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Gaza Raid was important because it shattered any hope of co-existence, driving Nasser to build up Egypt's military through the Czech Arms Deal. The subsequent 1956 Sinai invasion solidified Egypt's hostility toward Israel, uniting Arab public opinion behind Nasser's anti-Zionist rhetoric and leading Egypt to view Israel as an imperialist tool.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of Nasser for tension in the Middle East in the years 1955–63. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> Nasser was the central catalyst for tension because his championing of Pan-Arabism sought to unite the Arab world against Israel, leading to the creation of the hostile United Arab Republic (UAR) in 1958. His alignment with the USSR via the Czech Arms Deal brought Cold War rivalries into the region, alarming Israel and its Western allies.
          </div>
        </div>
      </div>
    </div>

    `;
  } else if (subtopicId === 'subtopic_2_1') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 2.1 - The Build-up to the Six Day War (1964–1967)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand how disputes over water, Syrian support for Palestinian guerrillas, and Soviet misinformation combined to <span class="analytical-linkage">provoke</span> the outbreak of the Six Day War.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: The Cairo Conference & The PLO (1964)</h3>
      <div class="mastery-card-body card-content">
        <p>In January 1964, Arab leaders met at the **Cairo Conference**. This <span class="analytical-linkage">resulted in</span> two major threats to Israel:</p>
        <ul>
          <li><strong>The Headwater Diversion Plan:</strong> Arab states agreed to divert the sources of the <strong>River Jordan</strong> to stop Israel channelling fresh water to its settlements in the Negev Desert.</li>
          <li><strong>The PLO:</strong> The conference created the <strong>Palestine Liberation Organisation (PLO)</strong> and its military wing, the PLA. Their official goal was to unite Palestinians and regain their lost land.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: Escalating Border Tensions (1965–1967)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>Syria & Fatah:</strong> Syria actively supported <strong>Fatah</strong> (a Palestinian guerrilla group led by Yasser Arafat), providing them with weapons and bases to launch raids into Israel.</li>
              <li><strong>The Samu Raid (Nov 1966):</strong> After a Fatah landmine killed three Israelis, the IDF launched a massive reprisal raid against the Jordanian village of <strong>Samu</strong>, destroying homes and killing 15 Jordanian soldiers. This <span class="analytical-linkage">caused</span> King Hussein of Jordan to fiercely criticise Nasser for hiding behind UN peacekeepers.</li>
              <li><strong>The April Dogfight (1967):</strong> Following clashes over an Israeli tractor in the demilitarised zone, an air battle broke out on <strong>7 April 1967</strong>. Israel shot down six Syrian MiG fighter jets and humiliated Syria by flying low over Damascus.</li>
            </ul>
            
            <div class="examiner-tip-box">
              <span class="tip-icon">💡</span>
              <div>
                <strong>Examiner Tip:</strong> Examiners love it when you link events. You can explain how the Samu Raid was important because it humiliated King Hussein, which <span class="analytical-linkage">provoked</span> him to taunt Nasser about hiding behind the UN, placing immense pressure on Nasser to act!
              </div>
            </div>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: Syrian military dispatch (1966)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "Fatah's heroic actions inside the occupied zones are showing the weakness of the Zionist defense. Syria must continue to act as the primary shield and arm for the commandos in their holy struggle."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: The May Crisis & Soviet Misinformation (1967)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The False Warning:</strong> On 13 May 1967, the <strong>USSR</strong> (Soviet Union) falsely informed Nasser that Israel was massing troops on the Syrian border to attack.</li>
          <li><strong>Nasser's Reaction:</strong> Desperate to prove he was still the strong leader of the Arab world, Nasser immediately mobilised the Egyptian army into the <strong>Sinai Peninsula</strong> and <span class="analytical-linkage">forced</span> the UN peacekeepers (UNEF) to leave the border.</li>
        </ul>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: The Path to War (Late May 1967)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Straits of Tiran:</strong> On 22 May, Nasser blockaded the <strong>Straits of Tiran</strong> (the Gulf of Aqaba) to Israeli shipping. This cut off Israel's vital trade route to the port of Eilat and stopped its oil supply. Israel considered this a direct act of war.</li>
          <li><strong>The Defence Pact:</strong> On 30 May, King Hussein of Jordan signed a mutual <strong>defence pact</strong> with Egypt, placing his army under Egyptian command. Israel was now surrounded by a unified Arab military alliance, which <span class="analytical-linkage">provoked</span> the IDF to launch a pre-emptive air strike just days later.</li>
        </ul>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider -->
    <div class="dual-perspective-card left-active"
         data-left-headline="A Pre-Emptive Strike for Survival"
         data-left-text="Surrounded by hostile Arab armies massing on its borders and illegally strangled by Egypt's blockade of the Straits of Tiran, Israel had no choice. It launched a brilliant, necessary defensive strike to prevent the destruction of the Jewish state."
         data-right-headline="An Unprovoked War of Expansion"
         data-right-text="Israel presented itself as acting in self-defence, but actually acted aggressively and illegally. They used Nasser's political posturing as an excuse to launch an unprovoked war because they secretly wanted to seize control of the West Bank, Gaza, and East Jerusalem.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The Outbreak of the Six Day War (June 1967)</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">A Pre-Emptive Strike for Survival</h4>
        <p class="dual-perspective-text">Surrounded by hostile Arab armies massing on its borders and illegally strangled by Egypt's blockade of the Straits of Tiran, Israel had no choice. It launched a brilliant, necessary defensive strike to prevent the destruction of the Jewish state.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. What river did the Arab states plan to divert away from Israel in 1964?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: The River Jordan</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. What does PLO stand for?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Palestine Liberation Organisation</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. Which Jordanian village did Israel launch a massive reprisal attack against in November 1966?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: Samu</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. Which superpower falsely warned Egypt that Israel was massing troops on the Syrian border?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: The USSR / Soviet Union</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. What vital shipping route did Nasser blockade on 22 May 1967?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: The Straits of Tiran</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of the Cairo Conference.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was the Cairo Conference (1964) important for escalating tension between Israel and the Arab world?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> It was highly important because it unified the Arab states behind two aggressive policies: the Headwater Diversion Plan, which threatened Israel's vital water supply from the River Jordan, and the creation of the PLO, which gave official Arab backing to Palestinian nationalism and guerrilla raids against Israel.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the Israeli raid on Samu (1966). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the Samu Raid was the severe destabilisation of King Hussein's regime in Jordan. The massive scale of the IDF attack destroyed civilian homes and killed 15 Jordanian soldiers, sparking furious riots among Palestinians in the West Bank who accused the King of failing to protect them, which pressured him to move closer to an alliance with Egypt.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the events in May 1967 that led to the outbreak of the Six Day War. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>On 13 May, the USSR gave Nasser a false report that Israel was massing troops on the Syrian border, causing Nasser to mobilize forces into Sinai and expel UNEF peacekeepers.</li>
              <li>On 22 May, Nasser blockaded the Straits of Tiran, cutting off Israel's oil supply and vital southern trade route.</li>
              <li>On 30 May, Jordan signed a defense pact with Egypt, encircling Israel with a unified military alliance and <em>provoking</em> Israel to launch a pre-emptive strike on 5 June.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the Cairo Conference (1964) for relations between the Arab states and Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Cairo Conference was highly important because it established the Palestine Liberation Organisation (PLO), which institutionalised Arab political and military backing for Palestinian guerrilla operations. It also led to the Headwater Diversion Plan, establishing direct water rights disputes over the Jordan River sources, ensuring any physical diversion works would trigger military conflict.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of Syrian support for Fatah (1965–67) for relations with Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> Syrian support for Fatah was important because it provided a secure command and launching base for cross-border sabotage raids. These operations directly threatened Israeli farming communities and border settlements, which <em>provoked</em> severe IDF military reprisal actions and escalating artillery duels, pushing the two nations to the brink of open war.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of the actions of the USSR for the outbreak of the Six Day War. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Soviet Union's false intelligence warning on 13 May was the ultimate catalyst for the war. By incorrectly stating that Israel was planning a massive invasion of Syria, it forced Nasser's hand to take aggressive actions—mobilising troops, expelling UN peacekeepers, and blockading Eilat—which left Israel feeling completely encircled and compelled to launch its pre-emptive attack.
          </div>
        </div>
      </div>
    </div>

    `;
  } else if (subtopicId === 'subtopic_2_2') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 2.2 - The Six Day War (1967) and its aftermath
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to know how Israel won the Six Day War, the massive territorial changes that followed, and how this crushing Arab defeat pushed Palestinian groups towards international terrorism.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: The Six Day War (June 1967)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>Pre-emptive Strike:</strong> On 5 June 1967, Israel launched a devastating pre-emptive air strike that destroyed the air forces of Egypt, Syria, and Jordan on the ground, securing total air superiority.</li>
          <li><strong>Territorial Conquest:</strong> Within six days, the IDF rapidly defeated the Arab armies. This <span class="analytical-linkage">resulted in</span> Israel capturing vast new 'Occupied Territories': the <strong>Sinai Peninsula</strong> and <strong>Gaza Strip</strong> from Egypt, the <strong>West Bank</strong> and **East Jerusalem** from Jordan, and the <strong>Golan Heights</strong> from Syria.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: UN Resolution 242 & The Khartoum Summit</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>Land for Peace:</strong> In November 1967, the UN passed <strong>Resolution 242</strong>. It called for Israeli withdrawal from territories occupied in the recent conflict in exchange for Arab recognition of Israel's right to exist in peace.</li>
              <li><strong>The Three Nos:</strong> Arab leaders met at the <strong>Khartoum Conference</strong> in August 1967. Humiliated by their defeat, they issued the 'Three Nos': no peace with Israel, no recognition of Israel, and no negotiations with it. This <span class="analytical-linkage">caused</span> a diplomatic deadlock.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: Khartoum Resolution (1967)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "The Arab Heads of State have agreed to unite their political efforts to secure the withdrawal of Israeli forces... This will be done within the framework of no peace, no recognition, and no negotiations with the Zionist state."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: The Rise of International Terrorism (1970)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>A Change in Tactics:</strong> Frustrated by the defeat of Arab armies, Palestinian groups like the <strong>PFLP</strong> (Popular Front for the Liberation of Palestine) turned to international terrorism to force the world to pay attention to their cause.</li>
          <li><strong>Dawson's Field (1970):</strong> In September 1970, the PFLP hijacked four international passenger jets and blew three of them up at Dawson's Field in Jordan.</li>
          <li><strong>Black September:</strong> This bold action <span class="analytical-linkage">provoked</span> King Hussein of Jordan. Fearing the PLO was taking over his country, he unleashed his army, killed thousands of Palestinians, and <span class="analytical-linkage">forced</span> the PLO to relocate its headquarters to Lebanon.</li>
        </ul>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: The Munich Olympics Massacre (1972)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Attack:</strong> A radical Palestinian splinter group named <strong>Black September</strong> broke into the Olympic Village during the 1972 Munich games and took the Israeli athletic team hostage.</li>
              <li><strong>The Outcome:</strong> A botched German rescue attempt <span class="analytical-linkage">led to</span> the deaths of all 11 Israeli athletes.</li>
              <li><strong>The Repercussions:</strong> The massacre succeeded in gaining massive global publicity for the Palestinian cause, but it horrified the world and <span class="analytical-linkage">resulted in</span> Israel launching fierce, targeted reprisal assassinations (Operation Wrath of God).</li>
            </ul>
            
            <div class="examiner-tip-box">
              <span class="tip-icon">💡</span>
              <div>
                <strong>Examiner Tip:</strong> For a 4-mark consequence question on Munich, mention both the global media attention drawn to the Palestinian cause AND the fierce Israeli retaliation!
              </div>
            </div>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source B: Black September Statement (1972)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "We have not come to kill, but to liberate our brothers held in Zionist jails. The world has ignored us for twenty-four years; Munich has forced them to see that we still exist."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider -->
    <div class="dual-perspective-card left-active"
         data-left-headline="Securing the Promised Land (Keep It)"
         data-left-text="Israel must keep the territories. They provide a vital military 'buffer zone' to protect Israel from future invasions. Furthermore, places like East Jerusalem contain the holiest sites in Judaism, and the land was promised to the Jewish people by God."
         data-right-headline="An Illegal Military Occupation (Give It Back)"
         data-right-text="Taking land by force is completely illegal under international law. Under UN Resolution 242, Israel must withdraw its armed forces and return this stolen land to its rightful Arab owners in exchange for a lasting peace.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The Post-1967 Captured Territories</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">Securing the Promised Land (Keep It)</h4>
        <p class="dual-perspective-text">Israel must keep the territories. They provide a vital military 'buffer zone' to protect Israel from future invasions. Furthermore, places like East Jerusalem contain the holiest sites in Judaism, and the land was promised to the Jewish people by God.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. Which massive piece of territory did Israel capture from Egypt during the Six Day War?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: The Sinai Peninsula</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. What was the famous UN Resolution that established the 'Land for Peace' formula?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Resolution 242</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. What were the 'Three Nos' issued by Arab leaders at the Khartoum Summit?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: No peace, no recognition, no negotiation</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. In which country did the PFLP blow up hijacked international airplanes in 1970?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: Jordan</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. Which extreme Palestinian splinter group carried out the attack at the 1972 Munich Olympics?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: Black September</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of the PFLP airplane hijacks.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why were the PFLP airplane hijacks (1970) important for international attitudes towards the Palestine issue?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> They were highly important because by targeting innocent international civilians and global airlines, the PFLP succeeded in forcing the world's media to pay attention to the Palestinian refugee crisis. However, it also severely deteriorated their reputation by branding their struggle as global terrorism, costing them vital international sympathy.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the terrorist attack at the Munich Olympics. (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the Munich massacre was that it provoked a fierce, years-long retaliation campaign by Israel. Under Prime Minister Golda Meir, Israel launched 'Operation Wrath of God', a series of targeted covert assassinations by the Mossad to track down and kill the planners of the attack across Europe and the Middle East.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key developments in the Palestinian issue in the years 1970–72. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>In September 1970, the PFLP hijacked international passenger flights at Dawson's Field, displaying Palestinian tactical shift towards global terror.</li>
              <li>This action <em>provoked</em> King Hussein of Jordan to expel the PLO during the 'Black September' military crackdowns, forcing them to establish bases in Lebanon.</li>
              <li>From Lebanon, splinter groups launched further attacks, culminating in the 1972 Munich Olympics hostage siege, drawing massive global media coverage.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the occupied territories for Arab–Israeli relations after the Six Day War (1967). (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The occupied territories became the main obstacle to peace. For Arab states, reclaiming the Sinai, Golan Heights, and West Bank was a matter of national pride, leading to the Khartoum Summit's refusal to compromise. For Israel, these areas provided vital defensive buffers, meaning they would not withdraw without security guarantees, causing a total diplomatic deadlock.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of the PFLP airplane hijacks (1970) for international attitudes towards the Palestine issue. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The hijacks were important because they forced the Palestinian crisis out of regional obscurity and onto the global stage. However, by threatening neutral international air travel, it alienated Western public support and led governments to classify the Palestinian resistance as a terrorist movement, rather than a legitimate independence struggle.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of the Six Day War (1967) for Israel's security. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The war was highly important because Israel's pre-emptive strike eliminated immediate threats, while the captured territories (Sinai, Golan Heights, West Bank) provided huge geographic depth. This made it much harder for Arab states to launch surprise ground invasions on Israeli population centers, although it also drew them into long-term policing of hostile civilian populations.
          </div>
        </div>
      </div>
    </div>

    `;
  } else if (subtopicId === 'subtopic_2_3') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 2.3 - Israel, Egypt, and the Yom Kippur War (1967–1973)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand why Anwar Sadat decided to go to war, how Israel's false sense of security <span class="analytical-linkage">led to</span> their near-defeat, and how the Arab 'oil weapon' completely changed superpower involvement in the Middle East.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: Sadat and the War of Attrition (1967–1972)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The War of Attrition:</strong> After the Six Day War, Egypt and Israel fought a static but deadly artillery and air war across the blocked Suez Canal.</li>
          <li><strong>Sadat's Aim:</strong> In 1970, Anwar <strong>Sadat</strong> became President of Egypt. His main aim was to restore Egypt’s failing economy and reopen the Suez Canal, but to do this, he first needed to regain the <strong>Sinai Peninsula</strong> from Israel.</li>
          <li><strong>The Peace Offensive:</strong> Sadat offered peace in return for Sinai, and even expelled 15,000 Soviet advisers to win favour with the USA, but his offers were rejected. Frustrated, Sadat decided the only way to <span class="analytical-linkage">force</span> Israel to negotiate was to launch a surprise attack to make them realise they were not invincible.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: Israeli Complacency & Consolidation</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Bar Lev Line:</strong> Secure behind a massive sand-wall fortification along the Suez Canal known as the <strong>Bar Lev Line</strong>, Israel felt completely invulnerable.</li>
          <li><strong>Settlements:</strong> To consolidate its control over the Occupied Territories, the Israeli government began building permanent Jewish <strong>settlements</strong> in the West Bank, Gaza, Golan Heights, and Sinai.</li>
          <li><strong>The Intelligence Failure:</strong> Despite obvious Egyptian and Syrian troop build-ups on the borders, Israeli military intelligence ignored the warning signs. They suffered from a fatal "concept" that Arab armies were too weak to launch a coordinated attack.</li>
        </ul>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: The Yom Kippur War (October 1973)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Surprise Attack:</strong> On 6 October 1973, during <strong>Yom Kippur</strong> (the holiest day in the Jewish calendar when the country was at a standstill), Egypt and Syria launched a massive, coordinated surprise attack.</li>
              <li><strong>Early Arab Success:</strong> Egyptian engineers used high-pressure water cannons to blast through the Bar Lev Line and pour 23,000 troops into the Sinai. Simultaneously, 1,200 Syrian tanks invaded the <strong>Golan Heights</strong>.</li>
              <li><strong>Superpower Intervention:</strong> The USSR supplied the Arabs with advanced surface-to-air missiles (SAM-3s) which destroyed hundreds of Israeli tanks and planes. This <span class="analytical-linkage">provoked</span> the USA into launching a massive $2.2 billion emergency airlift of weapons to save Israel.</li>
              <li><strong>The Turnaround:</strong> Strengthened by US weapons, the IDF successfully counter-attacked, pushing into Syrian territory and crossing the Suez Canal into Egypt, surrounding the Egyptian Third Army.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: SADAT'S WAR SPEECH (OCTOBER 1973)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "We were not seeking an aggressive conquest, but the liberation of our occupied sands. We have pierced their pride and destroyed the myth that they are invincible, forcing them to negotiate on equal terms."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: The Aftermath and the Oil Weapon</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Oil Crisis:</strong> To punish the West for supporting Israel, Arab oil-producing states (OPEC) used the <strong>'oil weapon'</strong>. They placed an embargo on oil sales to the USA and quadrupled the price of oil. This <span class="analytical-linkage">resulted in</span> a devastating global economic crisis and fuel shortages.</li>
          <li><strong>Resolution 338:</strong> On 22 October, the UN passed <strong>Resolution 338</strong>, which <span class="analytical-linkage">forced</span> a ceasefire and called for immediate peace negotiations.</li>
          <li><strong>Psychological Shift:</strong> Although Israel survived militarily, the heavy casualties shattered the "myth of Israeli invincibility". Meanwhile, the initial military successes restored Arab pride, which <span class="analytical-linkage">caused</span> the diplomatic deadlock to break and paved the way for future peace treaties.</li>
        </ul>
        <div class="examiner-tip-box" style="margin-top: 16px;">
          <span class="tip-icon">💡</span>
          <div>
            <strong>Examiner Tip:</strong> For an 8-mark 'Importance' question, always explain that the Yom Kippur War was important because it triggered the use of the 'oil weapon', which <span class="analytical-linkage">forced</span> the USA to actively intervene in the Middle East peace process to protect its energy supplies!
          </div>
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider -->
    <div class="dual-perspective-card left-active"
         data-left-headline="A Treacherous Surprise Attack"
         data-left-text="On the holiest day of the Jewish calendar, Egypt and Syria launched a cowardly, unprovoked surprise attack while the country was at a standstill. Despite taking heavy initial casualties, the IDF miraculously fought back, crossed the Suez Canal, and secured a stunning military victory to ensure the survival of the Jewish state."
         data-right-headline="The Glorious Crossing (The Ramadan War)"
         data-right-text="A brilliant and totally justified military campaign to reclaim the sovereign Arab lands (the Sinai and Golan Heights) illegally stolen by Israel in 1967. By smashing through the 'invincible' Bar Lev Line, Arab pride was finally restored, forcing the arrogant West and Israel to take Arab demands for justice seriously.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The 1973 Yom Kippur War</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">A Treacherous Surprise Attack</h4>
        <p class="dual-perspective-text">On the holiest day of the Jewish calendar, Egypt and Syria launched a cowardly, unprovoked surprise attack while the country was at a standstill. Despite taking heavy initial casualties, the IDF miraculously fought back, crossed the Suez Canal, and secured a stunning military victory to ensure the survival of the Jewish state.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. Who became the President of Egypt in 1970?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: Anwar Sadat</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. What was the name of the massive Israeli sand-wall fortification along the Suez Canal?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: The Bar Lev Line</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. On what holy Jewish festival did Egypt and Syria launch their surprise attack?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: Yom Kippur</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. Which superpower sent a massive emergency airlift of military equipment to save Israel?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: The USA</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. What economic "weapon" did Arab states use to punish the West for supporting Israel?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: The Oil Weapon / Oil Embargo</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of the oil crisis.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was the oil crisis (1973) important for US involvement in the Middle East?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> It was highly important because the Arab oil embargo caused severe fuel shortages and a massive economic crisis in the USA. This forced the US government to realise they could no longer ignore the Arab-Israeli conflict. It <span class="analytical-linkage">resulted in</span> the USA taking an active role in peace negotiations (such as Kissinger's 'shuttle diplomacy') to end the conflict and ensure the secure flow of Middle Eastern oil to the West.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the Yom Kippur War (1973). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the Yom Kippur War was a massive global economic crisis triggered by the use of the Arab 'oil weapon'. In response to Western military aid for Israel, OPEC Arab members placed an embargo on oil sales to the USA and quadrupled prices, leading to severe fuel shortages and soaring inflation across the globe.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key events of the Yom Kippur War, 1973. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>On 6 October 1973, Egypt and Syria launched a surprise, coordinated attack on Yom Kippur, successfully breaching the Bar Lev Line and capturing Sinai and Golan outposts.</li>
              <li>The heavy use of Soviet-supplied missiles destroyed Israeli assets, which <em>provoked</em> the USA to launch a massive $2.2 billion emergency weapons airlift to save Israel.</li>
              <li>With new US supplies, the IDF counter-attacked, crossed the canal, and surrounded Egypt's forces, prompting the UN to step in and enforce Resolution 338.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the Yom Kippur War (1973) for developments in the Middle East. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Yom Kippur War was important because it broke the decade-long diplomatic deadlock. By piercing Israel's sense of absolute invincibility and restoring military pride to Egypt, it created a psychological shift that made both sides realise conflict was too costly, leading directly to future diplomatic negotiations and peace treaties.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of the oil crisis (1973) for US involvement in the Middle East. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The oil crisis was highly important because it showed the USA that its energy and economic security was directly linked to Middle Eastern stability. The economic pain of the OPEC embargo forced the US government to transition from a passive supplier to an active mediator, introducing Henry Kissinger's 'shuttle diplomacy' to broker ceasefires.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of Israeli settlements in the occupied territories for relations between Arabs and Israelis. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> Permanent settlements were important because they consolidated Israeli control over territories captured in 1967 (Gaza, West Bank, Sinai, Golan), demonstrating that Israel intended to retain these zones permanently. This acted as a major obstacle to peace, confirming Arab suspicions of expansionism and intensifying hostile relations.
          </div>
        </div>
      </div>
    </div>

    `;
  } else if (subtopicId === 'subtopic_3_1') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 3.1 - Diplomatic Negotiations (1974–1979)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand how the devastating 1973 oil crisis <span class="analytical-linkage">forced</span> the superpowers to intervene, leading to historic diplomacy that finally <span class="analytical-linkage">resulted in</span> a formal peace treaty between Egypt and Israel.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: The Oil Crisis and Superpower Involvement (1973–74)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Oil Weapon:</strong> During the Yom Kippur War, Arab oil-producing states used the 'oil weapon' (an embargo) to punish the West for supporting Israel. This <span class="analytical-linkage">caused</span> global fuel shortages, skyrocketing prices, and a severe economic crisis.</li>
          <li><strong>The US Motivation:</strong> The crisis <span class="analytical-linkage">forced</span> the USA to realise it could no longer ignore the Middle East. They desperately needed to stabilise the region to ensure a secure oil supply for the West.</li>
          <li><strong>The USSR:</strong> The Soviet Union had heavily armed the Arab states but also feared that the Middle East conflict could drag the superpowers into a direct nuclear confrontation. Both superpowers backed UN Resolution 338, calling for immediate peace negotiations.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: Kissinger and 'Shuttle Diplomacy' (1974–1975)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Middleman:</strong> Because Arab states and Israel completely refused to meet face-to-face, US Secretary of State <strong>Henry Kissinger</strong> acted as a 'go-between'.</li>
          <li><strong>Shuttle Diplomacy:</strong> For months, Kissinger flew back and forth between Tel Aviv, Cairo, and Damascus. This exhaustive process became known as <strong>'shuttle diplomacy'</strong>.</li>
          <li><strong>Early Success:</strong> Kissinger's efforts <span class="analytical-linkage">led to</span> initial military disengagement agreements. A major achievement was the reopening of the <strong>Suez Canal</strong> in June 1975, which greatly benefited the Egyptian economy and reduced the immediate threat of war.</li>
        </ul>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: Sadat and Begin's Historic Visits (1977)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Breakthrough:</strong> In November 1977, Egyptian President <strong>Anwar Sadat</strong> stunned the world by travelling to Jerusalem and addressing the Israeli parliament (the <strong>Knesset</strong>).</li>
              <li><strong>Shattering the Wall:</strong> By offering peace and officially recognising Israel's right to exist, Sadat effectively broke the 'Three Nos' of the 1967 Khartoum conference.</li>
              <li><strong>The Return Visit:</strong> In December 1977, newly elected Israeli Prime Minister <strong>Menachem Begin</strong> visited Egypt. This established direct, face-to-face contact, though negotiations soon stalled over the details of Palestinian autonomy and the Sinai.</li>
            </ul>
            <div class="examiner-tip-box">
              <span class="tip-icon">💡</span>
              <div>
                <strong>Examiner Tip:</strong> When explaining the importance of Sadat's visit, explicitly state that it broke the psychological barrier of hatred and showed that Arab states <em>could</em> negotiate directly with Israel without using intermediaries!
              </div>
            </div>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: ANWAR SADAT KNESSET SPEECH (NOVEMBER 1977)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "I come to you today on solid ground, to shape a new life, to establish peace... We want to live with you in permanent peace and justice. Today, I tell you, and I declare to the whole world, that we accept to live with you in peace."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: Camp David and the Treaty of Washington (1978–79)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Summit:</strong> To break the deadlock, US President <strong>Jimmy Carter</strong> invited Sadat and Begin to the presidential retreat at <strong>Camp David</strong> in September 1978 for 13 days of intense, secret negotiations.</li>
          <li><strong>The Accords:</strong> They signed the <strong>Camp David Accords</strong>, agreeing on two frameworks: one for broader peace in the Middle East (focusing on Palestinian autonomy) and one for an Egypt-Israel treaty.</li>
          <li><strong>The Treaty:</strong> In March 1979, they signed the formal <strong>Treaty of Washington</strong>. Israel agreed to withdraw its troops and settlements completely from the <strong>Sinai Peninsula</strong>. In exchange, Egypt officially recognised Israel and guaranteed safe passage for Israeli ships through the Suez Canal (the <strong>'Land for Peace'</strong> formula).</li>
        </ul>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. What economic 'weapon' did Arab states use in 1973 to punish the West?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: The Oil Embargo / Oil Crisis</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. Who was the US Secretary of State famous for flying between capitals to negotiate?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Henry Kissinger</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. Which major Egyptian waterway was reopened in 1975 as a result of early negotiations?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: The Suez Canal</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. Where did Anwar Sadat make his historic speech to the Israeli parliament in November 1977?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: The Knesset in Jerusalem</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. Which US President mediated the 1978 Camp David Accords?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: Jimmy Carter</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of Kissinger's 'shuttle diplomacy'.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was Kissinger's 'shuttle diplomacy' important for diplomatic negotiations in the Middle East?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> It was highly important because Israel and the Arab states refused to speak face-to-face. Kissinger's role as a trusted middleman allowed them to reach initial disengagement agreements. This reduced the immediate threat of war, reopened the Suez Canal in 1975, and laid the crucial groundwork of trust that paved the way for Sadat’s direct visit to Israel in 1977.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of Kissinger’s 'shuttle diplomacy' (1974). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of Kissinger's 'shuttle diplomacy' was the signing of the initial military disengagement agreements between Israel, Egypt, and Syria. This succeeded in separating the hostile armies along the Suez Canal and Golan Heights buffer zones, directly leading to the official reopening of the Suez Canal to international shipping in June 1975.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key events of 1974–79 that led to peace between Egypt and Israel. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>Following the oil crisis, Henry Kissinger used 'shuttle diplomacy' as a middleman to broker initial troop disengagements and reopen the Suez Canal.</li>
              <li>In November 1977, Anwar Sadat broke the diplomatic deadlock by visiting the Knesset in Jerusalem to offer direct peace, which Menachem Begin reciprocated by visiting Egypt.</li>
              <li>To resolve remaining disputes, President Jimmy Carter mediated the 1978 Camp David Accords, establishing the frameworks that <em>resulted in</em> the formal 1979 Treaty of Washington.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the oil crisis (1973–74) for diplomatic negotiations in the Middle East. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The oil crisis was important because the OPEC embargo caused severe economic pain in the West, showing the USA that regional instability threatened their domestic economy. This <em>forced</em> the US government to abandon its policy of passive containment and actively intervene as mediator, launching Kissinger's shuttle diplomacy to broker ceasefires.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of Kissinger’s ‘shuttle diplomacy’ for diplomatic negotiations. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> Shuttle diplomacy was highly important because it bypassed the Arab refusal to hold direct talks with Israel. By flying between capitals, Kissinger established a workable indirect channel that secured initial military pullbacks, defusing the immediate flashpoints and building the minimum necessary trust for future direct talks.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of the Camp David Accords (1978) for Arab-Israeli relations. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Camp David Accords were important because they established the 'Land for Peace' blueprint. They secured the withdrawal of Israeli military units and civilian settlements from the Sinai Peninsula, in exchange for Egypt's formal recognition of Israel. This successfully detached the most powerful Arab military state from the conflict coalition, permanently altering Middle East dynamics.
          </div>
        </div>
      </div>
    </div>

    `;
  } else if (subtopicId === 'subtopic_3_2') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 3.2 - The Palestinian Issue, Lebanon, and the Intifada (1974–1993)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand how the PLO operated in Lebanon, why Israel launched a massive invasion in 1982, and how the frustration of Palestinian civilians <span class="analytical-linkage">led to</span> the eruption of the First Intifada.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: Arafat at the UN & 'Fatahland'</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Olive Branch:</strong> In 1974, Yasser Arafat addressed the UN, famously stating he had come bearing an olive branch and a freedom fighter's gun. This <span class="analytical-linkage">resulted in</span> the PLO gaining international recognition and UN observer status.</li>
          <li><strong>Lebanon:</strong> After being expelled from Jordan in 1970, the PLO moved its headquarters to Lebanon. They established a 'state within a state' (nicknamed <strong>Fatahland</strong>) in southern Lebanon, where they launched rocket attacks and raids into northern Israel.</li>
          <li><strong>Escalation:</strong> The PLO's presence upset the balance of power in Lebanon, which contributed to the outbreak of the Lebanese Civil War in 1975, and <span class="analytical-linkage">provoked</span> frequent Israeli air strike reprisals.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: The Invasion of Lebanon (1982)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Trigger:</strong> In June 1982, following an assassination attempt on the Israeli ambassador in London by a Palestinian splinter group, Israel launched a massive invasion called <strong>Operation Peace for Galilee</strong>.</li>
          <li><strong>Sharon's Plan:</strong> The official aim was to push the PLO back 40km to create a buffer zone for northern Israel, but Defence Minister <strong>Ariel Sharon</strong> secretly planned to destroy the PLO completely and install a friendly Christian government in Beirut.</li>
          <li><strong>The Siege of Beirut:</strong> The IDF rapidly bypassed UN peacekeepers and surrounded the Lebanese capital. Israel subjected West Beirut to a devastating two-month bombardment, cutting off food and water. This <span class="analytical-linkage">forced</span> the PLO to agree to evacuate; Arafat and approximately 14,000 fighters were exiled to <strong>Tunis</strong> under international supervision.</li>
        </ul>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: The Sabra and Shatila Massacres (1982)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Atrocity:</strong> In September 1982, following the assassination of the Lebanese President, Lebanese Christian Phalangist militias entered the <strong>Sabra and Shatila</strong> refugee camps and brutally massacred hundreds of Palestinian and Lebanese civilians over three days.</li>
              <li><strong>Israel's Complicity:</strong> Although the Phalangists carried out the killings, the IDF controlled the area and had allowed the militias into the camps.</li>
              <li><strong>The Fallout:</strong> Israel’s own <strong>Kahan Commission</strong> found the government indirectly responsible. This <span class="analytical-linkage">resulted in</span> massive anti-war protests inside Israel, forced Ariel Sharon to resign as Defence Minister, and severely damaged Israel's international reputation.</li>
            </ul>
            <div class="examiner-tip-box">
              <span class="tip-icon">💡</span>
              <div>
                <strong>Examiner Tip:</strong> For an 8-mark 'Narrative Account' question on the PLO in Lebanon, use the expulsion to Tunis and the Sabra/Shatila massacres as your powerful end-point!
              </div>
            </div>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source A: KAHAN COMMISSION FINDINGS (1983)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "The decision to allow the Phalangists into the refugee camps was made without consideration of the danger... Ariel Sharon bears personal responsibility for ignoring the danger of acts of vengeance and bloodshed."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: The First Intifada (1987–93)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>The Spark:</strong> In December 1987, spontaneous mass protests broke out after an Israeli army truck killed four Palestinians in Gaza. Decades of frustration under Israeli occupation exploded into a grassroots uprising known as the <strong>Intifada</strong> (meaning 'shaking off').</li>
              <li><strong>David vs. Goliath:</strong> Palestinian youths famously fought heavily armed Israeli soldiers by throwing stones and petrol bombs. The uprising also featured mass civil disobedience, strikes, and boycotts of Israeli goods.</li>
              <li><strong>The Iron Fist:</strong> Israel's Defence Minister Yitzhak Rabin responded with a harsh <strong>'Iron Fist' policy</strong> (using tear gas, beatings, and live ammunition). This drew massive international condemnation.</li>
              <li><strong>Rise of Hamas:</strong> The uprising <span class="analytical-linkage">led to</span> the emergence of a new, radical Islamic militant group called <strong>Hamas</strong>, which challenged the PLO's leadership and rejected compromise.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">📝 Source B: PALESTINIAN INTIFADA LEAFLET (1988)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">
              "We throw stones because we have no other voice. The occupation has taken our lands and our youth. We will strike and boycott their markets until they leave our homes and recognize our state."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider 1 (Lebanon) -->
    <div class="dual-perspective-card left-active"
         data-left-headline="Operation Peace for Galilee"
         data-left-text="A necessary, defensive military operation to protect innocent Israeli civilians in the north. The PLO had essentially hijacked southern Lebanon, creating a 'state within a state' (Fatahland) to ruthlessly launch rocket attacks across the border. Israel was forced to act to destroy this terrorist infrastructure."
         data-right-headline="The Siege of Beirut and a Humanitarian Disaster"
         data-right-text="A brutal, disproportionate invasion orchestrated by Ariel Sharon that resulted in the indiscriminate bombing of an Arab capital, cutting off food, water, and electricity for two months. Israel's aggressive actions directly facilitated the horrific massacre of 3,500 innocent Palestinian refugees at the Sabra and Shatila camps.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The 1982 Invasion of Lebanon</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">Operation Peace for Galilee</h4>
        <p class="dual-perspective-text">A necessary, defensive military operation to protect innocent Israeli civilians in the north. The PLO had essentially hijacked southern Lebanon, creating a 'state within a state' (Fatahland) to ruthlessly launch rocket attacks across the border. Israel was forced to act to destroy this terrorist infrastructure.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider 2 (First Intifada) -->
    <div class="dual-perspective-card left-active"
         data-left-headline="A Campaign of Violent Riots"
         data-left-text="A dangerous, orchestrated wave of violence threatening the stability of the region. Palestinian mobs continuously attacked IDF soldiers and Israeli civilians with rocks and petrol bombs. The Israeli government had no choice but to implement a firm 'Iron Fist' policy to restore law, order, and security to the territories."
         data-right-headline="A Grassroots Struggle for Freedom"
         data-right-text="A heroic, spontaneous popular uprising by ordinary civilians, women, and children demanding basic human rights after decades of oppressive military occupation. It was a modern 'David vs. Goliath' struggle, where unarmed youth bravely faced down heavily armed Israeli tanks and brutal tear gas.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The First Intifada (1987–1993)</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">A Campaign of Violent Riots</h4>
        <p class="dual-perspective-text">A dangerous, orchestrated wave of violence threatening the stability of the region. Palestinian mobs continuously attacked IDF soldiers and Israeli civilians with rocks and petrol bombs. The Israeli government had no choice but to implement a firm 'Iron Fist' policy to restore law, order, and security to the territories.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. Which UN status was granted to the PLO after Arafat's famous 1974 speech?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: Observer Status</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. What was the Israeli code name for the 1982 invasion of Lebanon?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: Operation Peace for Galilee</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. To which North African city was the PLO exiled after the Siege of Beirut?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: Tunis</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. What were the names of the two refugee camps where a horrific massacre took place in 1982?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: Sabra and Shatila</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. What is the Arabic term for the Palestinian grassroots uprising that began in 1987?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: The Intifada</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis of the First Intifada.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was the First Intifada (1987–93) important for the Middle East peace process?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> It was highly important because it demonstrated that Israel's harsh military response (the 'Iron Fist' policy) could not crush Palestinian nationalism, severely damaging Israel's global reputation. The constant unrest and international pressure <span class="analytical-linkage">forced</span> both the Israeli government and the PLO to realise that a purely military solution was impossible, pushing them towards the secret negotiations that <span class="analytical-linkage">resulted in</span> the 1993 Oslo Accords.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of the Sabra and Shatila massacre (1982). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence of the Sabra and Shatila massacre was severe political fallout and protests inside Israel. Public outrage over IDF complicity forced the government to set up the Kahan Commission, which found Defence Minister Ariel Sharon personally responsible for ignoring the danger, forcing his resignation and severely damaging Israel's international standing.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key developments of the PLO in Lebanon in the years 1970–82. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>Following their 1970 expulsion from Jordan, the PLO established their new headquarters in Lebanon and set up 'Fatahland' to launch rocket raids into Israel.</li>
              <li>PLO actions destabilized Lebanon and triggered Israel's 1982 invasion (Operation Peace for Galilee), where the IDF rapidly advanced to Beirut and placed it under siege.</li>
              <li>The siege <em>forced</em> the PLO to evacuate Beirut under international supervision, expelling Yasser Arafat and 14,000 commandos to Tunis, ending their military presence in Lebanon.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of PLO activities in Lebanon (1970–82) for Israeli security. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> PLO activities in Lebanon were important because they posed a direct threat to civilian settlements in northern Israel. The creation of a militarized 'Fatahland' enclave allowed rocket attacks and border raids to occur routinely, eroding Israel's border security and eventually <em>provoking</em> the massive 1982 pre-emptive land invasion.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of the Israeli invasion of Lebanon (1982) for the PLO. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The 1982 invasion was important because it stripped the PLO of its main geographic launching base bordering Israel. By expelling Arafat and his commandos to distant Tunis, the PLO was geographically isolated from the conflict zone, which heavily reduced their military leverage and eventually <em>forced</em> them to transition towards diplomatic strategies.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of the Intifada for Israel in the years 1987–93. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Intifada was highly important because it showed Israel that permanent military control over occupied populations was unsustainable. The international condemnation of Rabin's 'Iron Fist' policy damaged Israel's diplomatic relationships, while the cost of policing the grassroots rebellion drained resources and eventually <em>forced</em> them to seek a political solution at Oslo.
          </div>
        </div>
      </div>
    </div>

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        ✓ Mark Topic 3.2 as Mastered
      </button>
    </div>
    `;
  } else if (subtopicId === 'subtopic_3_3') {
    container.innerHTML = `
    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h2 class="mastery-header-title">
        <i class="fa-solid fa-book-open"></i>
        🎓 GCSE CORE MASTERY: Key Topic 3.3 - The Oslo Peace Process and Attempts at a Solution (1988–1995)
      </h2>
      <p class="mastery-header-intro">
        To achieve top marks in this topic, you need to understand how the end of the Cold War and the Gulf War <span class="analytical-linkage">forced</span> the PLO and Israel to the negotiating table, leading to the historic Oslo Accords and the tragic assassination of Yitzhak Rabin.
      </p>
    </div>

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect—use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>🧠 Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    <!-- Step 1 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 1: Arafat Renounces Terrorism (1988)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>The Speech:</strong> Yasser Arafat addressed the UN in <strong>Geneva</strong> and announced a massive shift in PLO policy. He formally recognised Israel's right to exist, accepted UN Resolution 242 (the 'Land for Peace' formula), and officially renounced the use of terrorism.</li>
          <li><strong>The Impact:</strong> This major concession <span class="analytical-linkage">resulted in</span> the USA agreeing to open diplomatic dialogue with the PLO for the first time, breaking a long-standing political deadlock.</li>
        </ul>
      </div>
    </div>

    <!-- Step 2 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 2: Changing Superpower Policies (1989–1991)</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>End of the Cold War:</strong> The collapse of the <strong>USSR</strong> meant the PLO lost its main supplier of weapons and funding. Meanwhile, 200,000 Soviet Jews migrated to Israel, increasing pressure on Palestinian land. Global events severely weakened the PLO's bargaining position and <span class="analytical-linkage">forced</span> them to negotiate.</li>
          <li><strong>The Gulf War (1991):</strong> Arafat disastrously supported Saddam Hussein's invasion of Kuwait. This <span class="analytical-linkage">caused</span> angry Arab states (like Saudi Arabia and Kuwait) to cut off all financial aid to the PLO, leaving them bankrupt.</li>
          <li><strong>The Madrid Conference:</strong> The USA emerged from the Gulf War as the undisputed sole superpower and used its unmatched influence to organise the 1991 <strong>Madrid Peace Conference</strong>, pushing all sides to negotiate.</li>
        </ul>
      </div>
    </div>

    <!-- Step 3 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 3: The Oslo I Accords (1993)</h3>
      <div class="mastery-split-layout">
        <div class="mastery-text-column">
          <div class="mastery-card-body card-content">
            <ul>
              <li><strong>Secret Talks:</strong> Following highly secret negotiations in Norway, Israeli Prime Minister <strong>Yitzhak Rabin</strong> and Yasser Arafat signed the Oslo I Accords in Washington in September 1993.</li>
              <li><strong>Mutual Recognition:</strong> The PLO formally recognised the State of Israel, and Israel recognised the PLO as the legitimate representative of the Palestinian people.</li>
              <li><strong>The PNA:</strong> The agreement created the <strong>Palestinian National Authority (PNA)</strong>, giving Palestinians limited self-rule, initially in the Gaza Strip and the West Bank town of Jericho.</li>
              <li><strong>Peace with Jordan:</strong> The optimism of Oslo <span class="analytical-linkage">led to</span> <strong>Jordan</strong> becoming the second Arab state to sign a full peace treaty with Israel in 1994.</li>
            </ul>
          </div>
        </div>
        <div class="mastery-media-column">
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px; text-align: center;">
            <strong style="display: block; margin-bottom: 8px; color: var(--primary);">📷 HISTORICAL PHOTO PLACEHOLDER</strong>
            <div style="background: var(--bg-card); border: 1px dashed var(--primary); border-radius: 6px; padding: 12px 6px; margin-bottom: 10px;">
              <i class="fa-solid fa-handshake" style="font-size: 2rem; color: var(--primary); margin-bottom: 6px;"></i>
              <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">Rabin, Clinton, and Arafat shaking hands on the White House lawn (13 Sept 1993)</span>
            </div>
            <strong style="display: block; margin-bottom: 6px; color: var(--primary); text-align: left;">📝 Source A: Yitzhak Rabin's Oslo Speech (1993)</strong>
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0; text-align: left;">
              "We say to you today in a loud and clear voice: Enough of blood and tears. Enough! We harbor no hatred toward you... We, like you, are people who want to build a home, to plant a tree, to love..."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 Card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
      <h3 class="mastery-card-title">Step 4: Oslo II (1995) and the Collapse of Peace</h3>
      <div class="mastery-card-body card-content">
        <ul>
          <li><strong>Oslo II:</strong> In 1995, the second Oslo agreement divided the West Bank into <strong>Areas A, B, and C</strong>, giving the PNA varying levels of control and preparing for democratic Palestinian elections.</li>
          <li><strong>Hamas Opposition:</strong> Radical Islamic militant groups like <strong>Hamas</strong> completely rejected the peace deal and launched devastating suicide bombings inside Israel to derail it.</li>
          <li><strong>Israeli Opposition:</strong> Right-wing Israelis and settlers were furious at the prospect of giving up 'Promised Land' to the Palestinians. They viewed Prime Minister Rabin as a traitor.</li>
          <li><strong>Rabin's Assassination:</strong> In November 1995, Yitzhak Rabin was assassinated at a peace rally by an Israeli religious extremist, <strong>Yigal Amir</strong>. This horrific event shattered the optimism of the Oslo Accords and brought the peace process to a grinding halt.</li>
        </ul>
        <div class="examiner-tip-box">
          <span class="tip-icon">💡</span>
          <div>
            <strong>Examiner Tip:</strong> For an 8-mark 'Narrative Account' question on the peace process, use Rabin's assassination by Yigal Amir in 1995 as your endpoint to show how the peace process was ultimately derailed!
          </div>
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider 1 (Oslo Accords) -->
    <div class="dual-perspective-card left-active"
         data-left-headline="A Painful Compromise Met with Terror"
         data-left-text="Israel made unprecedented, painful compromises by formally recognising the PLO and offering Palestinians land and self-rule in the West Bank and Gaza. However, Arafat proved to be an untrustworthy partner; he failed to disarm terrorists, leading to a horrific wave of Hamas suicide bombings against innocent Israelis."
         data-right-headline="An Unfulfilled Promise and Broken Trust"
         data-right-text="The Palestinians made a historic compromise by giving up 78% of their historic homeland for peace. However, the Accords were a trap. Instead of granting true independence, Israel deliberately stalled the peace process, continually expanding illegal Jewish settlements and restricting Palestinian movement with humiliating military roadblocks.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The Oslo Accords (1993–1995)</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">A Painful Compromise Met with Terror</h4>
        <p class="dual-perspective-text">Israel made unprecedented, painful compromises by formally recognising the PLO and offering Palestinians land and self-rule in the West Bank and Gaza. However, Arafat proved to be an untrustworthy partner; he failed to disarm terrorists, leading to a horrific wave of Hamas suicide bombings against innocent Israelis.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- ⚖️ The Dual Perspective Slider 2 (Rabin Assassination) -->
    <div class="dual-perspective-card rabin-card left-active"
         data-left-headline="The Tragic Loss of a Peacemaker"
         data-left-text="A devastating national tragedy. Yitzhak Rabin was a heroic soldier-turned-statesman who bravely recognised that making peace with enemies was the only way to secure Israel's future. His murder by a fanatic shattered the optimism of the Oslo Accords and derailed the best chance the Middle East ever had for a lasting two-state solution."
         data-right-headline="Stopping a Betrayal"
         data-right-text="To religious extremists, the Oslo Accords were an unforgivable betrayal. To Israeli hardliners, Rabin was a &quot;traitor&quot; illegally giving away the sacred, God-given 'Promised Land' of Judea and Samaria to terrorists. Meanwhile, to Palestinian hardliners like Hamas, the peace process itself was a betrayal of the ultimate goal to completely destroy the state of Israel.">
      <h3 class="dual-perspective-neutral-title">⚖️ Dual Interpretation: The Assassination of Yitzhak Rabin (1995)</h3>
      <div class="dual-perspective-narrative-box">
        <h4 class="dual-perspective-headline">The Tragic Loss of a Peacemaker</h4>
        <p class="dual-perspective-text">A devastating national tragedy. Yitzhak Rabin was a heroic soldier-turned-statesman who bravely recognised that making peace with enemies was the only way to secure Israel's future. His murder by a fanatic shattered the optimism of the Oslo Accords and derailed the best chance the Middle East ever had for a lasting two-state solution.</p>
      </div>
      <div class="dual-perspective-slider-row">
        <span class="perspective-label label-left active">🕊️ The Peace Camp Perspective</span>
        <div class="slider-wrapper">
          <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
        </div>
        <span class="perspective-label label-right">⚔️ The Hardline/Extremist Perspective</span>
      </div>
      <div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">
        <span class="tip-icon">💡</span>
        <div>
          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!
        </div>
      </div>
    </div>

    <!-- Pre-Quiz Interactive Task -->
    <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
      <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
      
      <div class="chain-boxes" id="narrative-chain-boxes">
        <!-- Scrambled blocks populated programmatically -->
      </div>
      
      <div class="chain-feedback" id="narrative-chain-feedback"></div>
    </div>

    <!-- Knowledge Check Card -->
    <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">Knowledge Check: 🌍 The Diplomat's Test</h3>
      <div class="mastery-card-body">
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Test your memory on the exact facts examiners are looking for!
        </p>
        
        <div class="quiz-questions-list">
          <div class="quiz-question-item">
            <div class="quiz-question-text">1. In which European city did Arafat make his 1988 speech renouncing terrorism?</div>
            <div class="quiz-answer-text" id="ans-1">Answer: Geneva</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">2. Which global conflict in 1991 caused the PLO to lose its funding from angry Arab states?</div>
            <div class="quiz-answer-text" id="ans-2">Answer: The Gulf War</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">3. What was the name of the new Palestinian governing body created by the Oslo Accords?</div>
            <div class="quiz-answer-text" id="ans-3">Answer: The Palestinian National Authority (PNA)</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">4. Which Arab country signed a formal peace treaty with Israel in 1994?</div>
            <div class="quiz-answer-text" id="ans-4">Answer: Jordan</div>
          </div>
          <div class="quiz-question-item">
            <div class="quiz-question-text">5. Who assassinated Israeli Prime Minister Yitzhak Rabin in November 1995?</div>
            <div class="quiz-answer-text" id="ans-5">Answer: Yigal Amir</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
          <button class="mastery-btn mastery-btn-primary" id="btn-reveal-mastery-answers">
            <i class="fa-solid fa-eye"></i>
            Reveal Answers
          </button>
        </div>
      </div>
    </div>

    <!-- 8-Mark Skill: The Importance Analyser flip-card -->
    <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
        Click the card below to flip it and view the examiner's model analysis.
      </p>
      
      <div class="importance-flip-card" id="importance-analyser-card">
        <div class="importance-card-inner">
          <div class="importance-card-front">
            <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
            <strong>Question:</strong> Why was the end of the Cold War (1989–91) important for attempts to find a solution in the Middle East?
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
          </div>
          <div class="importance-card-back">
            <strong>Examiner Analysis:</strong> It was highly important because the collapse of the Soviet Union deprived the PLO of its main source of financial and military backing. This severely weakened Yasser Arafat's bargaining position. Facing bankruptcy and political isolation, this <span class="analytical-linkage">forced</span> the PLO to lower its demands and enter into the peace negotiations that ultimately <span class="analytical-linkage">resulted in</span> the 1993 Oslo Accords.
          </div>
        </div>
      </div>
    </div>

    <!-- Test Your Knowledge (Exam Question Vault) -->
    <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
      <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
        Click each question to view the model response blueprint.
      </p>
      <div class="vault-items">
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="0">
            <span>Explain one consequence of Arafat's renunciation of terrorism (1988). (4 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Model Consequence:</strong> One consequence was that the USA agreed to open a direct diplomatic dialogue with the PLO for the first time. By renouncing violence, recognizing Israel's right to exist, and accepting UN Resolution 242, Arafat met long-standing US pre-conditions, bypassing Israeli objections and breaking a decades-old diplomatic quarantine.
          </div>
        </div>
        
        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="1">
            <span>Write a narrative account analysing the key events of 1988–95 that led to the Oslo Accords. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Narrative Key Points:</strong>
            <ol style="margin-left: 20px; margin-top: 8px;">
              <li>In 1988, Arafat addressed the UN, renouncing terrorism and accepting UN 242, which prompted the US to open talks.</li>
              <li>The collapse of the USSR and the 1991 Gulf War left the PLO isolated and bankrupt, <span class="analytical-linkage">forcing</span> them into secret talks in Norway with Yitzhak Rabin's government.</li>
              <li>These talks culminated in the signing of the Oslo I Accords in 1993, establishing mutual recognition and setting up the PNA.</li>
            </ol>
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="2">
            <span>Explain the importance of the end of the Cold War for attempts to find a solution in the Middle East. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The end of the Cold War was important because it removed Soviet support for radical Arab factions and left the USA as the sole global hegemon. This shift in the balance of power took away the PLO's superpower patron and enabled the US to bring both sides together at the Madrid Conference in 1991, setting the stage for subsequent peace tracks.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="3">
            <span>Explain the importance of US involvement in the Gulf War (1991) for the Middle East peace process. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> US involvement in the Gulf War was important because defeating Iraq cemented US authority in the region, while Arafat's endorsement of Saddam Hussein alienated the oil-rich Gulf states. The cutoff of Gulf subsidies bankrupt the PLO and <span class="analytical-linkage">forced</span> Arafat to make major diplomatic concessions, allowing the US to host the Madrid Conference.
          </div>
        </div>

        <div class="vault-item">
          <button class="vault-question-btn" data-vault-idx="4">
            <span>Explain the importance of the Oslo Accords (1993) for relations between Israel and the Palestinians. (8 marks)</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="vault-answer-panel">
            <strong>Importance Analysis:</strong> The Oslo Accords were important because they established formal mutual recognition between the state of Israel and the PLO, replacing warfare with diplomacy. It created the PNA to provide Palestinians with limited self-governance in the West Bank and Gaza, laying the administrative foundation for a future two-state solution.
          </div>
        </div>
      </div>
    </div>

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        ✓ Mark Topic 3.3 as Mastered
      </button>
    </div>
    `;
  }

  // Set initial example index based on subtopic
  const matchingExampleIdx = PRACTICE_ROOM_DATA.findIndex(ex => ex.subtopicId === subtopicId);
  if (matchingExampleIdx !== -1) {
    practiceState.currentExampleIndex = matchingExampleIdx;
  } else {
    practiceState.currentExampleIndex = 0; // Default to first
  }
  practiceState.clickedErrors.clear();

  // Reconstruct container.innerHTML to wrap in tabs
  const headerCard = container.querySelector('.mastery-header-card');
  const headerHtml = headerCard ? headerCard.outerHTML : '';
  
  if (headerCard) {
    headerCard.remove();
  }
  
  const revisionHtml = container.innerHTML;
  
  const tabsHtml = `
    <div class="lessons-tabs" style="max-width: 800px; margin: 0 auto 20px auto; display: flex; gap: 12px; border-bottom: 2px solid var(--border-glass); padding-bottom: 10px;">
      <button class="lesson-tab-btn active" data-lesson-tab="revision">
        <i class="fa-solid fa-book-open"></i> Revision Notes
      </button>
      <button class="lesson-tab-btn" data-lesson-tab="practice">
        <i class="fa-solid fa-pen-nib"></i> Practice Room: The Examiner's Red Pen
      </button>
    </div>
  `;
  
  const practiceHtml = `
    <div class="lesson-tab-panel" id="lesson-panel-practice" style="display: none;">
      <div class="practice-room-container" style="max-width: 800px; margin: 0 auto 30px auto;">
        <div class="practice-room-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h3 style="font-family: var(--font-heading); margin: 0; font-size: 1.25rem;">📝 The Practice Room: Spot the Mistakes</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 4px 0 0 0;">Read the student response below and click on the historical errors to correct them with the red pen!</p>
          </div>
          <div class="practice-room-controls" style="display: flex; gap: 12px; align-items: center;">
            <span class="practice-progress-text" id="practice-mistakes-counter" style="font-weight: 600; font-size: 0.85rem; background: var(--accent-glow); color: var(--accent); padding: 6px 12px; border-radius: 12px; border: 1px solid rgba(244,63,94,0.2);">Mistakes found: 0/3</span>
            <button class="btn-secondary" id="btn-practice-next" style="padding: 8px 14px; font-size: 0.85rem; display: flex; align-items: center; gap: 8px; font-weight: 600; cursor: pointer; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass); background: rgba(0,0,0,0.1); color: var(--text-main);">
              Next Answer <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Lined Exam Paper Card -->
        <div class="exam-paper-card">
          <div class="exam-paper-margin"></div>
          <div class="exam-paper-content">
            <h4 class="exam-paper-question" id="practice-question-title" style="margin-top: 0; margin-bottom: 16px; font-family: var(--font-heading); border-bottom: 1px dashed var(--border-glass); padding-bottom: 8px; color: var(--primary);">Question: Explain the key events...</h4>
            
            <div class="exam-paper-lines" id="practice-answer-body">
              <!-- Handwritten paragraph with interactive errors -->
            </div>
          </div>
        </div>

        <!-- Success Message & Tip (Hidden initially) -->
        <div class="practice-success-box" id="practice-success-container" style="display: none; margin-top: 24px; padding: 20px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--border-radius-md); animation: fadeIn 0.4s ease;">
          <h4 style="font-family: var(--font-heading); color: var(--success); margin: 0 0 8px 0; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-circle-check"></i> Excellent Work! All Mistakes Identified
          </h4>
          <p style="font-size: 0.9rem; margin: 0 0 16px 0; color: var(--text-main); line-height: 1.5;">You have successfully spotted all the historical inaccuracies in this student answer and upgraded it to a grade 9 response.</p>
          <div class="examiner-tip-box" id="practice-examiner-tip" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--accent); font-size: 0.85rem; padding: 14px; border-radius: var(--border-radius-sm);">
            <!-- Tip content goes here -->
          </div>
        </div>
      </div>
    </div>
  `;
  
  container.innerHTML = `
    ${headerHtml}
    ${tabsHtml}
    <div class="lesson-tab-panel" id="lesson-panel-revision">
      ${revisionHtml}
    </div>
    ${practiceHtml}
  `;

  // Bind Events for Lessons View
  bindMasteryEvents(subtopicId);
}

function bindMasteryEvents(subtopicId) {
  const container = document.getElementById('mastery-content-container');

  // Bind Tab Switching for Lessons View
  const tabBtns = container.querySelectorAll('.lesson-tab-btn');
  const panelRevision = document.getElementById('lesson-panel-revision');
  const panelPractice = document.getElementById('lesson-panel-practice');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      const targetTab = btn.getAttribute('data-lesson-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (targetTab === 'revision') {
        if (panelRevision) panelRevision.style.display = 'block';
        if (panelPractice) panelPractice.style.display = 'none';
      } else if (targetTab === 'practice') {
        if (panelRevision) panelRevision.style.display = 'none';
        if (panelPractice) panelPractice.style.display = 'block';
        
        // Render Practice Room Content
        renderPracticeRoomContent();
      }
    });
  });

  // Next Answer Button click inside Practice Room
  const btnNextPractice = document.getElementById('btn-practice-next');
  if (btnNextPractice) {
    btnNextPractice.addEventListener('click', () => {
      AudioEngine.play('click');
      
      // Cycle example index
      practiceState.currentExampleIndex = (practiceState.currentExampleIndex + 1) % PRACTICE_ROOM_DATA.length;
      practiceState.clickedErrors.clear();
      
      renderPracticeRoomContent();
    });
  }

  // Hard Mode Toggle Switch
  const toggle = document.getElementById('mastery-hard-mode-toggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      if (container) {
        container.classList.toggle('hard-mode-active', toggle.checked);
        if (!toggle.checked) {
          container.querySelectorAll('.card-content strong').forEach(el => el.classList.remove('revealed'));
        }
      }
    });
  }

  // Active Recall Click to Reveal
  if (container) {
    container.addEventListener('click', (e) => {
      if (container.classList.contains('hard-mode-active')) {
        const strongEl = e.target.closest('.card-content strong');
        if (strongEl) {
          AudioEngine.play('click');
          strongEl.classList.toggle('revealed');
        }
      }
    });
  }

  // Interactive Map Toggle with Fallbacks
  const btnPartition = document.getElementById('btn-map-partition');
  const btnBorders = document.getElementById('btn-map-borders');
  const mapImg = document.getElementById('map-image-placeholder');

  const map1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="0" y="0" width="100" height="120" fill="#f8fafc" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" /><path d="M 40,5 L 55,5 L 60,20 L 44,20 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,20 L 48,20 L 48,60 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,70 L 50,70 L 52,112 L 44,115 L 43,90 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 48,20 L 62,35 L 75,60 L 58,60 L 48,45 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><path d="M 58,60 L 75,60 L 68,90 L 50,70 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><circle cx="51" cy="58" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1" /><text x="58" y="60" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ef4444">UN Zone</text><text x="10" y="15" font-family="sans-serif" font-size="6" font-weight="bold" fill="#f97316">Jewish State</text><text x="10" y="23" font-family="sans-serif" font-size="6" font-weight="bold" fill="#22c55e">Arab State</text><text x="35" y="112" font-family="sans-serif" font-size="5" fill="#94a3b8">1947 Plan</text></svg>`;
  const map2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="0" y="0" width="100" height="120" fill="#f8fafc" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="1.5" /><path d="M 46,35 L 60,35 L 70,60 L 65,80 L 52,75 L 46,55 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2" /><text x="50" y="55" font-family="sans-serif" font-size="5" font-weight="bold" fill="#166534">West Bank</text><text x="50" y="61" font-family="sans-serif" font-size="4" fill="#166534">(Jordan)</text><path d="M 32,50 L 37,50 L 40,65 L 35,65 Z" fill="#fef9c3" stroke="#eab308" stroke-width="1" stroke-dasharray="2,2" /><text x="21" y="62" font-family="sans-serif" font-size="4" font-weight="bold" fill="#854d0e">Gaza</text><circle cx="48" cy="53" r="2.5" fill="#ef4444" stroke="#ffffff" stroke-width="0.5" /><text x="10" y="15" font-family="sans-serif" font-size="6" font-weight="bold" fill="#f97316">Israel</text><text x="35" y="112" font-family="sans-serif" font-size="5" fill="#94a3b8">1949 Armistice</text></svg>`;

  const map1DataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(map1Svg)));
  const map2DataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(map2Svg)));

  if (mapImg) {
    const handleImgError = () => {
      if (mapImg.src.includes('map_1947.png')) {
        mapImg.src = map1DataUrl;
      } else if (mapImg.src.includes('map_1949.png')) {
        mapImg.src = map2DataUrl;
      }
    };

    mapImg.addEventListener('error', handleImgError);

    if (mapImg.complete && mapImg.naturalWidth === 0) {
      handleImgError();
    }

    if (btnPartition && btnBorders) {
      btnPartition.addEventListener('click', () => {
        AudioEngine.play('click');
        btnPartition.classList.add('active');
        btnBorders.classList.remove('active');
        mapImg.src = "assets/map_1947.png";
        setTimeout(() => {
          if (mapImg.naturalWidth === 0) {
            mapImg.src = map1DataUrl;
          }
        }, 60);
      });

      btnBorders.addEventListener('click', () => {
        AudioEngine.play('click');
        btnBorders.classList.add('active');
        btnPartition.classList.remove('active');
        mapImg.src = "assets/map_1949.png";
        setTimeout(() => {
          if (mapImg.naturalWidth === 0) {
            mapImg.src = map2DataUrl;
          }
        }, 60);
      });
    }
  }

  // Narrative Chain Chronological Ordering Game
  let chainData = [];
  let correctOrder = [];
  let successText = "";
  let failText = "";

  if (subtopicId === 'subtopic_1_1') {
    chainData = [
      { id: 'chain_un', value: 'un', label: 'UN Resolution 181' },
      { id: 'chain_war', value: 'war', label: 'The 1948-49 Arab-Israeli War' },
      { id: 'chain_bombing', value: 'bombing', label: 'The King David Hotel Bombing' }
    ];
    correctOrder = ['bombing', 'un', 'war'];
    successText = "Excellent! You have built a chronological sequence: The bombing made the mandate unworkable, leading the UN to partition the land, which triggered the Arab invasion.";
    failText = "Timeline out of order! Chronological flow: Bombing (1946) -> Partition (1947) -> War (1948). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_1_2') {
    chainData = [
      { id: 'chain_war_12', value: 'war_12', label: 'The 1948-49 Arab-Israeli War' },
      { id: 'chain_refugees', value: 'refugees', label: 'Israel expands borders & refuses refugee return' },
      { id: 'chain_fedayeen', value: 'fedayeen', label: 'Rise of Fedayeen cross-border raids' }
    ];
    correctOrder = ['war_12', 'refugees', 'fedayeen'];
    successText = "Excellent! You have built a chronological sequence: The 1948 war resulted in a massive refugee crisis and lost territory, which provoked angry refugees to form the Fedayeen and launch cross-border raids against Israel.";
    failText = "Timeline out of order! Chronological flow: Arab-Israeli War (1948) -> Expansion & Refusal of Return (1949) -> Fedayeen Raids (1950s). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_1_3') {
    chainData = [
      { id: 'chain_gaza', value: 'gaza_raid', label: 'The Israeli raid on Gaza' },
      { id: 'chain_czech', value: 'czech_deal', label: 'The Czech Arms Deal' },
      { id: 'chain_nationalisation', value: 'nationalisation', label: 'Nationalisation of the Suez Canal' }
    ];
    correctOrder = ['gaza_raid', 'czech_deal', 'nationalisation'];
    successText = "Excellent! You have built a chronological sequence: The Israeli raid on Gaza showed Egyptian weakness, which provoked Nasser into signing the Czech Arms Deal. This angered the USA who withdrew funding, which caused Nasser to nationalise the Suez Canal.";
    failText = "Timeline out of order! Chronological flow: Gaza Raid (1955) -> Czech Arms Deal (1955) -> Suez Nationalisation (1956). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_2_1') {
    chainData = [
      { id: 'chain_warning', value: 'warning', label: 'The USSR gives false warning' },
      { id: 'chain_expel', value: 'expel', label: 'Nasser orders UN troops out of Sinai' },
      { id: 'chain_blockade', value: 'blockade', label: 'Nasser blockades the Straits of Tiran' }
    ];
    correctOrder = ['warning', 'expel', 'blockade'];
    successText = "Excellent! The Soviet misinformation caused Nasser to move troops into the Sinai and expel the UN, which led to him blockading the Straits of Tiran—an act of war.";
    failText = "Timeline out of order! Chronological flow: Soviet Warning (13 May) -> EXPEL UNEF (16 May) -> Straits Blockade (22 May). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_2_2') {
    chainData = [
      { id: 'chain_rapid_victory', value: 'rapid_victory', label: "Israel's rapid victory in 1967" },
      { id: 'chain_dawsons', value: 'dawsons', label: "PFLP Hijackings at Dawson's Field" },
      { id: 'chain_expelled_lebanon', value: 'expelled_lebanon', label: "PLO expelled from Jordan to Lebanon" }
    ];
    correctOrder = ['rapid_victory', 'dawsons', 'expelled_lebanon'];
    successText = "Excellent! Israel's 1967 victory pushed the Palestinians to use terrorism, such as the 1970 airplane hijackings, which provoked King Hussein into expelling the PLO from Jordan.";
    failText = "Timeline out of order! Chronological flow: Six Day War (1967) -> Dawson's Field Hijackings (1970) -> Black September PLO expulsion (1970–71). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_2_3') {
    chainData = [
      { id: 'chain_peace_rejected', value: 'peace_rejected', label: "Sadat's peace offers are rejected" },
      { id: 'chain_surprise_attack', value: 'surprise_attack', label: "Egypt & Syria launch surprise attack" },
      { id: 'chain_oil_weapon', value: 'oil_weapon', label: "Arab states use the 'oil weapon'" }
    ];
    correctOrder = ['peace_rejected', 'surprise_attack', 'oil_weapon'];
    successText = "Excellent! Because peaceful attempts to regain Sinai failed, Sadat launched a surprise attack on Yom Kippur, which then prompted Arab states to use the 'oil weapon' to pressure the USA to intervene.";
    failText = "Timeline out of order! Chronological flow: Peace Offers Rejected (1971–72) -> Yom Kippur Attack (6 Oct 1973) -> Oil Embargo (17 Oct 1973). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_3_1') {
    chainData = [
      { id: 'chain_oil_crisis_31', value: 'oil_crisis_31', label: 'The 1973 Oil Crisis' },
      { id: 'chain_kissinger_shuttle', value: 'kissinger_shuttle', label: "Kissinger's Shuttle Diplomacy" },
      { id: 'chain_treaty_washington', value: 'treaty_washington', label: 'The Treaty of Washington' }
    ];
    correctOrder = ['oil_crisis_31', 'kissinger_shuttle', 'treaty_washington'];
    successText = "Excellent! The oil crisis forced the USA to intervene using shuttle diplomacy, which started the face-to-face peace process that eventually resulted in the historic Treaty of Washington.";
    failText = "Timeline out of order! Chronological flow: Oil Crisis (Oct 1973) -> Shuttle Diplomacy (1974–75) -> Treaty of Washington (Mar 1979). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_3_2') {
    chainData = [
      { id: 'chain_rocket_attacks', value: 'rocket_attacks', label: "PLO rocket attacks from 'Fatahland'" },
      { id: 'chain_peace_galilee', value: 'peace_galilee', label: "Israel launches 'Operation Peace for Galilee'" },
      { id: 'chain_siege_expelled', value: 'siege_expelled', label: "PLO is besieged in Beirut and expelled to Tunis" }
    ];
    correctOrder = ['rocket_attacks', 'peace_galilee', 'siege_expelled'];
    successText = "Excellent! The PLO's cross-border raids provoked Israel into launching a massive invasion in 1982, which ultimately resulted in the Siege of Beirut and the expulsion of Arafat to Tunis.";
    failText = "Timeline out of order! Chronological flow: Rocket Attacks / Fatahland (1970s) -> Invasion (June 1982) -> Beirut Siege & Expulsion (August 1982). Click the highlighted blocks to reset.";
  } else if (subtopicId === 'subtopic_3_3') {
    chainData = [
      { id: 'chain_cold_gulf_war', value: 'cold_gulf_war', label: 'The End of the Cold War & Gulf War' },
      { id: 'chain_secret_norway', value: 'secret_norway', label: 'Secret talks in Norway' },
      { id: 'chain_oslo_accords', value: 'oslo_accords', label: 'The signing of the Oslo Accords' }
    ];
    correctOrder = ['cold_gulf_war', 'secret_norway', 'oslo_accords'];
    successText = "Excellent! The collapse of Soviet funding and the fallout from the Gulf War weakened the PLO, forcing Arafat into secret talks in Norway that ultimately resulted in the historic Oslo Accords.";
    failText = "Timeline out of order! Chronological flow: End of Cold War / Gulf War (1989–91) -> Secret Norway Talks (1992–93) -> Signing of Oslo Accords (Sept 1993). Click the highlighted blocks to reset.";
  }

  const selectedChain = [];
  const boxesContainer = document.getElementById('narrative-chain-boxes');
  const feedbackEl = document.getElementById('narrative-chain-feedback');

  function renderChainBoxes() {
    if (!boxesContainer) return;
    boxesContainer.innerHTML = '';
    
    chainData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'chain-box';
      div.id = item.id;
      div.innerText = item.label;

      const selectIdx = selectedChain.indexOf(item.value);
      if (selectIdx > -1) {
        div.classList.add('selected');
        const badge = document.createElement('div');
        badge.className = 'chain-number-badge';
        badge.innerText = selectIdx + 1;
        div.appendChild(badge);
      }

      div.addEventListener('click', () => {
        AudioEngine.play('click');
        const idx = selectedChain.indexOf(item.value);
        if (idx > -1) {
          selectedChain.splice(idx, 1);
        } else {
          selectedChain.push(item.value);
        }
        renderChainBoxes();
        checkChainResult();
      });

      boxesContainer.appendChild(div);
    });
  }

  function checkChainResult() {
    if (!feedbackEl) return;
    if (selectedChain.length === 0) {
      feedbackEl.innerHTML = '';
      return;
    }

    if (selectedChain.length < correctOrder.length) {
      feedbackEl.innerHTML = `
        <div style="display: flex; justify-content: center; margin-top: 8px;">
          <button class="btn-secondary" id="btn-reset-narrative-chain" style="padding: 6px 12px; font-size: 0.8rem; font-family: var(--font-body); display: flex; align-items: center; gap: 6px; border-color: rgba(255,255,255,0.1);">
            <i class="fa-solid fa-rotate-left"></i> Reset Sequence
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-narrative-chain');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          AudioEngine.play('click');
          selectedChain.length = 0;
          renderChainBoxes();
          feedbackEl.innerHTML = '';
        });
      }
      return;
    }

    const isCorrect = selectedChain.every((val, index) => val === correctOrder[index]);
    if (isCorrect) {
      AudioEngine.play('success');
      feedbackEl.style.color = 'var(--success)';
      feedbackEl.innerHTML = `
        <span style="font-size: 1.05rem; display: block; margin-bottom: 4px; font-weight: bold;">✓ CORRECT CHRONOLOGY!</span>
        ${successText}
      `;
    } else {
      AudioEngine.play('fail');
      feedbackEl.style.color = 'var(--accent)';
      feedbackEl.innerHTML = `
        <span style="font-size: 1.05rem; display: block; margin-bottom: 4px; font-weight: bold;">✗ INCORRECT SEQUENCE</span>
        ${failText}
        <div style="margin-top: 12px; display: flex; justify-content: center;">
          <button class="btn-secondary" id="btn-reset-narrative-chain" style="padding: 6px 12px; font-size: 0.8rem; font-family: var(--font-body); display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-rotate-left"></i> Reset Sequence
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-narrative-chain');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          AudioEngine.play('click');
          selectedChain.length = 0;
          renderChainBoxes();
          feedbackEl.innerHTML = '';
        });
      }
    }
  }

  renderChainBoxes();

  // Bind Dual Perspective Sliders
  const sliderCards = container.querySelectorAll('.dual-perspective-card');
  sliderCards.forEach(card => {
    const slider = card.querySelector('.perspective-range-slider');
    const labelLeft = card.querySelector('.perspective-label.label-left');
    const labelRight = card.querySelector('.perspective-label.label-right');
    const headline = card.querySelector('.dual-perspective-headline');
    const text = card.querySelector('.dual-perspective-text');

    if (!slider || !labelLeft || !labelRight || !headline || !text) return;

    // Inject visual hint dynamically for usability
    const sliderRow = card.querySelector('.dual-perspective-slider-row');
    if (sliderRow && !card.querySelector('.slider-hint')) {
      const hint = document.createElement('div');
      hint.className = 'slider-hint';
      hint.style.cssText = 'text-align: center; font-size: 0.7rem; color: var(--text-muted); margin-top: 8px; font-style: italic; display: flex; align-items: center; justify-content: center; gap: 4px; opacity: 0.8;';
      hint.innerHTML = `<i class="fa-solid fa-arrows-left-right"></i> Drag slider or click labels to compare perspectives`;
      sliderRow.after(hint);
    }

    const leftHeadline = card.getAttribute('data-left-headline');
    const leftText = card.getAttribute('data-left-text');
    const rightHeadline = card.getAttribute('data-right-headline');
    const rightText = card.getAttribute('data-right-text');

    let currentPerspective = 'left';

    slider.addEventListener('input', () => {
      const val = parseInt(slider.value);
      const isRight = val >= 50;
      const newPerspective = isRight ? 'right' : 'left';

      if (newPerspective !== currentPerspective) {
        AudioEngine.play('click');
        currentPerspective = newPerspective;

        const narrativeBox = card.querySelector('.dual-perspective-narrative-box');
        if (narrativeBox) {
          narrativeBox.classList.remove('perspective-fade');
          void narrativeBox.offsetWidth;
          narrativeBox.classList.add('perspective-fade');
        }

        if (isRight) {
          card.classList.remove('left-active');
          card.classList.add('right-active');
          labelLeft.classList.remove('active');
          labelRight.classList.add('active');
          headline.innerText = rightHeadline;
          text.innerText = rightText;
        } else {
          card.classList.remove('right-active');
          card.classList.add('left-active');
          labelRight.classList.remove('active');
          labelLeft.classList.add('active');
          headline.innerText = leftHeadline;
          text.innerText = leftText;
        }
      }
    });

    labelLeft.addEventListener('click', () => {
      if (slider.value != 0) {
        slider.value = 0;
        slider.dispatchEvent(new Event('input'));
      }
    });

    labelRight.addEventListener('click', () => {
      if (slider.value != 100) {
        slider.value = 100;
        slider.dispatchEvent(new Event('input'));
      }
    });
  });

  // Importance Analyser Flip Card Listener
  const flipCard = document.getElementById('importance-analyser-card');
  if (flipCard) {
    flipCard.addEventListener('click', () => {
      AudioEngine.play('flip');
      flipCard.classList.toggle('flipped');
    });
  }

  // Exam Question Vault Accordion Toggles
  const vaultQuestionBtns = container.querySelectorAll('.vault-question-btn');
  vaultQuestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      const panel = btn.nextElementSibling;
      const isVisible = panel.classList.contains('active');
      
      // Close all panels
      container.querySelectorAll('.vault-answer-panel').forEach(p => p.classList.remove('active'));
      container.querySelectorAll('.vault-question-btn i').forEach(icon => {
        icon.className = 'fa-solid fa-chevron-down';
      });

      if (!isVisible) {
        panel.classList.add('active');
        btn.querySelector('i').className = 'fa-solid fa-chevron-up';
      }
    });
  });

  // Reveal Answers
  const btnReveal = document.getElementById('btn-reveal-mastery-answers');
  const quizCard = document.getElementById('mastery-quiz-card');
  if (btnReveal && quizCard) {
    btnReveal.addEventListener('click', () => {
      AudioEngine.play('click');
      const isRevealed = quizCard.classList.toggle('quiz-answers-revealed');
      btnReveal.innerHTML = isRevealed ? '<i class="fa-solid fa-eye-slash"></i> Hide Answers' : '<i class="fa-solid fa-eye"></i> Reveal Answers';
    });
  }

  // Mark Mastery button
  const btnMark = document.getElementById('btn-mark-mastery-mastered');
  if (btnMark) {
    btnMark.addEventListener('click', () => {
      AudioEngine.play('cheer');
      btnMark.classList.add('clicked');
      btnMark.disabled = true;
      btnMark.innerText = "Mastered! Returning to Menu...";
      
      // Update local storage / state mastery records
      QUIZ_DATA.forEach(topic => {
        topic.subtopics.forEach(sub => {
          if (sub.id === subtopicId) {
            const subQuestions = state.allQuestions.filter(q => q.subtopicId === sub.id);
            subQuestions.forEach(q => {
              state.mastery[q.id] = true;
            });
          }
        });
      });
      saveProgress();
      renderSidebarNav();
      updateGlobalStats();

      setTimeout(() => {
        switchView('dashboard');
      }, 1500);
    });
  }
}

// --- END OF MODULE lessons.js ---

// --- START OF MODULE main.js ---
// --- Application Entry Point ---
window.addEventListener('DOMContentLoaded', () => {
  initData();
  renderSidebarNav();
  updateGlobalStats();
  bindEvents();
  
  // Bind video modal close events
  const closeBtn = document.getElementById('video-modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }
  const modalOverlay = document.getElementById('video-modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeVideoModal();
      }
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.style.display === 'flex') {
      closeVideoModal();
    }
  });
  
  // Render default Dashboard view
  switchView('dashboard');
});
// --- END OF MODULE main.js ---

