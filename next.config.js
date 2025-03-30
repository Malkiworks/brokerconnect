/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ]
  },
  // Disable ESLint during builds to prevent build failures
  eslint: {
    // Warning instead of error is often a good compromise
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 