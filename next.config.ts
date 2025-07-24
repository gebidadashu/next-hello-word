import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // 完全忽略客户端不需要的模块
    config.module.rules.push({
      test: /node_modules[\\/](@mapbox[\\/]node-pre-gyp|nock|aws-sdk|mock-aws-s3)/,
      use: 'ignore-loader'
    });
    
    return config;
  },
};

export default nextConfig;
