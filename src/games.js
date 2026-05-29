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
