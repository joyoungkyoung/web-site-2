const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const { name } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.APP_ENV === 'development' ? '' : `/${name}`,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins([[withVideos]], nextConfig);
