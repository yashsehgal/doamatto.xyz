import styles from './footer.module.scss'

export default function Footer() {    
    return (
        <footer className={styles.footer}>
            <p>
                &copy; 2019-2021 doamatto. <br/>
                <a href={`https://github.com/doamatto/doamatto.xyz`}>View this page's source code.</a> <br/>
                <a href="/imprint">Imprint.</a> <a href="/privacy">Privacy.</a> <a href="/sitemap">Sitemap.</a>
            </p>
        </footer>
    )
}