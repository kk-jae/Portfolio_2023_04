/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "project-kk-jae",

  exportPathMap: () => ({
    "/": { page: "/" },
    "/Market": { page: "/Market" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
