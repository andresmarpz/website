import { AppProps } from 'next/app';
import { globalCss } from '@/stitches.config';
import Layout from '@/components/common/Layout';
import { useScrollRestoration } from '@/lib/useScrollRestoration';

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

export default function Application({ Component, pageProps, router }: AppProps) {
	globalStyles()
	useScrollRestoration(router);

    return <Layout>
		<Component {...pageProps}/>
	</Layout>
}
