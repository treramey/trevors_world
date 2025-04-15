import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },
  trailingSlash: false,
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280],
    formats: ["image/avif"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "@supabase/supabase-js", "react-tweet"],
    webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["geist"],
};

export default nextConfig;
