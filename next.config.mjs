/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { API_URL: 'https://blockchain-project-drab.vercel.app/' },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
      },
    ],
  },
};

export default nextConfig;
