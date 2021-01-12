import { getAlbum } from '@/lib/spotify'

export default async (req, res) => {
  const response = await getAlbum(req.query.albumId)
  const { items } = await response.json()

  const albumData = items.slice(0, 10).map((data) => ({
    artist: data.artists.map((_artist) => _artist.name).join(', '),
    url: data.external_urls.spotify,
    albumName: data.name,
    albumArt: data.images[1].url
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({ albumData })
};