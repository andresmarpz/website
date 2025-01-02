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
    <li className="py-2 text-neutral-300" key={slug}>
      <Link
        href={`/blog/${slug}`}
        className={cn(
          'flex items-center justify-between gap-1',
          'outline-[0.5px] outline-offset-[6px] hover:outline hover:outline-neutral-600/50 [&>h3]:hover:text-white [&>span]:hover:text-white'
        )}>
        <h3 className="grow font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">
          {title}
        </h3>

        <span
          className={
            'ml-1 flex items-center gap-1 whitespace-nowrap transition-colors'
          }>
          <Suspense
            fallback={
              <div className="h-[2px] w-[80px] bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-20" />
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
