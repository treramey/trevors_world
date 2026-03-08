"use client";

import { useEffect, useRef, useState } from "react";
import { useEvent } from "react-use";
import useSound, { type ReturnedValue } from "../hooks/useSound";

export function useClick(path: string): ReturnedValue | [() => void, null] {
	const [enabled, setEnabled] = useState(false);
	const [audioContextResumed, setAudioContextResumed] = useState(false);
	const prefersReducedMotion = useRef(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			prefersReducedMotion.current = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;
		}
	}, []);

	useEvent(
		"pointerdown",
		() => {
			if (!enabled && !prefersReducedMotion.current) {
				setEnabled(true);
			}

			if (!audioContextResumed && typeof window !== "undefined") {
				const AudioContext =
					window.AudioContext || (window as any).webkitAudioContext;
				if (AudioContext) {
					const ctx = new AudioContext();
					if (ctx.state === "suspended") {
						ctx.resume().then(() => {
							console.log("AudioContext resumed");
							setAudioContextResumed(true);
						});
					} else {
						setAudioContextResumed(true);
					}
				}
			}
		},
		undefined,
		{ passive: true },
	);

	const result = useSound(path, {
		volume: 1.0,
		soundEnabled: enabled && !prefersReducedMotion.current,
		html5: true,
		onload: () => console.log(`Sound loaded: ${path}`),
		onloaderror: (id, err) => console.error(`Sound load error [${path}]:`, err),
		onplayerror: (id, err) => console.error(`Sound play error [${path}]:`, err),
		onplay: () => console.log(`Sound playing: ${path}`),
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
