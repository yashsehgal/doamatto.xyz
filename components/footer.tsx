import Link from 'next/link'

export default function Footer () {
  return (
        <footer className="text-center text-gray-800 dark:text-gray-300 mt-8">
          <p>
            &copy; 2019-2021 doamatto. <br/>
            <Link href='https://github.com/doamatto/doamatto.xyz'>
              <a className="border-gray-600 dark:border-gray-500  hover:text-darkPurple dark:hover:text-lightPurple hover:border-darkPurple dark:hover:border-lightPurple">View this page&apos;s source code.</a>
            </Link>
          </p>
          <div className="w-full grid grid-cols-1 pt-1 pb-1 sm:grid-cols-2">
            <div className="flex flex-col space-y-2 pt-2 w-full max-w-4">
                <FooterLink link="/dashboard" title="Dashboard" />
                <FooterLink link="/minis" title="Minis" />
                <FooterLink link="/uses" title="Uses" />
            </div>
            <div className="flex flex-col space-y-2 pt-2 w-full max-w-4">
                <FooterLink link="/imprint" title="Imprint" />
                <FooterLink link="/privacy" title="Privacy" />
                <FooterLink link="/sitemap" title="Sitemap" />
            </div>
          </div>
        </footer>
  )
}

function FooterLink({link, title}:{link:string,title:string}) {
  return (
    <Link href={link}>
      <a title={title} className="border-none hover:text-darkPurple dark:hover:text-lightPurple">{title}</a>
    </Link>
  )
}
