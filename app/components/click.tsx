"use client";

import { useEvent } from "react-use";
import useSound, { type ReturnedValue } from "../hooks/useSound";

export function useClick(path: string): ReturnedValue | [() => void, null] {
  const result = useSound(path, {
    volume: 0.2,
  });

  return result;
}

export function MouseClick() {
  const [mouseDownSound] = useClick("/sounds/mouse_down.mp3");
  const [mouseUpSound] = useClick("/sounds/mouse_up.mp3");

  useEvent("pointerdown", (e: PointerEvent) => {
    if (e.pointerType !== "mouse") {
      return;
    }
    mouseDownSound();
  });

  useEvent("pointerup", (e: PointerEvent) => {
    if (e.pointerType !== "mouse") {
      return;
    }
    mouseUpSound();
  });
  return null;
}
