import ViewCounter from '@/app/blog/view-counter';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';

interface Props {
  title: string;
  slug: string;
  date: string;
}

export default function BlogItem({ title, slug, date }: Props) {
  return (
    <li className="py-2 text-gray-500" key={slug}>
      <Link
        href={`/blog/${slug}`}
        className="flex items-center justify-between [&>h3]:hover:text-gray-300">
        <h3 className="grow font-medium text-gray-400 transition-colors">
          {title}
        </h3>

        <span className={cn('ml-1 flex items-center gap-1')}>
          <Suspense
            fallback={
              <div className="h-4 w-10 animate-pulse rounded bg-gray-700" />
            }>
            <ViewCounter slug={slug} />
          </Suspense>
          •
          <span>
            {date &&
              new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
          </span>
        </span>
      </Link>
    </li>
  );
}
