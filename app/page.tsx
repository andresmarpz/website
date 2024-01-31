export const metadata = {
  title: 'Andrés Martínez'
};

export default async function Home() {
  return (
    <main>
      <h1 className="motion-safe:fade-in slide-in-from-top-2 mb-2 text-gray-50">
        hey, i&apos;m andrés
      </h1>
      <h2 className="text-gray-300">
        i&apos;m a software engineer, driven by curiosity about computers and
        technology, dedicated to creating polished user interfaces on the web.
        currently working as frontend developer at{' '}
        <a
          className="underline decoration-slate-400 underline-offset-2"
          href="https://qubika.com"
          rel="noreferrer noopener"
          target="_blank">
          Qubika
        </a>
        .
      </h2>

      <p></p>
    </main>
  );
}
