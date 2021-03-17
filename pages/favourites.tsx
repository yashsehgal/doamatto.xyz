import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import {
  SpotifyTrackWidget as Track,
  SpotifyAlbumWidget as Album,
  SpotifyNowPlayingWidget as NowPlaying
} from '@/components/spotify'
import styles from './favourites.module.scss'
const Header = dynamic(() => import('@/components/header'))

export default function Favourites () {
  return (
        <>
            <Head>
                <title>Favourites - doamatto</title>
            </Head>
            <NextSeo
                title="Favourites - doamatto"
                description="My favourite songs that I can't get enough of."
            />
            <Header title="Favourites" />
            <div className="content">
              <div className={styles.buttons}>
                <a href="https://open.spotify.com/playlist/1TgcMEtUJs4zjnRoc5ug4i?si=u35un3OETHefGgkM0s_xlw" className="button">
                  Open as a playlist in Spotify
                </a>
              </div>
              <Album albumId="4LNYKUdrU1uveWwFBs61B6" />
              <Track trackId="0KSwRztSienVSJMD0l6zxF" />
              <Track trackId="4GJAd1nBylAEbw1dZDVzEQ" />
              <Track trackId="5qMaTPF9U4y1NH36jqxkET" />
              <Album albumId="6kf46HbnYCZzP6rjvQHYzg" />
              <Track trackId="06FCvd7rrRcF3DdvWH5Isp" />
              <Album albumId="6VtEyh4lKKk1Yjui9wWKhV" />
              <hr/>
              <h1> Currently listening to: </h1>
              <NowPlaying />
            </div>
        </>
  )
}
