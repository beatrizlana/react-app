import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
    <title>Orientu</title>
    <link rel="shortcut icon" href=""/>
    <link rel="apple-touch icon" href=""/>
    <link rel="manifest" href="/manifest.json" />
    <meta
      name="Nome"
      description="Descrição lorem ipsum dolor sit amet"
    />
  </Head>
  <Component {...pageProps} />
  </>)
}

export default App
