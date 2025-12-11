import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5huhbl6d7.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'jre0b9rm4g.ufs.sh',
      },
    ],
  },
};

export default nextConfig;

