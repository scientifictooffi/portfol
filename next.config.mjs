/** @type {import('next').NextConfig} */
const nextConfig = {
  // separate output dir for audits/builds while `next dev` is running
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
  devIndicators: false,
};

export default nextConfig;
