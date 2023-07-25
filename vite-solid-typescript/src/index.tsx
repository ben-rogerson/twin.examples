/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'

const root = document.getElementById('root')

render(
  () => (
    <>
      <GlobalStyles />
      <App />
    </>
  ),
  root!,
)
