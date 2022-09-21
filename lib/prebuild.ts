import { generateData, generatePaths, generatePreviews } from "./scanner"

export async function run(){
	await generatePaths();
	await generatePreviews();
	await generateData();
}

run()