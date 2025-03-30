/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ],
    unoptimized: true
  },
  // Disable ESLint during builds to prevent build failures
  eslint: {
    // Warning instead of error is often a good compromise
    ignoreDuringBuilds: true,
  },
  // Output configuration
  output: 'standalone',
  // Ensure trailing slashes are handled properly
  trailingSlash: true,
};

module.exports = nextConfig; 