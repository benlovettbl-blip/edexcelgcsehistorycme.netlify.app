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
