import type { NextConfig } from 'next';

// Read the env directly: next.config is loaded before workspace packages are transpiled.
const strapi = new URL(process.env.STRAPI_URL || 'http://localhost:1337');

const nextConfig: NextConfig = {
  // Served at bidnow.com/blog: apps/web rewrites /blog/* to this app (Next.js Multi-Zones).
  basePath: '/blog',
  // @growth/strapi ships TypeScript sources, so Next compiles it like app code.
  transpilePackages: ['@growth/strapi'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: strapi.protocol.replace(':', '') as 'http' | 'https',
      hostname: strapi.hostname,
      port: strapi.port,
      pathname: '/uploads/**',
    }],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
