/*
   Edexcel GCSE History Paper 2 Conflict in the Middle East Mastery - Application Controller
   Handles SPA routing, progress syncing, audio synthesis, exam timing, 
   flashcard sessions, global search, and timeline assembly.
*/

// --- Global Application State ---
export const state = {
  currentView: 'dashboard',         // 'dashboard' | 'classic' | 'flashcards' | 'exam' | 'timeline' | 'bookmarks'
  selectedSubtopicId: null,         // Active sub-topic ID (e.g. 'subtopic_1_1')
  selectedKeyTopicId: null,          // Active Key Topic ID (e.g. 'topic_1')
  highlightGoingBeyondId: null,      // Active Going Beyond Card to scroll and glow (e.g. 'gb-jerusalem')
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
  },
  
  // Taboo Revision Game State
  tabooGameSession: {
    teams: [
      { name: 'Team A', score: 0 },
      { name: 'Team B', score: 0 }
    ],
    currentTeamIndex: 0,
    currentCardIndex: 0,
    deck: [],
    timerLimit: 60,
    timerRemaining: 60,
    timerInterval: null,
    isPlaying: false
  }
};