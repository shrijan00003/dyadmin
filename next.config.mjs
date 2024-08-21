/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX ?? undefined,
  publicRuntimeConfig: {
    DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT,
  },
};

export default nextConfig;
