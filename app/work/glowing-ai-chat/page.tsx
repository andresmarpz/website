export default function GlowingAiChat() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center rounded-md border border-stone-800 bg-neutral-800/30">
      <form className="flex flex-col gap-4">
        <textarea className="w-full resize-none rounded-md border border-stone-800 bg-neutral-800/30 p-4" />
        <button className="rounded-md border border-stone-800 bg-neutral-800/30 p-4">
          Send
        </button>
      </form>
    </div>
  );
}
