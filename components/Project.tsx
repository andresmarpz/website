import React from 'react';

import Image from 'next/image';

const Project = (props: {
    title: string;
    description: string;
    link: string;
    icon?: string;
}) => {
    return (
        <a href={props.link}>
            <div className="border border-gray-200 rounded p-4 text-gray-600">
                <div className="flex">
                    {props.icon !== undefined ? (
                        <Image src={props.icon} width={24} height={24} />
                    ) : (
                        ''
                    )}
                    <h2 className="text-lg font-semibold text-gray-800">
                        {props.title}
                    </h2>
                </div>

                <div className="px-1">{props.description}</div>
            </div>
        </a>
    );
};

export default Project;
