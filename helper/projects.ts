import fs from 'fs';

const root = process.cwd();

export interface project {
    title: string;
    description: string;
    link?: string;
    github?: string;
    icon?: string;
    image?: string;
    index: number;
}

export function getProjects(amount?: number) {
    const dir = fs.readdirSync(root + '/data/projects');
    const projects: project[] = [];
    dir.forEach((label) => {
        const file = fs
            .readFileSync(root + '/data/projects/' + label)
            .toString();
        const project: project = JSON.parse(file);
        projects.push(project);
    });

    projects.sort((a: project, b: project) => (a.index > b.index ? 1 : -1));
    return amount === undefined
        ? projects
        : projects.slice(0, Math.min(projects.length, amount));
}
