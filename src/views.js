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


