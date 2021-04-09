import { default as Logo } from './logos/logo'
const styles = require('./nav.module.scss')

export default function nav () {
  return (
      <>
        {/* Sticky nav backdrop from Lee Robinso: https://leerob.io */}
        <header className={styles.header + " text-center flex justify-between -ml-8 pl-8 sticky z-10 top-0 backdrop-filter backdrop-blur-xl backdrop-saturate-180"}>
            <div className="m-0 flex justify-center">
                <a href="/" className="border-none group transition-colors" rel="Home button" title="Home">
                    {
                    <Logo />
                    }
                </a>
            </div>
            <nav className={styles.nav + "  flex items-center align-middle justify-center"}>
                <ul className="p-0 flex text-center list-none">
                    <li className="m-0 p-1 flex flex-col justify-center">
                        <a href="/blog" title="Blog" className="border-none p-1 text-lg my-0 mx-3.5 transition- no-underline">
                            Blog
                        </a>
                    </li>
                    <li className="m-0 p-1 flex flex-col justify-center">
                        <a href="/projects" title="Projects" className="border-none p-1 text-lg my-0 mx-3.5 transition- no-underline">
                            Projects
                        </a>
                    </li>
                    <li className="m-0 p-1 flex flex-col justify-center">
                        <a href="/about" title="About" className="border-none p-1 text-lg my-0 mx-3.5 transition- no-underline">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
      </>
  )
}
