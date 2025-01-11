import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Enable filesystem caching with compression
    config.cache = {
      type: "filesystem",
      compression: "gzip", // Compress cached files to reduce size
    };

    return config;
  },
  // Optional: Limit the number of concurrent threads during builds
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
