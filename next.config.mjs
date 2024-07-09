import i18n from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n,
  reactStrictMode: true,
};

export default nextConfig;
