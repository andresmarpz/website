import React from 'react';

import Link from '@/components/NavigationLink';

const Navigation = () => {
    return (
        <nav className="bg-white max-w-4xl py-8 m-auto flex items-center text-gray-800 sticky top-0 z-10">
            <span className="flex gap-6 items-center">
                <Link label="Home" href="/" />
                <Link label="Work" href="/work" />
                <Link label="Talk" href="/talk" />
            </span>
        </nav>
    );
};

export default Navigation;
