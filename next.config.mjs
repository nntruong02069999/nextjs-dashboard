/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'burgerking.vn',
                port: '',
            },
        ],
    },
};

export default nextConfig;
