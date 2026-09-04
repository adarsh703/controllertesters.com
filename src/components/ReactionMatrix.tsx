import { useGamepad } from '../hooks/useGamepad';
import React, { useState, useEffect, useRef } from 'react';
import { playRedLight, playLightsOut, playMatrixHit, playMatrixMiss, unlockAudio } from '../utils/audio';
import { widgetTranslations, getWidgetLang } from '../i18n/widgetTranslations';
import type { SupportedLang } from '../i18n/languages';
import { formatLocalizedNumber } from '../i18n/numUtils';

const TARGETS = [
  { id: 'A', color: 'text-[#0fa336]', check: (b: any) => b[0]?.pressed },
  { id: 'B', color: 'text-[#e22718]', check: (b: any) => b[1]?.pressed },
  { id: 'X', color: 'text-[#0066b1]', check: (b: any) => b[2]?.pressed },
  { id: 'Y', color: 'text-[#f4b400]', check: (b: any) => b[3]?.pressed },
  { id: 'LB', color: 'text-stone-900 dark:text-white', check: (b: any) => b[4]?.pressed },
  { id: 'RB', color: 'text-stone-900 dark:text-white', check: (b: any) => b[5]?.pressed },
  { id: 'LT', color: 'text-stone-900 dark:text-white', check: (b: any) => b[6]?.value > 0.5 },
  { id: 'RT', color: 'text-stone-900 dark:text-white', check: (b: any) => b[7]?.value > 0.5 },
  { id: 'L-STICK UP', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[1] < -0.5 },
  { id: 'L-STICK DOWN', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[1] > 0.5 },
  { id: 'L-STICK LEFT', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[0] < -0.5 },
  { id: 'L-STICK RIGHT', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[0] > 0.5 },
  { id: 'R-STICK UP', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[3] < -0.5 },
  { id: 'R-STICK DOWN', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[3] > 0.5 },
  { id: 'R-STICK LEFT', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[2] < -0.5 },
  { id: 'R-STICK RIGHT', color: 'text-stone-900 dark:text-white', check: (b: any, a: any) => a[2] > 0.5 },
  { id: 'D-PAD UP', color: 'text-stone-900 dark:text-white', check: (b: any) => b[12]?.pressed },
  { id: 'D-PAD DOWN', color: 'text-stone-900 dark:text-white', check: (b: any) => b[13]?.pressed },
  { id: 'D-PAD LEFT', color: 'text-stone-900 dark:text-white', check: (b: any) => b[14]?.pressed },
  { id: 'D-PAD RIGHT', color: 'text-stone-900 dark:text-white', check: (b: any) => b[15]?.pressed },
];

interface ReactionMatrixProps {
  initialMode?: 'matrix' | 'f1';
  lang?: SupportedLang;
}

export function ReactionMatrix({ initialMode = 'f1', lang }: ReactionMatrixProps) {
  const activeLang = getWidgetLang(lang);
  const t = widgetTranslations[activeLang] || widgetTranslations['en'];

  const { activeGamepad, vibrate } = useGamepad();
  const [gameState, setGameState] = useState<'idle' | 'countdown' | 'playing' | 'gameover'>('idle');
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [currentTarget, setCurrentTarget] = useState(TARGETS[0]);
  const [lights, setLights] = useState(0);
  
  // Reaction time tracking
  const [targetStartTime, setTargetStartTime] = useState<number>(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [lastReactTime, setLastReactTime] = useState<number | null>(null);

  // Persistent F1 Session History
  const [f1History, setF1History] = useState<number[]>([]);
  
  const [gameMode, setGameMode] = useState<'matrix' | 'f1'>(initialMode);
  const [jumpStart, setJumpStart] = useState(false);
  const [canStartWithController, setCanStartWithController] = useState(false);
  const [f1Armed, setF1Armed] = useState(false);
  const [audioSuspended, setAudioSuspended] = useState(false);

  const getTriggerName = () => {
    if (!activeGamepad) return 'RT / R2';
    const id = activeGamepad.id.toLowerCase();
    if (id.includes('playstation') || id.includes('dualshock') || id.includes('dualsense') || id.includes('wireless controller')) return 'R2';
    return 'RT';
  };
  
  const getBottomButtonName = () => {
    if (!activeGamepad) return 'A / Cross';
    const id = activeGamepad.id.toLowerCase();
    if (id.includes('playstation') || id.includes('dualshock') || id.includes('dualsense') || id.includes('wireless controller')) return 'Cross';
    return 'A';
  };

  const triggerName = getTriggerName();
  const bottomBtnName = getBottomButtonName();

  // Keyboard Spacebar & Click Handlers for Non-Gamepad Users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        unlockAudio();
        setAudioSuspended(false);

        if (gameState === 'idle' || gameState === 'gameover') {
          startGame(gameMode, 'user');
        } else if (gameState === 'countdown' && gameMode === 'f1') {
          setJumpStart(true);
          setGameState('gameover');
          playMatrixMiss();
          vibrate(500, 1, 1);
        } else if (gameState === 'playing' && gameMode === 'f1') {
          playMatrixHit();
          vibrate(50, 1, 1);
          const now = Date.now();
          const reactTime = now - targetStartTime;
          setLastReactTime(reactTime);
          setReactionTimes(prev => [...prev, reactTime]);
          setF1History(prev => [...prev, reactTime]);
          setScore(1);
          setGameState('gameover');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, gameMode, targetStartTime, vibrate]);

  // Require all buttons to be released before allowing controller to start a game
  useEffect(() => {
    if (activeGamepad && (gameState === 'idle' || gameState === 'gameover')) {
      const isAnyPressed = activeGamepad.buttons.some((b: any) => b.pressed) || activeGamepad.axes.some((a: any) => Math.abs(a) > 0.5);
      if (!isAnyPressed && !canStartWithController) {
        setCanStartWithController(true);
      }
    }
  }, [activeGamepad, gameState, canStartWithController]);

  // Arm F1 mode by requiring RT to be fully released before it can trigger jump starts or hits
  useEffect(() => {
    if ((gameState === 'countdown' || gameState === 'playing') && gameMode === 'f1' && activeGamepad) {
      const isRTPulled = (activeGamepad.buttons[7]?.value > 0.1) || activeGamepad.buttons[7]?.pressed;
      if (!isRTPulled && !f1Armed) {
        setF1Armed(true);
      }
    } else if (gameState === 'idle' || gameState === 'gameover') {
      setF1Armed(false);
    }
  }, [activeGamepad, gameState, gameMode, f1Armed]);

  // Start game via controller
  useEffect(() => {
    if ((gameState === 'idle' || gameState === 'gameover') && activeGamepad && canStartWithController) {
      // A (0) or X (2) starts Matrix Mode
      if (activeGamepad.buttons[0]?.pressed || activeGamepad.buttons[2]?.pressed) {
        setCanStartWithController(false);
        startGame('matrix', 'controller');
      }
      // RT (7) or Y (3) starts F1 Mode
      if (activeGamepad.buttons[7]?.pressed || activeGamepad.buttons[7]?.value > 0.5 || activeGamepad.buttons[3]?.pressed) {
        setCanStartWithController(false);
        startGame('f1', 'controller');
      }
    }
  }, [activeGamepad, gameState, canStartWithController]);

  // Input listener
  useEffect(() => {
    if (!activeGamepad) return;

    // F1 Jump start detection
    if (gameState === 'countdown' && gameMode === 'f1') {
      const isRTPulled = (activeGamepad.buttons[7]?.value > 0.1) || activeGamepad.buttons[7]?.pressed;
      if (isRTPulled && f1Armed) {
        setJumpStart(true);
        setGameState('gameover');
        playMatrixMiss();
        vibrate(500, 1, 1);
      }
    }

    if (gameState !== 'playing') return;

    // Matrix Hit Check
    if (gameMode === 'matrix' && currentTarget.check(activeGamepad.buttons, activeGamepad.axes)) {
      const now = Date.now();
      const reactTime = now - targetStartTime;
      setReactionTimes(prev => [...prev, reactTime]);
      setLastReactTime(reactTime);
      setScore(s => s + 1);
      playMatrixHit();
      vibrate(40, 0.4, 0.4);
      
      const nextTargets = TARGETS.filter(t => t.id !== currentTarget.id);
      const next = nextTargets[Math.floor(Math.random() * nextTargets.length)];
      setCurrentTarget(next);
      setTargetStartTime(Date.now());
    }

    // F1 Reflex Hit Check
    if (gameMode === 'f1') {
      const isRTPulled = (activeGamepad.buttons[7]?.value > 0.1) || activeGamepad.buttons[7]?.pressed;
      if (isRTPulled && f1Armed) {
        const now = Date.now();
        const reactTime = now - targetStartTime;
        setLastReactTime(reactTime);
        setReactionTimes(prev => [...prev, reactTime]);
        setF1History(prev => [...prev, reactTime]);
        setScore(1);
        playMatrixHit();
        vibrate(50, 1, 1);
        setGameState('gameover');
      }
    }
  }, [activeGamepad, gameState, currentTarget, targetStartTime, gameMode, f1Armed, vibrate]);

  // Timer loop for Matrix Mode
  useEffect(() => {
    if (gameState !== 'playing' || gameMode !== 'matrix') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setGameState('gameover');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState, gameMode]);

  const startGame = (mode: 'matrix' | 'f1', source: 'user' | 'controller' = 'user') => {
    if (source === 'controller') {
      unlockAudio().catch(() => setAudioSuspended(true));
    } else {
      unlockAudio();
      setAudioSuspended(false);
    }
    
    setGameMode(mode);
    setGameState('countdown');
    setScore(0);
    setReactionTimes([]);
    setLastReactTime(null);
    setJumpStart(false);
    setF1Armed(false);

    if (mode === 'matrix') {
      setTimeLeft(30);
      let count = 3;
      const countInterval = setInterval(() => {
        count--;
        if (count <= 0) {
          clearInterval(countInterval);
          setGameState('playing');
          setCurrentTarget(TARGETS[Math.floor(Math.random() * TARGETS.length)]);
          setTargetStartTime(Date.now());
        }
      }, 1000);
    } else {
      // F1 5-Light Sequence
      setLights(0);
      let currentLight = 0;
      
      const lightInterval = setInterval(() => {
        currentLight++;
        setLights(currentLight);
        playRedLight();
        
        if (currentLight >= 5) {
          clearInterval(lightInterval);
          // Random blackout hold between 0.2s and 3.0s (official FIA starting range)
          const randomDelay = Math.floor(Math.random() * 2800) + 200;
          setTimeout(() => {
            setGameState(currState => {
              if (currState === 'countdown') {
                setLights(0);
                playLightsOut();
                setTargetStartTime(Date.now());
                return 'playing';
              }
              return currState;
            });
          }, randomDelay);
        }
      }, 1000);
    }
  };

  const getEvaluationText = () => {
    if (gameMode === 'matrix') {
      if (score > 35) return 'GOD-TIER REFLEXES // Pro esports tier hand-eye coordination.';
      if (score > 25) return 'EXCELLENT // High cognitive response and rapid motor triggering.';
      if (score > 15) return 'SOLID // Average human gaming reaction and recognition.';
      return 'DEVELOPING // Practice input muscle memory to eliminate search latency.';
    } else {
      if (jumpStart) return 'FALSE START // Jumped before lights extinguished. Drive-Through penalty applied.';
      if (!lastReactTime) return '';
      if (lastReactTime < 170) return 'GOD-TIER // Bottas / Verstappen F1 launch benchmark level!';
      if (lastReactTime < 210) return 'PRO MOTORSPORT // Elite competitive racer reaction tier.';
      if (lastReactTime < 250) return 'GOOD // Fast gamer reflex response time.';
      if (lastReactTime < 300) return 'AVERAGE // Normal human visual reaction time.';
      return 'LAGGED // High input lag or sluggish reaction. Check display mode.';
    }
  };

  // Average and Best statistics calculation
  const validF1Attempts = f1History.filter(time => time > 0);
  const f1Avg = validF1Attempts.length > 0 
    ? Math.round(validF1Attempts.reduce((acc, curr) => acc + curr, 0) / validF1Attempts.length)
    : null;
  const f1Best = validF1Attempts.length > 0 ? Math.min(...validF1Attempts) : null;
  const f1Count = validF1Attempts.length;

  const finalReactionTime = lastReactTime;

  // Handle click on canvas / container for F1 reactions
  const handleContainerClick = () => {
    if (gameState === 'idle' || gameState === 'gameover') {
      // Don't restart on background click in gameover to let user review stats
      return;
    }
    if (gameState === 'countdown' && gameMode === 'f1') {
      setJumpStart(true);
      setGameState('gameover');
      playMatrixMiss();
      vibrate(500, 1, 1);
    } else if (gameState === 'playing' && gameMode === 'f1') {
      playMatrixHit();
      vibrate(50, 1, 1);
      const now = Date.now();
      const reactTime = now - targetStartTime;
      setLastReactTime(reactTime);
      setReactionTimes(prev => [...prev, reactTime]);
      setF1History(prev => [...prev, reactTime]);
      setScore(1);
      setGameState('gameover');
    }
  };

  return (
    <div 
      onClick={handleContainerClick}
      className={`flex flex-col items-center justify-center p-6 sm:p-8 bg-surface-soft border border-hairline rounded-none min-h-[520px] shadow-2xl relative overflow-hidden ${gameState === 'playing' && gameMode === 'f1' ? 'cursor-pointer select-none' : ''}`}
    >
      
      {audioSuspended && (
        <div 
          className="absolute top-4 right-4 bg-m-red/10 text-m-red border border-m-red/30 px-3 py-1.5 rounded-none text-[10px] uppercase tracking-wider font-bold animate-pulse cursor-pointer z-10 hover:bg-m-red/20 transition-colors" 
          onClick={(e) => {
            e.stopPropagation();
            unlockAudio().then(() => setAudioSuspended(false));
          }}
        >
          {t.clickForSound}
        </div>
      )}

      {/* Persistent Mode Switcher Bar */}
      {(gameState === 'idle' || gameState === 'gameover') && (
        <div className="flex border border-hairline bg-surface-card p-1 mb-6 max-w-md w-full mx-auto">
          <button
            onClick={(e) => { e.stopPropagation(); setGameMode('matrix'); setGameState('idle'); }}
            className={`flex-1 py-2.5 px-3 text-xs font-display font-bold uppercase tracking-[1.5px] transition-all rounded-none ${gameMode === 'matrix' ? 'bg-m-blue-dark text-white shadow-lg' : 'text-muted hover:text-ink hover:bg-surface-elevated'}`}
          >
            {t.matrixMode}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setGameMode('f1'); setGameState('idle'); }}
            className={`flex-1 py-2.5 px-3 text-xs font-display font-bold uppercase tracking-[1.5px] transition-all rounded-none ${gameMode === 'f1' ? 'bg-m-red text-white shadow-lg' : 'text-muted hover:text-ink hover:bg-surface-elevated'}`}
          >
            {t.f1Simulator}
          </button>
        </div>
      )}

      {/* Idle / Setup State */}
      {gameState === 'idle' && (
        <div className="text-center w-full max-w-2xl">
          {gameMode === 'f1' ? (
            <div className="bg-surface-card border border-hairline p-6 sm:p-8 mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-m-red/20 border border-m-red/40"></div>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-ink uppercase mb-2 font-bold tracking-[1px]">
                {t.f1ProtocolTitle}
              </h2>
              <p className="text-body mb-6 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
                {t.f1ProtocolDesc}
              </p>

              {/* F1 Stats Bar if any attempts exist */}
              {validF1Attempts.length > 0 && (
                <div className="grid grid-cols-3 gap-3 p-3 bg-surface-soft border border-hairline mb-6 max-w-md mx-auto text-center">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted block font-bold">{t.triesCount}</span>
                    <span className="text-lg font-mono font-bold text-ink">{formatLocalizedNumber(f1Count, activeLang, 1)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted block font-bold">{t.averageTime}</span>
                    <span className="text-lg font-mono font-bold text-m-blue-light">{f1Avg ? `${f1Avg}ms` : '--'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted block font-bold">{t.bestTime}</span>
                    <span className="text-lg font-mono font-bold text-[#0fa336]">{f1Best ? `${f1Best}ms` : '--'}</span>
                  </div>
                </div>
              )}
              
              <button
                onClick={(e) => { e.stopPropagation(); startGame('f1'); }}
                className="w-full bg-m-red hover:bg-[#c81e11] text-white uppercase font-display font-bold text-sm tracking-[2px] py-4 sm:py-5 transition-all rounded-none shadow-[0_0_20px_rgba(226,39,24,0.4)] border border-m-red"
              >
                {t.launchF1Btn}
              </button>
              <div className="text-[11px] font-mono text-muted uppercase tracking-wider mt-3">
                {t.f1ControlsHint}
              </div>
            </div>
          ) : (
            <div className="bg-surface-card border border-hairline p-6 sm:p-8 mb-6">
              <div className="text-xs font-display font-bold uppercase tracking-[2px] text-m-blue-dark mb-2">
                Rapid Reflex Protocol
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-ink uppercase mb-2 font-bold tracking-[1px]">
                {t.matrixProtocolTitle}
              </h2>
              <p className="text-body mb-6 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
                {t.matrixProtocolDesc}
              </p>
              
              <button
                onClick={(e) => { e.stopPropagation(); startGame('matrix'); }}
                className="w-full bg-m-blue-dark hover:bg-[#1554aa] text-white uppercase font-display font-bold text-sm tracking-[2px] py-4 sm:py-5 transition-all rounded-none shadow-[0_0_20px_rgba(28,105,212,0.4)] border border-m-blue-dark"
              >
                {t.startMatrixBtn}
              </button>
              <div className="text-[11px] font-mono text-muted uppercase tracking-wider mt-3">
                {t.matrixControlsHint}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Countdown State */}
      {gameState === 'countdown' && (
        <div className="flex flex-col items-center gap-6">
          {gameMode === 'f1' && <div className="text-sm font-display text-muted uppercase tracking-[2px] animate-pulse">{t.waitForLights}</div>}
          <div className="flex gap-3 md:gap-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-hairline transition-all ${lights >= i ? 'bg-m-red shadow-[0_0_25px_rgba(226,39,24,0.9)]' : 'bg-surface-card'}`}></div>
            ))}
          </div>
        </div>
      )}

      {/* Active Playing State */}
      {gameState === 'playing' && (
        <div className="flex flex-col items-center w-full relative">
          {gameMode === 'matrix' ? (
            <>
              <div className="flex justify-between w-full max-w-2xl border-b border-hairline pb-4 mb-12">
                <div className="text-2xl md:text-3xl font-display font-bold text-ink">{t.tMinus}: <span className={timeLeft <= 5 ? 'text-m-red animate-pulse' : ''}>00:{formatLocalizedNumber(timeLeft, activeLang, 2)}</span></div>
                <div className="text-2xl md:text-3xl font-display font-bold text-m-blue-dark">{t.hits}: {formatLocalizedNumber(score, activeLang, 1)}</div>
              </div>
              <div className="text-sm font-display text-muted uppercase tracking-[2px] mb-2">{t.engageInput}</div>
              <div className={`text-[70px] sm:text-[80px] font-display font-bold uppercase tracking-tight ${currentTarget.color}`}>
                {currentTarget.id}
              </div>
              {lastReactTime !== null && (
                <div className="absolute bottom-[-40px] text-muted font-mono text-sm uppercase tracking-widest transition-all">
                  {t.reaction}: <span className={lastReactTime < 250 ? 'text-[#0fa336]' : lastReactTime < 400 ? 'text-warning' : 'text-m-red'}>{lastReactTime}ms</span>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[260px]">
              <div className="text-[48px] sm:text-[68px] md:text-[80px] font-display font-bold text-m-red uppercase tracking-tight mb-2 text-center animate-pulse">
                {t.goPullTrigger}
              </div>
              <div className="text-xs font-mono text-muted uppercase tracking-widest text-center">
                {t.f1ClickAnywhere}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Game Over / Results State */}
      {gameState === 'gameover' && (
        <div className="text-center w-full max-w-2xl">
          <div className="text-2xl font-display text-m-red uppercase tracking-[2px] font-bold mb-2">
            {jumpStart ? t.jumpStartFault : t.sessionComplete}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-6 mt-4">
            {gameMode === 'matrix' ? (
              <>
                <div>
                  <div className="text-[64px] sm:text-[76px] font-display font-bold text-ink leading-none">{formatLocalizedNumber(score, activeLang, 1)}</div>
                  <div className="text-xs font-display text-muted uppercase tracking-[2px] mt-2">{t.totalHits}</div>
                </div>
                <div className="h-14 w-px bg-hairline hidden md:block"></div>
                <div>
                  <div className="text-[64px] sm:text-[76px] font-display font-bold text-ink leading-none">
                    {reactionTimes.length > 0 ? `${Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length)}ms` : '--'}
                  </div>
                  <div className="text-xs font-display text-muted uppercase tracking-[2px] mt-2">{t.avgReactMs}</div>
                </div>
              </>
            ) : (
              <div className="w-full">
                <div className={`text-[64px] sm:text-[80px] font-display font-bold leading-none ${jumpStart ? 'text-m-red' : 'text-[#0fa336]'}`}>
                  {jumpStart ? t.fault : (lastReactTime ? `${lastReactTime}ms` : '--')}
                </div>
                <div className="text-xs font-display text-muted uppercase tracking-[2px] mt-2">
                  {jumpStart ? t.reactedBeforeLights : t.reactionLatency}
                </div>

                {/* Live Cumulative F1 Benchmark Stats */}
                <div className="grid grid-cols-3 gap-3 p-3 bg-surface-card border border-hairline mt-6 max-w-md mx-auto text-center">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted block font-bold">{t.triesCount}</span>
                    <span className="text-base sm:text-lg font-mono font-bold text-ink">{formatLocalizedNumber(f1Count, activeLang, 1)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted block font-bold">{t.averageTime}</span>
                    <span className="text-base sm:text-lg font-mono font-bold text-m-blue-light">{f1Avg ? `${f1Avg}ms` : '--'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted block font-bold">{t.bestTime}</span>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#0fa336]">{f1Best ? `${f1Best}ms` : '--'}</span>
                  </div>
                </div>

                {/* History Chips (Last 5 Tries) */}
                {validF1Attempts.length > 1 && (
                  <div className="flex items-center justify-center gap-1.5 flex-wrap mt-3">
                    <span className="text-[10px] font-mono text-muted uppercase mr-1">{t.attemptsHistory}:</span>
                    {validF1Attempts.slice(-6).map((time, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-surface-soft border border-hairline rounded-none text-ink">
                        #{idx + 1}: <strong className={time <= (f1Best || 0) ? 'text-[#0fa336]' : 'text-body'}>{time}ms</strong>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-body text-xs sm:text-sm font-light mb-6 max-w-lg mx-auto leading-relaxed">{getEvaluationText()}</p>

          {/* Pro Athlete Reflex Comparison (F1 Mode only, when not a fault) */}
          {gameMode === 'f1' && !jumpStart && finalReactionTime !== null && (
            <div className="bg-surface-card border border-hairline p-4 sm:p-5 mb-6 max-w-xl mx-auto text-left">
              <div className="flex items-center justify-between border-b border-hairline pb-2 mb-3">
                <span className="font-display font-bold text-xs uppercase tracking-[1.5px] text-ink">
                  {t.proComparison}
                </span>
                <span className="text-[10px] font-mono text-muted uppercase">
                  {t.yourScore}: <span className="text-white font-bold">{finalReactionTime}ms</span>
                </span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                {[
                  { name: 's1mple (Esports / CS:GO AWPer)', time: 155, tag: 'Esports' },
                  { name: 'Valtteri Bottas (F1 Austrian GP Start)', time: 165, tag: 'F1 Legend' },
                  { name: 'Max Verstappen (F1 World Champion)', time: 180, tag: 'Formula 1' },
                  { name: 'Novak Djokovic (Tennis Return)', time: 185, tag: 'Tennis' },
                  { name: 'Average Competitive Gamer', time: 215, tag: 'Gaming' },
                  { name: 'Average Human Reaction Time', time: 250, tag: 'Global Avg' },
                ].map((athlete, idx) => {
                  const isBeaten = finalReactionTime <= athlete.time;
                  return (
                    <div key={idx} className={`flex items-center justify-between p-2 border ${isBeaten ? 'border-[#0fa336]/40 bg-[#0fa336]/10 text-[#0fa336]' : 'border-hairline bg-surface-soft text-muted'}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider">{isBeaten ? t.beaten : t.beatYou}</span>
                        <span className={`font-sans font-bold text-xs ${isBeaten ? 'text-white' : 'text-body'}`}>{athlete.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 bg-surface-card border border-hairline text-muted">{athlete.tag}</span>
                        <span className="font-bold">{athlete.time}ms</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Restart Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch mt-4">
            <button 
              onClick={(e) => { e.stopPropagation(); startGame(gameMode); }} 
              className={`flex-1 text-white uppercase font-display font-bold text-xs sm:text-sm tracking-[2px] py-4 px-6 transition-all rounded-none border ${gameMode === 'f1' ? 'bg-m-red hover:bg-[#c81e11] border-m-red shadow-[0_0_15px_rgba(226,39,24,0.4)]' : 'bg-m-blue-dark hover:bg-[#1554aa] border-m-blue-dark shadow-[0_0_15px_rgba(28,105,212,0.4)]'}`}
            >
              {gameMode === 'f1' ? t.launchF1Btn : t.startMatrixBtn}
            </button>
            {gameMode === 'f1' && validF1Attempts.length > 0 && (
              <button 
                onClick={(e) => { e.stopPropagation(); setF1History([]); }} 
                className="bg-surface-card hover:bg-surface-elevated text-muted hover:text-ink border border-hairline uppercase font-display font-bold text-xs tracking-[1px] py-4 px-4 transition-all rounded-none"
              >
                {t.resetSession}
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
