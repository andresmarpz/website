module.exports = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/bookmarks',
                destination: 'http://167.114.144.145/bookmarks',
                permanent: true
            }
        ];
    }
};
