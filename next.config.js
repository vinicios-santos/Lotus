/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'images.habbo.com',
      'i.imgur.com',
      'imgur.com',
      'i.ibb.co',
      'ibb.co'
    ],
  },
}

module.exports = nextConfig 