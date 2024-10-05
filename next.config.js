/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/badge/*',
      },
    ],
  },
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '',
  publicRuntimeConfig: {
    basePath: '',
  },
};

module.exports = nextConfig;
