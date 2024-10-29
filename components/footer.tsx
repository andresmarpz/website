import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('@/components/footer/clock'));

export default function Footer() {
  return (
    <footer className="flex justify-between">
      <span></span>
      <Clock />
    </footer>
  );
}
