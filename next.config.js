/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    "output": "export",
    trailingSlash: true,
    images: {
      unoptimized: true,
      domains: ['s3.ap-south-1.amazonaws.com'],
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 's3.ap-south-1.amazonaws.com',
      //     port: '',
      //     pathname: '/assests.zenithialabs.com/img/**',
      //   },
      // ],
    }
 }

module.exports = nextConfig
