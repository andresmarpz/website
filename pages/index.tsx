import Box from '@/components/global/Box';
import RoughNotationGroup from '@/components/primitives/RoughNotationGroup';
import RoughNotationText from '@/components/primitives/RoughNotationText';
import { css, styled } from '@/stitches.config';
import { amber, blue, green, red, violet } from '@radix-ui/colors';
import { NextPage } from 'next';
import React from 'react';

const TitleStyle = css({
	marginTop: '5vh',
	marginBottom: 8,
	color: '$slate12',
	
	lineHeight: 1.5,
	fontSize: '17px',
	fontWeight: 600
})

// we should respect semantic headings
const Title = styled('h1', TitleStyle);
const Subtitle = styled('h2', TitleStyle)

const Description = styled('p', {
    margin: 0,
    color: '$slate11',

    lineHeight: 1.4,
    fontSize: '16px',
    fontWeight: 'normal'
});


const HireMe: React.FC = () => {
	return <Box as='a' css={{
		textDecoration: 'none',
		color: '$slate11'
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
			<section>
				<Title>Hey! I'm Andrew. I'm a guy passionate about the web.</Title>
				<Description>
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
				</Description>
			</section>

			
        </div>
    );
};

export default Home;
