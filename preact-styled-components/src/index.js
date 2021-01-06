import { render } from 'react-dom'
import GlobalStyles from './GlobalStyles'
import App from './App'

if (typeof window !== 'undefined') {
  render(
    <div>
      <GlobalStyles />
      <App />
    </div>,
    document.body,
  )
}
