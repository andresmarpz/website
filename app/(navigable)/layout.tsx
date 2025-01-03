import BackNavigation from '@/components/ui/back-navigation';

export default function NavigableLayout({
  children,
  back
}: {
  children: React.ReactNode;
  back: React.ReactNode;
}) {
  return (
    <>
      {/* Back navigation */}
      <div className="container px-4">{back}</div>
      <main className="container px-4 py-8">{children}</main>
    </>
  );
}
