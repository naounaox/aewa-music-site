// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


// module.exports = {
//   env: {
//     NOTION_TOKEN: 'ntn_D4135606197aonSnaN775qLLjzY59ID1BqgyZqmWGyy4wN'
//   }
// }



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATABASE_ID: process.NOTION_DATABASE_ID
  },
  images: {
    domains: ['i.scdn.co'], // 外部画像ホスト名を追加
  }
};

export default nextConfig;
