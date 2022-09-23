import Box from "./common/Box"
import Paragraph from "./common/Paragraph"

interface Props{
	title: string,
	description: string | React.ReactNode,
	type: string,
	stack: string[],
	href: string,
	github: string
}

const CaseStudyLayout: React.FC<Props> = ({ title, description, type, stack, href, github }) => {
	return <div>
		<h1>{title}</h1>
		<Paragraph>
			{description}
		</Paragraph>
		<Box css={{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		}}>
			<Box>
				<Box as="h3">Type</Box>
				<Box as="p">{type}</Box>
			</Box>
			<Box>
				<Box as="h3">Stack</Box>
				<Box css={{
					display: 'flex',
					flexDirection: 'column',
					gap: 8
				}}>
					{stack.map((item, index) => <Box as="div" key={index}>{item}</Box>)}
				</Box>
			</Box>
			<Box>
				<Box as="h3">Links</Box>
				<Box css={{
					display: 'flex',
					flexDirection: 'column',
					gap: 8
				}}>
					<Box as="a" css={{ color: "$slate12" }} href={href} target="_blank" rel="noreferrer">Visit Live</Box>
					<Box as="a" css={{ color: "$slate12" }} href={github} target="_blank" rel="noreferrer">GitHub</Box>
				</Box>
			</Box>
		</Box>
	</div>
}

export default CaseStudyLayout