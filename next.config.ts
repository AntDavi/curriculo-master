import { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: ["@svgr/webpack"],
                    as: "*.js",
                },
            },
        },
    },
    reactStrictMode: false,
    devIndicators: false
};


export default nextConfig;
