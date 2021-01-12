import { getTrack } from '@/lib/spotify'

export default async (req, res) => {
  const response = await getTrack(req.query.trackId)
  const data = await response.json()

  const trackData = {
    albumArt: data.album.images[1].url,
    albumName: data.album.name,
    title: data.name,
    artist: data.artists[0].name,
    url: data.external_urls.spotify
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({ trackData })
};