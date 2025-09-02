/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:3000/:path*", // forward ke backend container
      },
    ];
  },
};

module.exports = nextConfig;