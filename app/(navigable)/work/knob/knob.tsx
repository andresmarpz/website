'use client';

import Progress from '@/app/(navigable)/work/knob/progress';
import { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';

export default function Knob({
  min,
  max,
  reductionPercentage = 0
}: {
  min: number;
  max: number;
  reductionPercentage?: number;
}) {
  const [playTick] = useSound('/assets/sounds/tick.mp3', {
    interrupt: true,
    volume: 0.5
  });
  const elementRef = useRef<HTMLDivElement | null>(null);

  const [currentValue, setCurrentValue] = useState(min);
  const [isDragging, setIsDragging] = useState(false);

  const currentPercentage = (currentValue * 100) / max;

  useEffect(() => {
    if (!elementRef) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      console.log(event);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!elementRef) return;

    const handleMouseUp = (event: MouseEvent) => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Knob */}
      <div
        className="size-16 border rounded-full shadow-sm shadow-neutral-600/50 bg-neutral-900 border-neutral-800 relative"
        ref={elementRef}
        onMouseDown={(event) => {
          setIsDragging(true);
        }}>
        {/* Thumb */}
        <Thumb
          reduction={reductionPercentage}
          currentPercentage={currentPercentage}
        />

        {/* Progress */}
        <Progress
          size={100}
          percentage={currentPercentage}
          reduction={reductionPercentage}
          className="absolute top-[-24%] left-[-25%] size-[150%] pointer-events-none"
        />
      </div>

      <p className="text-center font-mono text-xl py-8">
        {currentValue} / {max}
      </p>

      <label>
        Slider
        <input
          type="range"
          min={min}
          max={max}
          value={currentValue}
          onChange={(e) => {
            setCurrentValue(e.target.value);
            playTick();
          }}
        />
      </label>

      <div>
        Debug:
        <p>Dragging: {String(isDragging)}</p>
      </div>
    </>
  );
}

function Thumb({
  reduction,
  currentPercentage
}: {
  reduction: number;
  currentPercentage: number;
}) {
  // Reduction degrees
  const REDUCTION_DEGREES = (360 / 100) * reduction;

  const ANGLE = 360 - REDUCTION_DEGREES;
  const CURRENT_ANGLE_RAW = currentPercentage * (ANGLE / 100);
  // We normalize it to -270°, since circles ALWAYS start at the right center because of sin() and cos()
  // we subtract 3/4 Pi
  const CURRENT_ANGLE =
    CURRENT_ANGLE_RAW - (360 - REDUCTION_DEGREES / 1.5) * 0.75;
  const CURRENT_ANGLE_RADIANS = (CURRENT_ANGLE * Math.PI) / 180;

  // Base is always 50% + whatever offset into the circumference (negative or positive)
  const left = `${50 + 37.5 * Math.cos(CURRENT_ANGLE_RADIANS)}%`;
  const top = `${50 + 37.5 * Math.sin(CURRENT_ANGLE_RADIANS)}%`;

  return (
    <div
      className="rounded-full size-2 bg-neutral-600 shadow-sm border border-neutral-500/50 absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left,
        top
      }}
    />
  );
}
