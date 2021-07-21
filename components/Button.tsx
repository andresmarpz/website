import React from 'react';

const Button = (
    props: React.PropsWithChildren<{
        fill?: boolean | false;
        href?: string | undefined;
    }>
) => {
    return (
        <>
            <button
                className={
                    (props.fill
                        ? 'bg-gray-800 text-white '
                        : 'bg-white text-gray-700 ') +
                    ' border rounded shadow-sm py-1 px-3'
                }>
                {props.children}
            </button>
        </>
    );
};

export default Button;
