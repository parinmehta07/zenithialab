/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    "output": "export",
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.ap-south-1.amazonaws.com',
          port: '',
          pathname: '/assests.zenithialabs.com/img/**',
        },
      ],
    }
 }

module.exports = nextConfig
