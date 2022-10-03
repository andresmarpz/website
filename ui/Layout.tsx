import { css, styled } from '@/stitches.config';
import React from 'react';
import NextLink from 'next/link';
import Box from './Box';

/**
 *  Header component
 */
const StyleLink = css({
  textDecoration: 'none',
  color: '$slate12',
  borderRadius: 4,
  padding: '4px 10px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray2'
  }
});

const StyledBack = styled('b', StyleLink);
const StyledLink = styled('a', StyleLink);

const StyledNav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '32px 0 64px'
});

const Header: React.FC = () => {
  return (
    <StyledNav>
      <NextLink href="/" passHref>
        <StyledBack>A</StyledBack>
      </NextLink>
      <Box css={{ display: 'flex', gap: 12 }}>
        <NextLink href="/" passHref>
          <StyledLink>Home</StyledLink>
        </NextLink>
        <NextLink href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </NextLink>
      </Box>
    </StyledNav>
  );
};

/**
 *  Footer component
 */

const StyledFooter = styled('footer', {
  paddingY: 40
});

const Footer: React.FC = () => {
  return <StyledFooter>twitter github linkedin</StyledFooter>;
};

/**
 *  Layout component
 */

const StyledLayout = styled('div', {
  maxWidth: '768px',
  margin: 'auto',
  paddingX: '16px'
});

const StyledMain = styled('main', {
  minHeight: 'calc(var(--vh, 1vh) * 100 - 192px)'
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
