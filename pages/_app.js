import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", () => {
  //       navigator.serviceWorker.register("/service-worker.js").then(
  //         (registration) => {
  //           console.log("Service Worker registered:", registration);
  //         },
  //         (error) => {
  //           console.log("Service Worker registration failed:", error);
  //         }
  //       );
  //     });
  //   }
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#000000" />
        
        {/* 外部APIへの接続最適化：LCP改善 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://open.spotify.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://api.spotify.com" />
      </Head>
      
      {/* Google Analytics：LCPに影響を与えないようafterInteractive */}
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
