/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = withPlugins([
  optimizedImages
], {
  reactStrictMode: true,
  distDir: 'build',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
})

module.exports = nextConfig
