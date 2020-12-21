import React from 'react'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {NextSeo} from 'next-seo'
const styles = require('./blog.module.scss')
import {GetStaticProps} from 'next'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/header'))

export default function IndexPage({postData}:{
  postData: {
    title: string
    slug: string
    id: string
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
        {postData.map(({title,slug,id}) => (
          <li className={styles.post} key={id} id={id}>
            <Link href={`/projects/${slug}`}>
              <a className={styles.link}>
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
  const postData = getSortedPostsData()
  return {
    props: {
      postData
    }
  }
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), 'data/projects'))
  const postData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(process.cwd(), 'data/projects', fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as {
        title: string
        slug: string
        id: string
      })
    }
  })
  return postData
}