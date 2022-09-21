import { styled } from '@/stitches.config';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Box from './common/Box';

interface Props {
    src: string | StaticImageData;
    href: string;
	title: string;
    description?: string;
}

const StyledTitle = styled('strong', {
	marginTop: 20,
	marginBottom: 0,

	color: '$slate12',
	fontSize: '18px',
	fontWeight: 700,
	lineHeight: 1.5,
})

const StyledAnchor = styled('a', {
	marginTop: '3rem',

	textDecoration: 'none',
	color: '$slate12',
	fontWeight: 600,

	'&:hover': {
		textDecoration: 'underline'
	}
})

const CaseStudy: React.FC<Props> = ({ src, href, title, description }) => {
    return (
        <Box as="article" css={{ 
			display: 'flex',
			flexDirection: 'column',

			padding: 16,
			border: '1px solid $slate4',
			borderRadius: 8
		}}>
            <Image
                src={src}
                alt={`${href} website preview on iPhone and Safari`}
                quality={100}
            />
			
			<StyledTitle>{title}</StyledTitle>
            <Box as="p" css={{ color: '$slate11', margin: 0 }}>{description}</Box>
			<StyledAnchor href={href}>READ CASE STUDY {'>'}</StyledAnchor>
        </Box>
    );
};

export default CaseStudy;
