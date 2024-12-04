// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/fab.png" className="favicon-spin" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600&family=Jura&family=Roboto+Condensed&family=Ubuntu&family=Bokor&family=Bebas+Neue&family=Indie+Flower&family=Shadows+Into+Light&family=Righteous&family=Orbitron&family=Hachi+Maru+Pop&family=Amatic+SC&family=Silkscreen&family=Sacramento&family=Reenie+Beanie&family=Nixie+One&family=Special+Elite&family=Paytone+One&family=Monoton&family=Six+Caps&family=Kalam&family=Nanum+Pen+Script&family=Share+Tech+Mono&family=Gochi+Hand&family=Coda&family=Allerta+Stencil&family=New+Rocker&family=Jomhuria&family=Elsie&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}