import { default as Logo } from './logos/logo'
const styles = require('./nav.module.scss')

export default function nav () {
  return (
      <>
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/" rel="Home button" title="Home">
                    {
                    <Logo />
                    }
                </a>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="/blog" title="Blog">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="/projects" title="Projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/about" title="About">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
      </>
  )
}
