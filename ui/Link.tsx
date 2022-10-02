import { styled } from '@/stitches.config';
import type { CSSProperties } from '@stitches/react';
import React, { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

interface Props {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  css?: CSSProperties
}

const StyledLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline'
  }
});

type ComponentProps = React.HTMLProps<HTMLAnchorElement> &
  Props &
  PropsWithChildren;
const Link = React.forwardRef<HTMLAnchorElement, ComponentProps>(
  ({ href, target, children, onClick, css }, ref) => (
    <StyledLink
			css={{ ...css }}
      ref={ref}
      onClick={onClick}
      href={href}
      target={target}
      rel={target ? 'noreferrer noopener' : undefined}>
      {children}
    </StyledLink>
  )
);
Link.displayName = 'Link';

export default Link;
