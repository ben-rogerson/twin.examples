import { render } from 'preact'
import App from './App'

if (typeof window !== 'undefined') {
  render(<App />, document.body)
}
