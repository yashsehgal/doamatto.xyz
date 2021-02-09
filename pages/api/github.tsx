import { fetchData } from '@/lib/github'

export default async (_, res) => {
  const data = await fetchData()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).json({data})
}
