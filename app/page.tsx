export const metadata = {
  title: 'Andrés Martínez'
};

export default function Home() {
  return (
    <main>
      <h1 className='mb-2 font-medium text-gray-50 slide-in-from-top-2 [font-feature-setting:"kern","calt","case"] motion-safe:fade-in'>
        Andrés Martínez
      </h1>
      <p className="text-gray-400">
        I&apos;m a Software Engineer passionate about user interfaces and
        developer tooling. Now pursuing skill & taste in design, experimenting
        with interactions and experiences. Driven by the tiny details, while
        mastering the web one step at a time.
      </p>
      <p className="mt-4 text-gray-400">
        Currently working as a Senior Software Developer at{' '}
        <a
          className="text-gray-300 underline underline-offset-2"
          href="https://qubika.com"
          target="_blank">
          Qubika
        </a>
        , and completing my career studies on Information Systems and
        Technologies at{' '}
        <a
          className="text-gray-300 underline underline-offset-2"
          href="https://www.ort.edu.uy/"
          target="_blank">
          ORT University
        </a>
        .
      </p>

      <h2 className="mt-16">about me</h2>
      <p className="mt-4 text-gray-400">
        I started programming back when I was 13 years old, curious about
        Minecraft server plugins, learnt Java and gave that a try myself. Later,
        recreated a few of the most popular game-modes on servers at the time to
        sell on online forums.
      </p>
      <p className="mt-4 text-gray-400">
        Years passed by and I fell for the web platform. The power to craft
        something that can be accessed anywhere, at anytime is just fascinating.
        Creating websites that feel polished and cared for gives me a joy that I
        can&apos;t ever get bored of.
      </p>
      <p className="mt-4 text-gray-400">
        For the most part, I focused on TypeScript, React and Next.js. Though I
        enjoy a variety of other technologies and want to learn Go in the near
        future.
      </p>
    </main>
  );
}
