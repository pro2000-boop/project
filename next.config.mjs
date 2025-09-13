const nextConfig = {
  /* config options here */
  transpilePackages: ['react-leaflet', 'leaflet'],
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/project',
  assetPrefix: '/project/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
