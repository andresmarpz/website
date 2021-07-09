import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Andrés Martínez</title>
                    <meta
                        name="description"
                        content="andres martinez personal website andresmarpz uruguay"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="text-4xl text-white font-medium">
                        This site is currently under development!
                    </h1>
                    <h2 className="text-2xl text-gray-400">
                        You can follow the progress in the{' '}
                        <a
                            className="text-blue-500 hover:underline"
                            href="https://github.com/andresmarpz/andres.run/tree/dev">
                            github repository
                        </a>
                    </h2>
                </main>
            </div>
        </Layout>
    );
}
