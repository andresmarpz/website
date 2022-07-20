import { getProjects, Project } from '@/helper/projects';

import ProjectCard from '@/components/ProjectCard';
import Social from '@/components/Social';
import Image from 'next/image';
import Link from 'next/link';

import github from '@/public/svgs/github.svg';
import linkedin from '@/public/svgs/linkedin.svg';
import twitter from '@/public/svgs/twitter.svg';

interface props {
    projects: Project[];
}

export function getStaticProps() {
    const projects = getProjects(3);

    return {
        props: { projects }
    };
}

export default function Home({ projects }: props) {
    return (
        <main>
            <h1 className="rounded-md  text-gray-900 text-5xl font-bold mt-20">
                Hello! I'm Andrew.
            </h1>
            <p className="text-gray-700 text-lg mt-3">
                I'm a Frontend Developer from Uruguay. I enjoy designing and
                developing UIs. The technologies I'm currently into are{' '}
                <b>TypeScript</b> & <b>Next.js</b>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
                <Image
                    src="https://avatars.githubusercontent.com/u/78830288?v=4"
                    width={40}
                    height={40}
                    alt={'github avatar'}
                    className="rounded-full"
                />
                <Social
                    src={github}
                    alt="github logo"
                    href="https://github.com/andresmarpz"
                    label="Github"
                />
                <Social
                    src={twitter}
                    alt="twitter logo"
                    href="https://twitter.com/andresmarpz"
                    label="Twitter"
                />
                <Social
                    src={linkedin}
                    alt="linkedin logo"
                    href="https://linkedin.com/in/andresmarpz"
                    label="LinkedIn"
                />
            </div>

            <hr className="mt-4" />

            {/* Work section */}
            <section className="mt-16">
                <Link href="/work">
                    <a className="text-gray-900 text-2xl font-bold hover:underline">
                        Work
                    </a>
                </Link>

                <p className="text-gray-700 text-lg">
                    These are some of the projects I like the most. You can find
                    more of what I'm building{' '}
                    <Link href="/work">
                        <a className="hover:underline">
                            <b>here</b>
                        </a>
                    </Link>
                    !
                </p>
                <div className="grid grid-cols-1 gap-4 mt-6 pb-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            techStack={project.techStack}
                            description={project.description}
                            link={project.link}
                            github={project.github}
                            image={project.image}
                        />
                    ))}
                </div>
            </section>
            {/* <section className="mt-10">
                <h2 className="text-gray-900 text-2xl font-bold">Snippets</h2>
            </section> */}
        </main>
    );
}
