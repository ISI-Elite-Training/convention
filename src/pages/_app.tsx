import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Box } from '@/system/box';
import '@/styles/inter.css';
import '@/styles/brynasneue.css';
import '@/styles/global.css';

// stitches.config
import { reset } from '@/styles/reset';
import { css, globalCss, darkTheme } from 'stitches.config';

const globalStyles = globalCss(reset, {
  html: {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    backgroundColor: '$elite1',

    minHeight: '-webkit-fill-available',
  },
  body: {
    margin: 0,
    color: '$hiContrast',
    // backgroundColor: '$loContrast',
    backgroundColor: '$elite1',
    fontFamily: '$inter',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    minHeight: '-webkit-fill-available',
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      {/* <!--
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="light-theme"
      >
      --> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <Box css={{ backgroundColor: '$sage1', zIndex: '0' }}>
        <Component {...pageProps} />
      </Box>
    </>
  );
};

export default App;
