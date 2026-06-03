import { state } from './state.js';
import { AudioEngine } from './audio.js';
import { Confetti } from './confetti.js';
import { switchView } from './navigation.js';
import { saveProgress } from './storage.js';
import { renderSidebarNav, updateGlobalStats } from './views.js';
import { QUIZ_DATA } from '../questions.js';

export const CRISIS_SCENARIOS = [
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

export function formatDoomsdayTime(pct) {
  if (pct >= 90) return '11:59 PM (ALARM)';
  if (pct <= 10) return '11:40 PM (ICE AGE)';
  let mins = 60 - Math.floor(pct / 2);
  return `11:${mins < 10 ? '0' : ''}${mins} PM`;
}

export function getCrisisColor(value) {
  if (value > 80 || value < 20) return 'var(--accent)';
  if (value > 65 || value < 35) return '#f59e0b';
  return 'var(--primary)';
}

export function initCrisisGame() {
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

export function updateCrisisUI() {
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

export function checkCrisisGameOver() {
  const m = state.crisisGameSession.metrics;
  if (m.tension >= 100) return "MUTUAL ASSURED DESTRUCTION VALIDATED: The Doomsday Clock strikes midnight. Strategic missiles launched. There is no recovery program for Paper 2.";
  if (m.tension <= 0) return "GEOPOLITICAL ERASURE: The US surrenders global relevance. Washington is converted into a collective wheat farm for the Eastern Bloc.";
  if (m.israel <= 0) return "STRATEGIC SURRENDER: The Israeli front collapses completely. The Joint Chiefs must now book alternative vacation properties.";
  if (m.oil <= 0) return "ECONOMIC EXTINCTION: Global oil drops to zero. Wall Street closes forever; the President is traded for three barrels of crude and an old bicycle.";
  if (m.arab <= 0) return "TOTAL REGIONAL ANARCHY: The Arab Alliance shatters into a billion decentralized factions, making subsequent exam answers impossibly complicated.";
  return null;
}

export function selectCrisisChoice(index) {
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

export function renderCrisisScenario() {
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

export function endCrisisGame(msg, isWin) {
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
  
  const restartBtn = document.getElementById('btn-restart-crisis');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      initCrisisGame();
    });
  }
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

export function initTugGame() {
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

export function updateTugUI() {
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

export function nextTugEvent() {
  if (state.tugGameSession.timeoutId) {
    clearTimeout(state.tugGameSession.timeoutId);
    state.tugGameSession.timeoutId = null;
  }

  if (state.currentView !== 'games') {
    return;
  }
  const pane = document.getElementById('game-tug-container');
  if (!pane || pane.style.display === 'none') {
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

export function processTugIntercept(playerChoice) {
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

export function endTugGame(isWin) {
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

  const restartBtn = document.getElementById('btn-restart-tug');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      AudioEngine.play('click');
      initTugGame();
    });
  }
}

export const jswKeys = {};
window.addEventListener("keydown", e => {
  const pane = document.getElementById('game-jsw-container');
  const isJswActive = state.currentView === 'games' && pane && pane.style.display !== 'none';
  if (isJswActive) {
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

export function initJswGame() {
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

  // Bind mobile on-screen touch controls
  const btnLeft = document.getElementById('jsw-btn-left');
  const btnRight = document.getElementById('jsw-btn-right');
  const btnJump = document.getElementById('jsw-btn-jump');
  
  if (btnLeft && btnRight && btnJump && !btnLeft.dataset.bound) {
    btnLeft.dataset.bound = "true";
    
    // Left button events
    const startLeft = (e) => { e.preventDefault(); jswKeys["ArrowLeft"] = true; };
    const stopLeft = (e) => { e.preventDefault(); jswKeys["ArrowLeft"] = false; };
    btnLeft.addEventListener('pointerdown', startLeft);
    btnLeft.addEventListener('pointerup', stopLeft);
    btnLeft.addEventListener('pointerleave', stopLeft);
    btnLeft.addEventListener('touchstart', startLeft);
    btnLeft.addEventListener('touchend', stopLeft);
    
    // Right button events
    const startRight = (e) => { e.preventDefault(); jswKeys["ArrowRight"] = true; };
    const stopRight = (e) => { e.preventDefault(); jswKeys["ArrowRight"] = false; };
    btnRight.addEventListener('pointerdown', startRight);
    btnRight.addEventListener('pointerup', stopRight);
    btnRight.addEventListener('pointerleave', stopRight);
    btnRight.addEventListener('touchstart', startRight);
    btnRight.addEventListener('touchend', stopRight);
    
    // Jump button events
    const startJump = (e) => { e.preventDefault(); jswKeys["Space"] = true; };
    const stopJump = (e) => { e.preventDefault(); jswKeys["Space"] = false; };
    btnJump.addEventListener('pointerdown', startJump);
    btnJump.addEventListener('pointerup', stopJump);
    btnJump.addEventListener('touchstart', startJump);
    btnJump.addEventListener('touchend', stopJump);
  }

  startJswLoop();
}

export function stopJswLoop() {
  state.jswGameSession.loopActive = false;
}

export function startJswLoop() {
  if (state.jswGameSession.loopActive) return;
  state.jswGameSession.loopActive = true;
  requestAnimationFrame(jswGameLoop);
}

export function jswGameLoop() {
  const session = state.jswGameSession;
  const pane = document.getElementById('game-jsw-container');
  const isJswActive = state.currentView === 'games' && pane && pane.style.display !== 'none';
  if (!session.loopActive || !isJswActive) {
    session.loopActive = false;
    return;
  }
  updateJswGame();
  drawJswGame();
  requestAnimationFrame(jswGameLoop);
}

export function updateJswGame() {
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

export function handleJswDeath() {
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

export function handleJswVictory() {
  const session = state.jswGameSession;
  AudioEngine.play('cheer');
  session.isGameWon = true;
}

export function drawJswGame() {
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

export const PRACTICE_ROOM_DATA = [
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

export const practiceState = {
  currentExampleIndex: 0,
  clickedErrors: new Set()
};

// --- Taboo Revision Game Data & Logic ---

export const TABOO_CARDS = [
  {
    id: 'taboo_1',
    topic: 'Key Topic 1: The Birth of the State of Israel (1945–63)',
    target: 'KING DAVID HOTEL',
    taboo: ['Bomb', 'Irgun', 'Jerusalem', '91', 'Headquarters'],
    hint: 'Focus on July 1946, Menachem Begin, milk churns, and the shift in British morale.'
  },
  {
    id: 'taboo_2',
    topic: 'Key Topic 1: The Birth of the State of Israel (1945–63)',
    target: 'UN RESOLUTION 181',
    taboo: ['Partition', '1947', 'Divide', 'State', 'Rejected'],
    hint: "Focus on the international organisation involved, the percentages of land given, the status of Jerusalem, and the Arab League's reaction."
  },
  {
    id: 'taboo_3',
    topic: 'Key Topic 1: The Birth of the State of Israel (1945–63)',
    target: 'THE LAW OF RETURN',
    taboo: ['1950', 'Immigrate', 'Citizen', 'Jew / Jewish', 'Population'],
    hint: 'Focus on the Israeli government policy passed shortly after the 1948 war to build up its demographic strength and workforce.'
  },
  {
    id: 'taboo_4',
    topic: 'Key Topic 1: The Birth of the State of Israel (1945–63)',
    target: 'THE SUEZ CRISIS',
    taboo: ['Canal', 'Nasser', '1956', 'Britain / France', 'Nationalise'],
    hint: 'Focus on the withdrawal of funding for the Aswan High Dam, the secret Protocol of Sèvres, and the introduction of UNEF.'
  },
  {
    id: 'taboo_5',
    topic: 'Key Topic 1: The Birth of the State of Israel (1945–63)',
    target: 'FEDAYEEN',
    taboo: ['Guerrilla', 'Raids', 'Border', 'Egypt / Jordan', 'Terrorist'],
    hint: 'Use the Arabic translation "those who sacrifice themselves", refer to the 1950s infiltrations into Israel, and the IDF reprisal attacks.'
  },
  {
    id: 'taboo_6',
    topic: 'Key Topic 2: The Escalating Conflict (1964–73)',
    target: 'FATAH',
    taboo: ['Arafat', 'PLO', 'Syria', 'Samu', 'Group'],
    hint: 'Focus on the specific militant faction founded in 1959 that launched over 100 strikes between 1965 and 1967, leading to massive border tensions.'
  },
  {
    id: 'taboo_7',
    topic: 'Key Topic 2: The Escalating Conflict (1964–73)',
    target: 'THE SIX DAY WAR',
    taboo: ['1967', 'Pre-emptive', 'Air-strike', 'Territory / Land', 'Egypt / Syria / Jordan'],
    hint: "Focus on the consequences of Soviet misinformation, the closure of the Straits of Tiran, and the rapid expansion of Israel's borders by 350%."
  },
  {
    id: 'taboo_8',
    topic: 'Key Topic 2: The Escalating Conflict (1964–73)',
    target: 'UN RESOLUTION 242',
    taboo: ['Land for Peace', 'Withdraw', 'Recognise', 'Refugee', 'Khartoum'],
    hint: 'Focus on the diplomatic formula proposed after the 1967 conflict that the Arab states initially answered with the "Three Nos".'
  },
  {
    id: 'taboo_9',
    topic: 'Key Topic 2: The Escalating Conflict (1964–73)',
    target: 'BLACK SEPTEMBER',
    taboo: ['Munich', 'Olympics', '1972', 'Athletes', 'Jordan / Expelled'],
    hint: 'Focus on the extremist splinter faction formed after 1970, the hostage situation in Germany, and Israel\'s "Operation Wrath of God" retaliation.'
  },
  {
    id: 'taboo_10',
    topic: 'Key Topic 2: The Escalating Conflict (1964–73)',
    target: 'THE YOM KIPPUR WAR',
    taboo: ['1973', 'Surprise', 'Holy', 'Bar Lev', 'Sadat'],
    hint: 'Focus on the 6th of October, the use of Soviet SAM-3 missiles, the shattering of Israeli invincibility, and the resignation of Golda Meir.'
  },
  {
    id: 'taboo_11',
    topic: 'Key Topic 2: The Escalating Conflict (1964–73)',
    target: 'THE OIL WEAPON',
    taboo: ['OPEC', 'Embargo', 'Price', 'USA', 'Shortages'],
    hint: 'Focus on the economic tactic used by Saudi Arabia and others in 1973 to punish Western nations, causing a global recession.'
  },
  {
    id: 'taboo_12',
    topic: 'Key Topic 3: Attempts at a Solution (1974–95)',
    target: 'SHUTTLE DIPLOMACY',
    taboo: ['Kissinger', 'Travel / Fly', 'USA', 'Negotiate', 'Face-to-face'],
    hint: 'Focus on the method used between 1974 and 1975 to separate forces and reopen a vital Egyptian waterway without direct contact between enemies.'
  },
  {
    id: 'taboo_13',
    topic: 'Key Topic 3: Attempts at a Solution (1974–95)',
    target: 'CAMP DAVID ACCORDS',
    taboo: ['Carter', 'Sadat', 'Begin', '1978', 'Treaty'],
    hint: 'Focus on the 13-day secret summit in the American presidential retreat that laid the groundwork for the return of the Sinai Peninsula.'
  },
  {
    id: 'taboo_14',
    topic: 'Key Topic 3: Attempts at a Solution (1974–95)',
    target: 'SABRA AND SHATILA',
    taboo: ['Massacre', 'Refugee', 'Phalange / Christian', 'Lebanon / Beirut', 'Sharon'],
    hint: 'Focus on the tragic events of September 1982 following the assassination of Bashir Gemayel, which severely damaged Israel\'s international reputation.'
  },
  {
    id: 'taboo_15',
    topic: 'Key Topic 3: Attempts at a Solution (1974–95)',
    target: 'THE FIRST INTIFADA',
    taboo: ['Uprising', 'Stones', 'Iron Fist', '1987', 'Gaza / West Bank'],
    hint: 'Focus on the Arabic word for "shaking off", the grassroots rebellion sparked by a traffic accident, and the resulting global sympathy for Palestinians.'
  },
  {
    id: 'taboo_16',
    topic: 'Key Topic 3: Attempts at a Solution (1974–95)',
    target: 'THE OSLO ACCORDS',
    taboo: ['1993', 'Rabin', 'Arafat', 'Handshake', 'PNA / Authority'],
    hint: 'Focus on the secret talks held in Norway, the letters of mutual recognition, and the famous ceremony on the White House lawn with Bill Clinton.'
  }
];

export function initTabooGame() {
  const session = state.tabooGameSession;
  if (session.timerInterval) {
    clearInterval(session.timerInterval);
    session.timerInterval = null;
  }
  session.isPlaying = false;

  const panel = document.getElementById('taboo-game-panel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="taboo-setup-card">
      <div class="taboo-title-section">
        <h2 class="taboo-main-title">REVISION TABOO: GEOPOLITICAL CODEX</h2>
        <p class="taboo-subtitle">AO1 ACTIVE VOCABULARY ACCELERATOR</p>
      </div>

      <div class="taboo-hint-box" style="font-size:0.85rem; border-color:var(--primary);">
        <strong>How to Play:</strong> Describe the <strong>Target Word</strong> to your team without saying any of the <strong>5 Taboo Words</strong>. No soundalikes, abbreviations, or spelling hints allowed!
      </div>

      <div class="taboo-setup-row">
        <span class="taboo-setup-label">Number of Teams</span>
        <div style="display: flex; gap: 8px;">
          <button class="taboo-team-count-btn active" data-count="2">2 Teams</button>
          <button class="taboo-team-count-btn" data-count="3">3 Teams</button>
          <button class="taboo-team-count-btn" data-count="4">4 Teams</button>
        </div>
      </div>

      <div class="taboo-setup-row">
        <span class="taboo-setup-label">Configure Team Names</span>
        <div id="taboo-team-inputs" class="taboo-teams-names-grid">
          <div>
            <label style="font-size:0.75rem; color:var(--text-muted);">Team 1 Name</label>
            <input type="text" class="taboo-setup-input" id="taboo-team-0-input" value="Red Tigers">
          </div>
          <div>
            <label style="font-size:0.75rem; color:var(--text-muted);">Team 2 Name</label>
            <input type="text" class="taboo-setup-input" id="taboo-team-1-input" value="Blue Eagles">
          </div>
        </div>
      </div>

      <div class="taboo-setup-row">
        <span class="taboo-setup-label">Turn Duration Limit</span>
        <select class="taboo-setup-input" id="taboo-timer-select" style="background-color:#0f172a; cursor:pointer;">
          <option value="45">45 Seconds</option>
          <option value="60" selected>60 Seconds (Standard)</option>
          <option value="90">90 Seconds</option>
          <option value="120">120 Seconds</option>
        </select>
      </div>

      <button class="taboo-btn-primary" id="btn-taboo-initialize" style="margin-top: 8px;">
        INITIALIZE COGNITIVE VECTORS
      </button>
    </div>
  `;

  const countBtns = panel.querySelectorAll('.taboo-team-count-btn');
  countBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      AudioEngine.play('click');
      countBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const count = parseInt(btn.getAttribute('data-count'));
      renderTeamInputs(count);
    });
  });

  document.getElementById('btn-taboo-initialize').addEventListener('click', startTabooGameSetup);
}

function renderTeamInputs(count) {
  const container = document.getElementById('taboo-team-inputs');
  if (!container) return;

  let html = '';
  const defaultNames = ['Red Tigers', 'Blue Eagles', 'Green Panthers', 'Yellow Hornets'];
  for (let i = 0; i < count; i++) {
    html += `
      <div>
        <label style="font-size:0.75rem; color:var(--text-muted);">Team ${i + 1} Name</label>
        <input type="text" class="taboo-setup-input" id="taboo-team-${i}-input" value="${defaultNames[i]}">
      </div>
    `;
  }
  container.innerHTML = html;
}

function startTabooGameSetup() {
  AudioEngine.play('click');
  const countBtn = document.querySelector('.taboo-team-count-btn.active');
  const count = countBtn ? parseInt(countBtn.getAttribute('data-count')) : 2;
  
  const teams = [];
  for (let i = 0; i < count; i++) {
    const input = document.getElementById(`taboo-team-${i}-input`);
    const name = input && input.value.trim() ? input.value.trim() : `Team ${i + 1}`;
    teams.push({ name: name, score: 0 });
  }

  const timerSelect = document.getElementById('taboo-timer-select');
  const timerLimit = timerSelect ? parseInt(timerSelect.value) : 60;

  const session = state.tabooGameSession;
  session.teams = teams;
  session.currentTeamIndex = 0;
  session.currentCardIndex = 0;
  session.timerLimit = timerLimit;
  session.timerRemaining = timerLimit;
  session.isPlaying = false;
  
  session.deck = [...TABOO_CARDS].sort(() => Math.random() - 0.5);

  showTabooTransition();
}

function showTabooTransition() {
  const session = state.tabooGameSession;
  const currentTeam = session.teams[session.currentTeamIndex];

  const panel = document.getElementById('taboo-game-panel');
  if (!panel) return;

  if (session.timerInterval) {
    clearInterval(session.timerInterval);
    session.timerInterval = null;
  }

  panel.innerHTML = `
    <div class="taboo-transition-card">
      <div class="taboo-title-section">
        <h2 class="taboo-main-title">NEXT VECTOR ASSIGNED</h2>
        <p class="taboo-subtitle">TRANSITION PROTOCOL</p>
      </div>

      <div style="margin: 16px 0;">
        <div style="font-size:0.9rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; letter-spacing:0.5px;">Active Team</div>
        <div class="taboo-turn-badge">${currentTeam.name}</div>
        <p style="color:var(--text-muted); font-size:0.88rem; max-width:440px; margin: 12px auto; line-height:1.5;">
          <strong>Attention Describer:</strong> Hand the device to the player describing the target word. Press the button below when ready to begin your ${session.timerLimit}-second turn.
        </p>
      </div>

      <div class="taboo-scoreboard-grid">
        <div style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:var(--text-muted); letter-spacing:1px; margin-bottom:4px;">Current Scoreboard</div>
        ${session.teams.map((t, idx) => `
          <div class="taboo-score-row ${idx === session.currentTeamIndex ? 'active' : ''}">
            <span>${t.name}</span>
            <span>${t.score} pts</span>
          </div>
        `).join('')}
      </div>

      <button class="taboo-btn-primary" id="btn-taboo-start-turn" style="margin-top: 12px;">
        ENGAGE DECIPHER KEY
      </button>
    </div>
  `;

  document.getElementById('btn-taboo-start-turn').addEventListener('click', startTabooTurn);
}

function startTabooTurn() {
  AudioEngine.play('click');
  const session = state.tabooGameSession;
  session.isPlaying = true;
  session.timerRemaining = session.timerLimit;

  renderTabooActiveScreen();

  session.timerInterval = setInterval(() => {
    session.timerRemaining--;
    const timerEl = document.getElementById('taboo-timer-count');
    if (timerEl) {
      timerEl.innerText = `${session.timerRemaining}s`;
      if (session.timerRemaining <= 10) {
        timerEl.parentElement.classList.add('warning');
      }
    }

    if (session.timerRemaining <= 0) {
      clearInterval(session.timerInterval);
      session.timerInterval = null;
      AudioEngine.play('fail');
      showTabooTimeExpired();
    }
  }, 1000);
}

function renderTabooActiveScreen() {
  const panel = document.getElementById('taboo-game-panel');
  if (!panel) return;

  const session = state.tabooGameSession;
  const currentTeam = session.teams[session.currentTeamIndex];
  
  if (session.currentCardIndex >= session.deck.length) {
    session.deck = [...TABOO_CARDS].sort(() => Math.random() - 0.5);
    session.currentCardIndex = 0;
  }

  const card = session.deck[session.currentCardIndex];

  panel.innerHTML = `
    <div class="taboo-active-card">
      <div class="taboo-header-bar">
        <div class="taboo-active-team">
          <i class="fa-solid fa-users"></i> ${currentTeam.name} (${currentTeam.score} pts)
        </div>
        <div class="taboo-timer">
          <i class="fa-regular fa-clock"></i> <span id="taboo-timer-count">${session.timerRemaining}s</span>
        </div>
      </div>

      <div class="taboo-card-display">
        <div class="taboo-target-label">Target Variable</div>
        <h2 class="taboo-target-word">${card.target}</h2>
        
        <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-top: 4px;">
          ${card.topic}
        </div>

        <div class="taboo-forbidden-label" style="margin-top: 8px;">Taboo Variables (DO NOT SAY)</div>
        <ul class="taboo-words-list">
          ${card.taboo.map(word => `
            <li class="taboo-word-item">
              <i class="fa-solid fa-ban" style="font-size:0.75rem;"></i> ${word}
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="taboo-hint-box">
        <strong>AO1 Hints:</strong> ${card.hint}
      </div>

      <div class="taboo-actions-grid">
        <button class="taboo-act-btn correct" id="btn-taboo-correct">
          <i class="fa-solid fa-circle-check"></i> CORRECT (+1)
        </button>
        <button class="taboo-act-btn violation" id="btn-taboo-violation">
          <i class="fa-solid fa-triangle-exclamation"></i> TABOO (-1)
        </button>
        <button class="taboo-act-btn skip" id="btn-taboo-skip">
          SKIP
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-taboo-correct').addEventListener('click', () => handleTabooAction('correct'));
  document.getElementById('btn-taboo-violation').addEventListener('click', () => handleTabooAction('violation'));
  document.getElementById('btn-taboo-skip').addEventListener('click', () => handleTabooAction('skip'));
}

function handleTabooAction(action) {
  const session = state.tabooGameSession;
  const currentTeam = session.teams[session.currentTeamIndex];

  if (action === 'correct') {
    AudioEngine.play('success');
    currentTeam.score++;
  } else if (action === 'violation') {
    AudioEngine.play('fail');
    currentTeam.score = Math.max(0, currentTeam.score - 1);
  } else {
    AudioEngine.play('click');
  }

  session.currentCardIndex++;
  renderTabooActiveScreen();
}

function showTabooTimeExpired() {
  const session = state.tabooGameSession;
  const currentTeam = session.teams[session.currentTeamIndex];

  const panel = document.getElementById('taboo-game-panel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="taboo-transition-card">
      <div class="taboo-title-section">
        <h2 class="taboo-main-title" style="color:var(--accent);">TURN COMPLETED</h2>
        <p class="taboo-subtitle">DURATION LIMIT REACHED</p>
      </div>

      <div style="margin: 16px 0;">
        <p style="font-size:1.1rem; color:var(--text-main); font-weight:600;">
          ${currentTeam.name} completed their decryption round!
        </p>
        <div style="font-size:1.4rem; color:var(--success); font-weight:800; font-family:var(--font-heading); margin-top:8px;">
          Score: ${currentTeam.score} pts
        </div>
      </div>

      <div class="taboo-scoreboard-grid">
        <div style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:var(--text-muted); letter-spacing:1px; margin-bottom:4px;">Cumulative Scores</div>
        ${session.teams.map(t => `
          <div class="taboo-score-row">
            <span>${t.name}</span>
            <span>${t.score} pts</span>
          </div>
        `).join('')}
      </div>

      <div style="display:flex; gap:12px; margin-top:12px;">
        <button class="taboo-btn-secondary" id="btn-taboo-end-game">
          END GAME (Final Score)
        </button>
        <button class="taboo-btn-primary" id="btn-taboo-next-turn">
          CONTINUE TO NEXT TEAM
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-taboo-next-turn').addEventListener('click', advanceTabooTurn);
  document.getElementById('btn-taboo-end-game').addEventListener('click', endTabooGame);
}

function advanceTabooTurn() {
  const session = state.tabooGameSession;
  session.currentTeamIndex = (session.currentTeamIndex + 1) % session.teams.length;
  showTabooTransition();
}

function endTabooGame() {
  const session = state.tabooGameSession;
  if (session.timerInterval) {
    clearInterval(session.timerInterval);
    session.timerInterval = null;
  }

  const panel = document.getElementById('taboo-game-panel');
  if (!panel) return;

  let maxScore = -1;
  let winners = [];
  session.teams.forEach(t => {
    if (t.score > maxScore) {
      maxScore = t.score;
      winners = [t];
    } else if (t.score === maxScore) {
      winners.push(t);
    }
  });

  const isTie = winners.length > 1;
  const winnerText = isTie 
    ? `TIE GAME: ${winners.map(w => w.name).join(' & ')}!`
    : `${winners[0].name} Wins!`;

  AudioEngine.play('cheer');
  Confetti.spawn();

  panel.innerHTML = `
    <div class="taboo-victory-card">
      <div class="taboo-title-section">
        <h2 class="taboo-main-title" style="color:var(--primary);">COGNITIVE SIMULATION ENDED</h2>
        <p class="taboo-subtitle">FINAL DECRYPTION LOGS</p>
      </div>

      <div style="margin: 16px 0;">
        <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; letter-spacing:1px;">Geopolitical Victor</div>
        <div class="taboo-turn-badge" style="font-size:2.2rem; color:var(--success); text-shadow:0 0 15px rgba(16, 185, 129, 0.25);">
          ${winnerText}
        </div>
      </div>

      <div class="taboo-scoreboard-grid">
        <div style="font-size:0.75rem; text-transform:uppercase; font-weight:800; color:var(--text-muted); letter-spacing:1px; margin-bottom:4px;">Final Standings</div>
        ${session.teams.map(t => `
          <div class="taboo-score-row">
            <span>${t.name}</span>
            <span>${t.score} pts</span>
          </div>
        `).join('')}
      </div>

      <div class="history-link-box" style="margin-top:12px; font-size:0.85rem; line-height:1.5; border-color:var(--primary); background:rgba(168, 85, 247, 0.03);">
        <strong>AO1 Examiner Note:</strong> Revision Taboo successfully locks out superficial descriptions (like saying "Bombing" for <em>King David Hotel</em>, or "Partition" for <em>Resolution 181</em>). Remember that for full AO1 marks in your Edexcel exams, you must supply these exact secondary details, dates, and figures!
      </div>

      <button class="taboo-btn-primary" id="btn-taboo-restart" style="margin-top: 12px;">
        RESET SIMULATOR
      </button>
    </div>
  `;

  document.getElementById('btn-taboo-restart').addEventListener('click', initTabooGame);
}