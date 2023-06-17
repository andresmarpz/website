'use client';

import { useEffect } from 'react';

export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    fetch('/api/views', { method: 'POST', body: JSON.stringify({ slug }) });
  }, [slug]);

  return null;
}
