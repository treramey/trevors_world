"use client";

import { useEffect, useRef, useState } from "react";
import { useEvent } from "react-use";
import useSound, { type ReturnedValue } from "../hooks/useSound";

export function useClick(path: string): ReturnedValue | [() => void, null] {
  const [enabled, setEnabled] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  useEvent(
    "pointerdown",
    () => {
      if (!enabled && !prefersReducedMotion.current) {
        setEnabled(true);
      }
    },
    undefined,
    { passive: true },
  );

  const result = useSound(path, {
    volume: 0.2,
    soundEnabled: enabled && !prefersReducedMotion.current,
  });

  return result;
}

export function MouseClick() {
  const [mouseDownSound] = useClick("/sounds/mouse_down.mp3");
  const [mouseUpSound] = useClick("/sounds/mouse_up.mp3");

  useEvent(
    "pointerdown",
    (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        return;
      }
      mouseDownSound();
    },
    undefined,
    { passive: true },
  );

  useEvent(
    "pointerup",
    (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        return;
      }
      mouseUpSound();
    },
    undefined,
    { passive: true },
  );
  return null;
}
