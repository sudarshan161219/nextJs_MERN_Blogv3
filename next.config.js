/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['images.unsplash.com'],
    // },
        images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig

