/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'spaces.isielite.space',
      'cdn.ady.systems',
      'localhost', // For Strapi
    ],
  },
};

module.exports = nextConfig;
