import { createStitches } from '@stitches/react';

import {
	gray,
} from '@radix-ui/colors';

const config = createStitches({
	theme: {
		colors: {
			...gray
		}
	},
	media: {
		bp1: '(min-width: 480px)'
	},
});

export const { styled, css, getCssText, theme, createTheme, keyframes, globalCss } = config;