import React, { useRef, useEffect, useState } from 'react';
import { useGamepad } from '../hooks/useGamepad';
import { widgetTranslations, getWidgetLang } from '../i18n/widgetTranslations';
import type { SupportedLang } from '../i18n/languages';

// ==========================================
// POLAR HISTOGRAM RADAR (DISCRETE SECTORS & MULTI-TIER JITTER)
// ==========================================

const NUM_SLICES = 48; // 48 discrete 7.5-degree sectors around 360°
const SLICE_DEG = 360 / NUM_SLICES;

interface PolarCanvasProps {
  x: number;
  y: number;
  label: string;
  axisLabels: [string, string];
  deadzone: number;
  isRecordingStatic: boolean;
  clearTrigger: number;
  stickTheme: 'left' | 'right';
  lang?: SupportedLang;
}

function PolarRadarCanvas({
  x,
  y,
  label,
  axisLabels,
  deadzone,
  isRecordingStatic,
  clearTrigger,
  stickTheme,
  lang
}: PolarCanvasProps) {
  const activeLang = getWidgetLang(lang);
  const t = widgetTranslations[activeLang] || widgetTranslations['en'];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sector buckets storing max radius for each 7.5° wedge
  const sectorMap = useRef<number[]>(new Array(NUM_SLICES).fill(0));
  const staticMap = useRef<number[]>(new Array(NUM_SLICES).fill(0));

  // Jitter tracking (micro-movement variance at rest)
  const prevPos = useRef({ x: 0, y: 0, time: Date.now() });
  const [jitterRate, setJitterRate] = useState(0);
  const [maxStaticDrift, setMaxStaticDrift] = useState(0);
  const [polarCoverage, setPolarCoverage] = useState(0);
  const [deviation, setDeviation] = useState(0);

  // Clear data on trigger
  useEffect(() => {
    sectorMap.current = new Array(NUM_SLICES).fill(0);
    staticMap.current = new Array(NUM_SLICES).fill(0);
    setMaxStaticDrift(0);
    setPolarCoverage(0);
    setDeviation(0);
    setJitterRate(0);
  }, [clearTrigger]);

  // Main Render & Telemetry Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const r = Math.sqrt(x * x + y * y);
    let deg = (Math.atan2(y, x) * 180) / Math.PI;
    if (deg < 0) deg += 360;

    const sliceIdx = Math.floor(deg / SLICE_DEG) % NUM_SLICES;

    // Track live micro-jitter (unwanted micro movements at rest or low speed)
    const now = Date.now();
    const dt = Math.max(1, now - prevPos.current.time);
    const dx = x - prevPos.current.x;
    const dy = y - prevPos.current.y;
    const delta = Math.sqrt(dx * dx + dy * dy);

    if (r < 0.25 && delta > 0.0005) {
      const currentJitter = (delta / (dt / 16)) * 100;
      setJitterRate(prev => Math.min(9.99, Math.max(prev * 0.9, currentJitter * 0.1)));
    } else if (r < 0.05) {
      setJitterRate(prev => Math.max(0, prev * 0.95));
    }
    prevPos.current = { x, y, time: now };

    // Record Active Range Map (Multi-Tier Histogram)
    if (r > 0.08 && !isRecordingStatic) {
      sectorMap.current[sliceIdx] = Math.max(sectorMap.current[sliceIdx], r);

      // Compute polar coverage & circularity deviation
      let filledCount = 0;
      let sumReach = 0;
      for (let i = 0; i < NUM_SLICES; i++) {
        if (sectorMap.current[i] > 0.3) {
          filledCount++;
          sumReach += sectorMap.current[i];
        }
      }
      setPolarCoverage(Math.round((filledCount / NUM_SLICES) * 100));
      if (filledCount > 6) {
        const avg = sumReach / filledCount;
        setDeviation(Math.abs(1.0 - avg));
      } else {
        setDeviation(0);
      }
    }

    // Record Static Drift Benchmark
    if (isRecordingStatic) {
      staticMap.current[sliceIdx] = Math.max(staticMap.current[sliceIdx], r);
      setMaxStaticDrift(prev => Math.max(prev, r));
    }

    // Canvas Sizing
    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    const maxRadius = size / 2 - 28;

    // Clear
    ctx.clearRect(0, 0, size, size);

    // 1. Radar Grid Circles & Rings
    const isDark = document.documentElement.classList.contains('dark');
    const gridSteps = [0.25, 0.5, 0.75, 1.0];
    gridSteps.forEach((step, idx) => {
      ctx.beginPath();
      ctx.arc(cx, cy, step * maxRadius, 0, Math.PI * 2);
      ctx.strokeStyle = idx === 3 ? (isDark ? '#383838' : '#d4d4d4') : (isDark ? '#1e1e1e' : '#f0f0f0');
      ctx.lineWidth = idx === 3 ? 1.5 : 1;
      if (idx === 2) {
        ctx.setLineDash([2, 3]);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // 2. Precision Crosshairs
    ctx.setLineDash([3, 4]);
    ctx.strokeStyle = isDark ? '#222222' : '#e5e5e5';
    ctx.beginPath();
    ctx.moveTo(cx, 16);
    ctx.lineTo(cx, size - 16);
    ctx.moveTo(16, cy);
    ctx.lineTo(size - 16, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // Cardinal Angle Guides
    ctx.fillStyle = isDark ? '#666666' : '#a3a3a3';
    ctx.font = '9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('0°', cx, 12);
    ctx.fillText('90°', size - 12, cy + 3);
    ctx.fillText('180°', cx, size - 4);
    ctx.fillText('270°', 12, cy + 3);

    // 3. User Deadzone Boundary Ring (Hollow)
    if (deadzone > 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, deadzone * maxRadius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(0, 102, 177, 0.08)' : 'rgba(0, 102, 177, 0.05)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 102, 177, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 4. Draw Active 48-Sector Range Map (Outer Reach Polygon)
    ctx.beginPath();
    let hasRange = false;
    for (let i = 0; i < NUM_SLICES; i++) {
      const reach = sectorMap.current[i];
      if (reach > 0.05) hasRange = true;
      const angleRad = (i * SLICE_DEG * Math.PI) / 180;
      const clampedReach = Math.min(1.2, reach);
      const px = cx + Math.cos(angleRad) * clampedReach * maxRadius;
      const py = cy + Math.sin(angleRad) * clampedReach * maxRadius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    if (hasRange) {
      ctx.fillStyle = isDark ? 'rgba(15, 163, 54, 0.15)' : 'rgba(15, 163, 54, 0.12)';
      ctx.fill();
      ctx.strokeStyle = '#0fa336';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 5. Draw Static Drift Cloud (If Recorded)
    let hasStatic = false;
    ctx.beginPath();
    for (let i = 0; i < NUM_SLICES; i++) {
      const sReach = staticMap.current[i];
      if (sReach > 0) hasStatic = true;
      const angleRad = (i * SLICE_DEG * Math.PI) / 180;
      const px = cx + Math.cos(angleRad) * sReach * maxRadius;
      const py = cy + Math.sin(angleRad) * sReach * maxRadius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    if (hasStatic) {
      ctx.fillStyle = 'rgba(226, 39, 24, 0.35)';
      ctx.fill();
      ctx.strokeStyle = '#e22718';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 6. Current Live Coordinate Reticle
    const liveX = cx + x * maxRadius;
    const liveY = cy + y * maxRadius;

    // Vector Ray from Center to Thumb
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(liveX, liveY);
    ctx.strokeStyle = r > deadzone ? (stickTheme === 'left' ? '#0066b1' : '#1c69d4') : (isDark ? '#444' : '#bbb');
    ctx.lineWidth = 1;
    ctx.stroke();

    // Thumb Head Reticle
    ctx.beginPath();
    ctx.arc(liveX, liveY, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = r > deadzone ? (stickTheme === 'left' ? '#0066b1' : '#e22718') : (isDark ? '#666' : '#999');
    ctx.fill();
    ctx.strokeStyle = isDark ? '#ffffff' : '#000000';
    ctx.lineWidth = 1.5;
    ctx.stroke();

  }, [x, y, deadzone, isRecordingStatic, clearTrigger, stickTheme]);

  return (
    <div className="bg-surface-soft border border-hairline p-4 rounded-none flex flex-col justify-between h-full relative group">
      {/* Header: Label + Axes */}
      <div className="flex items-center justify-between border-b border-hairline pb-2 mb-2">
        <span className="font-display font-bold text-xs uppercase tracking-[1.5px] text-ink">
          {label}
        </span>
        <div className="flex items-center gap-3 text-[10px] font-mono text-muted">
          <span>
            {axisLabels[0]} <span className="text-ink font-bold">{(x >= 0 ? ' ' : '') + x.toFixed(5)}</span>
          </span>
          <span>
            {axisLabels[1]} <span className="text-ink font-bold">{(y >= 0 ? ' ' : '') + y.toFixed(5)}</span>
          </span>
        </div>
      </div>

      {/* Radar Canvas (Compact ~250px) */}
      <div className="relative my-1 flex justify-center">
        <canvas
          ref={canvasRef}
          width={250}
          height={250}
          className="w-full max-w-[250px] aspect-square bg-surface-card rounded-full shadow-inner"
        />
      </div>

      {/* Live Jitter Badge & Deviation Readout */}
      <div className="mt-2 flex flex-col items-center gap-1">
        <div className="bg-[#052e16] text-[#4ade80] px-2.5 py-0.5 rounded-none text-[10px] font-mono font-bold flex items-center gap-1.5">
          <svg className="w-2.5 h-2.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span>{t.jitter}: &plusmn;{jitterRate.toFixed(2)}%</span>
        </div>
        <div className="text-[10px] font-mono text-muted font-bold">
          {t.deviation}: <span className="text-ink">{deviation.toFixed(4)}</span>
        </div>
      </div>

      {/* Clean Bottom Spec Bar */}
      <div className="flex items-center justify-between w-full mt-3 pt-2.5 border-t border-hairline px-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-display uppercase tracking-[1px] text-muted">
            {t.polarCoverage}
          </span>
          <span className="font-mono text-xs font-bold text-ink">{polarCoverage}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-display uppercase tracking-[1px] text-muted">
            {t.restDrift}
          </span>
          <span className={`font-mono text-xs font-bold ${maxStaticDrift > 0.05 ? 'text-m-red' : 'text-[#0fa336]'}`}>
            {(maxStaticDrift * 100).toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN DRIFT DIAGNOSTIC SUITE
// ==========================================

interface StickDriftTesterProps {
  lang?: SupportedLang;
}

export function StickDriftTester({ lang }: StickDriftTesterProps) {
  const activeLang = getWidgetLang(lang);
  const t = widgetTranslations[activeLang] || widgetTranslations['en'];

  const { activeGamepad } = useGamepad();

  const [deadzone, setDeadzone] = useState(0.1);
  const [clearTrigger, setClearTrigger] = useState(0);
  const [staticStatus, setStaticStatus] = useState<'idle' | 'countdown' | 'complete'>('idle');
  const [countdown, setCountdown] = useState(3);

  const startStaticBenchmark = () => {
    setStaticStatus('countdown');
    setCountdown(3);
    setClearTrigger(prev => prev + 1);

    let count = 3;
    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        setStaticStatus('complete');
      }
    }, 1000);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch text-body font-sans">
      {/* Left 8 Cols: Dual Analog Radars */}
      <div className="lg:col-span-8 flex flex-col h-full">
          {!activeGamepad ? (
            <div className="w-full bg-surface-soft border border-hairline p-8 text-center flex flex-col items-center justify-center h-full min-h-[380px]">
              <h3 className="font-display font-bold text-xl text-ink uppercase tracking-[1.5px] mb-2">
                {t.noController}
              </h3>
              <p className="text-xs text-muted max-w-md">
                {t.noControllerSub}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
              <PolarRadarCanvas
                label={t.leftStick}
                axisLabels={['AXIS 0', 'AXIS 1']}
                x={activeGamepad.axes[0] || 0}
                y={activeGamepad.axes[1] || 0}
                deadzone={deadzone}
                isRecordingStatic={staticStatus === 'countdown'}
                clearTrigger={clearTrigger}
                stickTheme="left"
                lang={lang}
              />
              <PolarRadarCanvas
                label={t.rightStick}
                axisLabels={['AXIS 2', 'AXIS 3']}
                x={activeGamepad.axes[2] || 0}
                y={activeGamepad.axes[3] || 0}
                deadzone={deadzone}
                isRecordingStatic={staticStatus === 'countdown'}
                clearTrigger={clearTrigger}
                stickTheme="right"
                lang={lang}
              />
            </div>
          )}
        </div>

        {/* Right 4 Cols: Controls & Static Drift Rack */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div className="bg-surface-soft border border-hairline p-5 rounded-none h-full flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-hairline pb-2.5">
                <span className="font-display font-bold text-xs uppercase tracking-[1.5px] text-ink">
                  {t.staticDriftDiag}
                </span>
                <button
                  onClick={() => setClearTrigger(p => p + 1)}
                  className="text-[10px] font-display font-bold uppercase tracking-[1.5px] text-emerald-500 hover:text-emerald-400 transition-colors border border-emerald-500/30 hover:border-emerald-400 px-2.5 py-1"
                >
                  {t.clearMaps}
                </button>
              </div>

              {/* Range Map Info */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full border-2 border-[#4ade80] bg-transparent"></div>
                  <span className="font-display font-bold text-xs uppercase tracking-[1px] text-ink">
                    {t.rangePolarMap}
                  </span>
                </div>
                <p className="text-[11px] text-muted leading-relaxed pl-4">
                  {t.rangePolarMapDesc}
                </p>
              </div>

              {/* Jitter Detection Info */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-3 h-3 text-m-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-display font-bold text-xs uppercase tracking-[1px] text-ink">
                    {t.jitterSensor}
                  </span>
                </div>
                <p className="text-[11px] text-muted leading-relaxed pl-5">
                  {t.jitterSensorDesc}
                </p>
              </div>

              {/* Deadzone Slider */}
              <div className="pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 border border-m-blue-light"></div>
                    <span className="font-display font-bold text-xs uppercase tracking-[1px] text-ink">
                      {t.simulatedDeadzone}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-m-blue-light">
                    {deadzone.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.3"
                  step="0.01"
                  value={deadzone}
                  onChange={e => setDeadzone(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-hairline rounded-none appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>

            {/* Benchmark Section */}
            <div className="border-t border-hairline pt-3 mt-4">
              {/* Status readout */}
              <div className="text-center mb-2.5">
                {staticStatus === 'idle' && (
                  <span className="text-[10px] text-muted uppercase font-mono">
                    {t.clickToDetect3s}
                  </span>
                )}
                {staticStatus === 'countdown' && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-display font-bold text-xl text-m-red leading-none animate-pulse">
                      {countdown}S
                    </span>
                    <span className="text-[9px] font-display font-bold uppercase tracking-[1.5px] text-ink">
                      {t.recordingDrift}
                    </span>
                  </div>
                )}
                {staticStatus === 'complete' && (
                  <div className="flex items-center justify-center gap-1.5 text-[#0fa336]">
                    <div className="w-1.5 h-1.5 bg-[#0fa336]"></div>
                    <span className="font-display font-bold text-xs uppercase tracking-[1.5px]">
                      {t.diagComplete}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={startStaticBenchmark}
                disabled={staticStatus === 'countdown' || !activeGamepad}
                className="w-full bg-white hover:bg-stone-200 dark:hover:bg-stone-100 text-black font-display font-bold text-xs uppercase tracking-[2px] py-3.5 transition-all duration-150 rounded-none disabled:opacity-40 disabled:cursor-not-allowed border border-white"
              >
                {staticStatus === 'countdown' ? t.detectingDrift : t.startStaticDetection}
              </button>

              <div className="text-center mt-2 text-[10px] font-mono text-warning flex items-center justify-center gap-1">
                <span>⚠️</span>
                <span>{t.keepHandsOff}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
