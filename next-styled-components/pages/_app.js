import GlobalStyles from './../components'

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
