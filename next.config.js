/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true /** babel 삭제 후 SWC 활성화 */,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
