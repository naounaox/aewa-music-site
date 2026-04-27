
// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="aewa - Japanese pop artist, singer-songwriter. Making still pop, still fuzzy music." />
        <meta name="keywords" content="æwa, aewa, music, Japanese artist, pop music, singer-songwriter, still pop, still fuzzy" />
        <meta property="og:title" content="aewa - Official Website" />
        <meta property="og:description" content="aewa - Japanese pop artist, singer-songwriter. Making still pop, still fuzzy music." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aewasongs.com" />
        <meta property="og:image" content="https://aewasongs.com/aewamain.webp" />

        <link rel="icon" href="/aewamain.webp" className="favicon-spin" />
        
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Gorditas&display=swap" 
          as="style" 
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gorditas&family=Ubuntu:wght@700&family=Indie+Flower&family=Shadows+Into+Light&family=Nixie+One&family=Special+Elite&family=Share+Tech+Mono&family=Coda:wght@700&family=Elsie:wght@900&display=swap"
          rel="stylesheet"
        />
        
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Jura&display=swap" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Jura&display=swap" rel="stylesheet" />
        </noscript>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}