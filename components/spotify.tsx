const React = require('react')
import * as https from 'https'
import request from 'request'
import querystring from 'querystring'

import {default as Logo} from './logos/spotify'
import styles from './spotify.module.scss'

export default function Main() {
  return console.error("You need to specify one of the widgets to use this");
}

var obj: any
const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const access_token = getAccessToken()
console.log(access_token)
console.log('=== ==== ===')

export function getAccessToken() {
  const data = querystring.stringify({
    grant_type: refresh_token,
    refresh_token: refresh_token
  })

  const options = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  }

  let token;
  const req = request(options, (err, res) => {
    if(err) return console.error(err)
    const resData = JSON.parse(res.body)
    token = resData.access_token

  })
  req.write(data);
  req.end()
  return token
}

export function SpotifyAlbumWidget({albumId}:{albumId: string}) {
  https.get(`https://api.spotify.com/v1/albums/${albumId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  }, (res: any) => {
    let data: any = '';
    res.on('data', (chunk: any) => {
      data += chunk;
    })
    res.on('end', () => {
      let d = JSON.parse(data)
      var albumArt = d.images[1].url,
      albumName = d.name,
      artist = d.artists[0].name,
      url = d.external_urls.spotify

      obj = (
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
              <a href={url} title="Open in Spotify"><p className={styles.ctaText}>Open in Spotify</p></a>
            </div>
          </div>
          <Logo />
        </div>
        )
    })
  }).on('error', (err: string) => { return console.error(err) })
  return obj
}

export function SpotifyTrackWidget({albumId, token}:{albumId: string, token: string}) {
  https.get(`https://api.spotify.com/v1/tracks/${albumId}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}, (res: any) => {
  let data: any = '';
  res.on('data', (chunk: any) => {
    data += chunk;
  })
  res.on('end', () => {
    let d = JSON.parse(data)
    var albumArt = d.album.images[1].url,
    albumName = d.album.name,
    title = d.name,
    artist = d.artists[0].name,
    url = d.external_urls.spotify
    obj = (
      <div className="widget">
      <img src={albumArt}
      alt={albumName}
      width="128"
      height="128"
      className="albumArt"
      />
      <div>
      <p className="title">{title}</p>
      <p className="artist">{artist}</p>
      <a href={url} title={`Listen to ${title} on Spotify`} className="open">Open in Spotify</a>
      </div>
      <Logo />
      </div>
      )
    })
  }).on('error', (err: string) => { console.error(err) })
  return obj
}
