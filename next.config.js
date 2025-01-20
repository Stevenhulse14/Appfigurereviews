/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["appfigures.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.appfigures.com",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
