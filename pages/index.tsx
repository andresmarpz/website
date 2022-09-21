import CaseStudy from '@/components/CaseStudy';
import Box from '@/components/common/Box';
import RoughNotationGroup from '@/components/primitives/RoughNotationGroup';
import RoughNotationText from '@/components/primitives/RoughNotationText';
import { css, styled } from '@/stitches.config';
import { amber, blue, green, red, violet } from '@radix-ui/colors';
import { NextPage } from 'next';
import React from 'react';

import RickAndMorty from '../public/images/projects/rickandmorty.png'
import Basement from '../public/images/projects/basement.png'

const TitleStyle = css({
	marginBottom: 8,
	color: '$slate12',
	
	lineHeight: 1.5,
	fontSize: '20px',
	fontWeight: 700
})

const Paragraph = styled('p', {
    margin: 0,
    color: '$slate12',

    lineHeight: 1.4,
    fontSize: '16px',
    fontWeight: 'normal'
});

const Section = styled('section', {
	marginTop: '6rem'
})

const Separator = styled('hr', {
	margin: '3rem auto',
	width: '65%',
	height: 1,
	border: 'none',
	backgroundColor: '$slate5'
})

const HireMe: React.FC = () => {
	return <Box as='a' css={{
		textDecoration: 'none',
		color: '$slate12'
	}} href="mailto:andresmarpz@gmail.com">
		<RoughNotationText config={{
			type: 'circle',
			color: blue.blue5,
			animationDuration: 1500,
			multiline: false
		}}>
			Hire me?
		</RoughNotationText>
	</Box>
}

const Home: NextPage = () => {
    return (
        <div>
			<Section>
				<Box as="h1" className={TitleStyle()}>Hey! I'm Andrew. I'm a guy passionate about the web.</Box>
				<Paragraph>
					<RoughNotationGroup>
						The thing I love the most is the ability to create something
						that can be used by   
						<RoughNotationText config={{
							type: 'highlight',
							color: red.red5,
							padding: 0,
							animationDuration: 1000
						}}>
							anyone, anywhere, at any time
						</RoughNotationText>. How cool is that? <br />
						Have you ever come across a sleek design, a delightful
						interaction or a magical detail that made you feel
						something? It's wonderful.
						<br /><br />

						Currently, I'm a 20-year-old student of
						<RoughNotationText
							config={{
								type: 'highlight',
								color: violet.violet6,
								animationDuration: 1000
							}}>
							Computer Engineering at UdelaR
						</RoughNotationText>, and taking part in{' '}
						<RoughNotationText
							config={{
								type: 'highlight',
								color: green.green5,
							}}>
							Jóvenes a Programar
						</RoughNotationText>
						{' '}web-development bootcamp, where we practice our soft-skills
						and learn to work as a team to deliver bi-weekly tasks.
						<br /><br />

						As of now, I'm looking for a job as a
						<RoughNotationText
							config={{
								type: 'highlight',
								color: amber.amber4,
							}}>
							Frontend Developer
						</RoughNotationText>
						, where I can learn, grow and get to invest time in what I love.
						<HireMe/>
					</RoughNotationGroup>
				</Paragraph>
			</Section>

			<Section>
				<Box as="h2" className={TitleStyle()}>Skills</Box>
				<Paragraph>
					Through my studies, I've learned a solid amount of computer science and 
					web development concepts, and have dedicated a lot of my free time to
					apply these in personal and academic projects.
				</Paragraph>

				<Box as="ul" css={{
						color: '$slate12',
						listStyle: 'none',
						display: 'grid',
						gap: 10,
						gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
				}}>
					<li>HTML & CSS</li>
					<li>JavaScript</li>
					<li>TypeScript</li>
					<li>React</li>
					<li>Next.js</li>
					<li>Git</li>
					<li>PostgreSQL</li>
					<li>MongoDB</li>
					<li>Prisma</li>
				</Box>
			</Section>

			<Section>
				<Box as="h3" className={TitleStyle()}>Projects</Box>
				<Paragraph css={{ marginBottom: '3rem' }}>
					I like to try out new technologies and experiment with them, as a way to
					continue practicing and learning. <br/>
					These are case studies of the most relevant work I've done.
				</Paragraph>

				<Box css={{
					display: 'flex',
					flexDirection: 'column',
					gap: 48
				}}>
					<CaseStudy 
						src={RickAndMorty} 
						href="/"
						title="Rick and Morty"
						description='A web app that allows you to search for characters, locations or episodes from the Rick and Morty TV show.' 
					/>
					<CaseStudy 
						src={Basement} 
						href="/"
						title="Basement Challenge"
						description='Responsive e-commerce website implemented from a Figma design file.' 
					/>
				</Box>
				<Paragraph css={{ marginTop: '2rem' }}>
					Aside from these projects, I'm always experimenting with cool UI ideas 
				</Paragraph>
			</Section>

			<Section>
				<Box as="h4" className={TitleStyle()}>Contact</Box>
				<Paragraph css={{ marginBottom: "5rem" }}>
					Feel free to reach out to me if you have any questions or just want to
					say hi!
				</Paragraph>
			</Section>
        </div>
    );
};

export default Home;
