import { styled } from "@/stitches.config"

const StyledFooter = styled('footer', {
	paddingY: 40
})

const Footer: React.FC = () => {
	return <StyledFooter>
		twitter github linkedin
	</StyledFooter>
}

export default Footer