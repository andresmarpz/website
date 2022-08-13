import { AppProps } from 'next/app';
import { globalCss } from 'stitches.config';

const globalStyles = globalCss({
	'*': {
        boxSizing: 'border-box'
    },
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily: `-apple-system, Inter, BlinkMacSystemFont, "Helvetica Neue", sans-serif`
    }
})

export default function Application({ Component, pageProps }: AppProps) {
	globalStyles()

    return <Component {...pageProps} />;
}
