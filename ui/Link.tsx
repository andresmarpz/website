import { styled } from '@/stitches.config';
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

interface Props{
	href?: string,
	target?: HTMLAttributeAnchorTarget,
}

const StyledLink = styled('a', {
	textDecoration: 'none',
	color: 'inherit',
	'&:hover': {
		textDecoration: 'underline'
	}
})

const Link: React.FC<Props & PropsWithChildren> = ({ href, target, children }) => {
	return <StyledLink href={href} target={target} rel={target ? 'noreferrer noopener' : undefined}>
		{children}
	</StyledLink>
}

export default Link