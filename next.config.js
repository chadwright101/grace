/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    deviceSizes: [400, 700, 1000, 1280],
    imageSizes: [16, 32, 48, 64, 96, 100, 200, 300, 400, 500, 600, 700, 800],
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "the-wright-designs-website-images.s3.af-south-1.amazonaws.com",
        port: "",
        pathname: "/grace/**",
      },
    ],
  },
};
