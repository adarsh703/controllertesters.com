import { useGamepad } from '../hooks/useGamepad';
import React, { useEffect, useRef, useState } from 'react';
import { playButtonSound, triggerLSynth, triggerRSynth, setMuted } from '../utils/audio';
import { ControllerVisualizer } from './ControllerVisualizer';
import { StickDriftTester } from './StickDriftTester';
import { ReactionMatrix } from './ReactionMatrix';
import { widgetTranslations, getWidgetLang } from '../i18n/widgetTranslations';
import type { SupportedLang } from '../i18n/languages';
import { getLocalizedUrl } from '../i18n/utils';

// --- BMW M-Design Telemetry Widgets ---

function MStripe() {
  return (
    <div className="absolute top-0 left-0 w-full h-[2px] flex">
      <div className="w-1/3 h-full bg-[#0066b1]" />
      <div className="w-1/3 h-full bg-[#1c69d4]" />
      <div className="w-1/3 h-full bg-[#e22718]" />
    </div>
  );
}

function MCard({ title, children, className = "", action, titleColor = "#e22718" }: { title: string, children: React.ReactNode, className?: string, action?: React.ReactNode, titleColor?: string }) {
  return (
    <div className={`bg-white dark:bg-[#1a1a1a] border border-stone-300 dark:border-[#262626] rounded-xl flex flex-col relative overflow-hidden h-full ${className}`}>
      <div className="p-3 sm:p-3.5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2"><h3 className="text-[10px] font-bold tracking-widest uppercase mt-0.5" style={{ color: titleColor }}>{title}</h3>{action && <div>{action}</div>}</div>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

function CircularScope({ x, y, label, resetTrigger, avgErrLabel = "Avg Err" }: { x: number, y: number, label: string, resetTrigger: number, avgErrLabel?: string }) {
  const r = 50;
  const cx = 60, cy = 60;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bucketsRef = useRef<number[]>(new Array(64).fill(0));
  const [avgErr, setAvgErr] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw dot on canvas
    ctx.fillStyle = '#1c69d4';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(cx + x * r, cy + y * r, 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Calculate accurate Average Circularity Error
    const mag = Math.sqrt(x*x + y*y);
    if (mag > 0.1) {
      let angle = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
      let bucketIndex = Math.round(angle / (360 / 64)) % 64;
      if (mag > bucketsRef.current[bucketIndex]) {
        bucketsRef.current[bucketIndex] = mag;
        
        let sum = 0;
        let count = 0;
        for (let i = 0; i < 64; i++) {
          if (bucketsRef.current[i] > 0) {
            sum += Math.abs(bucketsRef.current[i] - 1.0);
            count++;
          }
        }
        
        if (count > 0) {
          setAvgErr((sum / count) * 100);
        }
      }
    }
  }, [x, y]);

  useEffect(() => {
    if (resetTrigger > 0) {
      bucketsRef.current = new Array(64).fill(0);
      setAvgErr(0);
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [resetTrigger]);

  const errColor = avgErr > 15 ? 'text-[#e22718]' : (avgErr > 10 ? 'text-yellow-500' : 'text-emerald-500');

  return (
    <div className="flex flex-col items-center">
      <div className="text-[10px] text-stone-600 dark:text-[#bbbbbb] mb-1.5 font-mono uppercase tracking-wider">{label}</div>
      <div className="relative">
        <canvas ref={canvasRef} width={120} height={120} className="absolute top-0 left-0" />
        <svg width={120} height={120} className="relative z-10 overflow-visible">
          <circle cx={cx} cy={cy} r={r} className="fill-none stroke-stone-300 dark:stroke-[#3c3c3c]" strokeWidth="1" />
          <line x1={cx} y1={8} x2={cx} y2={112} className="stroke-stone-300 dark:stroke-[#3c3c3c]" strokeWidth="1" />
          <line x1={8} y1={cy} x2={112} y2={cy} className="stroke-stone-300 dark:stroke-[#3c3c3c]" strokeWidth="1" />
          <circle cx={cx + x * r} cy={cy + y * r} r={4.5} className="fill-[#1c69d4] shadow-[0_0_8px_#1c69d4]" />
        </svg>
      </div>
      <div className="text-[11px] text-stone-900 dark:text-white font-mono mt-2">
         {(x >= 0 ? '+' : '') + x.toFixed(2)} | {(y >= 0 ? '+' : '') + y.toFixed(2)}
      </div>
      <div className={`text-[10px] ${errColor} font-mono mt-1 font-bold`}>
        {avgErrLabel}: {avgErr.toFixed(1)}%
      </div>
    </div>
  );
}

function MinimalAxis({ val, index }: { val: number, index: number }) {
  const left = val < 0 ? 50 + val * 50 : 50;
  const width = Math.abs(val) * 50;
  return (
    <div className="flex items-center gap-3 mb-2.5">
      <span className="shrink-0 text-[11px] font-mono font-bold text-stone-600 dark:text-[#bbbbbb]">
        AX{index}
      </span>
      <div className="flex-1 h-2.5 bg-transparent border border-stone-400 dark:border-[#3c3c3c] rounded-full relative overflow-hidden flex items-center justify-center">
        <div className="absolute h-full bg-[#1c69d4] opacity-80" style={{ left: `${left}%`, width: `${width}%` }} />
        <div className="w-px h-full bg-[#7e7e7e] z-10" />
      </div>
      <span className="shrink-0 text-[11px] font-mono font-bold text-stone-900 dark:text-white">
        {(val >= 0 ? '+' : '')}{val.toFixed(1)}
      </span>
    </div>
  );
}

// --- Main Dashboard Component ---

export interface ControllerDashboardProps {
  initialTab?: 'tester' | 'stick-drift' | 'reaction';
  initialMode?: 'matrix' | 'f1';
  lang?: SupportedLang;
}

export function ControllerDashboard({ initialTab = 'tester', initialMode = 'f1', lang }: ControllerDashboardProps) {
  const activeLang = getWidgetLang(lang);
  const t = widgetTranslations[activeLang] || widgetTranslations['en'];

  // Direct delegation to sub-suites if targeted
  if (initialTab === 'stick-drift') {
    return <StickDriftTester lang={lang} />;
  }

  if (initialTab === 'reaction') {
    return <ReactionMatrix initialMode={initialMode} lang={lang} />;
  }

  const { activeGamepad: realGamepad, vibrate } = useGamepad();
  const prevButtonsRef = useRef<boolean[]>([]);
  const [hapticError, setHapticError] = useState<string | null>(null);
  const [motorState, setMotorState] = useState({ strong: 0, weak: 0 });
  
  const [virtualState, setVirtualState] = useState({
    buttons: Array.from({ length: 18 }).map(() => ({ pressed: false, value: 0 })),
    axes: [0, 0, 0, 0]
  });

  const activeGamepad = realGamepad || {
    id: t.virtualController + " (Demo)",
    buttons: virtualState.buttons,
    axes: virtualState.axes
  };
  
  const handleVirtualAxis = (axisIndex: number, val: number) => {
    if (realGamepad) return;
    setVirtualState(prev => {
      const a = [...prev.axes];
      a[axisIndex] = val;
      return { ...prev, axes: a };
    });
  };

  const handleVirtualButton = (idx: number, pressed: boolean) => {
    if (realGamepad) return;
    setVirtualState(prev => {
      const b = [...prev.buttons];
      b[idx] = { pressed, value: pressed ? 1 : 0 };
      return { ...prev, buttons: b };
    });
  };

  useEffect(() => {
    if (realGamepad) return;
    
    const keyMap: Record<string, number> = {
      ' ': 0, // A
      'enter': 0, // A
      'shift': 4, // LB
      'e': 5, // RB
      'q': 6, // LT
      'r': 7, // RT
      'arrowup': 12, // Dpad U
      'arrowdown': 13, // Dpad D
      'arrowleft': 14, // Dpad L
      'arrowright': 15, // Dpad R
    };

    const handleKey = (e: KeyboardEvent, isDown: boolean) => {
      const key = e.key.toLowerCase();
      if (keyMap[key] !== undefined) {
        if (isDown) e.preventDefault();
        handleVirtualButton(keyMap[key], isDown);
      }
      
      // WASD for Left Stick
      if (['w','a','s','d'].includes(key)) {
        setVirtualState(prev => {
          let ax0 = prev.axes[0];
          let ax1 = prev.axes[1];
          if (key === 'a') ax0 = isDown ? -1 : 0;
          if (key === 'd') ax0 = isDown ? 1 : 0;
          if (key === 'w') ax1 = isDown ? -1 : 0;
          if (key === 's') ax1 = isDown ? 1 : 0;
          return { ...prev, axes: [ax0, ax1, prev.axes[2], prev.axes[3]] };
        });
      }
    };

    const kd = (e: KeyboardEvent) => handleKey(e, true);
    const ku = (e: KeyboardEvent) => handleKey(e, false);
    
    window.addEventListener('keydown', kd, { passive: false });
    window.addEventListener('keyup', ku);
    
    return () => {
      window.removeEventListener('keydown', kd);
      window.removeEventListener('keyup', ku);
    };
  }, [realGamepad]);
  
  const [muted, setMutedState] = useState(false);
  const toggleMute = () => {
    const newVal = !muted;
    setMutedState(newVal);
    setMuted(newVal);
  };

  const [resetCount, setResetCount] = useState(0);
  
  const [hz, setHz] = useState(0);
  const lastTimestamp = useRef(0);
  const updates = useRef(0);
  
  useEffect(() => {
    if (activeGamepad && activeGamepad.timestamp !== lastTimestamp.current) {
      lastTimestamp.current = activeGamepad.timestamp;
      updates.current++;
    }
  }, [activeGamepad?.timestamp]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHz(updates.current);
      updates.current = 0;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [overrideType, setOverrideType] = useState<'auto' | 'xbox' | 'ps'>('auto');
  const prevValuesRef = useRef<number[]>([]);

  useEffect(() => {
    if (!activeGamepad) return;
    
    activeGamepad.buttons.forEach((btn, index) => {
      const wasPressed = prevButtonsRef.current[index] || false;
      const wasValue = prevValuesRef.current[index] || 0;
      
      if ((btn.pressed && !wasPressed) || (btn.value > 0.05 && wasValue <= 0.05)) {
        try {
          const audioCtx = (window as any).__audioCtx || new (window.AudioContext || (window as any).webkitAudioContext)();
          (window as any).__audioCtx = audioCtx;
          if (audioCtx.state === 'suspended') audioCtx.resume();
          triggerLSynth.start();
          triggerRSynth.start();
        } catch (e) {}
      }

      if (btn.pressed && !wasPressed) {
        playButtonSound(index);
      }
      
      prevButtonsRef.current[index] = btn.pressed;
      prevValuesRef.current[index] = btn.value;
    });
  }, [activeGamepad]);

  useEffect(() => {
    if (!activeGamepad) return;
    const lVal = activeGamepad.buttons[6]?.value || 0;
    const rVal = activeGamepad.buttons[7]?.value || 0;
    triggerLSynth.update(lVal);
    triggerRSynth.update(rVal);
  }, [activeGamepad?.buttons[6]?.value, activeGamepad?.buttons[7]?.value]);

  const b = activeGamepad.buttons;
  const axes = activeGamepad.axes;
  let layoutType = overrideType === 'auto' ? (activeGamepad.id.toLowerCase().includes('playstation') || activeGamepad.id.toLowerCase().includes('dualsense') ? 'ps' : 'xbox') : overrideType;

  const doVibrate = async (type: 'heavy' | 'light' | 'burst' | 'pulse' | 'tap' | 'heartbeat' | 'earthquake' | 'sos' | 'engine') => {
    let result;
    const setM = (s: number, w: number) => setMotorState({ strong: s, weak: w });
    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
    
    try {
      if (type === 'heavy') {
        setM(1.0, 0.2);
        result = await vibrate(800, 1.0, 0.2); 
      } else if (type === 'light') {
        setM(0.0, 1.0);
        result = await vibrate(250, 0.0, 1.0); 
      } else if (type === 'burst') {
        setM(1.0, 1.0);
        result = await vibrate(80, 1.0, 1.0);
        setM(0, 0); await wait(80);
        setM(1.0, 1.0);
        await vibrate(80, 1.0, 1.0);
      } else if (type === 'pulse') {
        setM(0.8, 0.8);
        result = await vibrate(250, 0.8, 0.8);
        setM(0, 0); await wait(500);
        setM(0.8, 0.8);
        await vibrate(250, 0.8, 0.8);
      } else if (type === 'tap') {
        setM(0.0, 1.0);
        result = await vibrate(40, 0.0, 1.0);
      } else if (type === 'heartbeat') {
        setM(1.0, 0.0);
        result = await vibrate(120, 1.0, 0.0);
        setM(0, 0); await wait(120);
        setM(0.6, 0.0);
        await vibrate(160, 0.6, 0.0);
      } else if (type === 'earthquake') {
        for (let i = 1; i <= 5; i++) {
          const intensity = i * 0.2;
          setM(intensity, intensity * 0.5);
          result = await vibrate(100 + i * 40, intensity, intensity * 0.5);
          setM(0, 0); await wait(60);
        }
        setM(1.0, 1.0);
        await vibrate(400, 1.0, 1.0);
      } else if (type === 'sos') {
        const dot = async () => { setM(0.0, 1.0); await vibrate(80, 0.0, 1.0); setM(0, 0); await wait(80); };
        const dash = async () => { setM(1.0, 0.3); await vibrate(250, 1.0, 0.3); setM(0, 0); await wait(80); };
        await dot(); await dot(); await dot();
        await wait(160);
        await dash(); await dash(); await dash();
        await wait(160);
        result = await vibrate(80, 0.0, 1.0); setM(0.0, 1.0);
        setM(0, 0); await wait(80);
        await dot(); await dot();
      } else if (type === 'engine') {
        for (let i = 0; i < 3; i++) {
          setM(0.3, 0.1); await vibrate(150, 0.3, 0.1);
          setM(0, 0); await wait(100);
        }
        for (let i = 1; i <= 4; i++) {
          const s = 0.2 + i * 0.2;
          const w = i * 0.15;
          setM(s, w); result = await vibrate(80 + i * 20, s, w);
          setM(0, 0); await wait(40);
        }
        setM(1.0, 0.8);
        await vibrate(300, 1.0, 0.8);
      }
    } catch (e: any) {
      result = { success: false, reason: e.message };
    }
    
    setM(0, 0);
    if (result && !result.success) setHapticError(result.reason || "SYS_REJECTED");
    else setHapticError(null);
  };

  const reactionTestUrl = activeLang === 'en' ? '/reaction-matrix' : `/${activeLang}/reaction-matrix`;

  return (
    <div className="w-full flex flex-col gap-2.5 font-sans text-stone-600 dark:text-[#bbbbbb]">
      
      {/* --- TOP: Main Visualizer Card --- */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-stone-300 dark:border-[#262626] rounded-xl p-3 sm:p-4 flex flex-col relative overflow-hidden shadow-xl">
        <MStripe />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-1.5 mt-0.5">
          <div>
            <h2 className="font-bold text-base md:text-lg text-stone-900 dark:text-white uppercase tracking-widest leading-none">
              {activeGamepad.id.split('(')[0].substring(0, 30).trim()} 
              <span className="text-stone-400 dark:text-stone-500 font-normal ml-2 tracking-normal text-xs">({layoutType === 'ps' ? 'PlayStation' : 'Xbox'})</span>
            </h2>
            <p className="text-stone-500 dark:text-[#7e7e7e] font-mono text-[9px] mt-1 uppercase tracking-widest">
              {t.liveTelemetry}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-end items-center gap-3 md:gap-4 mt-1 md:mt-0">
            <a 
              href={reactionTestUrl}
              className="group flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-[#e22718] text-[#e22718] transition-all shadow-[0_0_12px_rgba(226,39,24,0.3)] bg-transparent hover:bg-[#e22718] hover:text-white cursor-pointer no-underline outline-none"
              title={t.reactionTestBtn}
              style={{ textDecoration: 'none', WebkitAppearance: 'none' }}
            >
              <svg className="w-3 h-3 text-[#e22718] group-hover:text-white transition-colors animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="block no-underline" style={{ textDecoration: 'none' }}>{t.reactionTestBtn}</span>
            </a>
            
            <button 
              onClick={toggleMute}
              className={`group flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${muted ? 'border-[#e22718] text-[#e22718] shadow-[0_0_12px_rgba(226,39,24,0.3)] hover:bg-[#e22718] hover:text-white' : 'border-emerald-500 text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:bg-emerald-500 hover:text-white'} bg-transparent cursor-pointer`}
              title="Toggle Audio Feedback"
            >
              {muted ? (
                <><svg className="w-3 h-3 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg> {t.soundOff}</>
              ) : (
                <><svg className="w-3 h-3 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg> {t.soundOn}</>
              )}
            </button>
            <div className="flex bg-stone-200 dark:bg-[#000000] border border-stone-400 dark:border-[#3c3c3c] overflow-hidden">
              {[
                { key: 'auto', label: t.auto },
                { key: 'xbox', label: t.xbox },
                { key: 'ps', label: t.ps }
              ].map(item => (
                <button 
                  key={item.key}
                  onClick={() => setOverrideType(item.key as any)}
                  className={`px-3 sm:px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${overrideType === item.key ? 'bg-[#1c69d4] text-white' : 'text-stone-500 dark:text-[#7e7e7e] hover:bg-[#1c69d4]/10 hover:text-[#1c69d4] dark:hover:bg-[#1c69d4]/20 dark:hover:text-[#60a5fa]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[270px] sm:h-[310px] md:h-[350px] lg:h-[380px] flex items-center justify-center overflow-hidden my-auto py-2">
          <ControllerVisualizer buttons={b} axes={axes} type={layoutType as any} onButtonInteract={handleVirtualButton} onAxisInteract={handleVirtualAxis} />
        </div>
      </div>

      {/* --- BOTTOM: Symmetric 4-Column Diagnostic Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 shrink-0">
        
        {/* 1. XY Scopes */}
        <MCard title={t.analogVectors} titleColor="#1c69d4" action={<button onClick={() => setResetCount(c => c + 1)} className="p-1.5 rounded border border-stone-300 dark:border-[#3c3c3c] hover:bg-stone-200 dark:hover:bg-[#262626] transition-colors text-stone-500 dark:text-[#7e7e7e] cursor-pointer" title={t.resetScopes}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></button>}>
          <div className="flex justify-around items-center h-full pt-1">
            <CircularScope x={axes[0] || 0} y={axes[1] || 0} label={t.stickL} resetTrigger={resetCount} avgErrLabel={t.avgErr} />
            <CircularScope x={axes[2] || 0} y={axes[3] || 0} label={t.stickR} resetTrigger={resetCount} avgErrLabel={t.avgErr} />
          </div>
        </MCard>

        {/* 2. Raw Data (4 Axes + Matrix) */}
        <MCard title={t.dataStream}>
          <div className="flex flex-col h-full justify-between">
            {/* Axis Section */}
            <div className="pt-1">
              {[0, 1, 2, 3].map(i => (
                <MinimalAxis key={i} val={axes[i] || 0} index={i} />
              ))}
            </div>

            {/* Buttons Section (6 cols x 3 rows) */}
            <div className="grid grid-cols-6 gap-1.5 mt-2">
              {b.map((btn, i) => (
                <div 
                  key={i} 
                  onPointerDown={() => handleVirtualButton(i, true)}
                  onPointerUp={() => handleVirtualButton(i, false)}
                  onPointerLeave={() => handleVirtualButton(i, false)}
                  className={`h-9 rounded-md flex items-center justify-center text-[11px] font-mono font-bold border cursor-pointer select-none touch-none transition-colors duration-75 ${btn.pressed ? 'bg-[#e22718] border-[#e22718] text-white shadow-[0_0_8px_rgba(226,39,24,0.5)]' : 'bg-stone-50 dark:bg-[#121212] border-stone-300 dark:border-[#333] text-stone-500 dark:text-[#7e7e7e] hover:bg-stone-200 dark:hover:bg-[#262626]'}`}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </MCard>

        {/* 3. Device Info */}
        <MCard title={t.deviceInfo}>
          <div className="flex flex-col h-full justify-center">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 px-3 w-full">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-stone-500 dark:text-[#7e7e7e] font-display uppercase tracking-widest">{t.mappingCore}</span>
                <span className="text-[12px] text-stone-900 dark:text-white font-mono font-bold truncate">{activeGamepad.mapping ? `${activeGamepad.mapping} (XInput)` : t.rawHid}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-stone-500 dark:text-[#7e7e7e] font-display uppercase tracking-widest">{t.hardwareId}</span>
                <span className="text-[12px] text-stone-900 dark:text-white font-mono font-bold truncate" title={activeGamepad.id}>
                  {(() => {
                    const match = activeGamepad.id.match(/Vendor: ([0-9a-fA-F]{4}) Product: ([0-9a-fA-F]{4})/);
                    if (match) return `VID_${match[1]} PID_${match[2]}`;
                    return 'OEM_GENERIC';
                  })()}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-stone-500 dark:text-[#7e7e7e] font-display uppercase tracking-widest">{t.hapticCore}</span>
                <span className="text-[12px] text-stone-900 dark:text-white font-mono font-bold">
                  {(() => {
                  try {
                    const gps = navigator.getGamepads ? navigator.getGamepads() : [];
                    const gp = gps[activeGamepad.index];
                    if (gp && (gp as any).vibrationActuator) return 'Dual-Rumble (ERM)';
                    if (typeof window !== 'undefined' && !('vibrationActuator' in Gamepad.prototype)) return t.unsupported;
                    return 'Unsupported (No Actuator)';
                  } catch(e) { return 'Unknown'; }
                })()}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-stone-500 dark:text-[#7e7e7e] font-display uppercase tracking-widest">{t.ioChannels}</span>
                <span className="text-[12px] text-stone-900 dark:text-white font-mono font-bold">
                  {activeGamepad.buttons.length} Btn / {activeGamepad.axes.length} Ax
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-stone-500 dark:text-[#7e7e7e] font-display uppercase tracking-widest">{t.pollingRate}</span>
                <span className="text-[12px] text-[#1c69d4] font-mono font-bold">{hz} Hz</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-stone-500 dark:text-[#7e7e7e] font-display uppercase tracking-widest">{t.deviceHealth}</span>
                <span className="text-[12px] text-emerald-500 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t.nominal}
                </span>
              </div>
            </div>
          </div>
        </MCard>

        {/* 4. Force Feedback */}
        <MCard title={t.haptics}>
          <div className="flex flex-col gap-2 flex-1 px-1">
            <style>{`
              @keyframes rumble {
                0% { transform: translate(0, 0) rotate(0deg) scale(1.15); }
                25% { transform: translate(-1px, 1px) rotate(-3deg) scale(1.15); }
                50% { transform: translate(1px, -1px) rotate(3deg) scale(1.15); }
                75% { transform: translate(-1px, -1px) rotate(-1deg) scale(1.15); }
                100% { transform: translate(1px, 1px) rotate(1deg) scale(1.15); }
              }
              .animate-rumble {
                animation: rumble 0.08s infinite linear;
              }
            `}</style>
            
            <div className="flex items-center justify-between h-32 bg-stone-100 dark:bg-[#0d0d0d] rounded-xl border border-stone-300 dark:border-[#262626] px-8 relative overflow-hidden">
              {(() => {
                let glowColor = 'text-stone-400 dark:text-[#555]';
                let dropShadow = '';
                let bgGlow = 'bg-transparent';
                
                const max = Math.max(motorState.strong, motorState.weak);
                const blur = max * 24;
                
                if (motorState.strong > 0 && motorState.weak > 0) {
                  glowColor = 'text-purple-500';
                  dropShadow = `drop-shadow(0 0 ${blur}px rgba(168, 85, 247, 0.9))`;
                  bgGlow = 'bg-purple-500/10';
                } else if (motorState.strong > 0) {
                  glowColor = 'text-[#e22718]';
                  dropShadow = `drop-shadow(0 0 ${blur}px rgba(226, 39, 24, 0.9))`;
                  bgGlow = 'bg-[#e22718]/10';
                } else if (motorState.weak > 0) {
                  glowColor = 'text-[#0066b1]';
                  dropShadow = `drop-shadow(0 0 ${blur}px rgba(0, 102, 177, 0.9))`;
                  bgGlow = 'bg-[#0066b1]/10';
                }

                return (
                  <>
                    <div className={`absolute inset-0 transition-opacity duration-75 ${bgGlow}`} style={{ opacity: max * 0.6 }} />
                    
                    {/* Left Bar */}
                    <div className="w-3 h-24 bg-stone-300 dark:bg-[#222] rounded-full overflow-hidden flex flex-col justify-end relative z-10 shadow-inner border border-stone-400/20 dark:border-black/50">
                       <div className="w-full bg-gradient-to-t from-[#99170f] to-[#e22718] transition-all duration-75 rounded-full" style={{ height: `${motorState.strong * 100}%` }} />
                    </div>

                    {/* Center Icon */}
                    <div className={`relative flex items-center justify-center transition-colors duration-75 z-10 ${glowColor}`}>
                       <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className={`transition-all duration-75 ${motorState.strong > 0 || motorState.weak > 0 ? 'animate-rumble' : 'scale-100'}`}
                            style={{ filter: dropShadow }}>
                         <path d="M4 8a10 10 0 0 0 0 8" className={`transition-all duration-75 ${motorState.strong > 0 ? 'opacity-100 stroke-[#e22718]' : 'opacity-30'}`}/>
                         <path d="M8 10a5 5 0 0 0 0 4" className={`transition-all duration-75 ${motorState.strong > 0 ? 'opacity-100 stroke-[#e22718]' : 'opacity-60'}`}/>
                         <circle cx="12" cy="12" r="2" className="fill-current"/>
                         <path d="M16 10a5 5 0 0 1 0 4" className={`transition-all duration-75 ${motorState.weak > 0 ? 'opacity-100 stroke-[#0066b1]' : 'opacity-60'}`}/>
                         <path d="M20 8a10 10 0 0 1 0 8" className={`transition-all duration-75 ${motorState.weak > 0 ? 'opacity-100 stroke-[#0066b1]' : 'opacity-30'}`}/>
                       </svg>
                    </div>

                    {/* Right Bar */}
                    <div className="w-3 h-24 bg-stone-300 dark:bg-[#222] rounded-full overflow-hidden flex flex-col justify-end relative z-10 shadow-inner border border-stone-400/20 dark:border-black/50">
                       <div className="w-full bg-gradient-to-t from-[#004b87] to-[#0066b1] transition-all duration-75 rounded-full" style={{ height: `${motorState.weak * 100}%` }} />
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Icon-Only Buttons (3x3 Grid) */}
            <div className="grid grid-cols-3 gap-2 flex-1 mt-1">
              <button title={t.hapticsHeavy} onClick={() => doVibrate('heavy')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="h-[3px] w-8 bg-[#e22718] rounded-full shadow-[0_0_5px_#e22718]" />
              </button>
              
              <button title={t.hapticsLight} onClick={() => doVibrate('light')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="h-[3px] w-8 bg-[#0066b1] rounded-full shadow-[0_0_5px_#0066b1]" />
              </button>
              
              <button title={t.hapticsHeartbeat} onClick={() => doVibrate('heartbeat')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="flex items-end gap-[2px] h-[10px]">
                  <div className="w-[3px] h-[3px] bg-[#e22718] rounded-full" />
                  <div className="w-[3px] h-full bg-[#e22718] rounded-full" />
                  <div className="w-[3px] h-[6px] bg-[#e22718] rounded-full" />
                </div>
              </button>

              <button title={t.hapticsBurst} onClick={() => doVibrate('burst')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="flex gap-1.5"><div className="h-[3px] w-3 bg-stone-800 dark:bg-white rounded-full"/><div className="h-[3px] w-3 bg-stone-800 dark:bg-white rounded-full"/></div>
              </button>
              
              <button title={t.hapticsPulse} onClick={() => doVibrate('pulse')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="flex gap-1.5"><div className="h-[3px] w-3 bg-[#f4b400] rounded-full animate-pulse"/><div className="h-[3px] w-3 bg-[#f4b400] rounded-full animate-pulse delay-75"/></div>
              </button>

              <button title={t.hapticsTap} onClick={() => doVibrate('tap')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="h-[4px] w-[4px] bg-[#0066b1] rounded-full shadow-[0_0_5px_#0066b1]" />
              </button>

              <button title={t.hapticsEarthquake} onClick={() => doVibrate('earthquake')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="flex items-end gap-[2px] h-[10px]">
                  <div className="w-[3px] h-[2px] bg-[#f4b400] rounded-full" />
                  <div className="w-[3px] h-[4px] bg-[#f4b400] rounded-full" />
                  <div className="w-[3px] h-[6px] bg-[#e22718] rounded-full" />
                  <div className="w-[3px] h-[8px] bg-[#e22718] rounded-full" />
                  <div className="w-[3px] h-full bg-[#e22718] rounded-full" />
                </div>
              </button>

              <button title={t.hapticsSos} onClick={() => doVibrate('sos')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <div className="flex items-center gap-[3px]">
                  <div className="h-[3px] w-[3px] bg-[#0066b1] rounded-full" />
                  <div className="h-[3px] w-[3px] bg-[#0066b1] rounded-full" />
                  <div className="h-[3px] w-[3px] bg-[#0066b1] rounded-full" />
                  <div className="h-[3px] w-[6px] bg-[#e22718] rounded-full mx-[1px]" />
                  <div className="h-[3px] w-[6px] bg-[#e22718] rounded-full mx-[1px]" />
                  <div className="h-[3px] w-[6px] bg-[#e22718] rounded-full mx-[1px]" />
                </div>
              </button>

              <button title={t.hapticsEngine} onClick={() => doVibrate('engine')} className="flex items-center justify-center bg-stone-100 dark:bg-[#0d0d0d] border border-stone-300 dark:border-[#262626] hover:bg-white dark:hover:bg-[#1a1a1a] active:scale-95 transition-all rounded-xl h-9 cursor-pointer">
                <svg width="16" height="12" viewBox="0 0 16 12" className="text-[#e22718]">
                  <polyline points="0,10 2,10 4,6 6,10 8,2 10,10 12,4 14,10 16,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          {hapticError && <div className="text-[9px] font-mono text-[#e22718] mt-2 text-center leading-tight truncate px-2" title={hapticError}>ERR: {hapticError}</div>}
        </MCard>

      </div>
    </div>
  );
}
