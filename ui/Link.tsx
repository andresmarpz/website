import { styled } from '@/stitches.config';
import React, { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

interface Props {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
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
  ({ href, target, children, onClick }, ref) => (
    <StyledLink
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
