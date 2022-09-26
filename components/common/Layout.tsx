import { styled } from '@/stitches.config';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const StyledLayout = styled('div', {
    maxWidth: '768px',
    margin: 'auto',
    paddingX: '16px'
});

const StyledMain = styled('main', {
	minHeight: 'calc(var(--vh, 1vh) * 100 - 192px)',
})

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
			<StyledMain>
				{children}
			</StyledMain>
			<Footer/>
        </StyledLayout>
    );
};

export default Layout;
