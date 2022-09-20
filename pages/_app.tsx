import { AppProps } from 'next/app';
import { globalCss } from '@/stitches.config';
import Layout from '@/components/common/Layout';

const globalStyles = globalCss({
	'*': {
        boxSizing: 'border-box'
    },
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily: `-apple-system, Inter, BlinkMacSystemFont, "Helvetica Neue", sans-serif`
    },
	// prevent svg from overlapping text around notations
	'.rough-annotation': {
		zIndex: -1
	}
})

export default function Application({ Component, pageProps }: AppProps) {
	globalStyles()

    return <Layout>
		<Component {...pageProps}/>
	</Layout>
}
