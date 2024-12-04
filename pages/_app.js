// import "@/styles/globals.css";
// import Head from 'next/head';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>æwa - Official Website</title>
//         <meta name="description" content="æwa is a Japanese pop artist, singer-songwriter, and musician." />
//         <meta name="keywords" content="æwa, aewa, music, Japanese artist, pop, singer-songwriter" />
//         <meta property="og:title" content="æwa - Official Website" />
//         <meta property="og:description" content="æwa is a Japanese pop artist, singer-songwriter, and musician." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aewamusic.com" /> {/* 新しいドメインに更新 */}
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" /> {/* ファビコンは後で追加 */}
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}