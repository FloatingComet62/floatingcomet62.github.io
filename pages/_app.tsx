import '@style/font.scss'
import '@style/global.scss'
import { AppProps } from 'next/app'

import Sidebar from '@c/sidebar'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  const random = Math.round(Math.random() * 19 + 1 )

  return (
  <>
  <Image style={{filter: "opacity(0.5)"}} src={`/backgrounds/${random}.png`} alt={'background'} layout="fill" />
  <Component {...pageProps} />
  <Sidebar />
  </>
  )
}