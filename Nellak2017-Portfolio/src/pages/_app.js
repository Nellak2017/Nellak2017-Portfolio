import Head from 'next/head'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid' // automatic unknown prop filtering
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Connor&apos;s Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
        <Component {...pageProps} />
      </StyleSheetManager>
    </>
  )
}

export default MyApp
