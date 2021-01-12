import React from 'react'
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import {default as Logo} from './logos/spotify'
import styles from './spotify.module.scss'

export default function Main() { return console.error("You need to specify one of the widgets to use this"); }

export function SpotifyAlbumWidget({albumId}:{albumId: string}) {
  const { data } = useSWR(`/api/spotify/album?albumId=${albumId}`, fetcher)
  return (
    <div className={styles.widget}>
      <img
        alt={data?.albumName}
        className={styles.albumArt}
        src={data?.albumArt}
        width="128"
        height="128"
      />
      <div className={styles.mid}>
        <div className={styles.albumInfo}>
          <p className={styles.title}>{data?.albumName}</p>
          <p className={styles.artist}>by <b className={styles.artistBold}>{data?.artist}</b></p>
        </div>
        <div className={styles.cta}>
          <a href={data?.url} title="Open in Spotify">
            <p className={styles.ctaText}>Open in Spotify</p>
          </a>
        </div>
      </div>
      <Logo />
    </div>
  )
}

export function SpotifyTrackWidget({trackId}:{trackId: string}) {
  const { data } = useSWR(`/api/spotify/album?trackId=${trackId}`, fetcher)
  return (
    <div className={styles.widget}>
      <img src={data?.albumArt}
           alt={data?.albumName}
           width="128"
           height="128"
           className={styles.albumArt}
      />
      <div className={styles.mid}>
        <div className={styles.albumInfo}>
          <p className={styles.title}>{data?.title}</p>
          <p className={styles.artist}>{data?.artist}</p>
        </div>
        <div className={styles.cta}>
          <a href={data?.url} title="Open in Spotify">
            <p className={styles.ctaText}>Open in Spotify</p>
          </a>
        </div>
      </div>
      <Logo />
    </div>
  )
}
