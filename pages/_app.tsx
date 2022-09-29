import { AppProps } from 'next/app';
import { globalCss } from '@/stitches.config';
import Layout from '@/ui/Layout';
import { useScrollRestoration } from '@/lib/useScrollRestoration';
import { RealViewportProvider } from 'next-real-viewport';
import { DefaultSeo } from 'next-seo'
import { seo } from '@/lib/seo';

const globalStyles = globalCss({
	'*': {
        boxSizing: 'border-box'
    },
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily: `-apple-system, Inter, BlinkMacSystemFont, "Helvetica Neue", sans-serif`
    },
	'h1, h2, h3, h4, h5, h6': {
		margin: 0
	},
	// prevent svg from overlapping text around notations
	'.rough-annotation': {
		zIndex: -1
	}
})

export default function Application({ Component, pageProps, router }: AppProps) {
	globalStyles()
	useScrollRestoration(router);

    return (
		<RealViewportProvider>
			<Layout>
				<DefaultSeo {...seo} />
				<Component {...pageProps}/>
			</Layout>
		</RealViewportProvider>
	);
}
