import CaseStudyLayout from "@/components/CaseStudyLayout";
import LinkPreview from "@/components/ui/LinkPreview";
import { getLinkPreviews, ImageData } from "@/lib/scanner";
import { GetStaticProps, NextPage } from "next";
import Image from "next/future/image";

import RickAndMortyHero from '@/public/images/projects/rickandmorty-hero.png'
import RickAndMortyPages from '@/public/images/projects/rickandmorty-pages.png'

import { styled } from "@/stitches.config";
import Box from "@/components/common/Box";
import Paragraph from "@/components/common/Paragraph";
import Code from "@/components/common/Code";

const StyledHero = styled(Image, {
	marginTop: '5rem',
	maxWidth: '100%',
	height: 'auto',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 30px 0px',
	borderRadius: 8
})

const StyledImage = styled(Image, {
	marginTop: '4rem',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 30px 0px',
	borderRadius: 8,
	maxWidth: '100%',
	height: 'auto'
})

export const getStaticProps: GetStaticProps = () => {
	const previews = getLinkPreviews();

	return {
		props: {previews}
	}
}

const RickAndMorty: NextPage<{ previews: ImageData[] }> = ({ previews }) => {
	const getData = (href: string) => {
        return previews.find((image) => image.href === href);
    };

	return <div>
		<CaseStudyLayout
			title="Rick and Morty"
			description={<>
				React Web application that allows users to search for Rick and Morty characters, locations and episodes.
				Implements the
				<LinkPreview 
					href="https://rickandmortyapi.com" 
					imageData={getData("https://rickandmortyapi.com")}
				>
					rickandmortyapi.com
				</LinkPreview> 
				and takes advantage of
				<LinkPreview 
					href="https://nextjs.org"
					imageData={getData("https://nextjs.org")}
				>
					Next.js
				</LinkPreview> 
				static page generation to provide a fast and performant experience.
			</>}
			type="Project"
			stack={[ "React", "Next.js", "TypeScript", "Radix", "Stitches", "Vercel" ]}
			href="https://rym.andrs.me/"
			github="https://github.com/andresmarpz/rickandmorty"
		/>

		<StyledHero src={RickAndMortyHero} alt='' />

		<Box as="h2" css={{ marginTop: '7rem' }}>
			Purpose & goal
		</Box>
		<Paragraph css={{ lineHeight: 1.6 }}>
			This project was meant to be an un-official implementation of the Rick and Morty API,
			which would allow me to only worry about the frontend, but still have a solid level of 
			complexity to work with. <br/>
			I focused on learning about Next.js and its environment, considering multiple data fetching
			methods and how to implement them in a performant and smooth way, avoiding loading states
			as much as possible.
		</Paragraph>

		<Box as="h3" css={{ marginTop: '4rem' }}>
			Stack & Explanation
		</Box>
		<Paragraph  css={{ lineHeight: 1.6 }}>
			Along with Next.js, I chose Stitches for styling, Radix for UI components and Vercel for deployment.<br/>
			All these technologies coupled with TypeScript allowed me to have a great development experience and avoid
			quite a lot of headaches.
			<br/><br/>

			The complex part of this project was the data fetching, as I wanted to have a good user experience
			with pagination on the gallery, and also fast navigation between dedicated pages. <br/>
			To achieve this, I used the <Code>getStaticProps</Code> method from Next.js, paired with <Code>useSWR</Code> to 
			keep the data fetched cached and avoid unnecessary requests. <br/>
		</Paragraph>

		<StyledImage src={RickAndMortyPages} alt='' />

		<Box as="h3" css={{ marginTop: '5rem' }}>
			What I learned
		</Box>
		<Paragraph>
			Using Radix was a breeze. It&apos;s a great library that provides a lot of components and utilities
			that just work. Although, I had an issue where the tabs unmounted when switching, losing the pagination state
			and having to re-populate the data every time. I spent quite a while and too many coffees figuring out
			the solution, but I ended up preventing the unmount, and everything else worked just fine.

			<br/><br/>
			Overall, I learned a lot about Next.js, <Code>next/image</Code>, data fetching and accessibility.<br/>
		</Paragraph>
	</div>;
}

export default RickAndMorty