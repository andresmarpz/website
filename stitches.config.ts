import { createStitches } from '@stitches/react';

import {
	gray,
	mauve,
	slate
} from '@radix-ui/colors';

const config = createStitches({
	theme: {
		colors: {
			...gray,
			...mauve,
			...slate
		}
	},
	media: {
		bp1: '(min-width: 480px)'
	},
	utils: {
		paddingX: (value: number | string) => ({
			paddingLeft: value,
			paddingRight: value
		}),
		paddingY: (value: number | string) => ({
			paddingTop: value,
			paddingBottom: value
		}),
		marginX: (value: number | string) => ({
			marginLeft: value,
			marginRight: value
		}),
		marginY: (value: number | string) => ({
			marginTop: value,
			marginBottom: value
		})
	}
});

export const { styled, css, getCssText, theme, createTheme, keyframes, globalCss } = config;