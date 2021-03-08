import { Fragment, render } from 'preact'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

if (typeof window !== 'undefined') {
  render(
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>,
    document.body,
  )
}
