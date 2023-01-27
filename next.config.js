/* eslint-disable @typescript-eslint/no-var-requires */
const withFonts = require("next-fonts");

/** @type {import('next').NextConfig} */
const nextConfig = withFonts({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
