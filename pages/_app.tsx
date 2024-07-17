import '@mantine/core/styles.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { JetBrains_Mono } from 'next/font/google';

const font = JetBrains_Mono({ subsets: ['latin'] });


const theme = createTheme({
  colors: {
    purple: [
      '#f6ecff',
      '#e7d6fb',
      '#caabf1',
      '#ac7ce8',
      '#9354e0',
      '#833cdb',
      '#7b2eda',
      '#6921c2',
      '#5d1cae',
      '#501599'
    ]
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return <MantineProvider theme={theme}>
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  </MantineProvider>
}
