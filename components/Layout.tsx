import React from 'react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='px-4'>
            <Navigation />
            <div className="flex flex-col max-w-3xl m-auto">
                <div className="flex-1 min-h-page">{children}</div>
                <Footer />
            </div>
        </main>
    );
};

export default Layout;
