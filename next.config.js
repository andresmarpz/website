module.exports = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/bookmarks',
                destination: 'https://bookmarks.andres.run',
                permanent: true
            },
            {
                source: '/files',
                destination: 'https://files.andres.run',
                permanent: true
            }
        ];
    }
};
