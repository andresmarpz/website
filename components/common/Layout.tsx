import { styled } from '@/stitches.config';
import React from 'react';
import Header from './Header';

const StyledLayout = styled('div', {
    maxWidth: '768px',
    margin: 'auto',
    paddingX: '16px'
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
            {children}
        </StyledLayout>
    );
};

export default Layout;
