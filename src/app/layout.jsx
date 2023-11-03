import 'bootstrap/dist/css/bootstrap.css'


export const metadata = {
  title: 'Silkroad Apparel',
  description: 'A mock apparel store developed for Web System and Technologies',
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