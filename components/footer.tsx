import Link from 'next/link'

export default function Footer () {
  return (
        <footer className="text-center">
            <p>
                &copy; 2019-2021 doamatto. <br/>
                <Link href='https://github.com/doamatto/doamatto.xyz'>View this page&apos;s source code.</Link> <br/>
                <Link href="/imprint">Imprint.</Link> <Link href="/privacy">Privacy.</Link> <Link href="/sitemap">Sitemap.</Link> <br/>
            </p>
        </footer>
  )
}
