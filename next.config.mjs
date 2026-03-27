/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-designer-brand-tk',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
