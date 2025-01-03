import { cn } from '@/lib/utils';
import { GeistMono } from 'geist/font/mono';
import css from './footer.module.css';

export default function Footer() {
  return (
    <footer className={cn(css.footer)}>
      <span className={cn(GeistMono.className, css['footer-text'])}>
        andresmarpz
      </span>
      <div className={cn(css['footer-grid'])} />
      <div className={cn(css['footer-gradient'])} />
    </footer>
  );
}
