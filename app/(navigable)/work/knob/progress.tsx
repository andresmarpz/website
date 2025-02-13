'use client';
import { cn } from '@/lib/utils';
import { useId, useState } from 'react';

export default function Progress({
  size = 128,
  percentage = 50,
  reduction = 0,
  className
}: {
  size: number;
  percentage: number;
  reduction?: number;
  className?: string;
}) {
  reduction = reduction / 100;
  const progress = percentage,
    strokeWidth = 4,
    ballStrokeWidth = 16,
    background = 'rgb(25, 25, 25)',
    stroke = 'rgb(100, 100, 100)';

  const center = size / 2;
  const rotate = 90 + 180 * reduction;
  const r = center - strokeWidth / 2 - ballStrokeWidth / 2;
  const circumference = Math.PI * r * 2;
  const offset = (circumference * (100 - progress * (1 - reduction))) / 100;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={cn('block', className)}>
      <circle
        transform={`rotate(${rotate} ${center} ${center})`}
        id="path"
        cx={center}
        cy={center}
        r={r}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * reduction}
        fill="none"
        stroke={background}
        strokeLinecap="round"
      />
      <circle
        transform={`rotate(${rotate} ${center} ${center})`}
        id="path"
        cx={center}
        cy={center}
        r={r}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference}`}
        strokeDashoffset={offset}
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}
