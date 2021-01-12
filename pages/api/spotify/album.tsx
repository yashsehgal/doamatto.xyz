import { getAlbum } from '@/lib/spotify'

export default async (req, res) => {
  const response = await getAlbum(req.query.albumId)
  const data = await response.json()

  const albumData = {
    artist: data.artists[0].name,
    url: data.external_urls.spotify,
    albumName: data.name,
    albumArt: data.images[1].url
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({ albumData })
};