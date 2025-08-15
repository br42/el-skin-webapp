import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  //devIndicators: false, // Disables the "N" Next Dev Indicator when there isn't any error
};
 
export default nextConfig;
