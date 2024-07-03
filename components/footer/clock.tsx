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
      className="relative block size-10 rounded-full border origin-center"
      style={style}>
      {/* <div className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 rounded-full h-[3px] w-[3px] z-50" /> */}
      {/* hour gauge */}
      <div
        className="absolute left-1/2 top-1/2 h-[35%] w-px bg-red-500 rounded-full"
        style={{
          transformOrigin: 'top',
          transform:
            'rotate(calc(var(--time-hours) * 30deg)) translate(-50%, -100%)'
        }}
      />
      {/* minutes gauge */}
      <div
        className="absolute left-1/2 top-1/2 h-[40%] w-px bg-yellow-500 rounded-full"
        style={{
          transformOrigin: 'top',
          transform:
            'rotate(calc(var(--time-minutes) * 6deg)) translate(-50%, -100%)'
        }}
      />
      {/* seconds gauge */}
      <div
        className="absolute left-1/2 top-1/2 h-[45%] w-px bg-blue-500 rounded-full"
        style={{
          transformOrigin: 'top',
          transform:
            'rotate(calc(var(--time-seconds) * 6deg)) translate(-50%, -100%)'
        }}
      />
    </time>
  );
}
