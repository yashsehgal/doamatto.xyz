const styles = require('./footer.module.scss')
// import {useRouter} from 'next/router'
// import Link from 'next/link'

// TODO: Switch to <Link> for all links in footer

export default function Footer () {
  return (
        <footer className={styles.footer}>
            <p>
                &copy; 2019-2021 doamatto. <br/>
                <a href={'https://github.com/doamatto/doamatto.xyz'}>View this page&apos;s source code.</a> <br/>
                <a href="/imprint">Imprint.</a> <a href="/privacy">Privacy.</a> <a href="/sitemap">Sitemap.</a> <br/>
                {/*<p>
                  View this page in: <Link href={`/${router.pathname}`} locale={'en'}><a>English</a></Link> <Link href={`/fr/${router.pathname}`} locale={'fr'}><a>Français</a></Link><Link href={`/jp/${router.pathname}`} locale={'jp'}><a>日本語</a></Link>
                </p>*/}
            </p>
        </footer>
  )
}
