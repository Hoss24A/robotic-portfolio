import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Only if using App Router
  },
  // Optimize 3D model loading
  headers: async () => [
    {
      source: '/(.*).glb',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=604800, immutable' },
      ],
    },
  ],
  // Webpack config for GLB/GLTF and shaders
  webpack: (config) => {
    config.module.rules.push(
      // 3D Model Loaders
      {
        test: /\.(glb|gltf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/models',
            outputPath: 'static/models/',
            name: '[name].[hash].[ext]',
          },
        },
      },
      // Shader Support (optional)
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
      }
    );
    return config;
  },
  // Image optimization (for tech logos/project thumbnails)
  images: {
    domains: ['images.unsplash.com'], // Add your CDN domains
  },
};

export default nextConfig;