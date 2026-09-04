import { useState, useEffect, useRef, useCallback } from 'react';

export interface GamepadState {
  mapping: string;
  connected: boolean;
  id: string;
  index: number;
  buttons: { pressed: boolean; touched: boolean; value: number }[];
  axes: number[];
  timestamp: number;
}

export function useGamepad() {
  const [gamepads, setGamepads] = useState<{ [index: number]: GamepadState }>({});
  const [activeGamepadIndex, setActiveGamepadIndex] = useState<number | null>(null);
  const requestRef = useRef<number>();

  const pollGamepads = useCallback(() => {
    const connectedGamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    let updated = false;
    const newGamepads: { [index: number]: GamepadState } = {};

    for (let i = 0; i < connectedGamepads.length; i++) {
      const gp = connectedGamepads[i];
      if (gp) {
        newGamepads[gp.index] = {
          id: gp.id,
          mapping: gp.mapping,
          connected: gp.connected,
          index: gp.index,
          buttons: gp.buttons.map(b => ({ pressed: b.pressed, touched: b.touched, value: b.value })),
          axes: [...gp.axes],
          timestamp: gp.timestamp,
        };
        updated = true;
      }
    }

    if (updated) {
      setGamepads(newGamepads);
      setActiveGamepadIndex((prev) => {
        if (prev === null && Object.keys(newGamepads).length > 0) {
          return Number(Object.keys(newGamepads)[0]);
        }
        return prev;
      });
    }
    
    requestRef.current = requestAnimationFrame(pollGamepads);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(pollGamepads);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [pollGamepads]);

  const vibrate = useCallback(async (duration = 200, strong = 1.0, weak = 1.0) => {
    // If no controller is connected, fallback to the phone's native vibration motor (for mobile users)
    if (activeGamepadIndex === null) {
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
          navigator.vibrate(duration);
          // Wait for the vibration to finish so multiple calls don't overlap and cancel each other
          await new Promise(r => setTimeout(r, duration));
          return { success: true, reason: null };
        } catch (e: any) {
          return { success: false, reason: e.message };
        }
      }
      return { success: false, reason: "NO_CONTROLLER" };
    }
    
    const rawPads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = rawPads[activeGamepadIndex] as any;
    if (!gp) {
      // Fallback to native if controller disconnected
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(duration);
        await new Promise(r => setTimeout(r, duration));
        return { success: true, reason: null };
      }
      return { success: false, reason: "DISCONNECTED" };
    }

    let fired = false;
    let errMessage = "Not supported by browser/kernel.";

    // 1. Chrome standard
    if (gp.vibrationActuator?.playEffect) {
      try {
        await gp.vibrationActuator.playEffect("dual-rumble", { startDelay: 0, duration, weakMagnitude: weak, strongMagnitude: strong });
        fired = true;
      } catch (e: any) { errMessage = e.message; }
    }
    
    // 2. Firefox standard
    if (!fired && gp.hapticActuators && gp.hapticActuators.length > 0) {
      for (const actuator of gp.hapticActuators) {
        try {
          if (actuator.pulse) {
            await actuator.pulse(strong, duration);
            fired = true;
          }
        } catch (e: any) { errMessage = e.message; }
      }
    }

    // 3. Very old experimental paths
    if (!fired && gp.vibrate) {
      try {
        gp.vibrate(duration);
        fired = true;
      } catch(e) {}
    }

    return { success: fired, reason: fired ? null : errMessage };
  }, [activeGamepadIndex]);

  return {
    gamepads,
    activeGamepadIndex,
    setActiveGamepadIndex,
    activeGamepad: activeGamepadIndex !== null ? gamepads[activeGamepadIndex] : null,
    vibrate
  };
}
