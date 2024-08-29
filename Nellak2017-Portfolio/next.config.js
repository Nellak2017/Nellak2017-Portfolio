/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Deploy a Next.js App to GitHub Pages: https://www.youtube.com/watch?v=mJuz45RXeXY
  distDir: 'dist', // Deploy a Next.js App to GitHub Pages: https://www.youtube.com/watch?v=mJuz45RXeXY
  reactStrictMode: true,
  images: {
    // cache optimized images for 60 seconds
    unoptimized: true, // Deploy a Next.js App to GitHub Pages: https://www.youtube.com/watch?v=mJuz45RXeXY   
    minimumCacheTTL: 60,  // https://www.codemotion.com/magazine/frontend/optimize-next-js-for-production/
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
}

module.exports = nextConfig
