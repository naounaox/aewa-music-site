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

// pages/_app.js
// import "@/styles/globals.css";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Script from 'next/script';

// export default function App({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       window.gtag('config', 'G-YBQT1V7DYJ', {
//         page_path: url,
//       });
//     };
//     router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);

//   return (
//     <>
//       {/* Google Analytics */}
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=G-YBQT1V7DYJ`}
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-YBQT1V7DYJ');
//           `,
//         }}
//       />
//       <Component {...pageProps} />
//     </>
//   );
// }

// import "@/styles/globals.css";
// import Script from 'next/script';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=G-YBQT1V7DYJ`}
//         strategy="afterInteractive"
//       />
//       <Script id="ga-script" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-YBQT1V7DYJ');
//         `}
//       </Script>
//       <Component {...pageProps} />
//     </>
//   );
// }


import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(
          (registration) => {
            console.log("Service Worker registered:", registration);
          },
          (error) => {
            console.log("Service Worker registration failed:", error);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-YBQT1V7DYJ`}
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YBQT1V7DYJ');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
