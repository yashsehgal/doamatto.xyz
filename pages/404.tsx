import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function Home () {
  return (
    <>
      <NextSeo
        title="404 - doamatto"
        description="404 - Horiffic, no good, very bad error has occured."
      />
      <Head>
        <title>404 - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container four-oh-four" id="mainContent">
        <img src="/assets/404.svg" alt="" />
        <div>
          <h1>This page is dead!</h1>
          <p>
            Oh god! Holy sh*t! You just found a dead page. It's possible there was someone else who killed the page. It's also possible we're having a misunderstanding and someone spelt the address wrong. Regardless, we might want to investigate this dead page.
          </p>
          <a href="https://git.doamatto.xyz/404-investigation" className="button" title="Investigate the Dead Page">
            Investigate the Dead Page.
          </a>
        </div>
      </div>
    </>
  )
}