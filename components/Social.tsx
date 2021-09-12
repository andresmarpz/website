import React from 'react';

import Image from 'next/image';

const Social = (props: {
    src: string;
    alt: string;
    href: string;
    label: string;
}) => {
    return (
        <div className="flex items-center ml-4">
            <Image src={props.src} width={24} height={24} alt={props.alt} />
            <a
                className="ml-2 hover:underline"
                href={props.href}
                target="_blank"
                rel="noreferrer">
                {props.label}
            </a>
        </div>
    );
};

export default Social;
