import React from 'react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="mx-5">
            <Navigation />
            <div className="flex flex-col items-center">
                <div className="flex flex-col justfiy-center w-full max-w-3xl m-auto mx-5">
                    <div className="flex-1">{children}</div>
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default Layout;
