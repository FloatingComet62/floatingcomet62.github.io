import '@style/font.scss'
import '@style/global.scss'
import { AppProps } from 'next/app'
import Image from 'next/image'
import Sidebar from '@c/sidebar'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const random = Math.floor(Math.random() * 19) + 1

  return (
    <>
      <Head>
        <title>FloatingComet62</title>
        <meta property="og:title" content="FloatingComet62" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.floatingcomet62.tk" />
        <meta
          property="og:image"
          typeof="image/icon"
          content="public/favicon.ico"
        />
        <meta
          property="og:description"
          content="FloatingComet62's Personal Portfolio"
        />
        <meta name="theme-color" content="#ef78ad" />
      </Head>
      <Image
        style={{ filter: "opacity(0.5)" }}
        src={`/backgrounds/${random}.png`}
        alt="background"
        layout="fill"
      />
      <Component {...pageProps} />
      <Sidebar />
    </>
  );
}