import Head from 'next/head'
const styles = require('./index.module.scss')

export default function Home () {
  return (
    <>
      <Head>
        <title>doamatto</title>
      </Head>
      <main className={styles.main} id="mainContent">
        <div>
          <h1 className={styles.title}>
            Hi!<br/> I&apos;m Matt Ronchetto.
          </h1>
          <img src="/assets/photo.jpeg" alt="Photo of Matt Ronchetto" width="320" height="320"/>
        </div>
        <section>
          Dear reader,

          Thanks for visiting the test version of my portfolio. A lot of things, put bluntly, are broken or are in a horiffic test state. If you find bugs or have ideas, however, please send them to this site's GitHub repository via the link in the footer.
        </section>
      </main>
    </>
  )
}