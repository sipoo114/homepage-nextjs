import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
