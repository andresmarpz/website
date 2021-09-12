import React from 'react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navigation />
            <div className="flex justify-center">
                <div className="flex justfiy-center bg-white w-full max-w-4xl h-screen min-w-320 m-auto mx-12">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
