import "~/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import Footer from "~/components/footer";
import { cn } from "~/lib/utils";

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
          "flex min-h-screen flex-col bg-neutral-950",
          "font-mono text-neutral-100 text-sm",
          "[text-rendering:geometricPrecision]",
        )}
      >
        <main className="flex-1 pt-24 container px-4">{children}</main>
        <Footer />

        <SpeedInsights />
      </body>
    </html>
  );
}
