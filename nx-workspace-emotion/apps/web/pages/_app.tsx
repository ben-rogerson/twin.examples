import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from 'twin.macro';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
