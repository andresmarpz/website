import { styled } from '@/stitches.config';
import Image, { ImageProps, StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import Box from '@/ui/Box';

const StyledTitle = styled('strong', {
  marginTop: 20,
  marginBottom: 0,

  color: '$slate12',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: 1.5
});

const StyledAnchor = styled('a', {
  marginTop: '3rem',

  textDecoration: 'none',
  color: '$slate12',
  fontWeight: 600,

  '&:hover': {
    textDecoration: 'underline'
  }
});

interface Props {
  href: string;
  title: string;
  description?: string;
  options: ImageProps;
}

const CaseStudy: React.FC<Props> = ({ href, title, description, options }) => {
  return (
    <Box
      as="article"
      css={{
        display: 'flex',
        flexDirection: 'column',

        padding: 16,
        border: '1px solid $slate4',
        borderRadius: 8
      }}>
      <Box css={{
				width: '100%'
			}}>
        <Image
          layout="responsive"
          alt={`${href} website preview on iPhone and Safari`}
          placeholder="blur"
          {...options}
        />
      </Box>

      <StyledTitle>{title}</StyledTitle>
      <Box as="p" css={{ color: '$slate11', margin: 0 }}>
        {description}
      </Box>
      <Link href={href} passHref>
        <StyledAnchor>READ CASE STUDY {'>'}</StyledAnchor>
      </Link>
    </Box>
  );
};

export default CaseStudy;
