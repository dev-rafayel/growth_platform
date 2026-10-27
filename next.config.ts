import type { NextConfig } from 'next';
import { STRAPI_URL } from './lib/constants';

const strapi = new URL(STRAPI_URL);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: strapi.protocol.replace(':', '') as 'http' | 'https',
      hostname: strapi.hostname,
      port: strapi.port,
      pathname: '/uploads/**',
    }],
    // Keep optimized covers for 30 days so they survive Strapi downtime.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
