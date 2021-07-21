import React from 'react';

import Image from 'next/image';
import Button from './Button';

const Project = (props: {
    title: string;
    description: string;
    link?: string;
    github?: string;
    icon?: string;
    image?: string;
    className?: string;
}) => {
    return (
        <div
            className={
                'p-4 text-gray-600 h-full overflow-hidden grid grid-rows-project border border-gray-200 rounded' +
                (props.className === undefined ? '' : props.className)
            }>
            <h2 className="text-lg font-semibold text-gray-800">
                {props.title}
            </h2>

            <p className="overflow-ellipsis">{props.description}</p>
            <div className="flex items-center mt-2">
                {props.link !== undefined ? (
                    <a href={props.link} target="_blank">
                        <Button>Live</Button>
                    </a>
                ) : (
                    ''
                )}
                {props.github !== undefined ? (
                    <a
                        className={props.link !== undefined ? 'ml-3' : ''}
                        href={props.github}
                        target="_blank">
                        <Image
                            src={'/svgs/github.svg'}
                            width={24}
                            height={24}
                        />
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Project;
