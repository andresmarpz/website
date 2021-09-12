import { getProjects, project } from '@/helper/projects';

import Head from 'next/head';
import Image from 'next/image';
import Project from '@/components/Project';
import Social from '@/components/Social';

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
        <>
            <Head>
                <title>Andrés Martínez</title>
                <meta
                    name="description"
                    content="andres martinez personal website andresmarpz uruguay"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-gray-900 text-5xl font-bold mt-20">
                    Hello! I'm Andrew.
                </h1>
                <h2 className="text-gray-600 text-lg mt-3">
                    I'm a Frontend Developer from Uruguay. I enjoy designing and
                    developing UIs. My go-to stack is <b>TypeScript</b> /{' '}
                    <b>React</b> with <b>Nextjs</b> and <b>Tailwind CSS</b>.
                </h2>
                <div className="mt-8 flex items-center">
                    <Image
                        src="https://avatars.githubusercontent.com/u/78830288?v=4"
                        width={40}
                        height={40}
                        alt={'github avatar'}
                        className="rounded-full"
                    />
                    <Social
                        src="/svgs/github.svg"
                        alt="github logo"
                        href="https://github.com/andresmarpz"
                        label="Github"
                    />
                    <Social
                        src="/svgs/twitter.svg"
                        alt="twitter logo"
                        href="https://twitter.com/andresmarpz"
                        label="Twitter"
                    />
                    <Social
                        src="/svgs/linkedin.svg"
                        alt="linkedin logo"
                        href="https://linkedin.com/in/andresmarpz"
                        label="LinkedIn"
                    />
                </div>

                <hr className="mt-4" />

                <div className="mt-16">
                    <h2 className="text-gray-900 text-2xl font-bold">
                        Projects
                    </h2>
                    <div>
                        <h2 className="text-gray-600 text-lg">
                            These are some of my personal projects:
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 mt-6 pb-10">
                            {projects.map((project, index) => (
                                <Project
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    github={project.github}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="mt-10">
                    <h2 className="text-gray-900 text-2xl font-bold">
                        Snippets
                    </h2>
                </div> */}
            </main>
        </>
    );
}
