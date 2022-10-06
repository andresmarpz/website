import type { DefaultSeoProps } from 'next-seo';

export const seo: DefaultSeoProps = {
  title: 'Andrés Martínez',
  description:
    'Frontend Developer from Uruguay. Passionate about the web and expressing through code & design.',
  canonical: 'https://andrs.me/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Andrés Martínez — Frontend Developer',
    url: 'https://andrs.me/'
  },
  twitter: {
    handle: '@andresmarpz'
  }
};
