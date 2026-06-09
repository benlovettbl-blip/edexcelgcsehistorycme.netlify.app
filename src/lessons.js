import { LESSONS_DATA } from './lessons_data.js';
import { PRACTICE_ROOM_DATA, practiceState } from './games.js';
import { state } from './state.js';
import { switchView } from './navigation.js';
import { renderSidebarNav, updateGlobalStats, KEY_FIGURES_BIO, openVideoModal, addXp } from './views.js';
import { saveProgress } from './storage.js';
import { AudioEngine } from './audio.js';
import { Confetti } from './confetti.js';
import { QUIZ_DATA } from '../questions.js';
import { VIDEOS_DATA } from './videos_data.js';
import { getFallbackUrl } from './image_fallback.js';
import { LESSON_EXTENSIONS } from './lesson_extensions.js';
import { SPEC_CHECKLIST_DATA } from './spec_checklist_data.js';
import { SCHOLARLY_EXTENSIONS } from './scholarly_extensions.js';
import { CONTEMPORARY_SOURCES } from './contemporary_sources.js';
import { GOING_BEYOND_DATA } from './going_beyond_data.js';
import { LESSON_MAPS_DATA } from './lesson_maps_data.js';
import { HISTORIAN_QUOTES } from './historian_quotes.js';
import { downloadHtmlAsWord } from './past_papers.js';
import { WORKBOOK_DATA } from './workbook_data.js';

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
        addXp(2);
        
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
          addXp(10);
          
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

function renderGoingBeyondConnectionCard(subtopicId) {
  const mappings = {
    'subtopic_1_1': ['gb-jerusalem'],
    'subtopic_1_2': ['gb-refugees'],
    'subtopic_1_3': ['gb-chokepoints'],
    'subtopic_2_1': ['gb-water'],
    'subtopic_2_2': ['gb-settlements', 'gb-asymmetric'],
    'subtopic_3_1': ['gb-gulf-realignment'],
    'subtopic_3_2': ['gb-iran-hegemony', 'gb-urban-warfare'],
    'subtopic_3_3': ['gb-cyberwar']
  };
  
  const ids = mappings[subtopicId];
  if (!ids || ids.length === 0) return '';
  
  const topics = GOING_BEYOND_DATA.filter(t => ids.includes(t.id));
  if (topics.length === 0) return '';
  
  let cardsHtml = topics.map(t => {
    return `
      <div class="gb-connect-link-card" data-gb-id="${t.id}" style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; transition: all var(--transition-normal); margin-top: 12px; box-shadow: var(--shadow-sm);" onmouseover="this.style.background='rgba(255,255,255,0.05)'; this.style.borderColor='var(--border-glass-hover)';" onmouseout="this.style.background='rgba(255,255,255,0.02)'; this.style.borderColor='var(--border-glass)';">
        <div style="display: flex; align-items: center; gap: 14px; min-width: 0; flex: 1;">
          <div style="width: 36px; height: 36px; border-radius: var(--border-radius-sm); background: var(--primary-glow); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0;">
            <i class="fa-solid ${t.icon}"></i>
          </div>
          <div style="min-width: 0; flex: 1;">
            <h5 style="margin: 0; font-size: 0.9rem; font-weight: 700; color: var(--text-main); text-align: left;">${t.title}</h5>
            <p style="margin: 2px 0 0 0; font-size: 0.76rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: left; line-height: 1.3;">
              <strong>2026 Legacy:</strong> ${t.modernResonance}
            </p>
          </div>
        </div>
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
          Explore Modern Link <i class="fa-solid fa-compass"></i>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="gb-connection-wrapper-card" style="max-width: 800px; margin: 0 auto 24px auto; background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
      <h4 style="display: flex; align-items: center; gap: 8px; margin: 0 0 8px 0; font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text-main);">
        <i class="fa-solid fa-compass" style="color: var(--primary);"></i> Going Beyond: Modern Geopolitical Connections
      </h4>
      <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; text-align: left;">
        Connect this historical GCSE topic to its modern-day legacy and realities in the Middle East in 2026:
      </p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        ${cardsHtml}
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

    if (dn.format === '321') {
      doNowHtml = `
      <div class="mastery-card do-now-card" style="max-width: 800px; margin: 18px auto 24px auto; border-top: 4px solid var(--accent); position: relative; padding: 24px; overflow: visible !important;">
        <div style="position: absolute; top: -12px; left: 16px; background: var(--accent); color: #000; font-size: 0.68rem; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; letter-spacing: 0.8px; box-shadow: var(--shadow-sm); z-index: 10;">
          ⚡ DO NOW starter (5-10 MINS)
        </div>
        
        <div class="mastery-card-body" style="padding-top: 8px; margin: 0;">
          ${prevLessonLinkHtml}
          
          <div class="do-now-split-container" style="display: flex; gap: 24px; flex-wrap: wrap;">
            
            <!-- Left Side: 3-2-1 Retrieval Challenge -->
            <div class="do-now-left-col" style="flex: 1.3; min-width: 300px; display: flex; flex-direction: column; gap: 14px;">
              <div class="retrieval-challenge-container" style="display: flex; flex-direction: column; gap: 10px;">
                <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; border-bottom: 1px solid var(--border-glass); padding-bottom: 4px; margin-bottom: 4px;">
                  ⚡ 3 - 2 - 1 Retrieval Challenge
                </div>
                
                <!-- 3: Factual Recall -->
                <div>
                  <h5 style="margin: 0 0 4px 0; font-family: var(--font-heading); font-size: 0.82rem; font-weight: 700; color: var(--accent); display: flex; align-items: center; gap: 6px;">
                    🎯 3 • Factual Recall (AO1)
                  </h5>
                  <ol style="margin: 0; padding-left: 18px; color: var(--text-main); font-size: 0.86rem; display: flex; flex-direction: column; gap: 4px; line-height: 1.4;">
                    ${dn.threeTwoOne.factual.map((q) => `
                      <li>${q.question}</li>
                    `).join('')}
                  </ol>
                </div>

                <!-- 2: Chronology & Geography -->
                <div style="margin-top: 2px;">
                  <h5 style="margin: 0 0 4px 0; font-family: var(--font-heading); font-size: 0.82rem; font-weight: 700; color: var(--secondary); display: flex; align-items: center; gap: 6px;">
                    ⏳ 2 • Chronology & Geography (AO1/AO2)
                  </h5>
                  <ol start="4" style="margin: 0; padding-left: 18px; color: var(--text-main); font-size: 0.86rem; display: flex; flex-direction: column; gap: 4px; line-height: 1.4;">
                    ${dn.threeTwoOne.chronology.map((q) => `
                      <li>${q.question}</li>
                    `).join('')}
                  </ol>
                </div>

                <!-- 1: Exam Concept Link -->
                <div style="margin-top: 2px;">
                  <h5 style="margin: 0 0 4px 0; font-family: var(--font-heading); font-size: 0.82rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 6px;">
                    ✏️ 1 • Exam Concept Link (AO2)
                  </h5>
                  <div style="margin: 0; padding: 10px 12px; background: rgba(168,85,247,0.04); border-left: 3px solid var(--primary); border-radius: 0 4px 4px 0; color: var(--text-main); font-size: 0.86rem; line-height: 1.45;">
                    <strong style="color: var(--primary); display: block; margin-bottom: 4px;">The "${dn.threeTwoOne.concept.type}" Connection:</strong>
                    <span style="font-style: italic;">"${dn.threeTwoOne.concept.prompt}"</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Side: Visual Anchor & Key Concept callout -->
            <div class="do-now-right-col" style="flex: 0.9; min-width: 250px; display: flex; flex-direction: column; gap: 12px;">
              <div class="visual-anchor-col" style="display: flex; flex-direction: column; gap: 12px;">
                <!-- Visual Anchor image -->
                <div style="background: #000; border-radius: var(--border-radius-sm); overflow: hidden; padding: 8px; border: 1px solid var(--border-glass); text-align: center; box-shadow: var(--shadow-sm);">
                  <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 6px; text-align: left; display: flex; align-items: center; gap: 4px;">
                    <i class="fa-solid fa-image" style="color: var(--primary);"></i> Visual Anchor
                  </div>
                  <img src="${dn.image}" alt="Straits of Tiran" style="max-width: 100%; max-height: 150px; object-fit: contain; border-radius: var(--border-radius-sm);" 
                    onerror="const fallback = '${getFallbackUrl(dn.image) || ''}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
                  <div style="font-size: 0.7rem; color: var(--text-muted); line-height: 1.35; margin-top: 6px; text-align: left;">
                    ${dn.provenance}
                  </div>
                </div>

                <!-- Key Concept callout box -->
                <div style="background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.25); padding: 12px; border-radius: var(--border-radius-sm); box-shadow: var(--shadow-sm);">
                  <strong style="color: var(--accent); display: flex; align-items: center; gap: 6px; font-size: 0.82rem; margin-bottom: 6px; text-transform: uppercase; font-family: var(--font-heading);">
                    <i class="fa-solid fa-book-bookmark"></i> Key Concept: ${dn.keyConcept.title}
                  </strong>
                  <p style="margin: 0; color: var(--text-main); font-size: 0.78rem; line-height: 1.4; font-weight: 500;">
                    ${dn.keyConcept.definition}
                  </p>
                </div>
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
                <!-- 3 Factual Recall Answers -->
                ${dn.threeTwoOne.factual.map((q, idx) => `
                  <div>
                    <strong style="color: var(--success); display: block; font-size: 0.82rem;">Answer ${idx + 1}:</strong>
                    <p style="margin: 4px 0 0 0; color: var(--text-main);">${q.answer}</p>
                  </div>
                `).join('')}
                
                <!-- 2 Chronology Answers -->
                ${dn.threeTwoOne.chronology.map((q, idx) => `
                  <div>
                    <strong style="color: var(--success); display: block; font-size: 0.82rem;">Answer ${idx + 4}:</strong>
                    <p style="margin: 4px 0 0 0; color: var(--text-main);">${q.answer}</p>
                  </div>
                `).join('')}

                <!-- 1 Concept Link Answer -->
                <div>
                  <strong style="color: var(--success); display: block; font-size: 0.82rem;">Answer 6 (${dn.threeTwoOne.concept.type} Link):</strong>
                  <p style="margin: 4px 0 0 0; color: var(--text-main);">${dn.threeTwoOne.concept.answer}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      `;
    } else {
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
    }
  } else if (subtopicId === 'subtopic_1_1') {
    doNowHtml = `
      <div class="mastery-card background-context-card" style="max-width: 800px; margin: 18px auto 24px auto; border-left: 4px solid var(--primary); background: rgba(59, 130, 246, 0.03); position: relative; padding: 24px; overflow: visible !important;">
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
    
    // Retrieve scholarly perspective for this subtopic and step index from database
    const dbScholarly = SCHOLARLY_EXTENSIONS[subtopicId]?.[index];
    const scholarlyDepth = dbScholarly || step.scholarlyDepth;
    
    if (scholarlyDepth) {
      let scholarlyImgHtml = '';
      if (scholarlyDepth.image) {
        let provenanceHtml = '';
        if (scholarlyDepth.imageProvenance) {
          provenanceHtml = `
            <div class="scholarly-image-provenance" style="font-size: 0.8rem; color: #cbd5e1; margin-top: 8px; font-weight: 500; line-height: 1.4; max-width: 600px; margin-left: auto; margin-right: auto; text-align: center; background: rgba(0,0,0,0.3); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 4px; box-sizing: border-box;">
              <strong style="color: inherit;">Provenance:</strong> ${scholarlyDepth.imageProvenance}
            </div>
          `;
        }
        scholarlyImgHtml = `
          <div class="scholarly-image-wrapper" style="margin-bottom: 16px; text-align: center;">
            <img src="${scholarlyDepth.image}" alt="${scholarlyDepth.imageAlt || 'Scholarly Source'}" class="scholarly-source-img" style="max-width: 100%; max-height: 300px; object-fit: contain; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass); box-shadow: var(--shadow-sm);" 
              onerror="const fallback = '${getFallbackUrl(scholarlyDepth.image) || ''}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
            ${provenanceHtml}
          </div>
        `;
      }
      let scholarlySourceHtml = '';
      if (scholarlyDepth.vietnameseSource) {
        const vs = scholarlyDepth.vietnameseSource;
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

      const displayTitle = scholarlyDepth.title ? `: ${scholarlyDepth.title.replace(/^(Scholarly Perspective|Scholarly Insight|Perspective):\s*/i, '')}` : '';
      scholarlyHtml = `
        <details class="scholarly-extension" style="margin-top: 16px;">
          <summary class="scholarly-summary">
            <i class="fa-solid fa-graduation-cap"></i> Scholarly Perspective${displayTitle}
          </summary>
          <div class="scholarly-content" style="margin-top: 12px; font-size: 0.88rem; line-height: 1.5; color: var(--text-muted);">
            ${scholarlyImgHtml}
            <strong style="display: block; margin-bottom: 6px; color: var(--primary); font-size: 0.95rem;">${scholarlyDepth.title.replace(/^(Scholarly Perspective|Scholarly Insight|Perspective):\s*/i, '')}</strong>
            <p style="margin: 0 0 12px 0; font-style: italic;">${scholarlyDepth.body}</p>
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
          <span class="perspective-label label-left active">
            <svg class="flag-icon" viewBox="0 0 220 160" style="width: 20px; height: 14px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.2); display: inline-block; vertical-align: middle; margin-right: 6px;">
              <rect width="220" height="160" fill="white"/>
              <rect y="15" width="220" height="25" fill="#0038b8"/>
              <rect y="120" width="220" height="25" fill="#0038b8"/>
              <polygon points="110,48 128,80 92,80" fill="none" stroke="#0038b8" stroke-width="5.5"/>
              <polygon points="110,92 128,60 92,60" fill="none" stroke="#0038b8" stroke-width="5.5"/>
            </svg>
            Israeli Perspective
          </span>
          <div class="slider-wrapper">
            <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
          </div>
          <span class="perspective-label label-right">
            <span style="display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; margin-right: 6px;">
              <svg class="flag-icon" viewBox="0 0 24 12" style="width: 20px; height: 14px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.2); display: inline-block;">
                <rect width="24" height="12" fill="#007a3d"/>
                <rect width="24" height="8" fill="#fff"/>
                <rect width="24" height="4" fill="#000"/>
                <polygon points="0,0 0,12 8,6" fill="#e4312b"/>
              </svg>
              <span style="color: var(--text-muted); font-size: 0.8rem;">/</span>
              <svg class="flag-icon" viewBox="0 0 24 12" style="width: 20px; height: 14px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.2); display: inline-block;">
                <rect width="24" height="4" fill="#c00"/>
                <rect y="4" width="24" height="4" fill="#fff"/>
                <rect y="8" width="24" height="4" fill="#000"/>
                <polygon points="12,5 13,6.5 12.5,7.5 11.5,7.5 11,6.5" fill="#c90"/>
              </svg>
            </span>
            Arab Perspective
          </span>
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
    const highProbBadge = q.isHighProbability ? `
      <span class="high-prob-badge" style="background: linear-gradient(135deg, #ef4444 0%, #f97316 100%); color: white; font-size: 0.72rem; font-weight: bold; padding: 2px 8px; border-radius: 12px; margin-left: 8px; display: inline-flex; align-items: center; gap: 3px; border: 1px solid rgba(255,255,255,0.15); box-sizing: border-box;">
        <i class="fa-solid fa-fire"></i> HIGH PROBABILITY
      </span>
    ` : '';
    vaultItemsHtml += `
      <div class="vault-item">
        <button class="vault-question-btn" data-vault-idx="${index}" style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
          <span style="display: inline-flex; align-items: center; flex-wrap: wrap; text-align: left;">${q.question}${highProbBadge}</span>
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
    const questionsList = video.questions.map(q => `<li>${q}</li>`).join('');
    
    let primaryHtml = '';
    if (video.primary) {
      const cleanDuration = video.primary.duration.startsWith('0') ? video.primary.duration.slice(1) : video.primary.duration;
      primaryHtml = `
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--accent); background: var(--accent-glow); border: 1px solid rgba(244, 63, 94, 0.2); padding: 2px 6px; border-radius: 4px; font-family: var(--font-heading); white-space: nowrap;">Primary Brief</span>
          <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main); margin: 0; flex: 1; min-width: 250px;">
            <i class="fa-brands fa-youtube" style="color: #ef4444; font-size: 1.05rem; margin-right: 4px; vertical-align: middle;"></i>
            Watch the 2-minute AI summary: 
            <a href="${video.primary.youtube_url}" class="lesson-video-link" data-url="${video.primary.youtube_url}" data-title="${video.primary.video_title.replace(/"/g, '&quot;')}" style="color: var(--primary); font-weight: bold; text-decoration: underline; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--primary-hover)'" onmouseout="this.style.color='var(--primary)'">
              "${video.primary.video_title}"
            </a> (${cleanDuration} mins).
          </p>
        </div>
      `;
    }

    let secondaryHtml = '';
    if (video.secondary) {
      const cleanDuration = video.secondary.duration.startsWith('0') ? video.secondary.duration.slice(1) : video.secondary.duration;
      secondaryHtml = `
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary); background: var(--primary-glow); border: 1px solid rgba(168, 85, 247, 0.2); padding: 2px 6px; border-radius: 4px; font-family: var(--font-heading); white-space: nowrap;">Deconstruct</span>
          <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main); margin: 0; flex: 1; min-width: 250px;">
            <i class="fa-brands fa-youtube" style="color: #ef4444; font-size: 1.05rem; margin-right: 4px; vertical-align: middle;"></i>
            Secondary support video: 
            <a href="${video.secondary.youtube_url}" class="lesson-video-link" data-url="${video.secondary.youtube_url}" data-title="${video.secondary.video_title.replace(/"/g, '&quot;')}" style="color: var(--primary); font-weight: bold; text-decoration: underline; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--primary-hover)'" onmouseout="this.style.color='var(--primary)'">
              "${video.secondary.video_title}"
            </a> (${cleanDuration} mins) by ${video.secondary.production_source}.
          </p>
        </div>
      `;
    }

    videoHtml = `
      <div class="lesson-video-wrapper" style="margin-top: 14px; border-top: 1px dashed var(--border-glass); padding-top: 12px; display: flex; flex-direction: column; gap: 10px;">
        ${primaryHtml}
        ${secondaryHtml}
        
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
        let badgeClass = 'badge-easy';
        let badgeColor = 'rgba(34, 197, 94, 0.1)';
        let textColor = '#22c55e';
        let borderColor = 'rgba(34, 197, 94, 0.2)';
        
        if (q.difficulty === 'Difficult') {
          badgeClass = 'badge-difficult';
          badgeColor = 'var(--accent-glow)';
          textColor = 'var(--accent)';
          borderColor = 'rgba(244, 63, 94, 0.2)';
        } else if (q.difficulty === 'Medium') {
          badgeClass = 'badge-medium';
          badgeColor = 'var(--primary-glow)';
          textColor = 'var(--primary)';
          borderColor = 'rgba(168, 85, 247, 0.2)';
        }
        
        questionsListHtml += `
          <div class="revision-question-item">
            <div class="revision-question-header">
              <span class="revision-question-title">Question ${q.number}</span>
              <span class="revision-difficulty-badge ${badgeClass}" style="background: ${badgeColor}; color: ${textColor}; border: 1px solid ${borderColor};">
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

  // Generate Contemporary Source HTML
  let sourceCardHtml = '';
  const sourceData = CONTEMPORARY_SOURCES[subtopicId];
  if (sourceData) {
    sourceCardHtml = `
      <div class="mastery-card contemporary-source-card" style="max-width: 800px; margin: 0 auto 24px auto; border-left: 4px solid var(--accent); background: rgba(245, 158, 11, 0.02); position: relative; padding: 24px;">
        <h3 class="mastery-card-title" style="display: flex; align-items: center; gap: 8px; border: none; margin-bottom: 12px; font-size: 1.1rem; color: var(--accent);">
          <i class="fa-solid fa-scroll"></i> Contemporary Historical Source
        </h3>
        <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 16px; margin-bottom: 14px;">
          <strong style="display: block; margin-bottom: 8px; font-size: 0.95rem; color: var(--text-main);">${sourceData.title}</strong>
          <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: inline-block; background: rgba(245, 158, 11, 0.1); padding: 2px 8px; border-radius: 4px; margin-bottom: 10px; letter-spacing: 0.5px;">
            ${sourceData.type}
          </span>
          <p style="margin: 0; font-family: Georgia, serif; font-size: 1rem; line-height: 1.5; color: var(--text-main); font-style: italic;">
            ${sourceData.excerpt}
          </p>
        </div>
        <div style="font-size: 0.88rem; line-height: 1.5; color: var(--text-muted);">
          <strong style="color: var(--accent); display: block; margin-bottom: 4px;"><i class="fa-solid fa-lightbulb"></i> Source Insight & Context:</strong>
          ${sourceData.insight}
        </div>
      </div>
    `;
  }

  // Generate Interactive Lesson Map HTML
  let mapHtml = '';
  const mapConfig = LESSON_MAPS_DATA[subtopicId];
  if (mapConfig) {
    mapHtml = `
      <div class="mastery-card lesson-map-card" style="max-width: 800px; margin: 0 auto 24px auto; border-left: 4px solid var(--primary); background: rgba(0, 0, 0, 0.15);">
        <h3 class="mastery-card-title" style="display: flex; align-items: center; gap: 8px; font-size: 1rem; color: var(--primary); margin: 0 0 12px 0; border-bottom: 1px solid var(--border-glass); padding-bottom: 8px;">
          <span><i class="fa-solid fa-map-location-dot"></i> Interactive Lesson Map: ${mapConfig.title}</span>
        </h3>
        <div class="mastery-card-body" style="padding-top: 4px;">
          <p style="margin-top: 0; margin-bottom: 16px; font-style: italic; color: var(--text-muted); font-size: 0.85rem;">
            Click on the pulsing markers to explore the locations where these historic events unfolded. Use the controls to zoom.
          </p>
          <div class="map-wrapper" style="position: relative; width: 100%; border-radius: var(--border-radius-md); overflow: hidden;">
            <div id="lesson-leaflet-map-${subtopicId}" style="width: 100%; height: 350px; background: #111; z-index: 1;"></div>
          </div>
          <div class="map-significance-box" id="lesson-map-significance-${subtopicId}" style="margin-top: 14px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 12px 14px; font-size: 0.9rem; line-height: 1.45; border-left: 3px solid var(--accent); transition: all 0.2s;">
            <strong>Map Notes:</strong> ${mapConfig.description}
          </div>
        </div>
      </div>
    `;
  }

  // Generate Historian Interpretations HTML
  let interpretationsHtml = '';
  const histQuotes = HISTORIAN_QUOTES[subtopicId];
  if (histQuotes) {
    interpretationsHtml = `
      <div class="mastery-card historian-interpretations-card" style="max-width: 800px; margin: 0 auto 24px auto; border-top: 4px solid var(--primary); background: rgba(0, 0, 0, 0.12);">
        <h3 class="mastery-card-title" style="display: flex; align-items: center; gap: 8px; font-size: 1.15rem; color: var(--primary); margin: 0 0 16px 0; border-bottom: 1px solid var(--border-glass); padding-bottom: 8px;">
          <span><i class="fa-solid fa-users-rectangle"></i> Historical Interpretations: Contrasting Historian Views</span>
        </h3>
        <div class="mastery-card-body" style="padding: 0;">
          <p style="margin-top: 0; margin-bottom: 18px; font-style: italic; color: var(--text-muted); font-size: 0.85rem; line-height: 1.45;">
            GCSE option papers require you to analyze how and why historians arrive at different interpretations. Read these contrasting viewpoints:
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 16px;">
            <!-- Historian 1 -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 16px; border-left: 3px solid var(--primary); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <strong style="color: var(--primary); display: block; margin-bottom: 2px; font-size: 0.85rem;">Interpretation 1: ${histQuotes.hist1Name}</strong>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-style: italic; display: block; margin-bottom: 10px;">${histQuotes.hist1Focus}</span>
                <p style="font-family: Georgia, serif; font-size: 0.95rem; line-height: 1.5; color: var(--text-main); font-style: italic; margin: 0;">
                  "${histQuotes.hist1Quote}"
                </p>
              </div>
              <div style="margin-top: 12px; font-size: 0.8rem; color: var(--text-muted); border-top: 1px dashed var(--border-glass); padding-top: 8px;">
                <strong>Key Argument:</strong> ${histQuotes.hist1Argument}
              </div>
            </div>
            <!-- Historian 2 -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 16px; border-left: 3px solid var(--accent); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 2px; font-size: 0.85rem;">Interpretation 2: ${histQuotes.hist2Name}</strong>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-style: italic; display: block; margin-bottom: 10px;">${histQuotes.hist2Focus}</span>
                <p style="font-family: Georgia, serif; font-size: 0.95rem; line-height: 1.5; color: var(--text-main); font-style: italic; margin: 0;">
                  "${histQuotes.hist2Quote}"
                </p>
              </div>
              <div style="margin-top: 12px; font-size: 0.8rem; color: var(--text-muted); border-top: 1px dashed var(--border-glass); padding-top: 8px;">
                <strong>Key Argument:</strong> ${histQuotes.hist2Argument}
              </div>
            </div>
          </div>
          <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: var(--border-radius-sm); padding: 12px 14px; font-size: 0.88rem; line-height: 1.45;">
            <strong style="color: var(--primary); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-question"></i> Synthesis & Interpretation Tip:</strong>
            ${histQuotes.synthesisTip}
          </div>
        </div>
      </div>
    `;
  }

  let wrappedDoNowHtml = '';
  if (doNowHtml) {
    wrappedDoNowHtml = `
      <div class="do-now-collapsible-wrapper" style="max-width: 800px; margin: 18px auto 24px auto;">
        <div class="do-now-toggle-header" style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all var(--transition-fast); user-select: none;">
          <span style="font-family: var(--font-heading); font-size: 0.88rem; font-weight: 700; color: var(--accent); display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-bolt"></i> Do Now Task (Click to Reveal)
          </span>
          <i class="fa-solid fa-chevron-down" style="color: var(--text-muted); font-size: 0.8rem; transition: transform 0.2s;"></i>
        </div>
        <div class="do-now-content-wrapper" style="display: none; margin-top: 12px;">
          ${doNowHtml}
        </div>
      </div>
    `;
  }

  // Set the container innerHTML
  container.innerHTML = `
    ${wrappedDoNowHtml}

    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 12px; flex-wrap: wrap;">
        <h2 class="mastery-header-title" style="margin: 0; flex: 1; min-width: 250px;">
          ${data.headerTitle}
        </h2>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <button class="mastery-btn view-in-timeline-btn" data-subtopic="${subtopicId}" style="background: rgba(59, 130, 246, 0.1); border: 1px solid var(--primary); color: var(--primary); font-weight: bold; font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; margin-top: 4px;">
            <i class="fa-solid fa-timeline"></i> View in Timeline
          </button>
          ${WORKBOOK_DATA[subtopicId] ? `
          <button class="mastery-btn print-workbook-btn" data-subtopic="${subtopicId}" style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; color: #10b981; font-weight: bold; font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; margin-top: 4px;">
            <i class="fa-solid fa-print"></i> Print Lesson Workbook
          </button>
          <button class="mastery-btn view-worksheet-page-btn" data-subtopic="${subtopicId}" style="background: rgba(249, 115, 22, 0.1); border: 1px solid #f97316; color: #f97316; font-weight: bold; font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; margin-top: 4px;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Lesson Worksheet Page
          </button>
          ` : ''}
        </div>
      </div>
      <p class="mastery-header-intro" style="margin-bottom: ${videoHtml ? '16px' : '0'};">
        ${data.headerIntro}
      </p>
      ${videoHtml}
    </div>

    <!-- Specification Checklist Card -->
    ${renderSpecChecklistCard(subtopicId, SPEC_CHECKLIST_DATA[subtopicId])}

    <!-- Going Beyond Connection Card -->
    ${renderGoingBeyondConnectionCard(subtopicId)}

    <!-- Interactive Lesson Map Card -->
    ${mapHtml}

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

    ${sourceCardHtml}

    ${stepsHtml}
    
    ${dualHtml}

    <!-- Historical Interpretations Contrasting Quotes -->
    ${interpretationsHtml}
    
    ${chainHtml}
    
    ${revisionQuestionsHtml}
    
    ${kcHtml}
    
    ${impHtml}
    
    ${vaultHtml}
    
    ${summaryHtml}

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        ✓ Mark Topic ${subtopicId.replace('subtopic_', '').replace('_', '.')} as Mastered
      </button>
    </div>
  `;



  // Bind Video Link Event to open in Video Modal
  const videoLinks = container.querySelectorAll('.lesson-video-link');
  videoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      AudioEngine.play('click');
      const url = link.getAttribute('data-url');
      const title = link.getAttribute('data-title');
      openVideoModal(url, title);
    });
  });

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
      state.timelineEraFilter = 'all';
      state.highlightTimelineSubtopicId = subtopicId;
    });
  }

  const printWorkbookBtn = container.querySelector('.print-workbook-btn');
  if (printWorkbookBtn) {
    printWorkbookBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      const subtopic = printWorkbookBtn.getAttribute('data-subtopic');
      openWorkbookModal(subtopic);
    });
  }

  const viewWorksheetPageBtn = container.querySelector('.view-worksheet-page-btn');
  if (viewWorksheetPageBtn) {
    viewWorksheetPageBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      const subtopic = viewWorksheetPageBtn.getAttribute('data-subtopic');
      const html = generateWorkbookHtml(subtopic, 'booklet', 'comfortable', false);
      const newWin = window.open();
      if (newWin) {
        newWin.document.write(html);
        newWin.document.close();
      } else {
        alert("Pop-up blocker prevented opening the worksheet page. Please allow popups for this site.");
      }
    });
  }

  // Bind Do Now Collapsible Toggle
  const toggleHeader = container.querySelector('.do-now-toggle-header');
  const contentWrapper = container.querySelector('.do-now-content-wrapper');
  if (toggleHeader && contentWrapper) {
    toggleHeader.addEventListener('click', () => {
      AudioEngine.play('click');
      const isHidden = contentWrapper.style.display === 'none' || !contentWrapper.style.display;
      const chevron = toggleHeader.querySelector('.fa-chevron-down');
      if (isHidden) {
        contentWrapper.style.display = 'block';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      } else {
        contentWrapper.style.display = 'none';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      }
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
            addXp(3);
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

  // Bind Going Beyond Connection Click Events
  const gbConnectCards = container.querySelectorAll('.gb-connect-link-card');
  gbConnectCards.forEach(card => {
    card.addEventListener('click', () => {
      const gbId = card.getAttribute('data-gb-id');
      AudioEngine.play('click');
      state.highlightGoingBeyondId = gbId;
      switchView('going-beyond');
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
        const isRevealing = !item.classList.contains('revealed');
        item.classList.toggle('revealed');
        if (isRevealing) addXp(2);
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
        const isRevealing = !item.classList.contains('revealed');
        item.classList.toggle('revealed');
        if (isRevealing) addXp(2);
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
      const src = mapImg.src || '';
      const isPartition = src.includes('un_partition_plan_1947') || src.includes('Partition_Plan') || src.includes('1947');
      const isArmistice = src.includes('1949_armistice_map') || src.includes('Armistice_Agreements') || src.includes('1949');
      
      const localPath = isPartition ? 'assets/sources/un_partition_plan_1947.png' : (isArmistice ? 'assets/sources/1949_armistice_map.png' : '');
      const fallbackUrl = getFallbackUrl(localPath);
      
      if (fallbackUrl && src !== fallbackUrl) {
        mapImg.referrerPolicy = 'no-referrer';
        mapImg.src = fallbackUrl;
      } else {
        // Fallback to inline SVG if fallback URL fails or isn't defined
        if (isPartition) {
          mapImg.src = map1DataUrl;
        } else if (isArmistice) {
          mapImg.src = map2DataUrl;
        }
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
      mapImg.src = "assets/sources/un_partition_plan_1947.png?v=3";
      if (mapImg.complete && mapImg.naturalWidth === 0) {
        handleImgError();
      }
    });

    btnBorders.addEventListener('click', () => {
      AudioEngine.play('click');
      btnBorders.classList.add('active');
      btnPartition.classList.remove('active');
      mapImg.src = "assets/sources/1949_armistice_map.png?v=3";
      if (mapImg.complete && mapImg.naturalWidth === 0) {
        handleImgError();
      }
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
        addXp(8);
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
        addXp(3);
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
        addXp(3);
      }
    });
  });

  // Mark Mastery button
  const btnMark = document.getElementById('btn-mark-mastery-mastered');
  if (btnMark) {
    btnMark.addEventListener('click', () => {
      AudioEngine.play('cheer');
      addXp(25);
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

  // Initialize Leaflet Map
  if (mapConfig && window.L) {
    setTimeout(() => {
      initializeLessonLeafletMap(subtopicId, mapConfig);
    }, 100);
  }
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

function initializeLessonLeafletMap(subtopicId, mapConfig) {
  const mapContainer = document.getElementById(`lesson-leaflet-map-${subtopicId}`);
  if (!mapContainer) return;
  
  if (mapContainer._leaflet_id) {
    return; // Already initialized
  }
  
  const map = window.L.map(mapContainer, {
    center: mapConfig.center,
    zoom: mapConfig.zoom,
    zoomControl: true,
    attributionControl: false
  });
  
  window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  }).addTo(map);
  
  const createMarkerIcon = (isActive) => {
    const size = isActive ? 14 : 9;
    const color = isActive ? 'var(--primary)' : '#475569';
    const borderColor = isActive ? '#fff' : 'rgba(255,255,255,0.4)';
    const shadow = isActive ? 'box-shadow: 0 0 8px var(--primary);' : '';
    const pulseHtml = isActive ? `<div class="hotspot-pulse" style="width: 14px; height: 14px; border: 2px solid var(--primary); border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: hotspot-ping 2s infinite ease-in-out; pointer-events: none;"></div>` : '';
    
    return window.L.divIcon({
      html: `
        <div style="position: relative; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">
          ${pulseHtml}
          <div style="width: ${size}px; height: ${size}px; border-radius: 50%; background: ${color}; border: 2px solid ${borderColor}; ${shadow}"></div>
        </div>
      `,
      className: 'custom-leaflet-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  const significanceBox = document.getElementById(`lesson-map-significance-${subtopicId}`);
  
  mapConfig.points.forEach(pt => {
    const icon = createMarkerIcon(pt.highlighted);
    const marker = window.L.marker(pt.coords, { icon: icon }).addTo(map);
    
    marker.bindTooltip(pt.title, {
      permanent: pt.highlighted,
      direction: 'top',
      offset: [0, -10],
      className: pt.highlighted ? 'leaflet-tooltip-active' : 'leaflet-tooltip-inactive'
    });
    
    marker.on('click', () => {
      AudioEngine.play('click');
      if (significanceBox) {
        significanceBox.style.borderColor = 'var(--accent)';
        significanceBox.style.background = 'rgba(249, 115, 22, 0.05)';
        significanceBox.innerHTML = `<strong>📍 ${pt.title}:</strong> ${pt.description}`;
      }
      map.panTo(pt.coords);
    });
  });
  
  if (mapConfig.drawRoute && mapConfig.drawRoute.length > 0) {
    window.L.polyline(mapConfig.drawRoute, {
      color: 'var(--primary)',
      weight: 3,
      dashArray: '5, 5',
      opacity: 0.85
    }).addTo(map);
  }
}

let activeWorkbookSubtopicId = 'subtopic_1_1';

export function openWorkbookModal(subtopicId) {
  activeWorkbookSubtopicId = subtopicId;
  const modal = document.getElementById('lesson-workbook-modal');
  if (modal) {
    modal.style.display = 'flex';
  }

  // Populate dynamic exam questions list if available
  const listContainer = document.getElementById('workbook-exam-questions-list');
  if (listContainer) {
    const questions = LESSONS_DATA[subtopicId]?.questionVault || [];
    listContainer.innerHTML = questions.map((q, idx) => {
      const qText = q.question;
      let badgeColor = '#3b82f6';
      let styleLabel = 'Consequence';
      if (qText.toLowerCase().includes('importance')) {
        badgeColor = '#f59e0b';
        styleLabel = 'Importance';
      } else if (qText.toLowerCase().includes('narrative')) {
        badgeColor = '#10b981';
        styleLabel = 'Narrative';
      }
      return `
        <label style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: var(--text-main); cursor: pointer; line-height: 1.35; padding: 4px 0;">
          <input type="checkbox" class="workbook-question-checkbox" value="${idx}" checked style="margin-top: 2px; cursor: pointer;">
          <div>
            <span style="display: inline-block; font-size: 0.7rem; font-weight: bold; text-transform: uppercase; color: #fff; background: ${badgeColor}; padding: 1px 5px; border-radius: 4px; margin-right: 4px;">${styleLabel}</span>
            <span>${qText}</span>
          </div>
        </label>
      `;
    }).join('');
  }

  // Set initial visibility of questions selector
  const styleSelect = document.getElementById('workbook-creator-style');
  const wrapper = document.getElementById('workbook-exam-questions-selector-wrapper');
  if (styleSelect && wrapper) {
    wrapper.style.display = styleSelect.value === 'exam' ? 'flex' : 'none';
  }
}

export function initWorkbookCreator() {
  const modal = document.getElementById('lesson-workbook-modal');
  const btnClose = document.getElementById('btn-workbook-creator-close');
  const btnPrint = document.getElementById('btn-workbook-print');
  const btnWord = document.getElementById('btn-workbook-export-word');
  const styleSelect = document.getElementById('workbook-creator-style');
  const wrapper = document.getElementById('workbook-exam-questions-selector-wrapper');

  if (styleSelect) {
    styleSelect.addEventListener('change', () => {
      if (styleSelect.value === 'exam') {
        if (wrapper) wrapper.style.display = 'flex';
      } else {
        if (wrapper) wrapper.style.display = 'none';
      }
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.style.display = 'none';
      AudioEngine.play('click');
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      const style = document.getElementById('workbook-creator-style').value;
      const density = document.getElementById('workbook-creator-density').value;
      const answers = document.getElementById('workbook-creator-answers').value;
      
      let selectedIndices = [];
      if (style === 'exam') {
        const checkboxes = document.querySelectorAll('.workbook-question-checkbox:checked');
        selectedIndices = Array.from(checkboxes).map(cb => parseInt(cb.value));
        if (selectedIndices.length === 0) {
          alert("Please select at least one exam question to include in your practice pack.");
          return;
        }
      }

      const html = generateWorkbookHtml(activeWorkbookSubtopicId, style, density, answers === 'yes', selectedIndices);
      
      const printArea = document.getElementById('print-area');
      if (printArea) {
        printArea.innerHTML = html;
      }
      
      AudioEngine.play('success');
      window.print();
    });
  }

  if (btnWord) {
    btnWord.addEventListener('click', () => {
      const style = document.getElementById('workbook-creator-style').value;
      const density = document.getElementById('workbook-creator-density').value;
      const answers = document.getElementById('workbook-creator-answers').value;
      
      let selectedIndices = [];
      if (style === 'exam') {
        const checkboxes = document.querySelectorAll('.workbook-question-checkbox:checked');
        selectedIndices = Array.from(checkboxes).map(cb => parseInt(cb.value));
        if (selectedIndices.length === 0) {
          alert("Please select at least one exam question to include in your practice pack.");
          return;
        }
      }

      const html = generateWorkbookHtml(activeWorkbookSubtopicId, style, density, answers === 'yes', selectedIndices);
      const styleLabel = style.charAt(0).toUpperCase() + style.slice(1);
      downloadHtmlAsWord(`Lesson_Workbook_${activeWorkbookSubtopicId.replace('subtopic_', '')}_${styleLabel}.doc`, html);
      AudioEngine.play('success');
    });
  }
}


function generateWorkbookHtml(subtopicId, style, density, includeAnswers, selectedIndices = []) {
  const data = WORKBOOK_DATA[subtopicId];
  if (!data) {
    return `<html><body><h3>Workbook pack not available for subtopic: ${subtopicId}</h3></body></html>`;
  }

  const specList = SPEC_CHECKLIST_DATA[subtopicId] || [];

  const detailsHtml = `
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; font-family: Arial, sans-serif;">
      <tr>
        <td style="border: 1px solid #9ca3af; padding: 5px 8px; font-size: 8.5pt; width: 50%;"><strong>Student Name:</strong> ___________________________________</td>
        <td style="border: 1px solid #9ca3af; padding: 5px 8px; font-size: 8.5pt; width: 25%;"><strong>Date:</strong> __________________</td>
        <td style="border: 1px solid #9ca3af; padding: 5px 8px; font-size: 8.5pt; width: 25%;"><strong>Class:</strong> __________________</td>
      </tr>
    </table>
  `;

  if (style === 'booklet') {
    const narrativeHtml = data.narrative.map(sec => `
      <div class="sub-title">${sec.title}</div>
      ${sec.paragraphs.map(p => `<p>${p}</p>`).join('')}
    `).join('');

    const vocabHtml = data.vocabulary.map(item => `
      <div class="vocab-item"><strong>${item.term}</strong>: ${item.definition}</div>
    `).join('');

    const timelineCells = [];
    data.timeline.forEach((item, idx) => {
      timelineCells.push(`
        <td class="timeline-card">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-desc">${item.desc}</div>
        </td>
      `);
      if (idx < data.timeline.length - 1) {
        timelineCells.push(`
          <td style="text-align: center; font-size: 11pt; width: 4%; vertical-align: middle; color: #9ca3af;">➔</td>
        `);
      }
    });

    const comprehensionHtml = data.comprehensionCheck.map((q, idx) => `
      <div class="question-block">
        <span class="question-title">${q.title}</span>
        <span class="scaffold-tip">${q.scaffold}</span>
        ${q.stretch ? `<span class="stretch-challenge">${q.stretch}</span>` : ''}
      </div>
    `).join('');

    const matrixHeaders = data.causationMatrix.columns.map(col => `
      <th class="matrix-header" style="width: ${100 / data.causationMatrix.columns.length}%;">${col}</th>
    `).join('');
    const matrixCells = data.causationMatrix.columns.map(() => `
      <td class="matrix-cell"></td>
    `).join('');
    const factBankText = data.causationMatrix.factBank.map((fact, idx) => `(${idx + 1}) ${fact}`).join(' • ');

    const matrixHtml = `
      <table class="matrix-table">
        <tr>${matrixHeaders}</tr>
        <tr>${matrixCells}</tr>
      </table>
    `;

    let sourcesTable = '';
    if (data.sources && data.sources.length > 0) {
      sourcesTable += `<table style="width: 100%; border-collapse: collapse; margin-bottom: 3px;">`;
      for (let i = 0; i < data.sources.length; i += 2) {
        sourcesTable += `<tr>`;
        const s1 = data.sources[i];
        sourcesTable += `
          <td style="width: 50%; padding-right: 4px; padding-bottom: 4px; vertical-align: top;">
            <div class="source-box">
              <strong>${s1.id}: ${s1.title}</strong>
              <p style="font-family: 'Times New Roman', Times, serif; font-size: 7.5pt; margin: 2px 0 0 0; line-height: 1.2;">
                "${s1.text}"
              </p>
            </div>
          </td>
        `;
        const s2 = data.sources[i + 1];
        if (s2) {
          sourcesTable += `
            <td style="width: 50%; padding-left: 4px; padding-bottom: 4px; vertical-align: top;">
              <div class="source-box">
                <strong>${s2.id}: ${s2.title}</strong>
                <p style="font-family: 'Times New Roman', Times, serif; font-size: 7.5pt; margin: 2px 0 0 0; line-height: 1.2;">
                  "${s2.text}"
                </p>
              </div>
            </td>
          `;
        } else {
          sourcesTable += `<td style="width: 50%;"></td>`;
        }
        sourcesTable += `</tr>`;
      }
      sourcesTable += `</table>`;
    }

    const sourceTasksHtml = data.sourceTasks.map(task => `
      <span class="scaffold-tip"><strong>${task.title}:</strong> ${task.scaffold}</span>
    `).join('');

    const examQuestionsHtml = data.examPractice.questions.map((q, idx) => {
      if (q.stimulus) {
        return `
          <div style="margin-bottom: 4px;">
            <span style="font-weight: bold; font-size: 8pt;">${q.title}:</span>
            <span style="display: block; font-size: 7.5pt; color: #374151; margin-bottom: 2px;">${q.text}</span>
            <div style="font-size: 6.5pt; color: #4b5563; line-height: 1.25; border-left: 2px solid #d1d5db; padding-left: 6px; margin-left: 2px; margin-top: 2px;">
              You may use the following in your answer:<br>
              ${q.stimulus.map(s => `• ${s}<br>`).join('')}
              You must also use information of your own.
            </div>
          </div>
        `;
      } else {
        return `
          <div style="margin-bottom: 4px;">
            <span style="font-weight: bold; font-size: 8pt;">${q.title}:</span>
            <span style="display: block; font-size: 7.5pt; color: #374151;">${q.text}</span>
          </div>
        `;
      }
    }).join('');

    const examWordBankText = data.examPractice.wordBank.join(' • ');

    const quizItemsHtml = data.peerQuiz.map(item => `
      <li style="margin: 0 0 1.5px 0; padding: 0;">${item.q}</li>
    `).join('');

    const mindMapBranchesHtml = data.mindMap.branches.map(br => `
      <div class="map-branch-item">
        <strong>${br.title}</strong>
        <div class="keyword-pill-box">🔑 ${br.keywords.join(' • ')}</div>
      </div>
    `).join('');

    return `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>GCSE History Lesson Resource - ${data.title}</title>
  <style>
    @page {
      size: 21cm 29.7cm; /* A4 */
      margin: 0.8cm 1.0cm 0.8cm 1.0cm;
      mso-page-orientation: portrait;
    }
    body {
      font-family: 'Arial', sans-serif;
      font-size: 9.5pt;
      color: #1f2937;
      line-height: 1.3;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }
    .print-page, .print-page-last {
      clear: both;
      box-sizing: border-box;
      position: relative;
      background: #ffffff;
    }
    .print-page {
      page-break-after: always;
    }
    .print-page-last {
      page-break-after: avoid;
    }
    @media screen {
      body {
        background-color: #f3f4f6;
        padding: 20px 0;
      }
      .print-page, .print-page-last {
        width: 21cm;
        min-height: 29.7cm;
        margin: 0 auto 20px auto;
        padding: 0.8cm 1.0cm;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
        border-radius: 4px;
      }
    }
    @media print {
      body {
        background: #ffffff !important;
        color: #1f2937 !important;
        font-size: 9.5pt !important;
        line-height: 1.3 !important;
      }
      .print-page, .print-page-last {
        width: 100% !important;
        min-height: 27.7cm !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
      }
    }
    
    .main-title {
      font-size: 13pt;
      font-weight: 800;
      border-bottom: 2px solid #111827;
      padding-bottom: 3px;
      margin-top: 0;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #111827;
    }
    .section-title {
      font-size: 9.2pt;
      font-weight: bold;
      text-transform: uppercase;
      color: #111827;
      border-bottom: 1.5px solid #4b5563;
      padding-bottom: 1px;
      margin-top: 5px;
      margin-bottom: 2px;
    }
    .sub-title {
      font-size: 8.2pt;
      font-weight: bold;
      color: #111827;
      margin-top: 4px;
      margin-bottom: 1px;
    }
    
    .narrative-layout {
      width: 100%;
      border-collapse: collapse;
      margin-top: 4px;
    }
    .narrative-text {
      width: 70%;
      padding-right: 10px;
      vertical-align: top;
      text-align: justify;
      font-size: 8pt;
      line-height: 1.25;
    }
    .narrative-text p {
      margin: 0 0 2px 0;
    }
    .side-panel {
      width: 30%;
      padding-left: 8px;
      border-left: 1px solid #d1d5db;
      vertical-align: top;
    }
    
    .spec-box {
      border: 1px solid #d1d5db;
      padding: 4px 6px;
      margin-bottom: 4px;
      background: #f9fafb;
      font-size: 7.5pt;
      line-height: 1.15;
    }
    .spec-box ul {
      margin: 1px 0 0 0;
      padding-left: 12px;
    }
    .active-reading-box {
      border: 1px solid #d1d5db;
      padding: 4px 6px;
      background: #f3f4f6;
      margin-bottom: 4px;
      font-size: 7.5pt;
      line-height: 1.15;
    }
    .vocab-box {
      background: #f9fafb;
      padding: 4px;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
    }
    .vocab-box h4 {
      font-size: 7.2pt;
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 2px;
      border-bottom: 1px solid #9ca3af;
      padding-bottom: 1px;
    }
    .vocab-item {
      font-size: 6.8pt;
      line-height: 1.15;
      margin-bottom: 2px;
    }
    .source-box {
      border-left: 3px solid #4b5563;
      background: #f9fafb;
      padding: 4px 6px;
      font-size: 7.2pt;
      margin-bottom: 3px;
      box-sizing: border-box;
      height: 100%;
    }
    
    .timeline-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 4px;
    }
    .timeline-card {
      border: 1px solid #d1d5db;
      padding: 3px 4px;
      width: 22%;
      vertical-align: top;
      background: #f9fafb;
    }
    .timeline-date {
      font-weight: bold;
      font-size: 7.2pt;
      text-transform: uppercase;
      border-bottom: 1px solid #e5e7eb;
      margin-bottom: 2px;
      padding-bottom: 1px;
    }
    .timeline-desc {
      font-size: 6.8pt;
      line-height: 1.15;
    }
    
    .question-block {
      margin-bottom: 3px;
      padding: 4px 6px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
    }
    .question-title {
      font-size: 8.2pt;
      font-weight: bold;
      display: block;
      margin-bottom: 1px;
    }
    .scaffold-tip {
      font-size: 6.8pt;
      color: #4b5563;
      font-style: italic;
      display: block;
      margin-bottom: 1px;
    }
    .stretch-challenge {
      font-size: 6.8pt;
      color: #b45309;
      font-weight: bold;
      display: block;
      margin-top: 1px;
    }
    
    .matrix-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 4px;
    }
    .matrix-header {
      font-weight: bold;
      font-size: 7.2pt;
      text-transform: uppercase;
      text-align: center;
      background-color: #f3f4f6;
      border: 1px solid #9ca3af;
      padding: 2px;
    }
    .matrix-cell {
      border: 1px solid #9ca3af;
      padding: 3px;
      min-height: 30px;
      vertical-align: top;
      font-size: 6.8pt;
      color: #9ca3af;
      font-style: italic;
    }
    
    .framework-container {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 3px;
      font-size: 6.8pt;
      background: #f9fafb;
      border: 1px solid #d1d5db;
      border-radius: 4px;
    }
    .framework-column {
      vertical-align: top;
      padding: 4px;
    }

    .retention-box {
      border: 1.5px solid #111827;
      background: #ffffff;
      border-radius: 4px;
      margin-top: 3px;
      padding: 3px 6px;
    }
    .retention-header {
      font-weight: bold;
      font-size: 8.2pt;
      color: #111827;
      text-transform: uppercase;
      border-bottom: 1.5px solid #111827;
      padding-bottom: 1px;
      margin-bottom: 2px;
    }
    .split-layout {
      width: 100%;
      border-collapse: collapse;
    }
    .split-col-left {
      width: 50%;
      border-right: 1px dashed #d1d5db;
      padding-right: 8px;
      vertical-align: top;
    }
    .split-col-right {
      width: 50%;
      padding-left: 8px;
      vertical-align: top;
    }
    .quiz-title-box {
      font-weight: bold;
      font-size: 7.2pt;
      text-transform: uppercase;
      color: #4b5563;
      margin-bottom: 2px;
    }
    .quiz-list {
      margin: 0;
      padding-left: 14px;
      font-size: 7.2pt;
      line-height: 1.15;
    }
    .quiz-list li {
      margin-bottom: 1px;
    }
    .map-blueprint {
      font-size: 7pt;
      line-height: 1.15;
    }
    .map-branch-item {
      margin-bottom: 2px;
      background: #f9fafb;
      padding: 2px 4px;
      border-left: 2px solid #b45309;
    }
    .map-branch-item strong {
      color: #111827;
      display: block;
    }
    .keyword-pill-box {
      margin-top: 2px;
      font-style: italic;
      color: #4b5563;
    }
    
    .footer-note {
      font-size: 7pt;
      color: #6b7280;
      text-align: center;
      border-top: 1px solid #e5e7eb;
      padding-top: 2px;
      margin-top: 5px;
      clear: both;
    }
    @media screen {
      .footer-note {
        position: absolute;
        bottom: 0.8cm;
        left: 1.0cm;
        right: 1.0cm;
        margin-top: 0;
      }
    }
    @media print {
      .footer-note {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: 0;
      }
    }
  </style>
</head>
<body>

  <!-- PAGE 1: NARRATIVE & TIMELINE -->
  <div class="print-page">
    <h2 class="main-title">${data.title}</h2>

    <div class="spec-box">
      <strong>📋 Curriculum Specification Checklist</strong>
      <ul>
        ${specList.map(item => `<li style="margin: 0 0 2px 0; padding: 0;">${item.point}</li>`).join('')}
      </ul>
    </div>

    <div class="active-reading-box">
      <strong>✍️ Active Reading Focus:</strong> ${data.activeReadingFocus}
    </div>

    <div class="section-title" style="margin-top: 5px; margin-bottom: 3px;">Section 1: Historical Narrative & Core Knowledge</div>
    
    <table class="narrative-layout">
      <tr>
        <td class="narrative-text">
          ${narrativeHtml}
        </td>
        <td class="side-panel">
          <div class="vocab-box">
            <h4>Vocabulary Focus</h4>
            ${vocabHtml}
          </div>
        </td>
      </tr>
    </table>

    <div class="section-title" style="margin-top: 5px; margin-bottom: 3px;">Section 2: Visual Chronological Timeline</div>
    <p style="font-size: 7.5pt; color: #4b5563; margin: 0 0 3px 0; font-style: italic;">
      <strong>Timeline Task:</strong> In your exercise book, choose any two events from the timeline below. Write a short explanation of how the earlier event directly led to or caused the later event.
    </p>
    <table class="timeline-table" style="margin-bottom: 3px;">
      <tr>
        ${timelineCells.join('')}
      </tr>
    </table>
    <div class="footer-note">Page 1</div>
  </div>

  <!-- PAGE 2: ANALYTICAL TASKS & ASSESSMENT PREP -->
  <div class="print-page-last">
    <div class="section-title" style="margin-top: 0; margin-bottom: 3px;">Section 3: Comprehension Check (AO1)</div>
    <p style="font-size: 7.5pt; color: #4b5563; margin: 0 0 3px 0; font-style: italic;">Provide structured analytical answers in your exercise book using the prompts below.</p>

    ${comprehensionHtml}

    <div class="section-title" style="margin-top: 6px; margin-bottom: 3px;">Section 4: Causation Matrix (Analytical Essay Prep)</div>
    <p style="font-size: 7.5pt; color: #4b5563; margin: 0 0 3px 0; font-style: italic;">
      <strong>Task:</strong> In your exercise book, recreate and populate this matrix. Categorize by writing the fact numbers (1-6) from the Fact Bank in the corresponding columns, then write a short sentence explaining which factor was the most important.
    </p>
    
    <div style="border: 1px dashed #9ca3af; padding: 3px 6px; font-size: 7pt; background: #f9fafb; line-height: 1.25; border-radius: 4px; margin-bottom: 3px;">
      <strong>Fact Bank:</strong> ${factBankText}
    </div>

    ${matrixHtml}

    <div class="section-title" style="margin-top: 6px; margin-bottom: 3px;">Section 5: Historical Sources & Evidence (AO3)</div>
    <p style="font-size: 7.5pt; color: #4b5563; margin: 0 0 3px 0; font-style: italic;">Analyze the conflicting viewpoints surrounding the topic using the evidence below.</p>
    
    ${sourcesTable}

    <div class="question-block" style="margin-bottom: 4px; padding: 4px 6px;">
      <span class="question-title" style="font-size: 8pt;">Source Tasks (Answer in your exercise book):</span>
      ${sourceTasksHtml}
    </div>

    <div class="section-title" style="margin-top: 6px; margin-bottom: 3px;">Section 6: Exam Practice & Higher Tier Synthesis</div>
    
    <table class="framework-container" style="margin-bottom: 0;">
      <tr>
        <td class="framework-column" style="width: 52%; padding-right: 6px; border-right: 1px solid #e5e7eb;">
          <strong>📝 Exam Practice Questions (Answer in your exercise book):</strong>
          <div style="margin-top: 3px;">
            ${examQuestionsHtml}
          </div>
        </td>
        <td class="framework-column" style="width: 48%; padding-left: 6px;">
          <strong>🏆 Exam Word Bank &amp; Writing Support:</strong>
          <div style="margin-top: 2px; font-size: 7pt; line-height: 1.25;">
            <strong>Word Bank:</strong> ${examWordBankText}
            <div style="margin-top: 3px; font-style: italic; color: #4b5563;">
              <strong>Synthesis Model:</strong> ${data.examPractice.synthesisModel}
            </div>
          </div>
        </td>
      </tr>
    </table>

    <div class="retention-box">
      <div class="retention-header">🧠 Section 7: Knowledge Retention &amp; Synoptic Revision Guide</div>
      <table class="split-layout">
        <tr>
          <td class="split-col-left">
            <div class="quiz-title-box">⚡ Quick-Fire Peer-To-Peer Quiz</div>
            <ol class="quiz-list" style="margin: 0; padding-left: 14px;">
              ${quizItemsHtml}
            </ol>
          </td>
          
          <td class="split-col-right">
            <div class="quiz-title-box">🗺️ Exercise Book Mind-Map Blueprint</div>
            <div class="map-blueprint">
              <p style="margin: 0 0 4px 0; font-style: italic; color: #4b5563;">In your book, construct a central node titled <strong>"${data.mindMap.centralNode}"</strong> and link these three core analytical branches using the keywords:</p>
              
              ${mindMapBranchesHtml}
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="footer-note">Page 2</div>
  </div>

</body>
</html>`;
  }

  let html = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>GCSE History Lesson Resource - Workbook</title>
  <style>
    @page {
      size: 21cm 29.7cm; /* A4 */
      margin: 1.0cm;
      mso-page-orientation: portrait;
    }
    body {
      font-family: 'Arial', sans-serif;
      font-size: 9.5pt;
      color: #1f2937;
      line-height: 1.4;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }
    .print-page, .print-page-last {
      clear: both;
      box-sizing: border-box;
      position: relative;
      background: #ffffff;
    }
    .print-page {
      page-break-after: always;
    }
    .print-page-last {
      page-break-after: avoid;
    }
    @media screen {
      body {
        background-color: #f3f4f6;
        padding: 20px 0;
      }
      .print-page, .print-page-last {
        width: 21cm;
        min-height: 29.7cm;
        margin: 0 auto 20px auto;
        padding: 1.0cm;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
        border-radius: 4px;
      }
    }
    @media print {
      body {
        background: #ffffff !important;
        color: #1f2937 !important;
        font-size: 9.5pt !important;
        line-height: 1.4 !important;
      }
      .print-page, .print-page-last {
        width: 100% !important;
        min-height: 27.2cm !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
      }
    }
    .main-title {
      font-size: 13.5pt;
      font-weight: 800;
      border-bottom: 2px solid #111827;
      padding-bottom: 3px;
      margin-top: 0;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #111827;
    }
    .sub-title {
      font-size: 8.5pt;
      font-weight: bold;
      color: #111827;
      margin-top: 6px;
      margin-bottom: 2px;
    }
    .dotted-writing-line {
      border-bottom: 1px dashed #9ca3af;
      height: 28px;
      margin-bottom: 4px;
    }
    .footer-note {
      font-size: 7pt;
      color: #6b7280;
      text-align: center;
      border-top: 1px solid #e5e7eb;
      padding-top: 2px;
      margin-top: 15px;
      clear: both;
    }
    @media screen {
      .footer-note {
        position: absolute;
        bottom: 1.0cm;
        left: 1.0cm;
        right: 1.0cm;
        margin-top: 0;
      }
    }
    @media print {
      .footer-note {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: 0;
      }
    }
    /* Cornell grid styles */
    .print-cornell-grid {
      display: table;
      width: 100%;
      border: 1.5px solid #111827;
      margin-top: 10px;
      box-sizing: border-box;
    }
    .print-cornell-row {
      display: table-row;
    }
    .print-cornell-cues {
      display: table-cell;
      width: 30%;
      border-right: 1.5px solid #111827;
      border-bottom: 1.5px solid #111827;
      padding: 10px;
      vertical-align: top;
      font-size: 8pt;
      font-weight: bold;
      background: #f9fafb;
    }
    .print-cornell-notes {
      display: table-cell;
      width: 70%;
      border-bottom: 1.5px solid #111827;
      padding: 10px;
      vertical-align: top;
      background: #ffffff;
    }
    .print-cornell-summary-row {
      display: table-row;
    }
    .print-cornell-summary-cell {
      display: table-cell;
      colspan: 2;
      padding: 10px;
      vertical-align: top;
      background: #f9fafb;
      font-size: 8.5pt;
    }
    /* Flowchart styles */
    .flowchart-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      margin-bottom: 15px;
    }
    .flowchart-box {
      border: 1.5px solid #111827;
      padding: 8px;
      width: 22%;
      vertical-align: top;
      background: #ffffff;
      font-size: 8pt;
    }
    .flowchart-arrow {
      text-align: center;
      font-size: 14pt;
      font-weight: bold;
      width: 4%;
      vertical-align: middle;
      color: #4b5563;
    }
    /* Vocabulary Match-up styles */
    .vocab-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 10px;
    }
    .vocab-th {
      font-weight: bold;
      font-size: 7.5pt;
      text-transform: uppercase;
      background-color: #f3f4f6;
      border: 1px solid #9ca3af;
      padding: 4px 6px;
      text-align: left;
    }
    .vocab-td {
      border: 1px solid #9ca3af;
      padding: 5px 6px;
      font-size: 7.5pt;
      vertical-align: middle;
    }
    /* Exam Rubric styles */
    .rubric-box {
      border: 1px solid #111827;
      background: #f9fafb;
      padding: 8px;
      margin-top: 15px;
      font-size: 8pt;
    }
    @media screen {
      body {
        background-color: #f3f4f6;
        padding: 20px 0;
      }
      .print-page, .print-page-last {
        background: #ffffff;
        width: 21cm;
        min-height: 29.7cm;
        margin: 0 auto 20px auto;
        padding: 1.0cm;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        box-sizing: border-box;
      }
    }
  </style>
</head>
<body>
`;

  if (style === 'cloze') {
    // Scramble the word bank so words do not appear in chronological order of the blanks
    const scrambledWordBank = [...data.cloze.wordBank].sort(() => Math.random() - 0.5);
    const wordBank = scrambledWordBank.join(' | ');
    
    const fill = (word) => {
      if (includeAnswers) {
        return `<span style="font-weight: bold; text-decoration: underline; color: #16a34a;">${word}</span>`;
      } else {
        return `<strong>____________________</strong>`;
      }
    };

    const parseClozeText = (text) => {
      return text.replace(/\[\[(.*?)\]\]/g, (match, p1) => {
        return fill(p1);
      });
    };

    const clozeSectionsHtml = data.cloze.sections.map(sec => `
      <h3 class="sub-title">${sec.title}</h3>
      <p>
        ${parseClozeText(sec.text)}
      </p>
    `).join('');

    html += `
      <div class="print-page-last">
        <h2 class="main-title">Guided Cloze Review: ${data.title}</h2>
        ${detailsHtml}
        <div style="border: 1px solid #111827; padding: 10px; margin-bottom: 15px; font-size: 9pt; background: #f9fafb;">
          <strong>Instructions:</strong> Read the passage below and fill in the blanks using the terms from the Word Bank at the bottom.
        </div>
        
        <div style="font-size: 10pt; line-height: 1.8; text-align: justify;">
          ${clozeSectionsHtml}
        </div>

        <div style="border: 1.5px solid #111827; padding: 12px; margin-top: 30px; background: #f9fafb; border-radius: 4px;">
          <strong style="display: block; margin-bottom: 6px; text-transform: uppercase; font-size: 8.5pt;">Word Bank</strong>
          <div style="font-size: 8.5pt; line-height: 1.5; text-align: center; font-style: italic;">
            ${wordBank}
          </div>
        </div>
        
        <div class="footer-note">GCSE History Workbook &bull; Guided Cloze Review &bull; Page 1 of 1</div>
      </div>
    `;

  } else if (style === 'cornell') {
    const linesCount = density === 'compact' ? 5 : 8;
    const makeDottedLines = (count) => Array(count).fill('<div class="dotted-writing-line"></div>').join('');
    
    const fillNote = (ans) => {
      if (includeAnswers) {
        return `<div style="font-size: 9.5pt; color: #16a34a; font-style: italic; padding: 5px 0;"><strong>Model Notes:</strong> ${ans}</div>`;
      } else {
        return makeDottedLines(linesCount);
      }
    };

    const cues = data.cornell.cues;
    const page1Cues = cues.slice(0, 3);
    const page2Cues = cues.slice(3);

    const renderCueRow = (cue) => `
      <div class="print-cornell-row">
        <div class="print-cornell-cues">
          ${cue.title}<br><br>
          <span style="font-size: 7.5pt; font-weight: normal; color: #4b5563;">
            ${cue.subCues.map(sc => `${sc}`).join('<br>')}
          </span>
        </div>
        <div class="print-cornell-notes">
          ${fillNote(cue.modelNotes)}
        </div>
      </div>
    `;

    html += `
      <div class="print-page">
        <h2 class="main-title">Cornell Note-Taking: ${data.title}</h2>
        ${detailsHtml}
        <div style="border: 1px solid #111827; padding: 10px; margin-bottom: 10px; font-size: 8.5pt; background: #f9fafb;">
          <strong>Methodology:</strong> Use the left-hand column cues to guide your note-taking on the historical narrative. Re-read sections 1-3 to extract precise dates, groups, and motivations.
        </div>

        <div class="print-cornell-grid">
          ${page1Cues.map(renderCueRow).join('')}
        </div>
        
        <div class="footer-note">GCSE History Workbook &bull; Cornell Notes &bull; Page 1 of 2</div>
      </div>

      <div class="print-page-last">
        <div class="print-cornell-grid">
          ${page2Cues.map(renderCueRow).join('')}

          <div class="print-cornell-summary-row">
            <div class="print-cornell-summary-cell" style="border: 1.5px solid #111827;">
              <strong>Synthesis Summary:</strong> ${data.cornell.synthesis.prompt}
              ${includeAnswers ? `
                <div style="font-size: 9.5pt; color: #16a34a; font-style: italic; margin-top: 8px;">
                  <strong>Model Synthesis:</strong> ${data.cornell.synthesis.modelAnswer}
                </div>
              ` : makeDottedLines(6)}
            </div>
          </div>
        </div>

        <div class="footer-note">GCSE History Workbook &bull; Cornell Notes &bull; Page 2 of 2</div>
      </div>
    `;

  } else if (style === 'organizer') {
    const flowchartLines = density === 'compact' ? 3 : 5;
    const makeDottedLines = (count) => Array(count).fill('<div class="dotted-writing-line"></div>').join('');
    
    const fillBox = (ans) => {
      if (includeAnswers) {
        return `<div style="font-size: 8pt; color: #16a34a; font-style: italic; line-height: 1.4;"><strong>Key Points:</strong> ${ans}</div>`;
      } else {
        return makeDottedLines(flowchartLines);
      }
    };

    const boxes = data.organizer.boxes;
    const vocabMatch = data.organizer.vocabMatch;

    const flowchartCells = [];
    boxes.forEach((box, idx) => {
      flowchartCells.push(`
        <td class="flowchart-box">
          <div style="font-weight: bold; font-size: 8.5pt; text-transform: uppercase; border-bottom: 1px solid #111827; margin-bottom: 6px; padding-bottom: 2px;">
            ${box.title}
          </div>
          ${fillBox(box.modelNotes)}
        </td>
      `);
      if (idx < boxes.length - 1) {
        flowchartCells.push(`<td class="flowchart-arrow">➔</td>`);
      }
    });

    const sortedDefs = [...vocabMatch].sort((a, b) => a.match.localeCompare(b.match));
    const vocabRows = vocabMatch.map((item, idx) => `
      <tr>
        <td class="vocab-td"><strong>${item.term}</strong></td>
        <td class="vocab-td" style="text-align: center; font-weight: bold; color: #16a34a;">${includeAnswers ? item.match : ""}</td>
        <td class="vocab-td">${sortedDefs[idx].match}. ${sortedDefs[idx].definition}</td>
      </tr>
    `).join('');

    html += `
      <div class="print-page-last">
        <h2 class="main-title">Graphic Organizer: ${data.title}</h2>
        ${detailsHtml}
        <div style="border: 1px solid #111827; padding: 10px; margin-bottom: 10px; font-size: 8.5pt; background: #f9fafb;">
          <strong>Task 1: Causal Flowchart.</strong> In the boxes below, record the key causes, actions, and consequences for each turning point, tracing the chronology of the Mandate's collapse.
        </div>

        <table class="flowchart-table">
          <tr>
            ${flowchartCells.join('')}
          </tr>
        </table>

        <div class="section-title">Task 2: Key Vocabulary Match-Up</div>
        <table class="vocab-table">
          <thead>
            <tr>
              <th class="vocab-th" style="width: 25%;">Historical Term</th>
              <th class="vocab-th" style="width: 15%; text-align: center;">Your Match</th>
              <th class="vocab-th" style="width: 60%;">Definition / Significance</th>
            </tr>
          </thead>
          <tbody>
            ${vocabRows}
          </tbody>
        </table>

        <div class="footer-note">GCSE History Workbook &bull; Graphic Organizer &bull; Page 1 of 1</div>
      </div>
    `;

  } else if (style === 'exam') {
    const questionsData = LESSONS_DATA[subtopicId]?.questionVault || [];
    
    selectedIndices.forEach((idx, qNum) => {
      const qObj = questionsData[idx];
      if (!qObj) return;
      
      const qText = qObj.question;
      const qAnswer = qObj.answer;

      let marks = 8;
      if (qText.toLowerCase().includes('4 marks') || qText.toLowerCase().includes('(4)')) {
        marks = 4;
      }
      
      let linesCount = marks === 4 ? 6 : 12;
      if (density === 'compact') {
        linesCount = marks === 4 ? 4 : 8;
      }

      let rubricHtml = '';
      const qTextLower = qText.toLowerCase();
      if (qTextLower.includes('consequence')) {
        rubricHtml = `
          <strong style="text-transform: uppercase; display: block; margin-bottom: 4px; color: #111827; font-size: 8.5pt;">Consequence Rubric (4 Marks)</strong>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Point:</strong> Clearly state one consequence of the event [1 Mark]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Detail:</strong> Support with specific historical details (dates/names/key terms) [1 Mark]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Explanation:</strong> Explain exactly how the consequence resulted from the event [2 Marks]</label>
        `;
      } else if (qTextLower.includes('narrative')) {
        rubricHtml = `
          <strong style="text-transform: uppercase; display: block; margin-bottom: 4px; color: #111827; font-size: 8.5pt;">Narrative Account Rubric (8 Marks)</strong>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Sequence:</strong> Structure the account in clear chronological order (Beginning &rarr; Middle &rarr; End) [2 Marks]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Linkage:</strong> Use connection words (e.g. 'This led to', 'As a direct result') to link events [2 Marks]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Knowledge:</strong> Support with precise historical details (dates, names, key terms) [2 Marks]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Analysis:</strong> Explain how the chain of events led to the final outcome [2 Marks]</label>
        `;
      } else if (qTextLower.includes('importance')) {
        rubricHtml = `
          <strong style="text-transform: uppercase; display: block; margin-bottom: 4px; color: #111827; font-size: 8.5pt;">Importance Rubric (8 Marks)</strong>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Significance:</strong> State why the event is important for the specified development [2 Marks]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Before/After:</strong> Explain the 'before' and 'after' state to show the change/significance [2 Marks]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Knowledge:</strong> Support with precise historical facts (dates, names, events) [2 Marks]</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] <strong>Explanation:</strong> Link the event directly to its impact on the specified outcome [2 Marks]</label>
        `;
      } else {
        rubricHtml = `
          <strong style="text-transform: uppercase; display: block; margin-bottom: 4px; color: #111827; font-size: 8.5pt;">Self-Evaluation Rubric</strong>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] Answered in full, grammatically correct sentences.</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] Included specific historical details (dates, names, events).</label>
          <label style="display: block; margin-bottom: 4px;"><input type="checkbox"> [ ] Explained the connection between cause and consequence or narrative progression.</label>
        `;
      }
      
      const isQuestionLast = qNum === selectedIndices.length - 1 && !includeAnswers;
      html += `
        <div class="${isQuestionLast ? 'print-page-last' : 'print-page'}">
          <div class="main-title">GCSE Exam Practice: ${data.title}</div>
          ${detailsHtml}
          <div style="font-size: 11pt; font-weight: bold; margin-bottom: 15px; border-bottom: 1.5px solid #111827; padding-bottom: 4px;">
            Question ${qNum + 1} [${marks} Marks]
          </div>
          
          <p style="font-size: 11pt; font-weight: bold; margin-bottom: 12px; line-height: 1.45;">
            ${qText}
          </p>

          <div style="margin-top: 15px;">
            ${Array(linesCount).fill('<div class="dotted-writing-line"></div>').join('')}
          </div>

          <div class="rubric-box">
            ${rubricHtml}
          </div>

          <div class="footer-note">GCSE History Workbook &bull; Exam Practice &bull; Page ${qNum + 1}</div>
        </div>
      `;
      
      if (includeAnswers) {
        const isAnswerLast = qNum === selectedIndices.length - 1;
        html += `
          <div class="${isAnswerLast ? 'print-page-last' : 'print-page'}">
            <div class="main-title">Teacher Answer Key &bull; Model Answer</div>
            <div style="font-size: 11pt; font-weight: bold; margin-bottom: 15px; border-bottom: 1.5px solid #111827; padding-bottom: 4px;">
              Model Answer for Question ${qNum + 1} [${marks} Marks]
            </div>
            
            <p style="font-size: 10pt; font-weight: bold; margin-bottom: 10px; font-style: italic; color: #4b5563;">
              Question: ${qText}
            </p>

            <div style="border-left: 3px solid #16a34a; background: #f0fdf4; padding: 12px; font-size: 10pt; line-height: 1.6; text-align: justify; margin-top: 15px;">
              ${qAnswer}
            </div>
            
            <div class="footer-note">GCSE History Workbook &bull; Exam Practice Answer Key &bull; Page ${qNum + 1}</div>
          </div>
        `;
      }
    });
  }

  html += `
</body>
</html>
  `;
  return html;
}

export function generateBulkWorkbookHtml(style, density, includeAnswers) {
  const subtopicIds = [
    'subtopic_1_1', 'subtopic_1_2', 'subtopic_1_3',
    'subtopic_2_1', 'subtopic_2_2', 'subtopic_2_3',
    'subtopic_3_1', 'subtopic_3_2', 'subtopic_3_3'
  ];

  let combinedBodyContent = '';
  let documentHeader = '';
  
  subtopicIds.forEach((subId, index) => {
    let selectedIndices = [];
    if (style === 'exam') {
      const questionsData = LESSONS_DATA[subId]?.questionVault || [];
      selectedIndices = questionsData.map((_, idx) => idx);
    }

    const html = generateWorkbookHtml(subId, style, density, includeAnswers, selectedIndices);
    
    const bodyStartIdx = html.indexOf('<body>');
    const bodyEndIdx = html.lastIndexOf('</body>');
    if (bodyStartIdx !== -1 && bodyEndIdx !== -1) {
      let bodyContent = html.substring(bodyStartIdx + 6, bodyEndIdx).trim();
      
      // Convert all print-page-last to print-page to force page break, except for the last lesson
      if (index < subtopicIds.length - 1) {
        bodyContent = bodyContent.replace(/class="print-page-last"/g, 'class="print-page"');
      }
      
      combinedBodyContent += `\n<!-- LESSON ${subId} -->\n` + bodyContent;
    }
    
    if (index === 0) {
      documentHeader = html.substring(0, bodyStartIdx + 6);
    }
  });

  return documentHeader + combinedBodyContent + '\n</body>\n</html>';
}

window.generateWorkbookHtml = generateWorkbookHtml;
window.generateBulkWorkbookHtml = generateBulkWorkbookHtml;



