import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

/* Wala kayong gagalawin dito pls. Pero libre namang tignan hehe. Want an explanation on this part? Message me - Mavs */

export default RootLayout