/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize development mode
  reactStrictMode: false, // Disable strict mode to reduce double-rendering in dev

  // Speed up hot reload
  experimental: {
    optimizePackageImports: ['react', 'react-dom', 'next-auth'],
  },

  // Image optimization
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Compiler options for faster builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Disable source maps in development for faster builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;
