import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false; // Disable caching
    return config;
  },
};

export default nextConfig;
