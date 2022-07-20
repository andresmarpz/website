import fs from 'fs';

const root = process.cwd();

export interface Project {
	title: string;
	description: string;
	techStack: string;
	link?: string;
	github?: string;
	icon?: string;
	image?: string;
	index: number;
}

export function getProjects(amount?: number) {
	const dir = fs.readdirSync(root + '/data/projects');
	const projects: Project[] = [];
	dir.forEach((label) => {
		const file = fs
			.readFileSync(root + '/data/projects/' + label)
			.toString();
		const project: Project = JSON.parse(file);
		projects.push(project);
	});

	projects.sort((a: Project, b: Project) => (a.index > b.index ? 1 : -1));
	return amount === undefined
		? projects
		: projects.slice(0, Math.min(projects.length, amount));
}
