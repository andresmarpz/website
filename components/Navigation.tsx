import React from 'react';

import Link from '@/components/NavigationLink';

const Navigation = () => {
    return (
        <nav className="bg-white w-full sticky top-0 z-10 py-10">
            <span className="max-w-3xl m-auto flex gap-6 items-center">
                <Link label="Home" href="/" />
                <Link label="Work" href="/work" />
                <Link label="Talk" href="/talk" />
            </span>
        </nav>
    );
};

export default Navigation;
