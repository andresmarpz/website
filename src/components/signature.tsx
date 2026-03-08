"use client";

import {
  type Easing,
  motion,
  type SVGMotionProps,
  type Variants,
} from "motion/react";
import { cn } from "~/lib/utils";

const PATH_DURATIONS = [1.5, 2] as const;

const PATH_EASINGS: Easing[] = [
  [0.4, 0, 0.2, 1],
  [0.22, 0.03, 0.26, 1],
];

const PATH_DELAYS = PATH_DURATIONS.reduce<number[]>(
  (acc, _, i) => [
    ...acc,
    i === 0 ? 0 : acc[i - 1] + PATH_DURATIONS[i - 1],
  ],
  [],
);

const container: Variants = {
  initial: {},
  animate: {},
};

const createDrawVariant = (index: number): Variants => ({
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      opacity: { duration: 0.01, delay: PATH_DELAYS[index] },
      pathLength: {
        ease: PATH_EASINGS[index],
        duration: PATH_DURATIONS[index],
        delay: PATH_DELAYS[index],
      },
    },
  },
});

// Cursive A: ascending left stroke → peak → descending right stroke → crossbar loop → ligature to M
const A_PATH =
  "M 25 155 C 30 120 50 45 85 25 C 100 18 110 22 118 50 C 128 85 132 125 128 150 C 126 158 100 130 88 120 C 100 115 135 130 155 152";

// Cursive M: two humps from ligature point → trailing flourish
const M_PATH =
  "M 155 152 C 160 120 172 55 188 35 C 195 28 200 35 205 55 C 212 85 216 125 218 148 C 222 120 234 60 250 40 C 257 33 262 38 266 55 C 273 85 278 130 282 155 C 288 165 305 158 335 142";

export type SignatureProps = SVGMotionProps<SVGSVGElement>;

export const Signature = ({ className, ...props }: SignatureProps) => (
  <motion.svg
    viewBox="0 0 360 180"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-auto w-full overflow-hidden drop-shadow-md", className)}
    variants={container}
    initial="initial"
    animate="animate"
    {...props}
  >
    {/* Ghost paths (faint background guides) */}
    <path
      d={A_PATH}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.1}
    />
    <path
      d={M_PATH}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.1}
    />

    {/* Animated paths */}
    <motion.path
      d={A_PATH}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={createDrawVariant(0)}
    />
    <motion.path
      d={M_PATH}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={createDrawVariant(1)}
    />
  </motion.svg>
);
