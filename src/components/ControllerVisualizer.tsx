import React from 'react';
import { PS5_SHELL_PATHS } from './PS5Paths';

interface Props {
  buttons: { pressed: boolean; value: number }[];
  axes: number[];
  type: 'xbox' | 'ps';
  onButtonInteract?: (idx: number, pressed: boolean) => void;
}

export function ControllerVisualizer({ buttons, axes, type, onButtonInteract }: Props) {
  const t = Array.from({ length: 20 }, (_, i) => buttons[i]?.pressed || false);
  const v = (i: number) => buttons[i]?.value || 0;

  const ax0 = axes[0] || 0;
  const ax1 = axes[1] || 0;
  const ax2 = axes[2] || 0;
  const ax3 = axes[3] || 0;

    const bf = (idx: number, activeClass: string) =>
    t[idx]
      ? `${activeClass} transition-colors duration-100`
      : 'fill-stone-200 dark:fill-stone-700 transition-colors duration-100';

  const bEvent = (idx: number) => {
    return onButtonInteract ? {
      onPointerDown: (e: any) => { e.currentTarget.setPointerCapture(e.pointerId); onButtonInteract(idx, true); },
      onPointerUp: (e: any) => { e.currentTarget.releasePointerCapture(e.pointerId); onButtonInteract(idx, false); },
      onPointerLeave: () => onButtonInteract(idx, false),
    } : {};
  };

  const props = { t, v, ax0, ax1, ax2, ax3, bf, bEvent };

  if (type === 'xbox') return <XboxSVG {...props} />;
  return type === 'ps' ? <PS5SVG {...props} /> : <XboxSVG {...props} />;

}

interface SVGProps {
  t: boolean[];
  v: (i: number) => number;
  ax0: number; ax1: number; ax2: number; ax3: number;
  bf: (idx: number, cls: string) => string;
}

// ==========================================
// SHARED 3D COMPONENTS
// ==========================================

function StickWell({ cx, cy, r, s = 1 }: { cx: number; cy: number; r: number; s?: number }) {
  return <circle cx={cx} cy={cy} r={r} className="fill-stone-50 dark:fill-[#0a0a0a] stroke-stone-200 dark:stroke-stone-700/50 shadow-inner" strokeWidth={1.5 * s} />;
}

function StickCap({ cx, cy, r, pressed, tx, ty, s = 1, interact, onAxisInteract }: { cx: number; cy: number; r: number; pressed: boolean; tx: number; ty: number; s?: number; interact?: any; onAxisInteract?: (x: number, y: number) => void }) {
  const handlePointerDown = (e: React.PointerEvent) => {
    if (interact?.onPointerDown) interact.onPointerDown(e);
    if (!onAxisInteract) return;
    
    try { (e.target as Element).setPointerCapture(e.pointerId); } catch(err) {}
    
    const startX = e.clientX;
    const startY = e.clientY;
    const initialTx = tx;
    const initialTy = ty;
    const maxMove = 25;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      let dx = (moveEvent.clientX - startX) + initialTx;
      let dy = (moveEvent.clientY - startY) + initialTy;
      const mag = Math.sqrt(dx*dx + dy*dy);
      if (mag > maxMove) { dx = (dx / mag) * maxMove; dy = (dy / mag) * maxMove; }
      onAxisInteract(dx / maxMove, dy / maxMove);
    };

    const handlePointerUp = (upEvent: PointerEvent) => {
      if (interact?.onPointerUp) interact.onPointerUp(upEvent as any);
      try { (upEvent.target as Element).releasePointerCapture(upEvent.pointerId); } catch(err) {}
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      onAxisInteract(0, 0);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
  };

  return (
    <g 
      transform={`translate(${tx}, ${ty})`} 
      {...interact}
      onPointerDown={handlePointerDown} 
      onPointerUp={(e) => {
        if (interact?.onPointerUp) interact.onPointerUp(e);
      }}
      onPointerLeave={(e) => {
        if (interact?.onPointerLeave) interact.onPointerLeave(e);
      }}
      className={(interact || onAxisInteract) ? 'cursor-pointer touch-none' : ''}
    >
      <circle cx={cx} cy={cy + 3 * s} r={r} className="fill-stone-300/50 dark:fill-black/60 pointer-events-none" />
      <g transform={`translate(0, ${pressed ? 2 * s : 0})`} style={{ transition: 'transform 75ms' }}>
        <circle cx={cx} cy={cy} r={r}
          className={`${pressed ? 'fill-blue-500' : 'fill-stone-900 dark:fill-stone-200'} transition-colors duration-100 stroke-stone-800 dark:stroke-stone-700`}
          strokeWidth={1.5 * s}
        />
        <circle cx={cx} cy={cy} r={r * 0.78} className="fill-none stroke-white/10 dark:stroke-white/5" strokeWidth={1.5 * s} />
        <circle cx={cx} cy={cy} r={r * 0.35} className={`${pressed ? 'fill-blue-600/50' : 'fill-stone-700 dark:fill-stone-800/80'} stroke-none transition-colors duration-100`} />
      </g>
    </g>
  );
}

// Connected Cross D-Pad for Xbox
function DPad({ cx, cy, size, pressed, s = 1, interacts }: { cx: number; cy: number; size: number; pressed: boolean[]; s?: number; interacts?: any[] }) {
  const hs = size * 0.4;
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <g transform={`translate(0, ${1.5 * s})`} className="fill-stone-300 dark:fill-black/50">
        <rect x={-hs} y={-size} width={hs * 2} height={size * 2} rx={2 * s} />
        <rect x={-size} y={-hs} width={size * 2} height={hs * 2} rx={2 * s} />
      </g>
      <g className="stroke-stone-300 dark:stroke-stone-700" strokeWidth={1 * s}>
        <rect {...(interacts?.[0] || {})} className={(interacts?.[0] ? 'cursor-pointer touch-none ' : '') + (pressed[0] ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]')} x={-hs} y={pressed[0] ? -size + 1.5 * s : -size} width={hs * 2} height={size - hs} rx={2 * s} style={{ transition: 'all 75ms' }} />
        <rect {...(interacts?.[1] || {})} className={(interacts?.[1] ? 'cursor-pointer touch-none ' : '') + (pressed[1] ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]')} x={-hs} y={pressed[1] ? hs + 1.5 * s : hs} width={hs * 2} height={size - hs} rx={2 * s} style={{ transition: 'all 75ms' }} />
        <rect {...(interacts?.[2] || {})} className={(interacts?.[2] ? 'cursor-pointer touch-none ' : '') + (pressed[2] ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]')} x={-size} y={pressed[2] ? -hs + 1.5 * s : -hs} width={size - hs} height={hs * 2} rx={2 * s} style={{ transition: 'all 75ms' }} />
        <rect {...(interacts?.[3] || {})} className={(interacts?.[3] ? 'cursor-pointer touch-none ' : '') + (pressed[3] ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]')} x={hs} y={pressed[3] ? -hs + 1.5 * s : -hs} width={size - hs} height={hs * 2} rx={2 * s} style={{ transition: 'all 75ms' }} />
        <rect x={-hs} y={-hs} width={hs * 2} height={hs * 2} className="fill-stone-100 dark:fill-[#222] pointer-events-none" />
      </g>
    </g>
  );
}

// Authentic PlayStation D-Pad (Pointed chevrons)

function FlatBumper({ x, y, w, h, active, label, s=1, interact }: { x: number, y: number, w: number, h: number, active: boolean, label?: string, s?: number; interact?: any }) {
  const r = 2.5 * s;
  const path = `M ${x} ${y+h} L ${x} ${y+r} Q ${x} ${y} ${x+r} ${y} L ${x+w-r} ${y} Q ${x+w} ${y} ${x+w} ${y+r} L ${x+w} ${y+h} Z`;
  return (
    <g {...interact} className={interact ? 'cursor-pointer touch-none' : ''}>
      <path d={path} transform={`translate(0, ${1.5*s})`} className="fill-stone-300 dark:fill-black/50" />
      <path d={path} transform={active ? `translate(0, ${1.5*s})` : ''} 
            className={`${active ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]'} stroke-stone-300 dark:stroke-stone-700 transition-all duration-75`} 
            strokeWidth={1 * s} />
      {label && (
        <text x={x + w/2} y={active ? y + h/2 + 2*s + 1.5*s : y + h/2 + 2*s} textAnchor="middle" alignmentBaseline="middle"
          className={`${active ? 'fill-white' : 'fill-stone-500 dark:fill-stone-400'} font-black font-sans pointer-events-none transition-all duration-75`} style={{ fontSize: `${11 * s}px` }}>
          {label}
        </text>
      )}
    </g>
  );
}

function PSDPadBtn({ size, gap, w, angle, active, s=1, interact }: { size: number, gap: number, w: number, angle: number, active: boolean, s?: number; interact?: any }) {
  const hw = w/2;
  const base = `M ${-hw} ${-size} L ${hw} ${-size} L ${hw} ${-gap - hw} L 0 ${-gap} L ${-hw} ${-gap - hw} Z`;
  
  return (
    <g {...interact} className={interact ? 'cursor-pointer touch-none' : ''}>
      <g transform={`translate(0, ${1.5 * s})`}>
        <path d={base} transform={`rotate(${angle})`} className="fill-stone-300 dark:fill-black/50" strokeLinejoin="round" />
      </g>
      <g transform={active ? `translate(0, ${1.5 * s})` : ''} style={{ transition: 'transform 75ms' }}>
        <path d={base} transform={`rotate(${angle})`} className={`${active ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]'} stroke-stone-300 dark:stroke-stone-700`} strokeWidth={1 * s} strokeLinejoin="round" />
        <path d={`M -1.5 ${-size + 2.5*s} L 1.5 ${-size + 2.5*s} L 0 ${-size + 1*s} Z`} transform={`rotate(${angle})`} className={`${active ? 'fill-blue-200' : 'fill-stone-300 dark:fill-stone-400 dark:fill-[#444]'} transition-colors`} />
      </g>
    </g>
  )
}

function PSDPad({ cx, cy, size, pressed, s = 1, interacts }: { cx: number; cy: number; size: number; pressed: boolean[]; s?: number; interacts?: any[] }) {
  const w = size * 0.55; 
  const gap = size * 0.18;
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <PSDPadBtn size={size} gap={gap} w={w} angle={0} active={pressed[0]} s={s} interact={interacts?.[0]} />   {/* Up */}
      <PSDPadBtn size={size} gap={gap} w={w} angle={180} active={pressed[1]} s={s} interact={interacts?.[1]} /> {/* Down */}
      <PSDPadBtn size={size} gap={gap} w={w} angle={270} active={pressed[2]} s={s} interact={interacts?.[2]} /> {/* Left */}
      <PSDPadBtn size={size} gap={gap} w={w} angle={90} active={pressed[3]} s={s} interact={interacts?.[3]} />  {/* Right */}
    </g>
  );
}

function FaceBtn({ cx, cy, r = 13, active, color, icon, s = 1, interact }: { cx: number; cy: number; r?: number; active: boolean; color: { bg: string; text: string }; icon: React.ReactNode; s?: number; interact?: any }) {
  const scaledR = r * s;
  return (
    <g transform={`translate(${cx}, ${cy})`} {...interact} className={interact ? 'cursor-pointer touch-none' : ''}>
      <circle cx={0} cy={1.5 * s} r={scaledR + 0.5 * s} className="fill-stone-300 dark:fill-black/60" />
      <circle cx={0} cy={active ? 1.5 * s : 0} r={scaledR} 
        className={`${active ? color.bg : 'fill-stone-100 dark:fill-[#222]'} stroke-stone-300 dark:stroke-stone-700 transition-all duration-75`} strokeWidth={1 * s} />
      <g transform={`translate(0, ${active ? 1.5 * s : 0}) scale(${s})`} className={`${active ? 'text-white' : color.text} transition-colors duration-75 pointer-events-none`}>
        {icon}
      </g>
    </g>
  );
}

function PillBtn({ cx, cy, w, h, angle = 0, active, s = 1, interact, icon }: { cx: number; cy: number; w: number; h: number; angle?: number; active: boolean; s?: number; interact?: any; icon?: React.ReactNode }) {
  const width = w * s;
  const height = h * s;
  const rx = width / 2;
  return (
    <g transform={`translate(${cx}, ${cy}) rotate(${angle})`} {...interact} className={interact ? 'cursor-pointer touch-none' : ''}>
      <rect x={-width/2} y={-height/2 + 1.5 * s} width={width} height={height} rx={rx} className="fill-stone-300 dark:fill-black/60" />
      <rect x={-width/2} y={active ? -height/2 + 1.5 * s : -height/2} width={width} height={height} rx={rx}
        className={`${active ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]'} stroke-stone-300 dark:stroke-stone-700 transition-all duration-75`} strokeWidth={1 * s} />
      {icon && (
        <g transform={`translate(0, ${active ? 1.5 * s : 0}) scale(${s})`} className={`${active ? 'text-white' : 'text-stone-600 dark:text-stone-400'} transition-colors duration-75 pointer-events-none`}>
          {icon}
        </g>
      )}
    </g>
  );
}

function Bumper({ x, y, width, height, active, label, s = 1, interact }: { x: number, y: number, width: number, height: number, active: boolean, label?: string, s?: number, interact?: any }) {
  return (
    <g {...interact} className={interact ? 'cursor-pointer touch-none' : ''}>
      <rect x={x} y={y + 1.5 * s} width={width} height={height} rx={4 * s} className="fill-stone-300 dark:fill-black/50" />
      <rect x={x} y={active ? y + 1.5 * s : y} width={width} height={height} rx={4 * s} 
        className={`${active ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#222]'} stroke-stone-300 dark:stroke-stone-700 transition-all duration-75`} strokeWidth={1 * s} />
      {label && (
        <text x={x + width/2} y={active ? y + height/2 + 3 * s + 1.5 * s : y + height/2 + 3 * s} textAnchor="middle" 
          className={`${active ? 'fill-white' : 'fill-stone-500 dark:fill-stone-400'} font-black font-sans pointer-events-none transition-all duration-75`} style={{ fontSize: `${11 * s}px` }}>
          {label}
        </text>
      )}
    </g>
  )
}

function VerticalTrigger({ x, y, w, h, val, label, s = 1, interact }: { x: number; y: number; w: number; h: number; val: number; label?: string; s?: number; interact?: any }) {
  const r = w / 2;
  const clipId = `vclip-${Math.round(x)}-${Math.round(y)}`;
  return (
    <g {...interact} className={interact ? 'cursor-pointer touch-none' : ''}>
      <defs>
        <clipPath id={clipId}>
          <rect x={x} y={y} width={w} height={h} rx={r} />
        </clipPath>
      </defs>
      <rect x={x} y={y} width={w} height={h} rx={r} className="fill-stone-100 dark:fill-[#121212] stroke-stone-300 dark:stroke-[#3c3c3c]" strokeWidth={1 * s} />
      <rect x={x} y={y + h * (1 - val)} width={w} height={h * val} className="fill-blue-500" clipPath={`url(#${clipId})`} />
      {label && <text x={x + w / 2} y={y + h + 8 * s} textAnchor="middle" className="text-[6px] fill-stone-500 font-display font-bold" style={{ fontSize: 6 * s }}>{label}</text>}
      
      {/* Actuation number on press */}
      {val > 0.01 && (
        <text 
          x={x + w / 2} 
          y={y - 5 * s} 
          textAnchor="middle" 
          className="text-[9px] fill-blue-500 font-mono font-bold"
          style={{ fontSize: 9 * s }}
        >
          {val.toFixed(2)}
        </text>
      )}
    </g>
  );
}

function TriggerBtn({ x, y, w, h, val, label, s = 1 }: { x: number; y: number; w: number; h: number; val: number; label: string; s?: number }) {
  const r = 3 * s;
  const path = `M ${x} ${y+h} L ${x} ${y+r} Q ${x} ${y} ${x+r} ${y} L ${x+w-r} ${y} Q ${x+w} ${y} ${x+w} ${y+r} L ${x+w} ${y+h} Z`;
  const clipId = `clip-${Math.round(x)}-${Math.round(y)}`;
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <path d={path} />
        </clipPath>
      </defs>
      <path d={path} className="fill-stone-200 dark:fill-stone-100 dark:fill-[#1a1a1a] stroke-stone-300 dark:stroke-stone-700" strokeWidth={1 * s} />
      <rect x={x} y={y + h * (1 - val)} width={w} height={h} className="fill-blue-500 transition-all duration-75 pointer-events-none" clipPath={`url(#${clipId})`} />
      <text x={x + w/2} y={y + h/2 + 3 * s} textAnchor="middle" className="fill-stone-500 font-black font-sans pointer-events-none" style={{ fontSize: `${8 * s}px` }}>
        {label}
      </text>
    </g>
  );
}

// ==========================================
// ICONS
// ==========================================
const xboxY = <text x={0} y={5.5} textAnchor="middle" className="font-black font-sans" style={{ fontSize: '15px' }} fill="currentColor">Y</text>;
const xboxX = <text x={0} y={5.5} textAnchor="middle" className="font-black font-sans" style={{ fontSize: '15px' }} fill="currentColor">X</text>;
const xboxB = <text x={0} y={5.5} textAnchor="middle" className="font-black font-sans" style={{ fontSize: '15px' }} fill="currentColor">B</text>;
const xboxA = <text x={0} y={5.5} textAnchor="middle" className="font-black font-sans" style={{ fontSize: '15px' }} fill="currentColor">A</text>;

const psTriangle = <path d="M 0 -4.5 L 4.5 3.5 L -4.5 3.5 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />;
const psSquare = <rect x="-3.5" y="-3.5" width="7" height="7" fill="none" stroke="currentColor" strokeWidth="2.5" rx="1.5" strokeLinejoin="round" />;
const psCircle = <circle cx="0" cy="0" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.5" />;
const psCross = <path d="M -3.5 -3.5 L 3.5 3.5 M -3.5 3.5 L 3.5 -3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />;


/* ======================================================================
   XBOX SERIES X CONTROLLER
   ====================================================================== */
function XboxSVG({ t, v, ax0, ax1, ax2, ax3, bf, bEvent }: any) {
  const lx = ax0 * 12, ly = ax1 * 12, rx = ax2 * 12, ry = ax3 * 12;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="4 25 433 355" className="w-full h-full max-h-[550px]" preserveAspectRatio="xMidYMid meet">
        {/* Triggers (Drawn BEHIND the shell) */}
        <VerticalTrigger x={116} y={45} w={28} h={45} val={v(6)} interact={bEvent(6)} label="LT" />
        <VerticalTrigger x={297} y={45} w={28} h={45} val={v(7)} interact={bEvent(7)} label="RT" />

        {/* Body left half */}
        <path d="M220.5 294.5C220.5 294.5 195 294.5 150 294.5C105 294.5 81.5 378.5 49.5 378.5C17.5 378.5 4 363.9 4 317.5C4 271.1 43.5 165.5 55 137.5C66.5 109.5 95.5 92 128 92C154 92 200.5 92 220.5 92"
          className="fill-stone-100 dark:fill-[#121212] stroke-stone-300 dark:stroke-stone-300 dark:stroke-[#3c3c3c] stroke-[3]" />
        {/* Body right half */}
        <path d="M220 294.5C220 294.5 245.5 294.5 290.5 294.5C335.5 294.5 359 378.5 391 378.5C423 378.5 436.5 363.9 436.5 317.5C436.5 271.1 397 165.5 385.5 137.5C374 109.5 345 92 312.5 92C286.5 92 240 92 220 92"
          className="fill-stone-100 dark:fill-[#121212] stroke-stone-300 dark:stroke-stone-300 dark:stroke-[#3c3c3c] stroke-[3]" />

        {/* Bumpers (Drawn ON TOP of shell) */}
        <FlatBumper x={105} y={82} w={50} h={14} active={t[4]} interact={bEvent(4)} label="LB" />
        <FlatBumper x={286} y={82} w={50} h={14} active={t[5]} interact={bEvent(5)} label="RB" />

        {/* Sticks */}
        <StickWell cx={113} cy={160} r={37.5} />
        <StickCap cx={113} cy={160} r={28} pressed={t[10]} interact={bEvent(10)} tx={lx} ty={ly} onAxisInteract={(x, y) => { onAxisInteract?.(0, x); onAxisInteract?.(1, y); }} />
        <StickWell cx={278} cy={238} r={37.5} />
        <StickCap cx={278} cy={238} r={28} pressed={t[11]} interact={bEvent(11)} tx={rx} ty={ry} onAxisInteract={(x, y) => { onAxisInteract?.(2, x); onAxisInteract?.(3, y); }} />

        {/* D-Pad */}
        <circle cx="166" cy="238" r="37.5" className="fill-stone-50 dark:fill-[#0a0a0a] stroke-stone-200 dark:stroke-stone-700/50 stroke-[1.5]" />
        <DPad cx={166} cy={238} size={27} pressed={[t[12], t[13], t[14], t[15]]} interacts={[bEvent(12), bEvent(13), bEvent(14), bEvent(15)]} />

        {/* Face buttons - authentic spacing */}
        <circle cx="329" cy="160" r="37.5" className="fill-stone-50 dark:fill-[#0a0a0a] stroke-stone-200 dark:stroke-stone-700/50 stroke-[1.5]" />
        <FaceBtn cx={329} cy={139} r={11.5} active={t[3]} interact={bEvent(3)} color={{ bg: 'fill-yellow-500', text: 'text-yellow-600 dark:text-yellow-500' }} icon={xboxY} />
        <FaceBtn cx={308} cy={160} r={11.5} active={t[2]} interact={bEvent(2)} color={{ bg: 'fill-blue-500', text: 'text-blue-600 dark:text-blue-500' }} icon={xboxX} />
        <FaceBtn cx={350} cy={160} r={11.5} active={t[1]} interact={bEvent(1)} color={{ bg: 'fill-red-500', text: 'text-red-600 dark:text-red-500' }} icon={xboxB} />
        <FaceBtn cx={329} cy={181} r={11.5} active={t[0]} interact={bEvent(0)} color={{ bg: 'fill-green-600', text: 'text-green-600 dark:text-green-500' }} icon={xboxA} />

        {/* Center Buttons */}
        <FaceBtn cx={190} cy={162} r={8} active={t[8]} interact={bEvent(8)} color={{ bg: 'fill-blue-500', text: 'text-stone-600 dark:text-stone-400' }} icon={<rect x="-3" y="-3" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />} />
        <FaceBtn cx={251} cy={162} r={8} active={t[9]} interact={bEvent(9)} color={{ bg: 'fill-blue-500', text: 'text-stone-600 dark:text-stone-400' }} icon={<path d="M-3 -2.5 H3 M-3 0 H3 M-3 2.5 H3" stroke="currentColor" strokeWidth="1.5" />} />
        
        {/* Share Button (17) */}
        <Bumper x={210.5} y={185} width={20} height={10} active={t[17]} interact={bEvent(17)} />

        {/* Xbox Home button */}
        <FaceBtn cx={220.5} cy={125} r={15} active={t[16]} interact={bEvent(16)} color={{ bg: 'fill-blue-500', text: 'text-stone-400' }} icon={<path d="M-4 -5 L 5 5 M 5 -5 L -4 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />} />
      </svg>
    </div>
  );
}

/* ======================================================================
   PS5 DUALSENSE CONTROLLER (210x170 High-Detail Coordinate Space)
   ====================================================================== */
function PS5SVG({ t, v, ax0, ax1, ax2, ax3, bf, bEvent }: any) {
  const s = 0.48; 
  const lx = ax0 * 5.76, ly = ax1 * 5.76, rx = ax2 * 5.76, ry = ax3 * 5.76;

  return (
    <div className="w-full h-full flex items-center justify-center pt-8">
      <svg viewBox="18 -24 174 164" className="w-full h-full max-h-[550px]" preserveAspectRatio="xMidYMid meet">
        
        {/* 1. L2 & R2 Triggers (Drawn BEHIND the shell) */}
        <VerticalTrigger x={38.2} y={-12} w={18} h={30} val={v(6)} interact={bEvent(6)} label="L2" s={s} />
        <VerticalTrigger x={161.8} y={-12} w={18} h={30} val={v(7)} interact={bEvent(7)} label="R2" s={s} />

        {/* 2. Authentic Highly Detailed PS5 Shell */}
        <g>
          <path d={PS5_SHELL_PATHS.p0} className="fill-stone-100 dark:fill-[#121212] stroke-stone-300 dark:stroke-stone-300 dark:stroke-[#3c3c3c] stroke-[1]" />
          <path d={PS5_SHELL_PATHS.p1} className="fill-stone-300 dark:fill-[#0d0d0d] stroke-stone-400 dark:stroke-[#262626] stroke-[0.5]" />
          <path d={PS5_SHELL_PATHS.p2} className="fill-stone-400 dark:fill-black stroke-none" />
        </g>

        {/* 3. L1 & R1 Bumpers (Thin pill tabs that blend with the shell) */}
        {[
          { idx: 4, x: 33, label: 'L1' },
          { idx: 5, x: 157, label: 'R1' },
        ].map(({ idx, x, label }) => (
          <g key={idx} {...bEvent(idx)} className={bEvent(idx) ? 'cursor-pointer touch-none' : ''}>
            <rect x={x} y={13.5} width={28} height={5.5} rx={2.75} className="fill-stone-300 dark:fill-black/40" />
            <rect x={x} y={t[idx] ? 13 : 12} width={28} height={5.5} rx={2.75}
                  className={`${t[idx] ? 'fill-blue-500' : 'fill-stone-100 dark:fill-[#121212]'} stroke-stone-300 dark:stroke-[#3c3c3c] stroke-[0.4] transition-all duration-75`} />
            <text x={x + 14} y={t[idx] ? 16.5 : 15.5} textAnchor="middle" alignmentBaseline="middle"
                  className={`${t[idx] ? 'fill-white' : 'fill-stone-500 dark:fill-stone-500'} pointer-events-none`}
                  style={{ fontSize: '4px', fontFamily: 'system-ui', fontWeight: 700 }}>{label}</text>
          </g>
        ))}

        {/* Touchpad - click handled by mute bar below */}

        {/* Create (8) & Options (9) */}
        <PillBtn cx={73} cy={24} w={6.5} h={15} angle={-14} active={t[8]} interact={bEvent(8)} icon={<path d="M-1.5 -2.5 V2.5 M0 -2.5 V2.5 M1.5 -2.5 V2.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />} s={s} />
        <PillBtn cx={145} cy={24} w={6.5} h={15} angle={14} active={t[9]} interact={bEvent(9)} icon={<path d="M-2 -2 H2 M-2 0 H2 M-2 2 H2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />} s={s} />

        {/* PS5 Speaker/Mic Holes (9 Dots) */}
        <g className="fill-stone-400 dark:fill-black/80 stroke-stone-500 dark:stroke-white/10" strokeWidth={0.5 * s}>
          {[-2, -1, 0, 1, 2].map(i => <circle key={`t${i}`} cx={109 + i * 4.5} cy={61} r={1.2} />)}
          {[-1.5, -0.5, 0.5, 1.5].map(i => <circle key={`b${i}`} cx={109 + i * 4.5} cy={65} r={1.2} />)}
        </g>

        {/* PS button (16) */}
        <FaceBtn cx={109} cy={77} r={5} active={t[16]} interact={bEvent(16)} color={{ bg: 'fill-blue-500', text: 'text-stone-400 dark:text-stone-300' }} icon={<path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" fill="currentColor" transform="translate(-5.2, -4.6) scale(0.65)" />} s={s} />

        {/* Mute bar */}
        <Bumper x={105.5} y={91} width={7} height={2} active={t[17]} interact={bEvent(17)} s={s} />

        {/* Split D-Pad */}
        <PSDPad cx={47.2} cy={47.2} size={11.5} pressed={[t[12], t[13], t[14], t[15]]} s={s} interacts={[bEvent(12), bEvent(13), bEvent(14), bEvent(15)]} />

        {/* Face buttons */}
        <FaceBtn cx={170.8} cy={32.9} r={13.5} active={t[3]} interact={bEvent(3)} color={{ bg: 'fill-emerald-500', text: 'text-emerald-600 dark:text-emerald-500' }} icon={psTriangle} s={s} />
        <FaceBtn cx={156.5} cy={47.2} r={13.5} active={t[2]} interact={bEvent(2)} color={{ bg: 'fill-pink-500', text: 'text-pink-600 dark:text-pink-500' }} icon={psSquare} s={s} />
        <FaceBtn cx={185.1} cy={47.2} r={13.5} active={t[1]} interact={bEvent(1)} color={{ bg: 'fill-red-500', text: 'text-red-600 dark:text-red-500' }} icon={psCircle} s={s} />
        <FaceBtn cx={170.8} cy={61.5} r={13.5} active={t[0]} interact={bEvent(0)} color={{ bg: 'fill-blue-500', text: 'text-blue-600 dark:text-blue-500' }} icon={psCross} s={s} />

        {/* Left & Right sticks */}
        <StickWell cx={77.5} cy={74.2} r={16.5} s={s} />
        <StickCap cx={77.5} cy={74.2} r={12.5} pressed={t[10]} interact={bEvent(10)} tx={lx} ty={ly} s={s} onAxisInteract={(x, y) => { onAxisInteract?.(0, x); onAxisInteract?.(1, y); }} />
        <StickWell cx={140.4} cy={74.2} r={16.5} s={s} />
        <StickCap cx={140.4} cy={74.2} r={12.5} pressed={t[11]} interact={bEvent(11)} tx={rx} ty={ry} s={s} onAxisInteract={(x, y) => { onAxisInteract?.(2, x); onAxisInteract?.(3, y); }} />
      </svg>
    </div>
  );
}

/* ======================================================================
   PS4 DUALSHOCK 4 CONTROLLER
   ====================================================================== */
function PS4SVG({ t, v, ax0, ax1, ax2, ax3, bf, bEvent }: any) {
  const s = 0.48; 
  const lx = ax0 * 5.76, ly = ax1 * 5.76, rx = ax2 * 5.76, ry = ax3 * 5.76;

  return (
    <div className="w-full h-full flex items-center justify-center pt-8">
      <svg viewBox="17 -12 174 204" className="w-full h-full max-h-[550px]" preserveAspectRatio="xMidYMid meet">
        
        {/* 1. L2 & R2 Triggers */}
        <VerticalTrigger x={38.2} y={-12} w={18} h={30} val={v(6)} interact={bEvent(6)} label="L2" s={s} />
        <VerticalTrigger x={161.8} y={-12} w={18} h={30} val={v(7)} interact={bEvent(7)} label="R2" s={s} />

        {/* 2. Authentic Highly Detailed Shell */}
        <g>
          <path d={PS5_SHELL_PATHS.p0} className="fill-stone-200 dark:fill-stone-100 dark:fill-[#1a1a1a] stroke-stone-300 dark:stroke-stone-700 stroke-[0.25]" />
          <path d={PS5_SHELL_PATHS.p1} className="fill-stone-300 dark:fill-black stroke-stone-400 dark:stroke-stone-800 stroke-[0.25]" />
        </g>

        {/* 3. L1 & R1 Bumpers */}
        <FlatBumper x={31.2} y={11.5} w={32} h={8} active={t[4]} interact={bEvent(4)} label="L1" s={s} />
        <FlatBumper x={154.8} y={11.5} w={32} h={8} active={t[5]} interact={bEvent(5)} label="R1" s={s} />

        {/* PS4 Light bar */}
        <rect x="85" y="10" width="40" height="2.5" rx="1" className="fill-blue-500 opacity-80" />

        {/* Touchpad */}
        <Bumper x={85} y={26} width={48} height={18} active={t[17]} interact={bEvent(17)} s={s} />

        {/* Share (8) & Options (9) */}
        <FaceBtn cx={64} cy={26} r={7} active={t[8]} interact={bEvent(8)} color={{ bg: 'fill-blue-500', text: 'text-stone-600 dark:text-stone-400' }} icon={<circle cx={0} cy={0} r={2} fill="currentColor" />} s={s * 0.5} />
        <FaceBtn cx={154} cy={26} r={7} active={t[9]} interact={bEvent(9)} color={{ bg: 'fill-blue-500', text: 'text-stone-600 dark:text-stone-400' }} icon={<path d="M-3 -2 H3 M-3 2 H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />} s={s * 0.5} />
        
        {/* PS button (16) */}
        <FaceBtn cx={109} cy={59} r={5} active={t[16]} interact={bEvent(16)} color={{ bg: 'fill-blue-500', text: 'text-stone-400' }} icon={<circle cx={0} cy={0} r={2} fill="currentColor" />} s={s} />

        {/* Split D-Pad */}
        <PSDPad cx={47.2} cy={47.2} size={11.5} pressed={[t[12], t[13], t[14], t[15]]} s={s} interacts={[bEvent(12), bEvent(13), bEvent(14), bEvent(15)]} />

        {/* Face buttons */}
        <FaceBtn cx={170.8} cy={32.9} r={13.5} active={t[3]} interact={bEvent(3)} color={{ bg: 'fill-emerald-500', text: 'text-emerald-600 dark:text-emerald-500' }} icon={psTriangle} s={s} />
        <FaceBtn cx={156.5} cy={47.2} r={13.5} active={t[2]} interact={bEvent(2)} color={{ bg: 'fill-pink-500', text: 'text-pink-600 dark:text-pink-500' }} icon={psSquare} s={s} />
        <FaceBtn cx={185.1} cy={47.2} r={13.5} active={t[1]} interact={bEvent(1)} color={{ bg: 'fill-red-500', text: 'text-red-600 dark:text-red-500' }} icon={psCircle} s={s} />
        <FaceBtn cx={170.8} cy={61.5} r={13.5} active={t[0]} interact={bEvent(0)} color={{ bg: 'fill-blue-500', text: 'text-blue-600 dark:text-blue-500' }} icon={psCross} s={s} />

        {/* Sticks */}
        <StickWell cx={77.5} cy={74.2} r={16.5} s={s} />
        <StickCap cx={77.5} cy={74.2} r={12.5} pressed={t[10]} interact={bEvent(10)} tx={lx} ty={ly} s={s} />
        <StickWell cx={140.4} cy={74.2} r={16.5} s={s} />
        <StickCap cx={140.4} cy={74.2} r={12.5} pressed={t[11]} interact={bEvent(11)} tx={rx} ty={ry} s={s} />
      </svg>
    </div>
  );
}
