import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import dynamic from 'next/dynamic'
import format from 'comma-number'

const Item = dynamic(() => import('@/components/dashboard-item'))

export default function Unsplash() {
  const { data } = useSWR(`/api/youtube`, fetcher)

  const followers = format(data?.followers)
  const downloads = format(data?.downloads)
  
  return (
    <>
      <Item value={followers}
            caption="YouTube views"
            link="https://overto.doamatto.xyz/youtube" />
      <Item value={downloads}
            caption="YouTube subscribers"
            link="https://overto.doamatto.xyz/youtube" />
    </>
  )
}