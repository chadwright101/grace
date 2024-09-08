/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    deviceSizes: [400, 700, 1000, 1280],
    imageSizes: [32, 64, 200, 400, 600, 800],
  },
};
