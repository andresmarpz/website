module.exports = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/bookmarks',
                destination: 'bookmarks.andres.run',
                permanent: true
            }
        ];
    }
};
