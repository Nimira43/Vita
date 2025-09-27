/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bewqkeenbzzfcwdvklpm.supabase.co',
      },
    ],
  },
}

export default nextConfig
