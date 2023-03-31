import { type AppType } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'

import { api } from '~/utils/api'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default api.withTRPC(MyApp)
