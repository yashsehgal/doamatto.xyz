import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import dynamic from 'next/dynamic'
import format from 'comma-number'

const Item = dynamic(() => import('@/components/dashboard-item'))

export default function Youtube() {
  const { data } = useSWR(`/api/youtube`, fetcher)

  const views = format(data?.views)
  const subscribers = format(data?.subscribers)
  
  return (
    <>
      <Item value={views}
            caption="YouTube views"
            link="https://overto.doamatto.xyz/youtube" />
      <Item value={subscribers}
            caption="YouTube subscribers"
            link="https://overto.doamatto.xyz/youtube" />
    </>
  )
}