import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class customDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/inter.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
