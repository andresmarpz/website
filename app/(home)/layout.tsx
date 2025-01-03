import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={cn(
        GeistMono.className,
        'text-[13px] [text-rendering:geometricPrecision] container'
      )}>
      {children}
    </main>
  );
}
