import { GlobalStyles } from 'twin.macro'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
