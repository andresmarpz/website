import CaseStudy from '@/components/CaseStudy';
import Box from '@/components/common/Box';
import RoughNotationGroup from '@/components/primitives/RoughNotationGroup';
import RoughNotationText from '@/components/primitives/RoughNotationText';
import { css, styled } from '@/stitches.config';
import { amber, blue, green, red, violet } from '@radix-ui/colors';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import RickAndMorty from '../public/images/projects/rickandmorty.png'
import Basement from '../public/images/projects/basement.png'
import LinkPreview from '@/components/ui/LinkPreview';
import { getLinkPreviews, ImageData } from '@/lib/scanner';
import Paragraph from '@/components/common/Paragraph';

const TitleStyle = css({
	marginBottom: 8,
	color: '$slate12',
	
	lineHeight: 1.5,
	fontSize: '20px',
	fontWeight: 700
})

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

export const getStaticProps: GetStaticProps = () => {
	const previews = getLinkPreviews();

	return {
		props: {
			previews
		}
	}
}

interface Props{
	previews: ImageData[]
}

const Home: NextPage<Props> = ({ previews }) => {
	const getData = (href: string) => {
        return previews.find((image) => image.href === href);
    };

    return (
        <div>
			<Section>
				<Box as="h1" className={TitleStyle()}>Hey! I&apos;m Andrew. I&apos;m a guy passionate about the web.</Box>
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
						something? It&apos;s wonderful.
						<br /><br />

						Currently, I&apos;m a 20-year-old student of
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

						As of now, I&apos;m looking for a job as a
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
					Through my studies, I&apos;ve learned a solid amount of computer science and 
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
					I like to always have a project in mind to keep learning and challenging myself,
					learning new technologies and improving my design skills. For instance, I&apos;m currently
					tinkering with hovereable links, such as this {' '}
					<LinkPreview 
						href='https://nextjs.org'
						imageData={getData('https://nextjs.org')}
					>Next.js</LinkPreview> one.<br/><br/>
					These are case studies of the most relevant work I&apos;ve done.
				</Paragraph>

				<Box css={{
					display: 'flex',
					flexDirection: 'column',
					gap: 48
				}}>
					<CaseStudy 
						src={RickAndMorty} 
						href="/project/rickandmorty"
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
