import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable all source maps (stops Turbopack errors)
  productionBrowserSourceMaps: false,

  webpack: (config) => {
    config.devtool = false;
    return config;
  },

  // Turn OFF Turbopack’s source-map behavior safely
  experimental: {
    turbo: {
      resolveAlias: {},
      loaders: {},
      rules: [],
    },
    // optional but helps:
    optimizePackageImports: [], 
  },
};

export default nextConfig;
