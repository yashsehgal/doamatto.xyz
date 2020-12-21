import React from 'react'
import Link from 'next/link'
import {NextSeo} from 'next-seo'
const styles = require('./blog.module.scss')
import {GetStaticProps} from 'next'
import dynamic from 'next/dynamic'
import { getSortedPostsData } from '../lib/postsData'
const Header = dynamic(() => import('../components/header'))

export default function IndexPage({postData}:{
  postData: {
    title: string
    slug: string
    id: string
    description: string
  }[]
}) {
  return(
    <>
    <NextSeo 
      title="Projects - doamatto"
      description = "I've made a lot of stuff over time. Here's a collection of it all."
    />
    <div>
      <Header title="Projects" />
      <ul className={styles.posts}>
        {postData.map(({title,slug,id,description}) => (
          <li className={styles.post} key={id} id={id}>
            <Link href={`/projects/${slug}`}>
              <a className={styles.link}>
                {title}
                <p className={styles.minor}>{description}</p>
                </a>
            </Link>
          </li>
        ))}
      </ul>
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
