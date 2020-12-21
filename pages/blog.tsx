import React from 'react'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {NextSeo} from 'next-seo'
const styles = require('./blog.module.scss')
import {GetStaticProps} from 'next'
import dynamic from 'next/dynamic'
import { getSortedPostsData } from '../lib/postsData'
const Header = dynamic(() => import('../components/header'))

export default function IndexPage({postData}:{
  postData: {
    title: string
    date: string
    slug: string
    id: string
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
      <ul className={styles.posts}>
        {postData.map(({title,date,slug,id}) => (
          <li className={styles.post} key={id} id={id}>
            <Link href={`/blog/${slug}`}>
              <a className={styles.link}>
                <p className={styles.minor}>{date}</p>
                {title}
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
  const postData = getSortedPostsData('blog')
  return {
    props: {
      postData
    }
  }
}