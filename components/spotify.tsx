const React = require('react')
import * as https from 'https'
import {default as Logo} from './logos/spotify'
import styles from './spotify.module.scss'

export default function Main() {
  return console.error("You need to specify one of the widgets to use this");
}

var obj: any

export function SpotifyAlbumWidget({albumId, token}:{albumId: string, token: string}) {
    https.get(`https://api.spotify.com/v1/albums/${albumId}`, {
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
