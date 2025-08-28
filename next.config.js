/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.notion.so', 'notion.so', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: false,
  },
  trailingSlash: true,
  generateEtags: false,
}

module.exports = nextConfig
