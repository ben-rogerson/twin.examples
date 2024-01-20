import GlobalStyles from '@/styles/GlobalStyles'

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {props.children}
      </body>
    </html>
  )
}
