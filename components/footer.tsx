import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { GeistMono } from 'geist/font/mono';

const Clock = dynamic(() => import('@/components/footer/clock'));

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-t-neutral-800 text-neutral-500">
      <span
        className={cn(
          'container py-2',
          GeistMono.className,
          'text-[13px] [text-rendering:geometricPrecision]'
        )}>
        lets test this
      </span>
    </footer>
  );
}
