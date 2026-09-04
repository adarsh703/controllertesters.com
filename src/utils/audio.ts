// Web Audio API Synthesizer for zero-dependency sound effects

export let isMuted = false;
export function setMuted(muted: boolean) {
  isMuted = muted;
  if (muted && audioCtx) {
    if (triggerLSynth.gain) triggerLSynth.gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.05);
    if (triggerRSynth.gain) triggerRSynth.gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.05);
  }
}

export const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;
if (typeof window !== 'undefined' && audioCtx) {
  (window as any).__audioCtx = audioCtx;
}

export async function unlockAudio() {
  if (audioCtx && audioCtx.state === 'suspended') {
    try {
      await audioCtx.resume();
    } catch (e) {}
  }
  return audioCtx?.state === 'running';
}

function playTone(freq: number, type: OscillatorType, duration: number, vol: number = 0.1) {
  if (!audioCtx || isMuted) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// Maps button index to a specific sound


function makeDistortionCurve(amount: number) {
  const k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = i * 2 / n_samples - 1;
    curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

class TriggerSynth {
  osc1: OscillatorNode | null = null;
  osc2: OscillatorNode | null = null;
  osc3: OscillatorNode | null = null; // Sub-bass body
  dist: WaveShaperNode | null = null;
  filter: BiquadFilterNode | null = null;
  gain: GainNode | null = null;
  
  start() {
    if (!audioCtx) return;
    if (this.osc1) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    // Core engine tone
    this.osc1 = audioCtx.createOscillator();
    this.osc1.type = 'sawtooth';
    
    // V10 screaming harmonic (Perfect 5th + octave)
    this.osc2 = audioCtx.createOscillator();
    this.osc2.type = 'sawtooth';
    
    // Sub engine block rumble
    this.osc3 = audioCtx.createOscillator();
    this.osc3.type = 'square';
    
    // Distortion for exhaust grit (removes the "toy synth" sound)
    this.dist = audioCtx.createWaveShaper();
    this.dist.curve = makeDistortionCurve(40);
    this.dist.oversample = '4x';
    
    // Bandpass filter to simulate the exhaust pipe resonance
    this.filter = audioCtx.createBiquadFilter();
    this.filter.type = 'bandpass';
    this.filter.Q.value = 1.2;
    
    this.gain = audioCtx.createGain();
    this.gain.gain.value = 0;
    
    this.osc1.connect(this.dist);
    this.osc2.connect(this.dist);
    this.osc3.connect(this.dist);
    
    this.dist.connect(this.filter);
    this.filter.connect(this.gain);
    this.gain.connect(audioCtx.destination);
    
    this.osc1.start();
    this.osc2.start();
    this.osc3.start();
  }
  
  update(val: number) {
    if (!this.osc1 || !this.osc2 || !this.osc3 || !this.filter || !this.gain || !audioCtx) return;
    
    // Real V10 RPMs map to roughly 40Hz (idle) to 300Hz (redline)
    const fundamental = 40 + (val * 260);
    
    this.osc1.frequency.setTargetAtTime(fundamental, audioCtx.currentTime, 0.05);
    // V10 scream harmonic (2.5x frequency)
    this.osc2.frequency.setTargetAtTime(fundamental * 2.5, audioCtx.currentTime, 0.05);
    // Engine block sub rumble (0.5x frequency)
    this.osc3.frequency.setTargetAtTime(fundamental * 0.5, audioCtx.currentTime, 0.05);
    
    // The exhaust pipe resonance opens up and gets higher as RPM increases
    this.filter.frequency.setTargetAtTime(fundamental * 4, audioCtx.currentTime, 0.05);
    
    // Smooth volume curve
    const targetVol = (val > 0.05 && !isMuted) ? val * 0.15 : 0;
    this.gain.gain.setTargetAtTime(targetVol, audioCtx.currentTime, 0.05);
  }
}

export const triggerLSynth = new TriggerSynth();
export const triggerRSynth = new TriggerSynth();

export function playButtonSound(index: number) {
  switch (index) {
    case 0: playTone(440, 'sine', 0.1, 0.2); break; // A (A4)
    case 1: playTone(493.88, 'sine', 0.1, 0.2); break; // B (B4)
    case 2: playTone(523.25, 'sine', 0.1, 0.2); break; // X (C5)
    case 3: playTone(587.33, 'sine', 0.1, 0.2); break; // Y (D5)
    case 4: 
    case 5: playTone(150, 'square', 0.05, 0.1); break; // Bumpers (Clicky)
    case 6:
    case 7: /* Handled by TriggerSynth */ break;
    case 12: playTone(600, 'triangle', 0.05, 0.1); break; // D-pad Up
    case 13: playTone(400, 'triangle', 0.05, 0.1); break; // D-pad Down
    case 14: playTone(500, 'triangle', 0.05, 0.1); break; // D-pad Left
    case 15: playTone(700, 'triangle', 0.05, 0.1); break; // D-pad Right
    default: playTone(300, 'square', 0.05, 0.05); break; // Generics
  }
}

export function playRedLight() {
  playTone(220, 'square', 0.3, 0.1); // Deep low beep
}

export function playLightsOut() {
  playTone(880, 'square', 0.6, 0.2); // High loud beep
}

export function playMatrixHit() {
  playTone(1200, 'sine', 0.1, 0.1); // Quick high ping
}

export function playMatrixMiss() {
  playTone(150, 'sawtooth', 0.5, 0.2); // Buzz
}
