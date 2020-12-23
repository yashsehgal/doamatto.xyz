const styles = require('./footer.module.scss')
import Link from 'next/link'

export default function Footer () {
  return (
        <footer className={styles.footer}>
            <p>
                &copy; 2019-2021 doamatto. <br/>
                <a href={'https://github.com/doamatto/doamatto.xyz'}>View this page&apos;s source code.</a> <br/>
                <a href="/imprint">Imprint.</a> <a href="/privacy">Privacy.</a> <a href="/sitemap">Sitemap.</a> <br/>
                <p>
                  View this page in: <Link href={`/${window.location.pathname}`} locale={'en'}><a>English</a></Link> <Link href={`/fr/${window.location.pathname}`} locale={'fr'}><a>Français</a></Link><Link href={`/jp/${window.location.pathname}`} locale={'jp'}><a>日本語</a></Link>
                </p>
            </p>
        </footer>
  )
}
