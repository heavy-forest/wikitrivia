const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true,
  },
  output: "export",

  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: "auto",
  },
});

module.exports = withVanillaExtract(nextConfig);
