import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'm-auto mt-20 max-w-[675px] px-4 font-sans text-gray-100 antialiased',
          sansFont.variable
        )}>
        {children}
      </body>
    </html>
  );
}
