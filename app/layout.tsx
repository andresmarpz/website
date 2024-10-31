import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100'
        )}>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
