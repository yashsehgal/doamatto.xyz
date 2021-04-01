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
            <br/>
            <p className="font-semibold">Note: I'm currently doing some major construciton on this site. So, please try to ignore any issues. If there's something huge, please put it on <a href="https://github.com/doamatto/doamatto.xyz/issues/new">Github</a> or <a href="mailto:hello@doamatto.xyz">email it to me</a>.</p><br/>
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
