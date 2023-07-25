import GlobalStyles from '../styles/GlobalStyles'
import StyledComponentsRegistry from '../lib/registry'

export const metadata = {
  title: 'Twin example',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
