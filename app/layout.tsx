import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          inter.variable,
          'flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100'
        )}>
        <main className="container h-full flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
