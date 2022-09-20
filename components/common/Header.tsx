import { styled } from "@/stitches.config"

const StyledNav = styled("nav", {
	paddingY: "16px",
})

const Header: React.FC = () => {
	return <StyledNav>
		<b>A</b>
	</StyledNav>
}

export default Header