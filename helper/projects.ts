import fs from 'fs';

const root = process.cwd();

export interface project {
    title: string;
    description: string;
    link: string;
    icon?: string;
}

export async function getProjects() {
    const dir = fs.readdirSync(root + '/data/projects');
    const projects: project[] = [];
    dir.forEach((label) => {
        const file = fs
            .readFileSync(root + '/data/projects/' + label)
            .toString();
        const project: project = JSON.parse(file);
        projects.push(project);
    });

    return projects;
}
