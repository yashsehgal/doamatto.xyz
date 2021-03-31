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
          <div className="w-full max-w-2xl grid grid-cols-1 pt-1 pb-1 sm:grid-cols-2">
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/dashboard">
                <a className="border-none hover:text-darkPurple dark:hover:text-lightPurple">Dashboard</a>
              </Link>
              <Link href="/minis">
                <a className="border-none hover:text-darkPurple dark:hover:text-lightPurple">Minis</a>
              </Link>
              <Link href="/uses">
                <a className="border-none hover:text-darkPurple dark:hover:text-lightPurple">Uses</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-2">
                <Link href="/imprint">
                  <a className="border-none hover:text-darkPurple dark:hover:text-lightPurple">Imprint</a>
                </Link>
                <Link href="/privacy">
                  <a className="border-none hover:text-darkPurple dark:hover:text-lightPurple">Privacy</a>
                </Link>
                <Link href="/sitemap">
                  <a className="border-none hover:text-darkPurple dark:hover:text-lightPurple">Sitemap</a>
                </Link>
            </div>
          </div>
        </footer>
  )
}
