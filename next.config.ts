import { NextConfig } from "next";

const config: NextConfig = {
  // Enable image optimization and configure domains
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

  // Configure environment variables
  env: {
    customKey: "my-value",
  },

  // Configure redirects
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },

  // Configure API routes rewrites
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://appfigures.com/_u/jobs/:path*",
      },
    ];
  },

  // Enable/disable features
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["appfigures.com"],
    },
  },

  // Configure webpack
  webpack(config) {
    // Custom webpack config
    return config;
  },
};

export default config;
