import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/header';
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
        className={cn('mt-10 px-4 font-sans antialiased', sansFont.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
