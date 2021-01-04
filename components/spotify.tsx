import React from 'react'
import fetch from 'isomorphic-unfetch'
import querystring from 'querystring'

import {default as Logo} from './logos/spotify'
import styles from './spotify.module.scss'

export default function Main() { return console.error("You need to specify one of the widgets to use this"); }

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
export async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })
  return res.json()
}

export const albumRequest = async (albumId:string) => {
  const {access_token} = await getAccessToken()
  const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export const trackRequest = async (trackId:string) => {
  const {access_token} = await getAccessToken()
  const res = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export async function SpotifyAlbumWidget({albumId}:{albumId: string}) {
  const res = await albumRequest(albumId)
  const albumArt = res.images[1].url,
        albumName = res.name,
        artist = res.artists[0].name,
        url = res.external_urls.spotify
  return (
    <div className={styles.widget}>
      <img
        alt={albumName}
        className={styles.albumArt}
        src={albumArt}
        width="128"
        height="128"
      />
      <div className={styles.mid}>
        <div className={styles.albumInfo}>
          <p className={styles.title}>{albumName}</p>
          <p className={styles.artist}>by <b className={styles.artistBold}>{artist}</b></p>
        </div>
        <div className={styles.cta}>
          <a href={url} title="Open in Spotify">
            <p className={styles.ctaText}>Open in Spotify</p>
          </a>
        </div>
      </div>
      <Logo />
    </div>
  )
}

export async function SpotifyTrackWidget({trackId}:{trackId: string}) {
  const res = await trackRequest(trackId)
  var albumArt = res.album.images[1].url,
      albumName = res.album.name,
      title = res.name,
      artist = res.artists[0].name,
      url = res.external_urls.spotify
  return (
    <div className={styles.widget}>
      <img src={albumArt}
           alt={albumName}
           width="128"
           height="128"
           className={styles.albumArt}
      />
      <div className={styles.mid}>
        <div className={styles.albumInfo}>
          <p className={styles.title}>{title}</p>
          <p className={styles.artist}>{artist}</p>
        </div>
        <div className={styles.cta}>
          <a href={url} title="Open in Spotify">
            <p className={styles.ctaText}>Open in Spotify</p>
          </a>
        </div>
      </div>
      <Logo />
    </div>
  )
}
