import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

import Item from '@/components/item'

export default function uses() {
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
      <div className="content" id="mainContent">
        <section id="apps-and-services">
          <h2>Apps and Services</h2>
          <Item
            imageId="1password" 
            title="1Password"
            description="I used Bitwarden for ages (still recommend it for those who need a password maanger). 1Password is way more polished, however."
            url="https://1password.com"
            />
          <Item
            title="AdGuard"
            imageId="guard"
            description="Thanks to Safari's content blocker API for iOS, AdGuard is easily one of the best tools to keep nasty ads and other trackers at bay."
            url="https://adguard.com/adguard-ios/overview.html"
            />
          <Item
            title="Alfred"
            imageId="alfred"
            description="Alfred is essentially Spotlight Search, but on steriods. An essential for anyone who uses a Mac."
            url="https://www.alfredapp.com/"
            />
          <Item
            title="Apollo"
            imageId="apollo"
            description="As most everyone will tell you, this is easily the best third-party Reddit app on the App Store."
            url="https://apolloapp.io"
            />
          <Item
            title="Bandcamp"
            imageId="bandcamp"
            description="Although most of this is related to stuff I use during work, Bandcamp is a no brainer for great music from small artists."
            url="https://bandcamp.com"
            />
          <Item
            title="Duolingo"
            imageId="duolingo"
            titleUrl="https://duolingo.com/profile/notdoamatto"
            description="I know English, French, and (still working on) Japanese all thanks to good ol' Duo. Just don't skip a lesson, or else."
            url="https://duolingo.com"
            />
          <Item
            title="Figma"
            imageId="figma"
            description="As most everyone else will tell you, Figma is smashingly great design tool that lets you do some crazy stuff with almost no effort."
            url="https://figma.com"
            />
          <Item
            title="Gumroad"
            imageId="gumroad"
            description="Easily one of the best places for creators to sell their products online (be it digital or physical)."
            url="https://gumroad.com"
            />
          <Item
            title="Namecheap"
            imageId="namecheap"
            description="Namecheap is easily one of the best domain providers out there. They've got crazy fast support and are privacy-friendly."
            url="https://namecheap.com"
            />
          <Item
            title="Next.js"
            imageId="nextjs"
            description="Next.js is the best way to build a React-based website. It's used from companies and people big and small (this site was built with Next.js)."
            url="https://nextjs.org"
            />
          <Item
            title="Pocket Casts"
            imageId="pocketcasts"
            description="Easily the greatest podcast client ever. Still hate that they switched to a subscription-model. Still love that they grandfathered me to a lifetime plan."
            url="https://pocketcasts.com"
            />
          <Item
            title="Renovate (by Whitesource)"
            imageId="renovate"
            description="Although people sometimes prefer GitHub's Dependabot (I use both), Renovate has always been for me a faster way to update dependencies and easily see what needs to be fixed, in the event of breaking changes."
            url="https://renovate.whitesourcesoftware.com"
            />
          <Item
            title="Sublime Text"
            imageId="sublime"
            description="A wickedly fast and powerful text editor. Only reason I rarely use it is because it doesn't have a lot of convience, even with plugins. (See VSCodium below)"
            url="https://sublimetext.com"
            />
          <Item
            title="Tailwind CSS"
            imageId="tailwind"
            description="At first, you will probably find it stupid. After you deploy one thing with Tailwind though, you probably won't want to go back to SCSS/LESS."
            url="https://tailwindcss.com"
            />
          <Item
            title="Vercel"
            imageId="vercel"
            description="This site, as well as a crap ton of my web projects, run on Vercel. It's easily one of my favourtie hosting providers and works a treat with Next.js (which this site is built on)."
            url="https://vercel.com"
            />
          <Item
            title="VSCodium"
            imageId="vscodium"
            description="Imagine Virtual Studio Code, minus the tracking and bloat from Microsoft. Easily my favourite text editor."
            url="https://vscodium.com"
            />
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