
const nextConfig = {
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
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Permite imagens de qualquer host externo
            },
        ],
    },
};


export default nextConfig;
