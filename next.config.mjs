/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static1.gensler.com",
      },
    ],
  },
};

export default nextConfig;
