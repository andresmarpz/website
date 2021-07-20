import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

import { getProjects, project } from '@/helper/projects';
import Project from '@/components/Project';

interface props {
    projects: project[];
}

export async function getStaticProps() {
    const projects = await getProjects();

    return {
        props: { projects }
    };
}

export default function Home({ projects }: props) {
    return (
        <Layout>
            <div className="flex justify-center">
                <Head>
                    <title>Andrés Martínez</title>
                    <meta
                        name="description"
                        content="andres martinez personal website andresmarpz uruguay"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="px-5 bg-white w-full max-w-4xl h-screen">
                    <h1 className="text-gray-900 text-5xl font-bold mt-24">
                        Hello! I'm Andrew.
                    </h1>
                    <h2 className="text-gray-600 text-lg mt-3">
                        I'm a Software Engineer based in Uruguay, though I
                        mainly focus in front-end development since I'm into
                        UI/UX design. I enjoy using <b>TypeScript</b> /{' '}
                        <b>React</b> with <b>Nextjs</b> and <b>Tailwind CSS</b>.
                    </h2>
                    <div className="mt-8 flex items-center">
                        <Image
                            src="https://avatars.githubusercontent.com/u/78830288?v=4"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="flex items-center ml-3">
                            <Image
                                src="/svgs/github.svg"
                                width={24}
                                height={24}
                            />
                            <a
                                className="ml-2"
                                href="https://github.com/andresmarpz">
                                Github
                            </a>
                        </div>
                        <div className="flex items-center ml-3">
                            <Image
                                src="/svgs/twitter.svg"
                                width={24}
                                height={24}
                            />
                            <a
                                className="ml-2"
                                href="https://twitter.com/andresmarpz">
                                Twitter
                            </a>
                        </div>
                    </div>

                    <hr className="mt-4" />

                    <h2 className="text-gray-900 text-2xl font-bold mt-16">
                        Things I'm working on
                    </h2>
                    <div>
                        <h2 className="text-gray-600 text-lg">
                            This is my personal playground where I make and host
                            most of my projects, and these are some of them.
                        </h2>
                        {projects.map((project, index) => (
                            <Project
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                icon={project.icon}
                            />
                        ))}
                    </div>

                    <h2 className="text-gray-900 text-2xl font-bold mt-16">
                        My links
                    </h2>
                    <div>
                        <a href="/snippets">Snippets</a>: stuff I made and use
                        often to copy-paste
                    </div>
                </main>
            </div>
        </Layout>
    );
}
