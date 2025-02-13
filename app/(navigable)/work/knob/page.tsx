'use client';

import Knob from '@/app/(navigable)/work/knob/knob';
import { useState } from 'react';

export default function KnobPage() {
  const [r, setR] = useState(1);
  const [g, setG] = useState(1);
  const [b, setB] = useState(1);

  return (
    <div className="flex justify-center items-center border border-neutral-900 rounded-lg gap-8 flex-col p-8 bg-neutral-950">
      {/* Screen */}
      <div
        className="h-40 w-full rounded-lg border border-neutral-800 shadow"
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}></div>

      <div className="flex gap-8 py-8">
        <div className="flex flex-col">
          <Knob
            min={1}
            max={255}
            reductionPercentage={10}
            onValueChange={setR}
          />
        </div>

        <div className="flex flex-col">
          <Knob
            min={1}
            max={255}
            reductionPercentage={10}
            onValueChange={setG}
          />
        </div>
        <div className="flex flex-col">
          <Knob
            min={1}
            max={255}
            reductionPercentage={10}
            onValueChange={setB}
          />
        </div>
      </div>
    </div>
  );
}
