import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-8">
            <hr />
            <div className="flex justify-between py-6 text-gray-700">
                <span>
                    Deployed at
                    <a
                        className="font-bold text-gray-800 hover:text-blue-600 cursor-pointer"
                        href="https://vercel.com"
                        target="_blank"
                        rel="noreferrer">
                        <span className="text-xl"> ▲</span>Vercel
                    </a>
                </span>
                <span className="flex gap-6">
                    <a href="https://twitter.com/andresmarpz">Twitter</a>
                    <a href="https://linkedin.com/in/andresmarpz">LinkedIn</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
