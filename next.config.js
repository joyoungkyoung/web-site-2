/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
    });
    return config;
  },
};

module.exports = nextConfig;
