import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-8">
            <hr />
            <div className="py-6 text-gray-800">
                Deployed at{' '}
                <span className="font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                    <span className="text-xl">▲</span>Vercel
                </span>
            </div>
        </footer>
    );
};

export default Footer;
