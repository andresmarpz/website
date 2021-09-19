module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        minWidth: {
            320: '320px'
        },
        gridTemplateRows: {
            project: '0.1fr 1fr 0.2fr'
        },
        minHeight: {
            page: '720px'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
