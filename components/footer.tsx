import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('@/components/footer/clock'));

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-t-neutral-800 text-neutral-500">
      <span className="container py-2">lets test this</span>
    </footer>
  );
}
