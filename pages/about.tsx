import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { SpotifyMiniAlbumWidget } from '@/components/spotify'
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
      <div className="antialised prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto dark:prose-dark">
        <div id="intro">
          <Image
              src="/assets/landscape.webp"
              width={256}
              height={75}
          />
          <p>
            <b>Hello and bienvenue! My name is Matt Ronchetto.</b> I'm a high school student in sunny San Diego, CA, that expresses myself through too many medians to count. I'm best known for my software and design work, thought.
            <br/>
            Over time, I've picked up hobbies and niches that I enjoy and constantly do (which may explain my lack of freetime during the week haha).
          </p>
        </div>
        <div id="interests">
          <h2>My interests</h2>
          <h3 id="music">Music</h3>
          <p>
            I love music.. almost too much. I've dived head first into being an avid audiophile, and don't plan on looking back. I enjoy making the occasional song or beat still. Most anything I publish is only on <a href="https://soundcloud.com/doamatto">Soundcloud</a> or <a href="https://doamatto.bandcamp.com">Bandcamp</a>. Here are some of my favourite albums as of late:
          </p>
          <div className="grid grid-rows-2 grid-flow-col justify-center">
            <SpotifyMiniAlbumWidget albumId="1kwAv74rVTTGMpawGsXtiE" />
            <SpotifyMiniAlbumWidget albumId="78ZshSpqcIXyrYBJGgiPK0" />
            <SpotifyMiniAlbumWidget albumId="6VtEyh4lKKk1Yjui9wWKhV" />
            <SpotifyMiniAlbumWidget albumId="26IdRjba8f8DNa7c0FwfQb" />
            <SpotifyMiniAlbumWidget albumId="3DGQ1iZ9XKUQxAUWjfC34w" />
            <SpotifyMiniAlbumWidget albumId="6KT8x5oqZJl9CcnM66hddo" />
          </div>
          <h3 id="sports">Sports</h3>
          <p>
            I've never been huge into anything sports-wise. However, I have taken a liking as of late to Formula racing, as well as football (commonly called « soccer » in the states). <span className="text-orange">McLaren all the way :)</span>
          </p>
          <h3 id="programming">Programming</h3>
          <p>
            I've been messing around with software and programming for the past 5 years or so now. I program mostly in TypeScript and Rust, but I've been trying to get into Golang and Elm as well. Anything I make that's public is on <a href="https://github.com/doamatto">GitHub</a>.
          </p>
          <h3 id="art">Art and graphic design</h3>
          <p>
            I'm not the greatest, but I take a good amount of pride in my design "tastes" and have slowly worked towards.
          </p>
        </div>
      </div>
    </>
  )
}

export function LearnMore ({ href }: {href: string}) {
  return (
    <a href={href}>Learn more &rarr;</a>
  )
}
