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


// const nextConfig = {
//     reactStrictMode: true,
//     i18n,
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'src/styles')],
//         prependData: `@import "variables.scss";`,
//     },
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '**',
//                 port: '',
//                 pathname: '**',
//             },
//         ],
//     },
// }