import React from 'react';

import Image from 'next/image';

const Project = (props: {
    title: string;
    description: string;
    link: string;
    icon?: string;
    className?: string;
}) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="h-10">
            <div
                className={
                    'border border-gray-200 rounded p-4 text-gray-600 h-full mt-4 overflow-hidden transition duration-200 ease-in-out shadow-sm hover:shadow-md' +
                    (props.className === undefined ? '' : props.className)
                }>
                <div className="flex">
                    {props.icon !== undefined ? (
                        <Image
                            src={props.icon}
                            width={24}
                            height={24}
                            alt={'project icon'}
                        />
                    ) : (
                        ''
                    )}
                    <h2 className="text-lg font-semibold text-gray-800 ml-2">
                        {props.title}
                    </h2>
                </div>

                <p className="px-1 overflow-ellipsis h-4/5">
                    {props.description}
                </p>
            </div>
        </a>
    );
};

export default Project;
