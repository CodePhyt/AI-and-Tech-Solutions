import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  // Output configuration for Docker/Cloud Run
  output: 'standalone',

  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // Will use AI-generated assets from /public/ only
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPWA(nextConfig);
