import CaseStudyLayout from "@/components/CaseStudyLayout";
import { styled } from "@/stitches.config";
import { NextPage } from "next";
import Image from 'next/future/image';

import BasementHero from '@/public/images/projects/basement-hero.png'
import BasementCart from '@/public/images/projects/basement-cart.png'

import Box from "@/components/common/Box";
import Paragraph from "@/components/common/Paragraph";
import Code from "@/components/common/Code";

const StyledDescription = styled('span', {
	color: '$slate11'
})

const StyledHero = styled(Image, {
	marginTop: '5rem',
	maxWidth: '100%',
	height: 'auto',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 30px 0px',
	borderRadius: 8
})

const StyledImage = styled(Image, {
	marginTop: '4rem',
	maxWidth: '100%',
	height: 'auto',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 30px 0px',
	borderRadius: 8
})

const StyledLink = styled('a', {
	color: '$slate12',
	fontWeight: 500,
	textDecoration: 'none',
	
	'&:hover': {
		textDecoration: 'underline'
	}
})

const Basement: NextPage = () => {
	return <main>
		<CaseStudyLayout 
			title="Basement Challenge"
			description={<>
				The <StyledLink href="https://basement.studio" target="_blank" rel="noreferrer">basement.studio</StyledLink> front-end challenge. You can 
				check out the GitHub page for the detailed description, but here is a summary: <br/><br/>

				<StyledDescription>
					The goal is to implement a responsive e-commerce website consuming a mock API, which has
					to be future-proof since it will be swapped with a real API later on. The design file is
					provided by the client, and the only requirement is to implement it as closely as possible.<br/><br/>
					The cart items are persisted through page reloads, and it should let the buyer select the
					amount and size of each item. Since the checkout is not implemented, printing the ticket is enough.
				</StyledDescription>
			</>}
			type="Project"
			stack={[ "React", "Next.js", "TypeScript", "Radix", "Stitches", "Vercel" ]}
			href="https://bsmnt.andrs.me"
			github="https://github.com/andresmarpz/basement-challenge"
		/>

		<StyledHero src={BasementHero} alt='' />

		<Box as="h2" css={{ marginTop: '7rem' }}>
			Purpose & goal
		</Box>
		<Paragraph css={{ lineHeight: 1.6 }}>
			Basement has been a big inspiration for me, I love their quality of work and how polished their websites
			are, and they set the bar pretty high for the future of the web.<br/><br/>
			As far as I know, this challenge would be ideal for a Junior with experience or Semi Senior developer, but
			I wanted to give it a try and see how far I could get. <br/>
			After a few days of work, I was able to implement the whole design, and I&apos;m pretty happy with the result.
		</Paragraph>

		<Box as="h3" css={{ marginTop: '4rem' }}>
			Stack & Explanation
		</Box>
		<Paragraph  css={{ lineHeight: 1.6 }}>
			The goal was to implement the design as closely as possible, keeping in mind the responsive-ness of the
			text and elements. To make this a little easier, they suggested using <Code>vw</Code> units, which I didn&apos;t know about.<br/><br/>

			One of the challenging parts was the Hero section. Keeping everything together while resizing the viewport
			was a headache, since floating elements are hard to align and resize.
			For the marquee effect, I used <Code>react-fast-marquee</Code>, a library that I&apos;ve used before and
			works great for this kind of stuff.<br/><br/>

			The cart was another challenge, since it had to change half the layout between desktop and mobile view.
			I used Radix&apos;s Dialog component to make it, since it works perfectly for this use-case and keeps the accessibility on check.<br/>
			I coupled everything together with <Code>Zustand</Code> to manage the state, allowing me to access a simple global state
			to keep the content and update items from anywhere in the app.<br/>
		</Paragraph>

		<StyledImage src={BasementCart} alt='' />

		<Box as="h3" css={{ marginTop: '5rem' }}>
			What I learned
		</Box>
		<Paragraph>
			I enjoyed a lot working on this project, since it&apos;s a design that I would have never tried to implement
			myself and has a lot of cool details. 
			<br/><br/>

			While working on it, I discovered <Code>next-real-viewport</Code>, a library made by the guys at Basement to
			calculate the precise viewport size. I used it to make the mobile cart because Safari has a weird viewport that resizes
			when scrolling, and it was a pain to make it work. <br/>
			I also got the oportunity to do my first-ever pull request to fix a missing TypeSript type on one key component of the package, which was pretty cool! 
		</Paragraph>
	</main>
}

export default Basement