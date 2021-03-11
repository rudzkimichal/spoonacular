import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Spoonacular' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>

    </header>
    <main>
    {children}
    </main>
    <footer>
      <hr />
      <span>Spoonacular</span>
    </footer>
  </div>
)

export default Layout
