import { styled } from "@/stitches.config"
import Box from "@/ui/Box"
import Paragraph from "@/ui/Paragraph"

interface Props{
	title: string,
	description: string | React.ReactNode,
	type: string,
	stack: string[],
	href: string,
	github: string
}

const StyledLink = styled('a', {
	color: '$slate12',
	fontWeight: 500,
	textDecoration: 'none',
	
	'&:hover': {
		textDecoration: 'underline'
	}
})

const CaseStudyLayout: React.FC<Props> = ({ title, description, type, stack, href, github }) => {
	return <div>
		<h1>{title}</h1>
		<Paragraph>
			{description}
		</Paragraph>
		<Box css={{
			marginTop: '1rem',
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
			gap: 12
		}}>
			<Box>
				<Box as="h3">Type</Box>
				<Box css={{ paddingTop: 8 }}>{type}</Box>
			</Box>
			<Box>
				<Box as="h3">Stack</Box>
				<Box css={{
					display: 'flex',
					flexDirection: 'column',
					gap: 8,
					paddingTop: 8
				}}>
					{stack.map((item, index) => <Box as="div" key={index}>{item}</Box>)}
				</Box>
			</Box>
			<Box>
				<Box as="h3">Links</Box>
				<Box css={{
					display: 'flex',
					flexDirection: 'column',
					gap: 8,
					paddingTop: 8
				}}>
					<StyledLink href={href} target="_blank" rel="noreferrer">Visit Live</StyledLink>
					<StyledLink href={github} target="_blank" rel="noreferrer">GitHub</StyledLink>
				</Box>
			</Box>
		</Box>
	</div>
}

export default CaseStudyLayout