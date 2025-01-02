'use client';

import useSWR from 'swr';

export default function ViewTracker({ slug }: { slug: string }) {
  useSWR(`/api/views/${slug}`, () =>
    fetch(`/api/views`, {
      method: 'POST',
      body: JSON.stringify({
        slug
      })
    })
  );

  return null;
}
