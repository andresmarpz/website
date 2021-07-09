import React from 'react';

import Navigation from '@/components/Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
