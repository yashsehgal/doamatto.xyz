import { getNowPlaying } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getNowPlaying()
  const data = await response.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({
    albumArt: data.item.album.images[1].url,
    albumName: data.item.album.name,
    title: data.item.name,
    artist: data.item.artists[0].name,
    url: data.item.external_urls.spotify,
    id: data.item.id
  })
}
