import { LESSONS_DATA } from './lessons_data.js';
import { PRACTICE_ROOM_DATA, practiceState } from './games.js';
import { state } from './state.js';
import { switchView } from './navigation.js';
import { renderSidebarNav, updateGlobalStats, KEY_FIGURES_BIO } from './views.js';
import { saveProgress } from './storage.js';
import { AudioEngine } from './audio.js';
import { Confetti } from './confetti.js';
import { QUIZ_DATA } from '../questions.js';
import { VIDEOS_DATA } from './videos_data.js';
import { getFallbackUrl } from './image_fallback.js';
import { LESSON_EXTENSIONS } from './lesson_extensions.js';
import { SPEC_CHECKLIST_DATA } from './spec_checklist_data.js';

export function renderPracticeRoomContent() {
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

export function renderSpecChecklistCard(subtopicId, checklist) {
  if (!checklist || checklist.length === 0) return '';
  
  let checkedStates = {};
  try {
    const saved = localStorage.getItem('edexcel_spec_checklist');
    if (saved) {
      checkedStates = JSON.parse(saved);
    }
  } catch (e) {
    console.error(e);
  }

  const itemsHtml = checklist.map((item, idx) => {
    const key = `${subtopicId}_${idx}`;
    const isChecked = checkedStates[key] || false;
    
    const keyFactsHtml = item.keyFacts.map(fact => `
      <li style="margin-bottom: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-muted); position: relative; padding-left: 18px; list-style-type: none;">
        <span style="position: absolute; left: 0; top: 0; color: var(--primary); font-size: 1.1rem; line-height: 1;">&bull;</span>
        ${fact}
      </li>
    `).join('');

    return `
      <div class="spec-checklist-item ${isChecked ? 'checked' : ''}" data-key="${key}">
        <div class="spec-checklist-main" style="display: flex; align-items: flex-start; gap: 12px; width: 100%;">
          <div class="spec-checklist-checkbox">
            <i class="fa-solid fa-check"></i>
          </div>
          <div class="spec-checklist-text" style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">${item.point}</div>
        </div>
        <div class="spec-checklist-expansion">
          <ul style="margin: 0; padding: 0;">
            ${keyFactsHtml}
          </ul>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="spec-checklist-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h4 class="spec-checklist-title" style="display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-clipboard-list" style="color: var(--primary);"></i> Official Spec Checklist: Topic study goals
      </h4>
      <p class="spec-checklist-subtitle" style="margin-top: 6px; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">
        Tick each official Edexcel specification point to expand the key facts you need for the exam:
      </p>
      <div class="spec-checklist-items">
        ${itemsHtml}
      </div>
    </div>
  `;
}

export function renderMasteryView(subtopicId) {
  const container = document.getElementById('mastery-content-container');
  if (!container) return;

  const data = LESSONS_DATA[subtopicId];

  if (!data) {
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

  // Generate Do Now Starter HTML
  let doNowHtml = '';
  if (data.doNowStarter) {
    const dn = data.doNowStarter;
    let prevLessonLinkHtml = '';
    if (dn.prevSubtopicId && dn.prevSubtopicTitle) {
      prevLessonLinkHtml = `
        <div style="margin-bottom: 14px; font-size: 0.88rem;">
          <i class="fa-solid fa-arrow-left" style="color: var(--primary);"></i> 
          Prior Topic Retrieval: 
          <button class="do-now-prev-link-btn" data-prev-id="${dn.prevSubtopicId}" style="background: none; border: none; color: var(--primary); font-weight: 700; text-decoration: underline; cursor: pointer; padding: 0; font-size: 0.88rem;">
            ${dn.prevSubtopicTitle}
          </button>
        </div>
      `;
    } else {
      prevLessonLinkHtml = `
        <div style="margin-bottom: 14px; font-size: 0.88rem; color: var(--accent); font-weight: 700;">
          <i class="fa-solid fa-star"></i> Course Introduction Retrieval
        </div>
      `;
    }

    doNowHtml = `
      <div class="mastery-card do-now-card" style="max-width: 800px; margin: 18px auto 24px auto; border-top: 4px solid var(--accent); position: relative; padding: 24px; overflow: visible !important;">
        <div style="position: absolute; top: -12px; left: 16px; background: var(--accent); color: #000; font-size: 0.68rem; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; letter-spacing: 0.8px; box-shadow: var(--shadow-sm); z-index: 10;">
          ⚡ DO NOW starter (5-10 MINS)
        </div>
        
        <div class="mastery-card-body" style="padding-top: 8px; margin: 0;">
          ${prevLessonLinkHtml}
          
          <div class="do-now-split-container" style="display: flex; gap: 24px; flex-wrap: wrap;">
            
            <!-- Left Side: Visual Source & See-Think-Wonder -->
            <div class="do-now-left-col" style="flex: 1; min-width: 280px; display: flex; flex-direction: column; gap: 12px;">
              <div>
                <div style="background: #000; border-radius: var(--border-radius-sm); overflow: hidden; padding: 8px; border: 1px solid var(--border-glass); text-align: center;">
                  <img src="${dn.image}" alt="Starter Image" style="max-width: 100%; max-height: 170px; object-fit: contain; border-radius: var(--border-radius-sm);" 
                    onerror="const fallback = '${getFallbackUrl(dn.image) || ''}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
                  <div class="do-now-provenance-box" style="font-size: 0.72rem; color: #f8fafc; font-weight: 500; font-style: normal; margin-top: 8px; text-align: left; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 8px 10px; border-radius: var(--border-radius-sm); line-height: 1.4;">
                    <strong style="color: #cbd5e1;">Source Provenance:</strong> ${dn.provenance}
                    ${dn.sourceUrl ? `
                      <div style="margin-top: 6px; border-top: 1px dashed var(--border-glass); padding-top: 4px;">
                        <a href="${dn.sourceUrl}" target="_blank" style="color: var(--primary); text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Original Webpage</a>
                      </div>
                    ` : ''}
                  </div>
                </div>
                
                <!-- See Think Wonder Prompt Box -->
                <div style="background: rgba(245, 158, 11, 0.04); border: 1px dashed rgba(245, 158, 11, 0.2); padding: 10px; border-radius: var(--border-radius-sm); font-size: 0.78rem; line-height: 1.35; margin-top: 10px;">
                  <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-size: 0.8rem;"><i class="fa-solid fa-lightbulb"></i> Inference: See, Think, Wonder</strong>
                  <ul style="margin: 0; padding-left: 14px; color: var(--text-muted); display: flex; flex-direction: column; gap: 2px;">
                    <li><strong>See:</strong> ${dn.seeThinkWonder.see}</li>
                    <li><strong>Think:</strong> ${dn.seeThinkWonder.think}</li>
                    <li><strong>Wonder:</strong> ${dn.seeThinkWonder.wonder}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Right Side: 5 Factual Recall Questions -->
            <div class="do-now-right-col" style="flex: 1.2; min-width: 300px; display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; border-bottom: 1px solid var(--border-glass); padding-bottom: 4px; margin-bottom: 2px;">
                  ⚡ Factual Recall Challenge
                </div>
                <ol class="do-now-questions-list" style="margin: 0; padding-left: 20px; color: var(--text-main); display: flex; flex-direction: column; gap: 8px;">
                  ${dn.recallQuestions.map((q, idx) => `
                    <li style="font-size: 0.88rem; line-height: 1.45;">
                      ${q.question}
                    </li>
                  `).join('')}
                </ol>
              </div>
            </div>
            
          </div>
          
          <!-- Bottom Section: Reveal Do Now Answers Button Row -->
          <div style="margin-top: 16px; border-top: 1px solid var(--border-glass); padding-top: 16px;">
            <button class="mastery-btn do-now-reveal-btn" style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--accent); color: var(--accent); font-weight: bold; font-size: 0.82rem; padding: 8px 16px; border-radius: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-graduation-cap"></i> Reveal Do Now Guide Answers
            </button>
            
            <!-- Hidden structured responses drawer -->
            <div class="do-now-answers-drawer" style="display: none; margin-top: 16px; padding: 16px; background: rgba(34, 197, 94, 0.04); border-left: 4px solid var(--success); border-radius: var(--border-radius-sm); border-top: 1px solid var(--border-glass); border-right: 1px solid var(--border-glass); border-bottom: 1px solid var(--border-glass);">
              <h4 style="margin: 0 0 12px 0; color: var(--success); font-size: 0.95rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-circle-check"></i> Retrieval Answer Key:</h4>
              <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.88rem; line-height: 1.45;">
                ${dn.recallQuestions.map((q, idx) => `
                  <div>
                    <strong style="color: var(--success); display: block; font-size: 0.82rem;">Answer ${idx + 1}:</strong>
                    <p style="margin: 4px 0 0 0; color: var(--text-base);">${q.answer}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    `;
  } else if (subtopicId === 'subtopic_1_1') {
    doNowHtml = `
      <div class="mastery-card background-context-card" style="max-width: 800px; margin: 18px auto 24px auto; border-left: 4px solid var(--primary); background: rgba(59, 130, 246, 0.03); position: relative; padding: 24px;">
        <div style="position: absolute; top: -12px; left: 16px; background: var(--primary); color: var(--text-inverse); font-size: 0.68rem; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; letter-spacing: 0.8px; box-shadow: var(--shadow-sm); z-index: 10;">
          📖 Prior Context & Background (Pre-1945)
        </div>
        <div class="mastery-card-body" style="padding-top: 8px; margin: 0; font-size: 0.92rem; line-height: 1.55; color: var(--text-base);">
          <p style="margin: 0 0 12px 0;">
            To understand the crisis in 1945, you must know what happened under the British Mandate since the end of the First World War. In <strong>1917</strong>, Britain issued the <strong>Balfour Declaration</strong>, promising to support a 'national home for the Jewish people' in Palestine. Following the collapse of the Ottoman Empire, the <strong>League of Nations (1922)</strong> granted Britain official administrative control (the Mandate) over the territory.
          </p>
          <p style="margin: 0;">
            Throughout the 1920s and 1930s, escalating Jewish immigration (driven by rising European antisemitism) caused intense Palestinian Arab fear of displacement, culminating in the <strong>Arab Revolt (1936–39)</strong>. To restore order, Britain issued the <strong>1939 White Paper</strong>, which placed a strict limit on Jewish immigration (75,000 over five years) and restricted land sales. Consequently, by 1945, Britain was caught in an impossible trap: Zionists were furious that immigration was blocked during the Holocaust, while Arab leaders demanded immediate independence and an end to all Zionist expansion.
          </p>
        </div>
      </div>
    `;
  }

  // Generate Steps HTML
  let stepsHtml = '';
  const matchedFigures = new Set();
  data.steps.forEach((step, index) => {
    const processedBodyHtml = injectInlineBios(step.bodyHtml, matchedFigures);
    let scholarlyHtml = '';
    if (step.scholarlyDepth) {
      let scholarlyImgHtml = '';
      if (step.scholarlyDepth.image) {
        let provenanceHtml = '';
        if (step.scholarlyDepth.imageProvenance) {
          provenanceHtml = `
            <div class="scholarly-image-provenance" style="font-size: 0.8rem; color: #cbd5e1; margin-top: 8px; font-weight: 500; line-height: 1.4; max-width: 600px; margin-left: auto; margin-right: auto; text-align: center; background: rgba(0,0,0,0.3); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 4px; box-sizing: border-box;">
              <strong style="color: inherit;">Provenance:</strong> ${step.scholarlyDepth.imageProvenance}
            </div>
          `;
        }
        scholarlyImgHtml = `
          <div class="scholarly-image-wrapper" style="margin-bottom: 16px; text-align: center;">
            <img src="${step.scholarlyDepth.image}" alt="${step.scholarlyDepth.imageAlt || 'Scholarly Source'}" class="scholarly-source-img" style="max-width: 100%; max-height: 300px; object-fit: contain; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass); box-shadow: var(--shadow-sm);" 
              onerror="const fallback = '${getFallbackUrl(step.scholarlyDepth.image) || ''}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
            ${provenanceHtml}
          </div>
        `;
      }
      let scholarlySourceHtml = '';
      if (step.scholarlyDepth.vietnameseSource) {
        const vs = step.scholarlyDepth.vietnameseSource;
        scholarlySourceHtml = `
          <div class="scholarly-vietnamese-source" style="margin-top: 16px; padding: 14px; background: rgba(0, 0, 0, 0.2); border-left: 4px solid var(--accent); border-radius: var(--border-radius-sm);">
            <strong style="display: block; margin-bottom: 6px; color: var(--accent); font-size: 0.85rem; text-transform: uppercase;">
              <i class="fa-solid fa-language"></i> Authentic Perspective: ${vs.perspective}
            </strong>
            <p class="vietnamese-text" style="font-family: inherit; font-size: 0.9rem; color: var(--text-base); margin: 0 0 8px 0; font-style: normal; line-height: 1.4;">
              "${vs.originalText}"
            </p>
            <p class="english-translation" style="font-size: 0.85rem; color: var(--text-muted); margin: 0 0 8px 0; font-style: italic; line-height: 1.4; border-top: 1px dashed var(--border-glass); padding-top: 8px;">
              <strong style="color: inherit;">Translation:</strong> "${vs.translation}"
            </p>
            <p class="source-analysis" style="font-size: 0.82rem; color: var(--text-muted); margin: 0; line-height: 1.45;">
              <strong style="color: inherit;">Historical Context:</strong> ${vs.analysis}
            </p>
          </div>
        `;
      }

      scholarlyHtml = `
        <details class="scholarly-extension" style="margin-top: 16px;">
          <summary class="scholarly-summary">
            <i class="fa-solid fa-graduation-cap"></i> Scholarly Perspective
          </summary>
          <div class="scholarly-content" style="margin-top: 12px; font-size: 0.88rem; line-height: 1.5; color: var(--text-muted);">
            ${scholarlyImgHtml}
            <strong style="display: block; margin-bottom: 6px; color: var(--primary); font-size: 0.95rem;">${step.scholarlyDepth.title.replace(/^Scholarly Perspective:\s*/i, '')}</strong>
            <p style="margin: 0 0 12px 0; font-style: italic;">${step.scholarlyDepth.body}</p>
            ${scholarlySourceHtml}
          </div>
        </details>
      `;
    }

    if (step.isSplit) {
      stepsHtml += `
        <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
          <h3 class="mastery-card-title">${step.title}</h3>
          <div class="mastery-split-layout">
            ${processedBodyHtml}
          </div>
          ${scholarlyHtml}
        </div>
      `;
    } else {
      stepsHtml += `
        <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
          <h3 class="mastery-card-title">${step.title}</h3>
          <div class="mastery-card-body card-content">
            ${processedBodyHtml}
          </div>
          ${scholarlyHtml}
        </div>
      `;
    }
  });

  // Generate Dual Perspective slider HTML
  let dualHtml = '';
  if (data.dualPerspective) {
    dualHtml = `
      <div class="dual-perspective-card left-active"
           data-left-headline="${data.dualPerspective.leftHeadline}"
           data-left-text="${data.dualPerspective.leftText}"
           data-right-headline="${data.dualPerspective.rightHeadline}"
           data-right-text="${data.dualPerspective.rightText}">
         <h3 class="dual-perspective-neutral-title">${data.dualPerspective.neutralTitle}</h3>
        <div class="dual-perspective-narrative-box">
          <h4 class="dual-perspective-headline">${data.dualPerspective.leftHeadline}</h4>
          <p class="dual-perspective-text">${data.dualPerspective.leftText}</p>
        </div>
        <div class="dual-perspective-slider-row">
          <span class="perspective-label label-left active">🇮🇱 Israeli Perspective</span>
          <div class="slider-wrapper">
            <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
          </div>
          <span class="perspective-label label-right">🇵🇸/🇪🇬 Arab Perspective</span>
        </div>
        ${data.dualPerspective.tipHtml || ''}
      </div>
    `;
  }

  // Generate Narrative Chain Game block
  let chainHtml = '';
  if (data.narrativeChain) {
    chainHtml = `
      <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">⛓️ Build the Narrative Chain</h3>
        <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
        
        <div class="chain-boxes" id="narrative-chain-boxes">
          <!-- Scrambled blocks populated programmatically -->
        </div>
        
        <div class="chain-feedback" id="narrative-chain-feedback"></div>
      </div>
    `;
  }

  // Generate Knowledge Check HTML
  let kcQuestionsHtml = '';
  data.knowledgeCheck.forEach((q, index) => {
    kcQuestionsHtml += `
      <div class="quiz-question-item">
        <div class="quiz-question-text">${index + 1}. ${q.question}</div>
        <div class="quiz-answer-text" id="ans-${index + 1}">Answer: ${q.answer}</div>
      </div>
    `;
  });

  let kcHtml = '';
  if (data.knowledgeCheck.length > 0) {
    kcHtml = `
      <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title">Knowledge Check</h3>
        <div class="mastery-card-body">
          <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
            Test your memory on the exact facts examiners are looking for!
          </p>
          
          <div class="quiz-questions-list">
            ${kcQuestionsHtml}
          </div>
        </div>
      </div>
    `;
  }

  // Generate Importance Analyser HTML
  let impHtml = '';
  if (data.importanceAnalyser) {
    impHtml = `
      <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title">🔍 8-Mark Skill: The Importance Analyser</h3>
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Click the card below to flip it and view the examiner's model analysis.
        </p>
        
        <div class="importance-flip-card" id="importance-analyser-card">
          <div class="importance-card-inner">
            <div class="importance-card-front">
              <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
              <strong>Question:</strong> ${data.importanceAnalyser.question}
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
            </div>
            <div class="importance-card-back">
              <strong>Examiner Analysis:</strong> ${data.importanceAnalyser.answer}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Generate Question Vault HTML
  let vaultItemsHtml = '';
  data.questionVault.forEach((q, index) => {
    vaultItemsHtml += `
      <div class="vault-item">
        <button class="vault-question-btn" data-vault-idx="${index}">
          <span>${q.question}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="vault-answer-panel">
          ${q.answer}
        </div>
      </div>
    `;
  });

  let vaultHtml = '';
  if (data.questionVault.length > 0) {
    vaultHtml = `
      <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">📝 Test Your Knowledge (Exam Question Vault)</h3>
        <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
          Click each question to view the model response blueprint.
        </p>
        <div class="vault-items">
          ${vaultItemsHtml}
        </div>
      </div>
    `;
  }

  const video = VIDEOS_DATA[subtopicId];
  let videoHtml = '';
  if (video) {
    const cleanDuration = video.duration.startsWith('0') ? video.duration.slice(1) : video.duration;
    const questionsList = video.questions.map(q => `<li>${q}</li>`).join('');
    
    videoHtml = `
      <div class="lesson-video-wrapper" style="margin-top: 14px; border-top: 1px dashed var(--border-glass); padding-top: 12px;">
        <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main); margin: 0 0 10px 0;">
          <i class="fa-brands fa-youtube" style="color: #ef4444; font-size: 1.1rem; margin-right: 6px; vertical-align: middle;"></i>
          Watch this YouTube video on "${data.headerTitle.split(':').pop().trim()}" by ${video.production_source}: 
          <a href="${video.youtube_url}" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: underline; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--primary-hover)'" onmouseout="this.style.color='var(--primary)'">
            "${video.video_title}"
          </a> (${cleanDuration} mins).
        </p>
        
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 10px 14px;">
          <strong style="font-size: 0.75rem; color: var(--accent); display: block; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
            <i class="fa-solid fa-clipboard-question"></i> Video Study Questions:
          </strong>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.8rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 4px; line-height: 1.45;">
            ${questionsList}
          </ul>
        </div>
      </div>
    `;
  }

  // Generate Wrap-Up Summary and Revision Questions from lesson extensions
  let summaryHtml = '';
  let revisionQuestionsHtml = '';
  const extensionData = LESSON_EXTENSIONS[subtopicId];
  if (extensionData) {
    if (extensionData.wrapUpSummary && extensionData.wrapUpSummary.length > 0) {
      const summaryItems = extensionData.wrapUpSummary.map(item => `
        <li style="margin-bottom: 10px; line-height: 1.5; font-size: 0.9rem; position: relative; padding-left: 24px; list-style-type: none;">
          <span style="position: absolute; left: 0; top: 2px; color: var(--accent);"><i class="fa-solid fa-circle-check"></i></span>
          ${item}
        </li>
      `).join('');
      
      summaryHtml = `
        <div class="mastery-card wrap-up-card" style="max-width: 800px; margin: 0 auto 24px auto; border-left: 4px solid var(--accent); background: rgba(245, 158, 11, 0.03);">
          <h3 class="mastery-card-title" style="display: flex; align-items: center; gap: 8px; border: none; margin-bottom: 0;">
            <i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> What have you learned today?
          </h3>
          <div class="mastery-card-body" style="padding-top: 12px; margin-top: 0;">
            <ul style="margin: 0; padding: 0;">
              ${summaryItems}
            </ul>
          </div>
        </div>
      `;
    }

    if (extensionData.revisionQuestions && extensionData.revisionQuestions.length > 0) {
      let questionsListHtml = '';
      extensionData.revisionQuestions.forEach(q => {
        let badgeColor = 'rgba(34, 197, 94, 0.2)'; // default green
        let textColor = 'var(--success)';
        if (q.number > 7) {
          badgeColor = 'rgba(239, 68, 68, 0.2)'; // red
          textColor = '#f87171';
        } else if (q.number > 4) {
          badgeColor = 'rgba(245, 158, 11, 0.2)'; // orange/amber
          textColor = 'var(--accent)';
        }
        
        questionsListHtml += `
          <div class="revision-question-item">
            <div class="revision-question-header">
              <span class="revision-question-title">Question ${q.number}</span>
              <span class="revision-difficulty-badge" style="background: ${badgeColor}; color: ${textColor};">
                ${q.difficulty}
              </span>
            </div>
            <div class="revision-question-text">${q.question}</div>
            
            <div class="revision-answer-text">
              <strong style="color: var(--success); display: block; margin-bottom: 4px;"><i class="fa-solid fa-lightbulb"></i> Answer Guide:</strong>
              ${q.answer}
            </div>
          </div>
        `;
      });

      revisionQuestionsHtml = `
        <div class="mastery-card revision-questions-card" style="max-width: 800px; margin: 0 auto 24px auto;">
          <h3 class="mastery-card-title">🛡️ 10-Step Unit Mastery Journey</h3>
          <div class="mastery-card-body">
            <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted); font-size: 0.85rem;">
              Missed this lesson or need a thorough refresh? Click through these 10 structured questions (ranging from basic recall to expert challenge) to master the unit!
            </p>
            <div class="revision-questions-list">
              ${questionsListHtml}
            </div>
          </div>
        </div>
      `;
    }
  }

  // Set the container innerHTML
  container.innerHTML = `
    ${doNowHtml}

    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 12px; flex-wrap: wrap;">
        <h2 class="mastery-header-title" style="margin: 0; flex: 1; min-width: 250px;">
          ${data.headerTitle}
        </h2>
        <button class="mastery-btn view-in-timeline-btn" data-subtopic="${subtopicId}" style="background: rgba(59, 130, 246, 0.1); border: 1px solid var(--primary); color: var(--primary); font-weight: bold; font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; margin-top: 4px;">
          <i class="fa-solid fa-timeline"></i> View in Timeline
        </button>
      </div>
      <p class="mastery-header-intro" style="margin-bottom: ${videoHtml ? '16px' : '0'};">
        ${data.headerIntro}
      </p>
      ${videoHtml}
    </div>

    <!-- Specification Checklist Card -->
    ${renderSpecChecklistCard(subtopicId, SPEC_CHECKLIST_DATA[subtopicId])}

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

    ${stepsHtml}
    
    ${dualHtml}
    
    ${chainHtml}
    
    ${summaryHtml}
    
    ${revisionQuestionsHtml}
    
    ${kcHtml}
    
    ${impHtml}
    
    ${vaultHtml}

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        ✓ Mark Topic ${subtopicId.replace('subtopic_', '').replace('_', '.')} as Mastered
      </button>
    </div>
  `;



  // Bind View in Timeline Event
  const viewTimelineBtn = container.querySelector('.view-in-timeline-btn');
  if (viewTimelineBtn) {
    viewTimelineBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      const subtopicId = viewTimelineBtn.getAttribute('data-subtopic');
      
      // Reset the timeline filter so that this subtopic will actually be rendered!
      const eraSelect = document.getElementById('timeline-era-select');
      if (eraSelect) {
        eraSelect.value = 'all';
      }
      
      switchView('timeline');
      
      // Wait for view switch and render
      setTimeout(() => {
        const targetMilestone = document.querySelector(`.timeline-item[data-subtopic="${subtopicId}"]`);
        if (targetMilestone) {
          targetMilestone.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const card = targetMilestone.querySelector('.timeline-content-card');
          if (card) {
            if (!card.classList.contains('revealed')) {
              card.classList.add('revealed');
            }
            const originalBorder = card.style.border;
            card.style.border = '2px solid var(--accent)';
            card.style.boxShadow = '0 0 15px rgba(245, 158, 11, 0.4)';
            card.style.transition = 'border 0.3s, box-shadow 0.3s';
            setTimeout(() => {
              card.style.border = originalBorder;
              card.style.boxShadow = '';
            }, 3000);
          }
        }
      }, 100);
    });
  }

  // Bind Do Now Starter Events
  const doNowCard = container.querySelector('.do-now-card');
  if (doNowCard) {
    const prevLink = doNowCard.querySelector('.do-now-prev-link-btn');
    if (prevLink) {
      prevLink.addEventListener('click', () => {
        AudioEngine.play('click');
        const prevId = prevLink.getAttribute('data-prev-id');
        switchView('subtopic', prevId);
      });
    }

    const revealAnswersBtn = doNowCard.querySelector('.do-now-reveal-btn');
    if (revealAnswersBtn) {
      revealAnswersBtn.addEventListener('click', () => {
        AudioEngine.play('click');
        const drawer = doNowCard.querySelector('.do-now-answers-drawer');
        if (drawer) {
          const isHidden = drawer.style.display === 'none' || !drawer.style.display;
          if (isHidden) {
            drawer.style.display = 'block';
            revealAnswersBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i> Hide Do Now Answers`;
          } else {
            drawer.style.display = 'none';
            revealAnswersBtn.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Reveal Do Now Guide Answers`;
          }
        }
      });
    }
  }

  // Bind Inline Bio Button click listeners
  const bioButtons = container.querySelectorAll('.inline-bio-btn');
  bioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      const targetId = btn.getAttribute('data-bio-target');
      const drawer = container.querySelector(`#${targetId}`);
      if (drawer) {
        const isActive = drawer.classList.contains('active');
        if (isActive) {
          drawer.classList.remove('active');
          btn.classList.remove('active');
        } else {
          drawer.classList.add('active');
          btn.classList.add('active');
        }
      }
    });
  });

  // Bind Specification Checklist click listeners
  const checklistItems = container.querySelectorAll('.spec-checklist-item');
  checklistItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.spec-checklist-expansion')) {
        return;
      }
      AudioEngine.play('click');
      const key = item.getAttribute('data-key');
      const isChecked = item.classList.contains('checked');
      
      if (isChecked) {
        item.classList.remove('checked');
      } else {
        item.classList.add('checked');
      }

      // Save to localStorage
      try {
        let checkedStates = {};
        const saved = localStorage.getItem('edexcel_spec_checklist');
        if (saved) {
          checkedStates = JSON.parse(saved);
        }
        checkedStates[key] = !isChecked;
        localStorage.setItem('edexcel_spec_checklist', JSON.stringify(checkedStates));
      } catch (e) {
        console.error(e);
      }
    });
  });

  const hardModeToggle = document.getElementById('mastery-hard-mode-toggle');
  if (hardModeToggle) {
    hardModeToggle.addEventListener('change', () => {
      AudioEngine.play('click');
      const isHard = hardModeToggle.checked;
      const cardContents = container.querySelectorAll('.card-content');
      cardContents.forEach(content => {
        if (isHard) {
          content.classList.add('hard-mode-active');
        } else {
          content.classList.remove('hard-mode-active');
        }
      });
      setupHardModeKeywords(container);
    });
  }

  // Bind keyword reveal clicks on hard-mode-blank
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('hard-mode-blank')) {
      const strongEl = e.target;
      const parentCard = strongEl.closest('.card-content');
      if (parentCard && parentCard.classList.contains('hard-mode-active')) {
        AudioEngine.play('success');
        strongEl.classList.toggle('revealed');
      }
    }
  });

  // Individual quiz question click to toggle answer reveal
  const questionsList = container.querySelector('.quiz-questions-list');
  if (questionsList) {
    questionsList.addEventListener('click', (e) => {
      const item = e.target.closest('.quiz-question-item');
      if (item) {
        AudioEngine.play('click');
        item.classList.toggle('revealed');
      }
    });
  }

  // Individual revision question click to toggle answer reveal
  const revisionQuestionsList = container.querySelector('.revision-questions-list');
  if (revisionQuestionsList) {
    revisionQuestionsList.addEventListener('click', (e) => {
      const item = e.target.closest('.revision-question-item');
      if (item) {
        AudioEngine.play('click');
        item.classList.toggle('revealed');
      }
    });
  }

  // Interactive Map Toggle with Fallbacks
  const btnPartition = document.getElementById('btn-map-partition');
  const btnBorders = document.getElementById('btn-map-borders');
  const mapImg = document.getElementById('map-image-placeholder');

  if (mapImg && btnPartition && btnBorders) {
    const map1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="0" y="0" width="100" height="120" fill="#f8fafc" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" /><path d="M 40,5 L 55,5 L 60,20 L 44,20 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,20 L 48,20 L 48,60 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,70 L 50,70 L 52,112 L 44,115 L 43,90 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 48,20 L 62,35 L 75,60 L 58,60 L 48,45 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><path d="M 58,60 L 75,60 L 68,90 L 50,70 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><circle cx="51" cy="58" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1" /><text x="58" y="60" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ef4444">UN Zone</text><text x="10" y="15" font-family="sans-serif" font-size="6" font-weight="bold" fill="#f97316">Jewish State</text><text x="10" y="23" font-family="sans-serif" font-size="6" font-weight="bold" fill="#22c55e">Arab State</text><text x="35" y="112" font-family="sans-serif" font-size="5" fill="#94a3b8">1947 Plan</text></svg>`;
    const map2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="0" y="0" width="100" height="120" fill="#f8fafc" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="1.5" /><path d="M 46,35 L 60,35 L 70,60 L 65,80 L 52,75 L 46,55 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2" /><text x="50" y="55" font-family="sans-serif" font-size="5" font-weight="bold" fill="#166534">West Bank</text><text x="50" y="61" font-family="sans-serif" font-size="4" fill="#166534">(Jordan)</text><path d="M 32,50 L 37,50 L 40,65 L 35,65 Z" fill="#fef9c3" stroke="#eab308" stroke-width="1" stroke-dasharray="2,2" /><text x="21" y="62" font-family="sans-serif" font-size="4" font-weight="bold" fill="#854d0e">Gaza</text><circle cx="48" cy="53" r="2.5" fill="#ef4444" stroke="#ffffff" stroke-width="0.5" /><text x="10" y="15" font-family="sans-serif" font-size="6" font-weight="bold" fill="#f97316">Israel</text><text x="35" y="112" font-family="sans-serif" font-size="5" fill="#94a3b8">1949 Armistice</text></svg>`;

    const map1DataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(map1Svg)));
    const map2DataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(map2Svg)));

    const handleImgError = () => {
      const src = mapImg.src;
      if (src.includes('un_partition_plan_1947') || src.includes('Partition_Plan') || src.includes('1947')) {
        mapImg.src = map1DataUrl;
      } else if (src.includes('1949_armistice_map') || src.includes('Armistice_Agreements') || src.includes('1949')) {
        mapImg.src = map2DataUrl;
      }
    };

    mapImg.addEventListener('error', handleImgError);

    if (mapImg.complete && mapImg.naturalWidth === 0) {
      handleImgError();
    }

    btnPartition.addEventListener('click', () => {
      AudioEngine.play('click');
      btnPartition.classList.add('active');
      btnBorders.classList.remove('active');
      mapImg.src = "assets/sources/un_partition_plan_1947.svg";
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
      mapImg.src = "assets/sources/1949_armistice_map.png";
      setTimeout(() => {
        if (mapImg.naturalWidth === 0) {
          mapImg.src = map2DataUrl;
        }
      }, 60);
    });
  }

  // Narrative Chain Chronological Ordering Game
  if (data.narrativeChain) {
    const selectedChain = [];
    const boxesContainer = document.getElementById('narrative-chain-boxes');
    const feedbackEl = document.getElementById('narrative-chain-feedback');

    const renderChainBoxes = () => {
      if (!boxesContainer) return;
      boxesContainer.innerHTML = '';
      
      data.narrativeChain.chainData.forEach(item => {
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
    };

    const checkChainResult = () => {
      if (!feedbackEl) return;
      if (selectedChain.length === 0) {
        feedbackEl.innerHTML = '';
        return;
      }

      if (selectedChain.length < data.narrativeChain.correctOrder.length) {
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

      const isCorrect = selectedChain.every((val, index) => val === data.narrativeChain.correctOrder[index]);
      if (isCorrect) {
        AudioEngine.play('success');
        feedbackEl.style.color = 'var(--success)';
        feedbackEl.innerHTML = `
          <span style="font-size: 1.05rem; display: block; margin-bottom: 4px; font-weight: bold;">✓ CORRECT CHRONOLOGY!</span>
          ${data.narrativeChain.successText}
        `;
      } else {
        AudioEngine.play('fail');
        feedbackEl.style.color = 'var(--accent)';
        feedbackEl.innerHTML = `
          <span style="font-size: 1.05rem; display: block; margin-bottom: 4px; font-weight: bold;">✗ INCORRECT SEQUENCE</span>
          ${data.narrativeChain.failText}
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
    };

    renderChainBoxes();
  }

  // Bind Dual Perspective Sliders
  const sliderCards = container.querySelectorAll('.dual-perspective-card');
  sliderCards.forEach(card => {
    const slider = card.querySelector('.perspective-range-slider');
    const labelLeft = card.querySelector('.perspective-label.label-left');
    const labelRight = card.querySelector('.perspective-label.label-right');
    const headline = card.querySelector('.dual-perspective-headline');
    const text = card.querySelector('.dual-perspective-text');

    if (!slider || !labelLeft || !labelRight || !headline || !text) return;

    // Inject visual hint dynamically
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

  // Formatting vault answers
  formatVaultImportanceAnswers(container);
}

export function setupHardModeKeywords(container) {
  const blocks = container.querySelectorAll('.card-content li, .card-content p, .mastery-card-body li, .mastery-card-body p');
  blocks.forEach(block => {
    const strongs = Array.from(block.querySelectorAll('strong'));
    let keywordCount = 0;
    
    strongs.forEach(strong => {
      const text = strong.textContent.trim();
      const nextSibling = strong.nextSibling;
      const nextText = nextSibling && nextSibling.nodeType === Node.TEXT_NODE ? nextSibling.textContent.trim() : '';
      
      const isBeforeColon = text.endsWith(':') || nextText.startsWith(':');
      
      if (isBeforeColon) {
        strong.classList.remove('hard-mode-blank');
      } else {
        if (keywordCount < 2) {
          strong.classList.add('hard-mode-blank');
          keywordCount++;
        } else {
          strong.classList.remove('hard-mode-blank');
        }
      }
    });
  });
}

export function formatVaultImportanceAnswers(container) {
  const vaultItems = container.querySelectorAll('.vault-item');
  vaultItems.forEach(item => {
    const questionSpan = item.querySelector('.vault-question-btn span');
    if (!questionSpan) return;
    
    const questionText = questionSpan.textContent || '';
    if (questionText.toLowerCase().includes('explain the importance')) {
      const panel = item.querySelector('.vault-answer-panel');
      if (!panel) return;
      
      let html = panel.innerHTML;
      html = html.replace(/<strong>Importance Analysis:<\/strong>/i, '').trim();
      html = html.replace(/Importance Analysis:/i, '').trim();
      
      const sentences = html.replace(/([\.\?])\s+(?=[A-Z])/g, '$1|').split('|');
      if (sentences.length >= 2) {
        const reason1 = sentences[0];
        const reason2 = sentences.slice(1).join(' ');
        
        panel.innerHTML = `
          <div class="model-answer-split">
            <p style="margin: 0 0 10px 0; line-height: 1.45;"><strong>Reason 1:</strong> ${reason1}</p>
            <p style="margin: 0; line-height: 1.45;"><strong>Reason 2:</strong> ${reason2}</p>
          </div>
        `;
      }
    }
  });
}

export function injectInlineBios(htmlString, matchedFigures) {
  if (!htmlString) return htmlString;
  if (typeof DOMParser === 'undefined') return htmlString;
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  
  const keys = Object.keys(KEY_FIGURES_BIO).sort((a, b) => b.length - a.length);
  
  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      for (const key of keys) {
        const figure = KEY_FIGURES_BIO[key];
        if (matchedFigures.has(figure.name)) {
          continue;
        }
        
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp('\\b' + escapedKey + '\\b', 'i');
        const match = regex.exec(text);
        
        if (match) {
          const matchIndex = match.index;
          const matchedText = match[0];
          
          const rightNode = node.splitText(matchIndex);
          const remainingNode = rightNode.splitText(matchedText.length);
          
          const button = doc.createElement('button');
          button.className = 'inline-bio-btn';
          const bioId = `bio-drawer-${key.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;
          button.setAttribute('data-bio-target', bioId);
          button.innerHTML = `${matchedText} <i class="fa-solid fa-address-card" style="font-size: 0.85em; opacity: 0.85;"></i>`;
          
          const drawer = doc.createElement('div');
          drawer.className = 'inline-bio-drawer';
          drawer.id = bioId;
          drawer.innerHTML = `
            <div class="inline-bio-drawer-content">
              <img src="${figure.image}" alt="${figure.name}" class="inline-bio-img" 
                onerror="const fallback = '${getFallbackUrl(figure.image) || ''}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
              <div class="inline-bio-info">
                <h4 class="inline-bio-name">${figure.name}</h4>
                <div class="inline-bio-role">${figure.role}</div>
                <p class="inline-bio-text">${figure.bio}</p>
                <a href="${figure.sourceUrl}" target="_blank" class="inline-bio-source-link">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Read full biography on Wikipedia
                </a>
              </div>
            </div>
          `;
          
          node.parentNode.replaceChild(button, rightNode);
          
          let blockAncestor = button.parentElement;
          while (blockAncestor && blockAncestor !== doc.body) {
            const tag = blockAncestor.tagName.toUpperCase();
            if (tag === 'P' || tag === 'LI' || tag === 'DIV' || tag === 'BLOCKQUOTE') {
              break;
            }
            blockAncestor = blockAncestor.parentElement;
          }
          if (!blockAncestor || blockAncestor === doc.body) {
            button.parentNode.insertBefore(drawer, button.nextSibling);
          } else {
            blockAncestor.parentNode.insertBefore(drawer, blockAncestor.nextSibling);
          }
          
          matchedFigures.add(figure.name);
          
          walk(remainingNode);
          return;
        }
      }
    } else {
      const tag = node.tagName ? node.tagName.toUpperCase() : '';
      if (tag !== 'A' && tag !== 'BUTTON' && !node.classList.contains('inline-bio-drawer')) {
        const children = Array.from(node.childNodes);
        for (let i = 0; i < children.length; i++) {
          walk(children[i]);
        }
      }
    }
  }
  
  walk(doc.body);
  return doc.body.innerHTML;
}