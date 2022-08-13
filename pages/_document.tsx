import { getCssText } from '../stitches.config';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
                <link
                    rel="preload"
                    href="/fonts/inter.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
							@font-face {
								font-family: 'Inter';
								font-style: normal;
								font-weight: 100 900;
								font-display: optional;
								src: url("/fonts/inter.woff2") format("woff2");
								unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
								U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
								U+2215, U+FEFF, U+FFFD;
							}
						`
                    }}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
