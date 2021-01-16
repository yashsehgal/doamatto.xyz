import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { SpotifyAlbumWidget } from '@/components/spotify'
const Header = dynamic(() => import('@/components/header'))

export default function Home () {
  return (
    <>
      <NextSeo
        title="About - doamatto"
        description="I'm a very interesting person, to say the least."
      />
      <Head>
        <title>About - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="About" />
      <div className="content">
          <p>
              <b>Hello and bienvenue! My name is Matt Ronchetto.</b> I’m a high school
              student based in sunny California who loves to make software that works
              and looks great, and experiment with as much as I can.
              <br/><br/>
              Outside of developing software, I also like doing graphic design, web
              development, A/V editing, and listening to a wide assortment of music.
              I’ve taken up an interest in:
              <ul>
                  <li>Homelabbing,</li>
                  <li>The Linux kernel and Linux distros,</li>
                  <li>iPods,</li>
                  <li>Forumla racing, and:</li>
                  <li>Lossless forms of media.</li>
              </ul>

              <h2>Notable works and contributions</h2>
              <ul>
                <li>The Nano Jekyll theme (<LearnMore href="https://git.doamatto.xyz/nano"/>)</li>
                <li>About 200 additions to PrivacySpy (<LearnMore href="https://privacyspy.org"/>)</li>
                <li>An ESlint plugin for Gulp (<LearnMore href="https://github.com/doamatto/gulp-eslint"/>)</li>
                <li>The Mello meditation app (<LearnMore href="https://github.com/mello-app"/>)</li>
              </ul>

              <h2>Outside of "work" and work</h2>
              <p>
                In my free time, I enjoy experimenting with hardware (like Raspberry Pis
                and Arduinos) and programming languages (like Dart, Elm, and GraphQL).
                I have gained a large interest in Formula racing, with one of my favourite
                tracks being <a href="https://en.wikipedia.org/wiki/Albert_Park_Circuit">the Albert Park's circuit.</a>
                <br/><br/>
                I have a crippling addiction to music in the best way possible. I listen
                to things as popular as the new hits on the Billboard 100 to as niche as
                indie bands from foreign countries. Right now, I’ve been diving into a
                lot of music from Japan. My favourite album right now is the soundtrack
                to Netflix’s show “BNA,” specifically “NIGHT RUNNING” (both versions),
                “Ready to”, and “Wish.” You can see what I'm listening to now <a href="/favourites">here.</a>
                <SpotifyAlbumWidget albumId="20vl1N1IXzKOoUGC4BPE0p" />
                <br/><br/>
                I love improving, and because of that, I've taken to
                learning things, both big and small. Some of the cool
                things I've picked up are:
                <ul>
                  <li>
                    ~90 words per minutes on <a href="https://workmanlayout.org/">the Workman layout</a> in
                    about a month (I can do ~140 words per minute on QWERTY)
                  </li>
                  <li>
                    Currently learning Japanese as a third language
                    (My native tongue is English and I've picked up a good
                    amount of French).
                  </li>
                  <li>
                    Using Garageband as intended (to make music and/or soundtracks)
                  </li>
                  <li>
                    Currently learning Dart (for usage with Flutter), Rust,
                    C# (for usage for KSP), and Kotlin (for usage with Flutter). 
                  </li>
                </ul>
              </p>
              
              <h2>Miscellaneous</h2>
              <p>
                You can find me on these sites (anything else is most likely not me):
                <ul>
                  <li><a href="https://be.net/doamatto">Behance as @doamatto</a></li>
                  <li><a href="https://github.com/doamatto">GitHub as @doamatto</a></li>
                  <li><a href="https://keybase.io/doamatto">Keybase as @doamatto</a></li>
                  <li><a href="https://twitter.com/doamatto">Twitter as @doamatto</a></li>
                </ul>
              </p>
          </p>
      </div>
    </>
  )
}

export function LearnMore({ href }: {href: string}) {
  return (
    <a href={href}>Learn more &rarr;</a>
  )
}