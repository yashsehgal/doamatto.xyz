import { getAlbum } from '@/lib/spotify'

export default async (req, res) => {
  const albumId = await req.query.albumId
  const response = await getAlbum({ albumId })
  const data = await response.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({
    artist: data.artists[0].name,
    url: data.external_urls.spotify,
    albumName: data.name,
    albumArt: data.images[1].url,
    id: data.id
  })
}
