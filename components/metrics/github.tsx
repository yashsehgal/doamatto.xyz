import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import dynamic from 'next/dynamic'
import format from 'comma-number'

const Item = dynamic(() => import('@/components/dashboard-item'))

export default function Unsplash() {
  const { data } = useSWR(`/api/github`, fetcher)

  const followers = format(data?.followers)
  const stargazers = format(data?.stargazers)
  
  return (
    <>
      <Item value={followers}
            caption="GitHub followers"
            link="https://github.com/doamatto"
            service="GitHub" />
      <Item value={stargazers}
            caption="Github stars"
            link="https://github.com/doamatto"
            service="GitHub" />
    </>
  )
}