import React from 'react'
import Link from 'next/link'
import {NextSeo} from 'next-seo'
import {GetStaticProps} from 'next'

import dynamic from 'next/dynamic'
import { getSortedPostsData } from '@/lib/feedData'
const Header = dynamic(() => import('@/components/header'))

export default function IndexPage({postData}:{
  postData: {
    title: string
    date: string
    slug: string
    id: string,
    tag: string,
    description: string,
    tagShort: string
  }[]
}) {
  return(
    <>
    <NextSeo 
      title="Blog - doamatto"
      description = "I write blog posts about a lot of different stuff. Some are funny, others are serious, and some are just plain weird."
    />
    <div>
      <Header title="Blog" />
      <div className="posts">
        {postData.map(({title,date,description,slug,id,tag,tagShort}) => (
          <section className="post" key={id} id={id}>
            <Link href={`/blog/${slug}`}>
              <a className="link">
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
  const postData = getSortedPostsData('blog')
  return {
    props: {
      postData
    }
  }
}