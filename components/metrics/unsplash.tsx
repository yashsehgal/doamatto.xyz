import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import dynamic from 'next/dynamic'
import format from 'comma-number'

const Item = dynamic(() => import('@/components/dashboard-item'))

export default function Unsplash() {
  const { data } = useSWR(`/api/unsplash`, fetcher)

  const followers = format(data?.followers)
  const downloads = format(data?.downloads)
  
  return (
    <>
      <Item value={followers}
            caption="Unsplash followers"
            link="https://unsplash.com/doamatto"
            service="Unsplash" />
      <Item value={downloads}
            caption="Unsplash downloads"
            link="https://unsplash.com/doamatto"
            service="Unsplash" />
    </>
  )
}