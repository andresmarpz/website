'use client';

import { CSSProperties, useEffect, useState } from 'react';

function getCurrentTime() {
  const now = new Date();

  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds()
  };
}

export default function Clock() {
  const [time, setTime] = useState(() => getCurrentTime());

  const style = {
    '--time-hours': time.hour,
    '--time-minutes': time.minute,
    '--time-seconds': time.second
  } as CSSProperties;

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
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
            'rotate(calc(var(--time-hours) * 30deg)) translate(-50%, 0%)'
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
  );
}
