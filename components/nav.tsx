import { default as Logo } from './logos/logo'
import Link from 'next/link'
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
                    <NavItem link="/blog" title="Blog" />
                    <NavItem link="/projects" title="Projects" />
                    <NavItem link="/about" title="About" />
                </ul>
            </nav>
        </header>
      </>
  )
}

function NavItem({link, title}: {link:string,title:string}) {
    return (
        <li className="m-0 p-1 flex flex-col justify-center">
            <Link href={link}>
                <a title={title} className="border-none p-1 text-lg my-0 mx-3.5 transition-all no-underline">{title}</a>
            </Link>
        </li>

    )
}