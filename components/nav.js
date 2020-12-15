import styles from './nav.module.scss'

export default function Navigation() {
    return (
        <header className={styles.header}>
            <h1 className="logo">
                <a href="/" rel="Home button" title="Home">
                    <img 
                        src="/assets/logo.svg"
                        alt="Home Button"
                        className="image"
                        width="100"
                        height="100"
                    />
                </a>
            </h1>
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
    )
}