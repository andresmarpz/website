'use client';

import { useIsHydrated } from '@/hooks/use-is-hydrated';
import { CSSProperties, useEffect, useState } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

function getCurrentTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Montevideo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  } as const;

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const date = formatter.format(now);

  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    date
  };
}

export default function Clock() {
  const [time, setTime] = useState(() => getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);

    return () => clearInterval(interval);
  }, []);

  const isHydrated = useIsHydrated();
  if (!isHydrated) return null;

  const style = {
    '--time-hours': time.hour,
    '--time-minutes': time.minute,
    '--time-seconds': time.second
  } as CSSProperties;

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="animate-slideFadeUp cursor-default">
          <time
            className="relative block size-8 rotate-180 rounded-full border border-amber-50 antialiased"
            style={style}>
            {/* center dot */}
            <div className="absolute left-1/2 top-1/2 size-px -translate-x-1/2 -translate-y-1/2 bg-amber-50" />
            {/* hour gauge */}
            <div
              className="absolute left-1/2 top-1/2 h-1/4 w-px rounded-full bg-amber-50"
              style={{
                transformOrigin: '0 0',
                transform:
                  'rotate(calc((var(--time-hours) * 30deg) + ((var(--time-minutes) / 2) * 1deg))) translate(-50%, 0%)'
              }}
            />
            {/* minutes gauge */}
            <div
              className="absolute left-1/2 top-1/2 h-2/5 w-px rounded-full bg-amber-50"
              style={{
                transformOrigin: '0 0',
                transform:
                  'rotate(calc(var(--time-minutes) * 6deg)) translate(-50%, 0%)'
              }}
            />
            {/* seconds gauge */}
            <div
              className="absolute left-1/2 top-1/2 h-2/5 w-[0.5px] rounded-full bg-amber-50"
              style={{
                transformOrigin: '0 0',
                transform:
                  'rotate(calc(var(--time-seconds) * 6deg)) translate(-50%, 0%)'
              }}
            />
          </time>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className="rounded-md border border-zinc-700/50 bg-zinc-900 px-2 py-1 text-xs text-zinc-400"
          sideOffset={8}>
          {time.date} GMT-3
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
