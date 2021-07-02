module.exports = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/bookmarks',
                destination: 'http://bookmarks.andres.run',
                permanent: true
            }
        ];
    }
};
