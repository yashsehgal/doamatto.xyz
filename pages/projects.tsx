import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import dynamic from 'next/dynamic'
import { getSortedPostsData } from '@/lib/feedData'
const Header = dynamic(() => import('@/components/header'))

export default function IndexPage ({ postData }:{
  postData: {
    title: string
    date: string
    slug: string
    id: string
    tag: string
    tagShort: string
    description: string
  }[]
}) {
  return (
    <>
    <NextSeo
      title="Projects - doamatto"
      description = "I've made a lot of stuff over time. Here's a collection of it all."
    />
    <div>
      <Header title="Projects" />
      <div className="posts">
        {postData.map(({ title, date, slug, id, description, tag, tagShort }) => (
          <section className="post" key={id} id={id}>
            <Link href={`/projects/${slug}`}>
              <a className="link">
                <p className="minor">Last status update on {date}</p>
                {title}
                <p className="minor">{description}</p>
                <p className={`${tagShort} tag`}>{tag}</p>
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = getSortedPostsData('other')
  return {
    props: {
      postData
    }
  }
}
