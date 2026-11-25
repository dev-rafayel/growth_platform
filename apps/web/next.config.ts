import type { NextConfig } from 'next';

// Read the env directly: next.config is loaded before workspace packages are transpiled.
const strapi = new URL(process.env.STRAPI_URL || 'http://localhost:1337');
// apps/blog, served under /blog on this domain (Next.js Multi-Zones).
const blogUrl = (process.env.BLOG_URL || 'http://localhost:3001').replace(/\/$/, '');

const nextConfig: NextConfig = {
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
    // Keep optimized covers for 30 days so they survive Strapi downtime.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // The "home" landing page is served at /, so /home is only a duplicate.
  async redirects() {
    return [{ source: '/home', destination: '/', permanent: true }];
  },
  // Checked before dynamic routes, so app/[slug] never catches /blog.
  async rewrites() {
    return [
      { source: '/blog', destination: `${blogUrl}/blog` },
      { source: '/blog/:path+', destination: `${blogUrl}/blog/:path+` },
    ];
  },
};

export default nextConfig;
