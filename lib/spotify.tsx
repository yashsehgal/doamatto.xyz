import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
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
};

export const getAlbum = async ({albumId}:{albumId:string}) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getTrack = async ({trackId}:{trackId:string}) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};