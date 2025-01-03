import Anchor from '@/app/(home)/anchor';
import BlogList from '@/components/blog/blog-list';
import Link from 'next/link';

export const metadata = {
  title: 'Andrés Martínez'
};

export const revalidate = 30;

export default function Home() {
  return (
    <main className="mb-32 text-neutral-400">
      <h1 className='text-sm font-medium text-stone-100 slide-in-from-top-2 [font-feature-setting:"kern","calt","case"] motion-safe:fade-in'>
        Andrés Martínez
      </h1>
      <p className="text-neutral-500">canelones, uy.</p>

      <section className="mt-6">
        <p>
          I&apos;m a Software Engineer passionate about user interfaces and
          developer tooling. Now pursuing skill in design, experimenting with
          interactions and experiences. Driven by the tiny details, while
          mastering the web one step at a time.
        </p>
        <p className="mt-4">
          Working as a Senior Software Developer at{' '}
          <Anchor href="https://qubika.com" target="_blank">
            Qubika
          </Anchor>
          . Studying Information Systems and Technologies at{' '}
          <Anchor href="https://www.ort.edu.uy/" target="_blank">
            ORT University
          </Anchor>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mt-12 text-neutral-100">me</h2>
        <p className="mt-2">
          Started programming at age 13, curious about Minecraft server plugins,
          learned Java and began experimenting, recreated a few of the most
          popular game-modes on servers at the time to sell on online forums.
        </p>
        <p className="mt-4">
          Years passed by and I fell for the web platform. The power to craft
          something that can be accessed anywhere, anytime, is just fascinating.
          Creating websites that feel polished and cared for gives me a joy that
          I can&apos;t ever get enough of.
        </p>
      </section>

      {/* <section className="mt-12">
        <h2 className="mt-12 text-neutral-100">work</h2>
        <p className="mt-2">building in progress.</p>
      </section> */}

      <section className="mt-12">
        <Link href="/blog">
          <h2 className="text-neutral-100">writing</h2>
        </Link>
        <p className="mt-2">
          I write about things I&apos;m learning, my experiences and thoughts on
          design and technology.
        </p>
        <div className="py-4">
          <BlogList length={3} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mt-12 text-neutral-100">reach</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="whitespace-nowrap">
            <span>connect on </span>
            <Anchor href="https://x.com/andresmarpz" target="_blank">
              {'𝕏'}
            </Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="https://github.com/andresmarpz" target="_blank">
              GitHub
            </Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="https://linkedin.com/in/andresmarpz" target="_blank">
              LinkedIn
            </Anchor>
          </span>
          <span>
            — or send me an email at{' '}
            <Anchor href="mailto:hello@andrs.me" target="_blank">
              hello@andrs.me
            </Anchor>
          </span>
        </div>
      </section>
    </main>
  );
}
