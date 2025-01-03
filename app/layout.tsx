import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import { GeistMono } from 'geist/font/mono';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          GeistMono.variable,
          'flex min-h-screen flex-col bg-neutral-950 font-mono text-neutral-100 text-sm'
        )}>
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
