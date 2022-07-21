import { getProjects, Project } from '@/helper/projects';

import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

interface props {
    projects: Project[];
}

export function getStaticProps() {
    const projects: Project[] = getProjects();

    return {
        props: { projects }
    };
}

export default function Work({ projects }: props) {
    return (
        <main className="mt-12">
            <h1 className="text-2xl font-bold text-black">Work</h1>
            <p className="text-lg text-gray-700">
                Here are some of the things I'm building and learning with. I'm
                currently open to work offers! You can contact me through{' '}
                <Link href="/talk">
                    <a>
                        <b>/talk</b>
                    </a>
                </Link>
                .
            </p>
            <br />
            <a
                href="/andres-martinez-cv2021.pdf"
                className="border rounded bg-gray-100 px-8 py-2 font-medium text-gray-800">
                Download my resume
            </a>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 mt-16 pb-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        github={project.github}
                        link={project.link}
                        key={'p' + index}
                    />
                ))}
            </section>
        </main>
    );
}
