import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

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
          'm-auto mt-32 max-w-[675px] bg-neutral-900 px-4 font-sans text-gray-100 antialiased',
          sansFont.variable
        )}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
