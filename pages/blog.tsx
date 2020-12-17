import React from 'react'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
const styles = require('./blog.module.scss')
import {GetStaticProps} from 'next'
import dynamic from 'next/dynamic'
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
  const fileNames = fs.readdirSync(path.join(process.cwd(), 'posts'))
  const postData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(process.cwd(), 'posts', fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as {
        title: string
        date: string
        slug: string
        id: string
      })
    }
  })
  return postData.sort((a,b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}