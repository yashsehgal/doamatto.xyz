import Link from 'next/link'
import Head from 'next/head'

import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('../../components/nav'))
const BLM_Banner = dynamic(() => import('../../components/blm-banner'))

export default function FirstPost() {
  return (
    <>
      <Head>
      	<title>First Post</title>
      </Head>
      <BLM_Banner />
      <Navigation />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}