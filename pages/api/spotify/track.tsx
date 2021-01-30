import { getTrack } from '@/lib/spotify'

export default async (req, res) => {
  const trackId = await req.query.trackId
  const response = await getTrack({ trackId })
  const data = await response.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({
    albumArt: data.album.images[1].url,
    albumName: data.album.name,
    title: data.name,
    artist: data.artists[0].name,
    url: data.external_urls.spotify,
    id: data.id
  })
}
