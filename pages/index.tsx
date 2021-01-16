import Head from 'next/head'
const styles = require('./index.module.scss')

export default function Home () {
  return (
    <>
      <Head>
        <title>doamatto</title>
      </Head>
      <main className={`${styles.main} content`}>
        <section>
          <div>
            <h1 className={styles.title}>
              Hi, I&apos;m Matt Ronchetto
            </h1>
            <p>
              I'm a high school student who does product design and software development in sunny California. I'm currently building <a href="/projects/mello">Mello</a> and <a href="/projects/mono">Mono</a>.
            </p>
          </div>
          <img src="/assets/photo.jpeg" alt="Photo of Matt Ronchetto" width="320" height="320"/>
        </section>
      </main>
    </>
  )
}