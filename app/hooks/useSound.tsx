import type { Howl } from "howler";
import React from "react";

type SpriteMap = {
  [key: string]: [number, number];
};

type HookOptions<T = any> = T & {
  id?: string;
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
};

interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}

type PlayFunction = (options?: PlayOptions) => void;

interface ExposedData {
  sound: Howl | null;
  stop: (id?: string) => void;
  pause: (id?: string) => void;
  duration: number | null;
}

export type ReturnedValue = [PlayFunction, ExposedData];

export function useOnMount(callback: React.EffectCallback) {
  React.useEffect(callback, []);
}

export default function useSound<T = any>(
  src: string | string[],
  {
    id,
    volume = 1,
    playbackRate = 1,
    soundEnabled = true,
    interrupt = false,
    onload,
    ...delegated
  }: HookOptions<T> = {} as HookOptions,
) {
  const HowlConstructor = React.useRef<typeof Howl | null>(null);
  const isMounted = React.useRef(false);

  const [duration, setDuration] = React.useState<number | null>(null);

  const [sound, setSound] = React.useState<Howl | null>(null);

  const handleLoad = function () {
    if (typeof onload === "function") {
      // @ts-ignore
      onload.call(this);
    }

    if (isMounted.current) {
      // @ts-ignore
      setDuration(this.duration() * 1000);
    }

    // @ts-ignore
    setSound(this);
  };

  // Defer loading Howler and constructing the sound until enabled
  React.useEffect(() => {
    if (!soundEnabled) {
      return;
    }
    let disposed = false;
    const load = async () => {
      const mod = await import("howler");
      if (disposed) return;
      HowlConstructor.current = mod.Howl ?? mod.default.Howl;
      isMounted.current = true;
      setSound(
        new HowlConstructor.current({
          src: Array.isArray(src) ? src : [src],
          volume,
          rate: playbackRate,
          onload: handleLoad,
          ...delegated,
        }),
      );
    };
    void load();
    return () => {
      disposed = true;
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled]);

  // When the `src` changes, we have to do a whole thing where we recreate
  // the Howl instance. This is because Howler doesn't expose a way to
  // tweak the sound
  React.useEffect(() => {
    if (!soundEnabled) {
      return;
    }
    if (HowlConstructor.current && sound) {
      setSound(
        new HowlConstructor.current({
          src: Array.isArray(src) ? src : [src],
          volume,
          onload: handleLoad,
          ...delegated,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled, JSON.stringify(src)]);

  // Whenever volume/playbackRate are changed, change those properties
  // on the sound instance.
  React.useEffect(() => {
    if (sound) {
      sound.volume(volume);

      // HACK: When a sprite is defined, `sound.rate()` throws an error, because Howler tries to reset the "_default" sprite, which doesn't exist. This is likely a bug within Howler, but I don’t have the bandwidth to investigate, so instead, we’re ignoring playbackRate changes when a sprite is defined.
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
    (id) => {
      if (!sound) {
        return;
      }
      sound.stop(id);
    },
    [sound],
  );

  const pause = React.useCallback(
    (id) => {
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
