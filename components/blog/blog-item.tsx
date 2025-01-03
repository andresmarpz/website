import ViewCounter from '@/app/(navigable)/blog/view-counter';
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
          'group flex items-center justify-between gap-1',
          'hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 hover:[&>h3]:text-white hover:[&>span]:text-white border-0',
          'relative'
        )}>
        {/* Top left */}
        <div
          className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as any}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        {/* Bottom right */}
        <div
          className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as any}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        <h3 className="grow font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">
          {title}
        </h3>

        <span
          className={
            'ml-1 flex items-center gap-1 whitespace-nowrap transition-colors'
          }>
          <Suspense
            fallback={
              <div className="h-[2px] w-[80px] bg-linear-to-r from-transparent via-slate-400 to-transparent opacity-20" />
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
