'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { GeistMono } from 'geist/font/mono';

const Clock = dynamic(() => import('@/components/footer/clock'));

export default function Footer() {
  return (
    <footer className="flex justify-center border-t-neutral-900 text-neutral-500 relative overflow-clip min-h-[var(--footer-text-size)]">
      <span
        className={cn(
          GeistMono.className,
          '[text-rendering:geometricPrecision] font-[900] [font-size:var(--footer-text-size)] tracking-normal absolute bottom-[calc(-1*var(--footer-text-size)/1.5)]',
          'opacity-30'
        )}>
        andresmarpz
      </span>

      <div
        style={{
          backgroundColor: 'transparent',
          backgroundImage: 'radial-gradient(transparent 1px, rgb(0,0,0) 1px)',
          backgroundSize: '4px 4px',
          backdropFilter: 'blur(3px)',
          mask: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 0.6) 100%)',
          opacity: 1,
          position: 'absolute',
          inset: 0,
          overflow: 'visible',
          zIndex: 1,
          flex: 'none'
        }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <style jsx>{`
        footer {
          --footer-text-size: clamp(3rem, 14rem, 14vw);
        }
      `}</style>
    </footer>
  );
}
