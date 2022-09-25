import { css, styled } from "@/stitches.config"
import Link from "next/link"
import Box from "./Box"

const StyleLink = css({
	textDecoration: 'none',
	color: '$slate12',
	borderRadius: 4,
	padding: '4px 10px',
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: '$gray2'
	}
})

const StyledBack = styled('b', StyleLink);
const StyledLink = styled('a', StyleLink);

const StyledNav = styled("nav", {
	display: 'flex',
	justifyContent: 'space-between',
	paddingY: "32px",
})

const Header: React.FC = () => {
	return <StyledNav>
		<Link href='/' passHref><StyledBack>A</StyledBack></Link>
		<Box css={{ display: 'flex', gap: 12 }}>
			<Link href='/about' passHref><StyledLink>About</StyledLink></Link>
			<Link href='/projects' passHref><StyledLink>Projects</StyledLink></Link>
			<Link href='/blog' passHref><StyledLink>Blog</StyledLink></Link>
			<Link href='/contact' passHref><StyledLink>Contact</StyledLink></Link>
		</Box>
	</StyledNav>
}

export default Header