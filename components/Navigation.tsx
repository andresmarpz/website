import React from 'react';

import Link from '@/components/Link';

const Navigation = () => {
    return (
        <div className="bg-white m-auto max-w-4xl p-8 flex justify-between items-center text-gray-800 sticky top-0">
            <span></span>
            <span className="flex space-x-6 items-center">
                <Link label="Snippets" href="/snippets" />
                <Link label="Home" href="/" />
            </span>
        </div>
    );
};

export default Navigation;
