import Head from 'next/head'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))

export default function Cinema () {
  return (
    <>
      <NextSeo
        title="Cinematography - doamatto"
        description="All things video: from pre- to post- production and everything in between."
      />
      <Head>
        <title>Cinematography - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Cinematography"
        subtitle="All things video: from pre- to post- production and everything in between. Content " />
      <div className="antialised prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto dark:prose-dark">
        <p>
          I haven't had time to build this page out yet, so it's blank for now.
        </p>
      </div>
    </>
  )
}
