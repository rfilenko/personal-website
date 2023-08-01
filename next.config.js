/** @type {import('next').NextConfig} */
const nextConfig = {
    // fastRefresh: true,
    // concurrentFeatures: true,
    productionBrowserSourceMaps: false,
    optimizeFonts: false,
    // minify: false,
    images: {
        domains: ["cdn.sanity.io"],
    },
};

module.exports = nextConfig;