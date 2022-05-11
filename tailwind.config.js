module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xsm: '540px',
        },
        extend: {
            maxWidth: {
                160: '160px'
            },
            minHeight: {
                page: '720px'
            },
            minWidth: {
                80: '80px',
                320: '320px'
            },
            gridTemplateRows: {
                project: '0.1fr 1fr 0.2fr'
            },
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
