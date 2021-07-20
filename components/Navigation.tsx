import React from 'react';

import Link from '@/components/Link';

const Navigation = () => {
    return (
        <div className="bg-white m-auto max-w-4xl p-5 flex justify-between text-gray-800 sticky top-0">
            <span></span>
            <span className="flex space-x-5">
                <Link label="Stats" href="/stats" />
                <Link label="Home" href="/" />
            </span>
        </div>
    );
};

export default Navigation;
