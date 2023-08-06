import GlobalStyles from '@/styles/GlobalStyles'

export const metadata = {
  title: 'Twin',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
