import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot'],
  },

  // Image optimization settings for Vercel
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cldup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Output settings for Vercel (standalone for better cold starts)
  output: 'standalone',

  // Compression settings
  compress: true,

  // Power optimizations
  poweredByHeader: false,

  // Security and cache headers
  async headers() {
    return [
      // Long cache for static assets only (JS, CSS, images)
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // All other routes (HTML pages): short cache so Google and users get fresh titles/metadata
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, must-revalidate',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noarchive',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
