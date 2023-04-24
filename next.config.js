/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/myApi',
        destination: '/api/myApi.js',
      },
    ];
  },
};