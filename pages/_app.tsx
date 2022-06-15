import '@style/font.scss'
import '@style/global.scss'
import { AppProps } from 'next/app'
import Image from 'next/image'
import Sidebar from '@c/sidebar'

export default function App({ Component, pageProps }: AppProps) {
  const random = Math.floor(Math.random() * 19) + 1

  return (
  <>
  <Image
    style={{ filter: "opacity(0.5)" }}
    src={`/backgrounds/${random}.png`}
    alt="background"
    layout="fill"
  />
  <Component {...pageProps} />
  <Sidebar />
  </>
  )
}