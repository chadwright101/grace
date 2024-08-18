/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    deviceSizes: [400, 700, 1000, 1280],
    imageSizes: [16, 32, 48, 64, 96, 100, 200, 300, 400, 500, 600, 700, 800],
  },
};
