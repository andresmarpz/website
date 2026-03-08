import { Signature } from "~/components/signature";

export default function SignaturePage() {
  return (
    <div className="mt-12 flex flex-col items-center gap-8">
      <h1 className="text-neutral-400 text-lg">Signature</h1>
      <div className="w-full max-w-2xl">
        <Signature className="text-neutral-100" />
      </div>
    </div>
  );
}
