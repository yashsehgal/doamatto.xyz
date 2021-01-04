import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

export default function Home () {
  return (
    <>
      <NextSeo
        title="Uses - doamatto"
        description="I use a lot of apps and hardware. Built up over the years to work a treat for me."
      />
      <Head>
        <title>Uses - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Uses" subtitle="My favourite tools and software" />
      <div className="container">
        <section id="apps-and-services">
          <h2>Apps and Services</h2>
          <ul>
            <a href="https://1password.com">
              <li>
                <b>1Password</b><br/>
                I used Bitwarden for ages (still recommend it for those who need a password maanger). 1Password is way more polished, however.
              </li>
            </a>
            <a href="https://adguard.com/en/adguard-ios/overview.html">
              <li>
                <b>AdGuard</b><br/>
                Thanks to Safari's content blocker API for iOS, AdGuard is easily one of the best tools to keep nasty ads and other trackers at bay.
              </li>
            </a>
            <a href="https://www.alfredapp.com/">
              <li>
                <b>Alfred</b><br/>
                Imagine Spotlight Search, but on steroids.
              </li>
            </a>
            <a href="https://apolloapp.io/">
              <li>
                <b>Apollo</b><br/>
                As most everyone will tell you, this is easily the best third-party Reddit app on the App Store.
              </li>
            </a>
            <a href="https://bandcamp.com">
              <li>
                <b>Bandcamp</b><br/>
                Although most of this is related to stuff I use during work, Bandcamp is a no brainer for great music from small artists.
              </li>
            </a>
            <a href="https://duolingo.com">
              <li>
                <b><a href="https://www.duolingo.com/profile/notdoamatto">Duolingo</a></b><br/>
                I know English, French, and (still working on) Japanese all thanks to good ol' Duo. <a href="https://hg1.funnyjunk.com/pictures/Duolingo+memes_392d45_6518266.png">Just don't skip a lesson, or else.</a>
              </li>
            </a>
            <a href="https://figma.com">
              <li>
                <b>Figma</b><br/>
                As most everyone else will tell you, Figma is smashingly great design tool that lets you do some crazy stuff with almost no effort.
              </li>
            </a>
            <a href="https://gumroad.com">
              <li>
                <b>Gumroad</b><br/>
                Easily one of the best places for creators to sell their products online (be it digital or physical).
              </li>
            </a>
            <a href="https://namecheap.com">
              <li>
                <b>Namecheap</b><br/>
                Easily one of the best domain providers out there.
              </li>
            </a>
            <a href="https://nextjs.org">
              <li>
                <b>Next.js</b><br/>
                The best way to build React-based websites.
              </li>
            </a>
            <a href="https://pocketcasts.com">
              <li>
                <b>Pocket Casts</b><br/>
                Easily the greatest podcast client ever. Still hate that they switched to a subscription-model. Still love that they grandfathered me to a lifetime plan.
              </li>
            </a>
            <a href="https://renovate.whitesourcesoftware.com">
              <li>
                <b>Renovate (by Whitesource)</b><br/>
                Although people sometimes prefer <a href="https://dependabot.com/">GitHub's Dependabot</a> (I use both), Renovate has always been for me a faster way to update dependencies and easily see what needs to be fixed, in the event of breaking changes.
              </li>
            </a>
            <a href="https://sublimetext.com">
              <li>
                <b>Sublime Text</b><br/>
                A wickedly fast and powerful text editor. Only reason I rarely use it is because it doesn't have a lot of convience, even with plugins. (See VSCodium below)
              </li>
            </a>
            <a href="https://tailwindcss.com">
              <li>
                <b>Tailwind CSS</b><br/>
                At first, you will probably find it stupid. After you deploy one thing with Tailwind though, you probably won't want to go back to SCSS/LESS.
              </li>
            </a>
            <a href="https://vercel.com">
              <li>
                <b>Vercel</b><br/>
                This site, as well as a crap ton of my web projects, run on Vercel. It's easily one of my favourtie hosting providers and works a treat with Next.js (which this site is built on).
              </li>
            </a>
            <a href="https://vscodium.com">
              <li>
                <b>VSCodium</b><br/>
                Imagine Virtual Studio Code, minus the tracking and bloat from Microsoft. Easily my favourite text editor.
              </li>
            </a>
          </ul>
        </section>
        <section id="hardware">
          <h2>Hardware</h2>
          <h4>Computer / Office</h4>
          <ul>
            <li>21.5" Acer KG221Q</li>
            <li>AKG K712 Pro (open-back)</li>
            <li>Audio-Technica ATH-M50x (closed-back)</li>
            <li>Corsair M65 Elite</li>
            <li>Ikea Markus</li>
            <li>Razer Blackwidow X</li>
            <li>Schiit Magni 3 and Modi 3</li>
          </ul>
          <h4>On-the-go / Everyday Carry</h4>
          <p>Although, how much of "on-the-go" are we doing right now?</p>
          <ul>
            <li>Anker PowerCore+ 26800PD</li>
            <li>Anker (SD/microSD) Card Reader</li>
            <li>Lightning to 3.5mm (sadly essential)</li>
            <li>
              SanDisk Ultra Dual Drive (256Go; great for people like me who use computers that use computers that have either USB-C or USB-A, but not both
            </li>
          </ul>
          <h4>Other tech</h4>
          <ul>
            <li>Apple iPhone 12 Pro Max</li>
            <li>Nintendo Switch</li>
          </ul>
        </section>
      </div>
    </>
  )
}