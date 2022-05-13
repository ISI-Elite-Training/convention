import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

const getCssAndReset = () => {
  const css = getCssText();

  return css;
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="https://spaces.isielite.space/assets/style/inter.css" as="style" />

          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript>
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
          </NextScript>
        </body>
      </Html>
    );
  }
}

{
  /* <!--
<link rel="amphtml" href="https://chvn.me" />
<link rel="canonical" href="https://chvn.me" />

<meta name="googlebot" content="follow, index, noarchive" />
<meta name="robots" content="follow, index, noarchive" />
<meta name="msapplication-config" content="/browserconfig.xml" />
<meta name="description" content="Chandler Chappell Official Site" />

<meta property="og:title" content="chvn®" />
<meta property="og:url" content="https://chvn.me" />
<meta property="og:image" content="https://cdn.ady.systems/chvn/assets/social.jpg" />
<meta property="og:image:secure_url" content="https://cdn.ady.systems/chvn/assets/social.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1600" />
<meta property="og:image:height" content="900" />
<meta property="og:image:alt" content="Social Share Image with Logo" />
<meta name="mobile-web-app-capable" content="yes" />

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-192x192.png" />
<link rel="manifest" href="/site.webmanifest" />

<meta name="msapplication-TileColor" content="#F2F2F2" />
<meta name="color-scheme" content="dark light" />
<meta name="theme-color" content="#ffffff" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@chv_ndler" />
<meta name="twitter:site" content="@chv_ndler" />
<meta property="og:locale" content="en_us" />
<meta property="og:site_name" content="chvn.me" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://chvn.me" />
--> */
}
