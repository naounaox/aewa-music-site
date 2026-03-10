
import nextPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
  images: {
    domains: ["i.scdn.co"],
    // img format optimization（AVIF > WebP > PNG/JPG）
    formats: ['image/avif', 'image/webp'],
    // cashe control for Spotify images (31 days)
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  trailingSlash: true,
};

export default nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);
