'use client';

import Progress from '@/app/(navigable)/work/knob/progress';
import {
  degreesToRadians,
  radiansToDegrees
} from '@/app/(navigable)/work/knob/utils';
import {
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import useSound from 'use-sound';

interface InternalState {
  isDragging: boolean;
  initialMousePosition?: [Number, Number];
}

export default function Knob({
  min,
  max,
  onValueChange,
  reductionPercentage = 0
}: {
  min: number;
  max: number;
  onValueChange: (newValue: number) => unknown;
  reductionPercentage?: number;
}) {
  // Ticking sound
  const [_playTick] = useSound('/assets/sounds/tick.mp3', {
    volume: 0.015
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playTick = () => {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        _playTick();
        timeoutRef.current = null;
      }, 25);
    }
  };

  // State
  const [currentValue, _setCurrentValue] = useState<number>(min);
  const [_internalState, _setInternalState] = useState<InternalState>({
    isDragging: false
  });

  const setCurrentKnobValue = (
    newValue: number | ((lastValue: number) => number)
  ) => {
    const computedValue =
      typeof newValue === 'function' ? newValue(currentValue) : newValue;

    if (computedValue !== currentValue) {
      _setCurrentValue(computedValue);
      onValueChange(computedValue);
      playTick();
    }
  };

  // Knob container element ref
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Event Handlers

  /**
   * Mouse Down event handler
   */
  const handleElementMouseDown = useCallback((event: MouseEvent) => {
    if (!elementRef.current) return;

    const initialMousePosition = [event.clientX, event.clientY] as const;

    _setInternalState({
      isDragging: true,
      initialMousePosition
    });
  }, []);

  /**
   * Mouse Up event handler
   */
  const handleElementMouseUp = useCallback((event: MouseEvent) => {
    _setInternalState({
      isDragging: false
    });
  }, []);

  /**
   * Mouse Move event handler
   */
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      // If it's not dragging or the Knob ref does not exist return
      if (!_internalState.isDragging || !elementRef.current) return;

      const knobBoundingRect = elementRef.current.getBoundingClientRect();

      const centerX = knobBoundingRect.x + knobBoundingRect.width / 2;
      const centerY = knobBoundingRect.y + knobBoundingRect.height / 2;

      const [initialMouseX, initialMouseY] =
        _internalState.initialMousePosition;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const initialRelativeX = initialMouseX - centerX;
      const initialRelativeY = initialMouseY - centerY;

      const relativeX = mouseX - centerX;
      const relativeY = mouseY - centerY;

      const initialAngleRelativeToCenter = radiansToDegrees(
        Math.atan2(initialRelativeY, initialRelativeX)
      );

      const currentAngleRelativeToCenter = radiansToDegrees(
        Math.atan2(relativeY, relativeX)
      );

      let angleDelta =
        currentAngleRelativeToCenter - initialAngleRelativeToCenter;

      if (angleDelta > 180) {
        angleDelta -= 360;
      }
      // If the delta is less than -180°, we crossed the boundary clockwise
      else if (angleDelta < -180) {
        angleDelta += 360;
      }

      const valuePerDegree = (max - min) / 360;
      const valueChange = angleDelta * valuePerDegree;

      setCurrentKnobValue((prevValue) => {
        const newValue = prevValue + valueChange;

        // Approach 1: Round to 2 decimal places
        const roundedValue = Math.round(newValue * 100) / 100;

        // Only update if change is significant (e.g., >= 0.01)
        if (Math.abs(roundedValue - prevValue) < 0.01) {
          return prevValue;
        }

        return Math.min(max, Math.max(min, roundedValue));
      });

      // Update initial position for next movement
      _setInternalState((prev) => ({
        ...prev,
        initialMousePosition: [event.clientX, event.clientY]
      }));
    },
    [_internalState.isDragging, _internalState.initialMousePosition]
  );

  useEffect(() => {
    if (!elementRef) return;

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    if (!elementRef) return;

    window.addEventListener('mouseup', handleElementMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleElementMouseUp);
    };
  }, [handleElementMouseUp]);

  const currentPercentage = (currentValue * 100) / max;

  return (
    <>
      {/* Knob */}
      <div
        className="size-16 border rounded-full shadow-sm shadow-neutral-600/50 bg-neutral-900 border-neutral-800 relative select-none"
        ref={elementRef}
        onMouseDown={handleElementMouseDown}>
        {/* Thumb */}
        <Thumb
          reduction={reductionPercentage}
          currentPercentage={currentPercentage}
        />

        {/* Progress */}
        <Progress
          size={100}
          percentage={currentPercentage}
          reduction={reductionPercentage}
          className="absolute top-[-24%] left-[-25%] size-[150%] pointer-events-none"
        />
      </div>

      <p className="text-center font-mono text-lg py-4">
        {currentValue.toFixed(2)}
      </p>
    </>
  );
}

function Thumb({
  reduction,
  currentPercentage
}: {
  reduction: number;
  currentPercentage: number;
}) {
  // Reduction degrees
  const REDUCTION_DEGREES = (360 / 100) * reduction;

  const ANGLE = 360 - REDUCTION_DEGREES;
  const CURRENT_ANGLE_RAW = currentPercentage * (ANGLE / 100);
  // We normalize it to -270°, since circles ALWAYS start at the right center because of sin() and cos()
  // we subtract 3/4 Pi
  const CURRENT_ANGLE =
    CURRENT_ANGLE_RAW - (360 - REDUCTION_DEGREES / 1.5) * 0.75;
  const CURRENT_ANGLE_RADIANS = degreesToRadians(CURRENT_ANGLE);

  // Base is always 50% + whatever offset into the circumference (negative or positive)
  const left = `${50 + 37.5 * Math.cos(CURRENT_ANGLE_RADIANS)}%`;
  const top = `${50 + 37.5 * Math.sin(CURRENT_ANGLE_RADIANS)}%`;

  return (
    <div
      className="rounded-full size-2 bg-neutral-600 shadow-sm border border-neutral-500/50 absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left,
        top
      }}
    />
  );
}
