import { PropsWithChildren } from 'react';

export default function IMessageContact() {
  // We will have a centered container with a title and a description

  return (
    <div className="flex flex-col items-center justify-center bg-white py-40">
      <Container>
        <Input />
      </Container>
    </div>
  );
}

function Container({ children }: PropsWithChildren) {
  return (
    <div className="aspect-2/1 min-h-80 min-w-80 rounded-[40px] bg-neutral-100 p-4">
      {children}
    </div>
  );
}

function Input() {
  return (
    <input
      type="text"
      className="h-12 w-full rounded-full border-2 border-neutral-300 bg-neutral-100 p-2 text-neutral-600"
    />
  );
}
