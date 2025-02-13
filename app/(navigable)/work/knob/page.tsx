import Knob from '@/app/(navigable)/work/knob/knob';

export default function KnobPage() {
  return (
    <div className="flex justify-center py-20 flex-col items-center">
      <Knob min={1} max={900} reductionPercentage={5} />
    </div>
  );
}
