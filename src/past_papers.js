import { state } from './state.js';
import { saveProgress } from './storage.js';
import { AudioEngine } from './audio.js';
import { getKeywordsForQuestion } from './layout.js';
import { PAST_PAPERS_DATA, CONSEQUENCE_SKILLS_DATA, NARRATIVE_SKILLS_DATA, EXAM_SKILLS_DATA } from '../questions.js';

// --- Past Exam Papers Engine ---

export function updateDraftFeedback(qId, value, questionObj) {
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

export function renderPastPapersView() {
  const container = document.getElementById('past-paper-sheet-container');
  if (state.pastPaperSession.activePaperId) {
    renderExamSheet();
    if (container) container.style.display = 'block';
  } else {
    if (container) container.style.display = 'none';
  }
}

export function startPastPaper(paperId) {
  const paper = PAST_PAPERS_DATA.find(p => p.id === paperId);
  if (!paper) return;

  state.pastPaperSession.activePaperId = paperId;
  state.pastPaperSession.activePaperData = paper;
  if (!state.pastPaperSession.answers[paperId]) {
    state.pastPaperSession.answers[paperId] = {};
  }
  
  renderExamSheet();
  const sheetContainer = document.getElementById('past-paper-sheet-container');
  if (sheetContainer) sheetContainer.style.display = 'block';
}

export function generateMockExam() {
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
  const sheetContainer = document.getElementById('past-paper-sheet-container');
  if (sheetContainer) sheetContainer.style.display = 'block';
}

export function togglePastClue(qId) {
  const box = document.getElementById(`past-clue-box-${qId}`);
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = isHidden ? 'block' : 'none';
  AudioEngine.play(isHidden ? 'flip' : 'click');
}

export function togglePastAnswer(qId) {
  const box = document.getElementById(`past-answer-box-${qId}`);
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = isHidden ? 'block' : 'none';
  AudioEngine.play(isHidden ? 'success' : 'click');
}

export function togglePastQuestionComplete(qId, checked) {
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

export function renderExamSheet() {
  const session = state.pastPaperSession;
  const paper = session.activePaperData;
  const container = document.getElementById('past-paper-sheet-container');
  if (!paper || !container) return;

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

  const closeBtn = document.getElementById('btn-close-exam-sheet');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      state.pastPaperSession.activePaperId = null;
      state.pastPaperSession.activePaperData = null;
      container.style.display = 'none';
      const selectEl = document.getElementById('past-paper-select');
      if (selectEl) selectEl.value = '';
    });
  }
}

export function renderPastQuestionMarkup(qId, questionText, clue, modelAnswer, marks, stimulus = null) {
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

export function renderExamSheetStats() {
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