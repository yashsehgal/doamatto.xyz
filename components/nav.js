import Image from 'next/image'

export default function Navigation() {
    return (
        <header>
            <h1 className="logo">
                <a href="/" rel="Home button" title="Home">
                    <Image 
                        src="/assets/logo.svg"
                        alt="Home Button"
                        width={100}
                        height={100}
                    />
                </a>
            </h1>
            <nav>
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
            <style jsx>{`
                header {
                    text-align: center;
                    display: flex;
                    justify-content: space-between;
                    height: 100px;
                    padding-left: 16px;
                    font-size: 14px;
                }
                nav ul {
                    flex: 0 0 auto;
                    text-align: left;
                    display: flex;
                    margin-top: 2.5em;
                }
                nav ul li {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                nav ul li a {
                    cursor: pointer;
                    padding: 0 0.8em;
                    font-size: 1.1em;
                    text-decoration: none;
                    color: #000;
                }
                nav ul li a:hover {
                    text-decoration: underline;
                    color: inherit;
                    transition: all 150ms ease-in-out;
                }
                nav ul:first-child { margin-left: 0; }
                nav ul:last-child a { padding-right: 0; }
            `}</style>
        </header>
    )
}