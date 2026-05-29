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
