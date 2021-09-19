import React from 'react';

import NLink from 'next/link';

const Link = (props: { href: string; label: string }) => {
    return (
        <NLink href={props.href}>
            <a className="transition duration-150 ease-in-out text-gray-900 font-medium hover:text-blue-600">
                {props.label}
            </a>
        </NLink>
    );
};

export default Link;
