'use client';

import Progress from '@/app/(navigable)/work/knob/progress';
import { useEffect, useRef, useState } from 'react';

const MAX_VALUE = 600;

export default function Knob() {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const [currentValue, setCurrentValue] = useState(100);
  const [isDragging, setIsDragging] = useState(false);

  const currentPercentage = (currentValue * 100) / MAX_VALUE;

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

  // Reduction percentage
  const REDUCTION = 10;
  // Reduction degrees
  const REDUCTION_DEGREES = (360 / 100) * REDUCTION;

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
    <>
      {/* Knob */}
      <div
        className="size-16 border rounded-full shadow-sm shadow-neutral-600/50 bg-neutral-900 border-neutral-800 relative"
        ref={elementRef}
        onMouseDown={(event) => {
          setIsDragging(true);
        }}>
        {/* Thumb */}
        <div
          className="rounded-full size-2 bg-neutral-600 shadow-sm border border-neutral-500/50 absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left,
            top
          }}
        />

        {/* Progress */}
        <Progress
          size={100}
          percentage={currentPercentage}
          reduction={REDUCTION}
          className="absolute top-[-24%] left-[-25%] size-[150%] pointer-events-none"
        />
      </div>

      <p className="text-center font-mono text-xl py-8">
        {currentValue} / {MAX_VALUE}
      </p>

      <label>
        Slider
        <input
          type="range"
          min={0}
          max={MAX_VALUE}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
      </label>

      <div>
        Debug:
        <p>Dragging: {String(isDragging)}</p>
      </div>
    </>
  );
}
