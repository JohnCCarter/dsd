import PropTypes from 'prop-types'

export const metadata = {
  title: 'Trading Bot Dashboard',
  description: 'Dashboard för trading bot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
} 