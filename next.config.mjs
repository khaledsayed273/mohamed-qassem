/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dash.el-doc.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
