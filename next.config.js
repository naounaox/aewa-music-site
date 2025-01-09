
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     NOTION_TOKEN: process.env.NOTION_TOKEN,
//     NOTION_DATABASE_ID: process.NOTION_DATABASE_ID
//   },
//   images: {
//     domains: ['i.scdn.co'], // 外部画像ホスト名を追加
//   },
//   trailingSlash: true, // エクスポート時にURLにスラッシュを追加
//   output: 'export',
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     NOTION_TOKEN: process.env.NOTION_TOKEN,
//     NOTION_DATABASE_ID: process.NOTION_DATABASE_ID,
//   },
//   images: {
//     domains: ['i.scdn.co'], // 外部画像ホスト名を追加
//     unoptimized: true, // 画像最適化を無効化
//   },
//   trailingSlash: true, // エクスポート時にURLにスラッシュを追加
//   output: 'export', // ここを追加してエクスポートを有効にする
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID, // 修正：process.NOTION_DATABASE_ID → process.env.NOTION_DATABASE_ID
  },
  images: {
    domains: ['i.scdn.co'],
  },
  trailingSlash: true,
};

export default nextConfig;


