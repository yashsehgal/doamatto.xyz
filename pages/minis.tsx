import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))

export default function Minis() {
  return (
    <>
      <NextSeo
        title="Minis - doamatto"
        description="These are basically just mini-portfolios for things that I don't « prioritize » publicly."
      />
      <Head>
        <title>Minis - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Minis"
        subtitle="These are basically just mini-portfolios for things that I don't « prioritize » publicly." />
      <div className="antialised prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto dark:prose-dark">
        <div className="w-full max-w-2xl grid grid-cols-1 pt-1 pb-1 sm:grid-cols-3 text-center">
          <Link href="#music">
            <a className="border-gray-600 dark:border-gray-500  hover:text-darkPurple dark:hover:text-lightPurple hover:border-darkPurple dark:hover:border-lightPurple">
              Music
            </a>
          </Link>
          <Link href="#video">
            <a className="border-gray-600 dark:border-gray-500  hover:text-darkPurple dark:hover:text-lightPurple hover:border-darkPurple dark:hover:border-lightPurple">
              Video
            </a>
          </Link>
          <Link href="#other">
            <a className="border-gray-600 dark:border-gray-500  hover:text-darkPurple dark:hover:text-lightPurple hover:border-darkPurple dark:hover:border-lightPurple">
              Other
            </a>
          </Link>
        </div>
        <div id="music">
          <h2>Music</h2>
          <p>
            I make music solo and with a small group. We use Bandcamp for both.
            <ul>
              <li><a href="https://doamatto.bandcamp.com">Solo stuff</a></li>
              <li><a href="">Group stuff</a></li>
            </ul>
          </p>
        </div>
        <div id="video">
          <h2>Video</h2>
          <p>
            I make videos of such a weird variety of stuff: be it games, mini documentaries, and series about learning random stuff I felt like learning. I haven't had a lot of time as of late to put a huge amount of time into it, but I plan to try to release one project a month or so.
          </p>
        </div>
        <div id="other">
          <h2>Other</h2>
          <p>
            There is a small list of things that I do that aren't « big » enough to make a mini about. So, here's just those social media pages
            <ul>
              <li><a href="https://unsplash.com/@doamatto">Photography</a> (I use Unsplash)</li>
              <li>Art (I don't really upload anything)</li>
              <li>Hardcore elite wild coding (I use the <Link href="/projects">Projects</Link> page)</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  )
}