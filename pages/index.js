import Head from 'next/head'
import Link from 'next/link'

import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('../components/nav'))
const BLM_Banner = dynamic(() => import('../components/blm-banner'))


export default function Home() {
  return (
    <>
      <Head>
        <title>doamatto.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BLM_Banner />
      <Navigation />
      <main>
        <h1 className="title">
          Hi!<br /> I'm Matt Ronchetto.
        </h1>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  )
}
