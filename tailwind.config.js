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
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
