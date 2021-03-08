import { render, h } from 'preact'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

// Setup should be called just once in your app entry file
import { setup } from 'goober'
setup(h)

if (typeof window !== 'undefined') {
  render(
    <>
      <GlobalStyles />
      <App />
    </>,
    document.body,
  )
}
