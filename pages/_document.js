// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="description" content="aewa - Japanese pop artist, singer-songwriter. Making still pop, still fuzzy music." />
//         <meta name="keywords" content="æwa, aewa, music, Japanese artist, pop music, singer-songwriter, still pop, still fuzzy" />
//         <meta property="og:title" content="awwa - Official Website" />
//         <meta property="og:description" content="aewa - Japanese pop artist, singer-songwriter. Making still pop, still fuzzy music." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aewasongs.com" />
//         <link rel="icon" href="/aewa.png" className="favicon-spin" />
//         <link href="https://fonts.googleapis.com/css2?family=Gorditas&display=swap" rel="stylesheet" />
//         <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600&family=Jura&family=Roboto+Condensed&family=Ubuntu&family=Bokor&family=Bebas+Neue&family=Indie+Flower&family=Shadows+Into+Light&family=Righteous&family=Orbitron&family=Hachi+Maru+Pop&family=Amatic+SC&family=Silkscreen&family=Sacramento&family=Reenie+Beanie&family=Nixie+One&family=Special+Elite&family=Paytone+One&family=Monoton&family=Six+Caps&family=Nanum+Pen+Script&family=Share+Tech+Mono&family=Gochi+Hand&family=Coda&family=Allerta+Stencil&family=New+Rocker&family=Jomhuria&family=Elsie&display=swap" rel="stylesheet" />
//         <script
//           async
//           src={`https://www.googletagmanager.com/gtag/js?id=G-YBQT1V7DYJ`}
//         />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-YBQT1V7DYJ');
//             `,
//           }}
//         />
//       </Head>
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="aewa - Japanese pop artist, singer-songwriter. Making still pop, still fuzzy music." />
        <meta name="keywords" content="æwa, aewa, music, Japanese artist, pop music, singer-songwriter, still pop, still fuzzy" />
        <meta property="og:title" content="awwa - Official Website" />
        <meta property="og:description" content="aewa - Japanese pop artist, singer-songwriter. Making still pop, still fuzzy music." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aewasongs.com" />
        <link rel="icon" href="/aewa.png" className="favicon-spin" />
        <link href="https://fonts.googleapis.com/css2?family=Gorditas&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600&family=Jura&family=Roboto+Condensed&family=Ubuntu&family=Bokor&family=Bebas+Neue&family=Indie+Flower&family=Shadows+Into+Light&family=Righteous&family=Orbitron&family=Hachi+Maru+Pop&family=Amatic+SC&family=Silkscreen&family=Sacramento&family=Reenie+Beanie&family=Nixie+One&family=Special+Elite&family=Paytone+One&family=Monoton&family=Six+Caps&family=Nanum+Pen+Script&family=Share+Tech+Mono&family=Gochi+Hand&family=Coda&family=Allerta+Stencil&family=New+Rocker&family=Jomhuria&family=Elsie&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YBQT1V7DYJ`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YBQT1V7DYJ');
          `}
        </Script>
      </body>
    </Html>
  );
}