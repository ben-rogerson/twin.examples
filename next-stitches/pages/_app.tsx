import { AppProps } from 'next/app'
import './../styles/globalStyles'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
