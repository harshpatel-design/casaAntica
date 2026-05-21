/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo2.pavothemes.com",
      },
    ],
  },
};

export default nextConfig;