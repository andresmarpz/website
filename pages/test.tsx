import Image from "next/future/image";
import RYMH from '@/public/images/projects/rickandmorty-hero.png'
import { styled } from "@/stitches.config";
import Box from "@/ui/Box";

const StyledImage = styled(Image, {
	borderRadius: 8,
	maxWidth: '100%',
	height: 'auto'
})

export default function test(){
	return <Box css={{
		position: 'relative',
	}}>
		<StyledImage src={RYMH} alt='' />
	</Box>
}