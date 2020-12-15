import Head from 'next/head'

import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('../components/nav'))

export default function Home() {
  return (
    <>
      <Head>
        <title>doamatto.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <h1 className="title">
          Hi!<br /> I'm Matt Ronchetto.
        </h1>
      </main>
    </>
  )
}
