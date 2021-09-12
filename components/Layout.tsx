import React from 'react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navigation />
            <div className="flex justfiy-center">
                <main className="bg-white w-full max-w-4xl h-screen min-w-320 mx-12">
                    {children}
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Layout;
