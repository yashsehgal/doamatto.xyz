import Head from 'next/head'

import styles from './index.module.scss'

import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('../components/nav'))

export default function Home() {
  return (
    <>
      <Head>
        <title>doamatto.</title>
      </Head>
      <Navigation />
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Hi!<br/> I'm Matt Ronchetto.
          </h1>
          <img src="/assets/photo.jpeg" width="320" height="320"/>
        </div>
      </main>
    </>
  )
}
