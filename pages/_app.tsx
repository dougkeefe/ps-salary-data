import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Public Servant Salary API</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
