import type { Howl } from "howler";
import React from "react";

type SpriteMap = {
  [key: string]: [number, number];
};

type HookOptions = {
  id?: string;
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
};

interface PlayOptions {
  id?: number;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}

type PlayFunction = (options?: PlayOptions) => void;

interface ExposedData {
  sound: Howl | null;
  stop: (id?: number) => void;
  pause: (id?: number) => void;
  duration: number | null;
}

export type ReturnedValue = [PlayFunction, ExposedData];

export default function useSound(
  src: string | string[],
  { volume = 1, playbackRate = 1, soundEnabled = true, interrupt = false, onload, ...delegated }: HookOptions = {},
) {
  const HowlConstructor = React.useRef<typeof Howl | null>(null);
  const isMounted = React.useRef(false);
  const soundRef = React.useRef<Howl | null>(null);

  const [duration, setDuration] = React.useState<number | null>(null);
  const [sound, setSound] = React.useState<Howl | null>(null);

  const handleLoad = React.useCallback(
    (howlInstance: Howl) => {
      if (typeof onload === "function") {
        onload();
      }

      if (isMounted.current) {
        setDuration(howlInstance.duration() * 1000);
      }

      setSound(howlInstance);
    },
    [onload],
  );

  React.useEffect(() => {
    if (!soundEnabled) {
      return;
    }
    let disposed = false;
    const load = async () => {
      const mod = await import("howler");
      if (disposed) {
        return;
      }
      HowlConstructor.current = mod.Howl ?? mod.default.Howl;
      isMounted.current = true;
      const howlInstance = new HowlConstructor.current({
        src: Array.isArray(src) ? src : [src],
        volume,
        rate: playbackRate,
        onload: () => handleLoad(howlInstance),
        ...delegated,
      });
      soundRef.current = howlInstance;
    };
    void load();
    return () => {
      disposed = true;
      isMounted.current = false;
    };
  }, [soundEnabled]);

  React.useEffect(() => {
    if (!soundEnabled) {
      return;
    }
    if (HowlConstructor.current && sound) {
      const howlInstance = new HowlConstructor.current({
        src: Array.isArray(src) ? src : [src],
        volume,
        onload: () => handleLoad(howlInstance),
        ...delegated,
      });
      soundRef.current = howlInstance;
    }
  }, [soundEnabled, JSON.stringify(src)]);

  React.useEffect(() => {
    if (sound) {
      sound.volume(volume);
      if (!delegated.sprite) {
        sound.rate(playbackRate);
      }
    }
  }, [sound, volume, playbackRate]);

  const play: PlayFunction = React.useCallback(
    (options: PlayOptions = {}) => {
      if (!sound || (!soundEnabled && !options.forceSoundEnabled)) {
        return;
      }

      if (interrupt) {
        sound.stop();
      }

      if (options.playbackRate) {
        sound.rate(options.playbackRate);
      }

      sound.play(options.id);
    },
    [sound, soundEnabled, interrupt],
  );

  const stop = React.useCallback(
    (id?: number) => {
      if (!sound) {
        return;
      }
      sound.stop(id);
    },
    [sound],
  );

  const pause = React.useCallback(
    (id?: number) => {
      if (!sound) {
        return;
      }
      sound.pause(id);
    },
    [sound],
  );

  const returnedValue: ReturnedValue = [
    play,
    {
      sound,
      stop,
      pause,
      duration,
    },
  ];

  return returnedValue;
}

export { useSound };
