import React from 'react'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
const styles = require('./blog.module.scss')
import {GetStaticProps} from 'next'

export default function IndexPage({postData}:{
  postData: {
    title: string
    date: string
    description: string
    slug: string
    id: string
  }[]
}) {
  return(
    <div>
      <h1>Posts</h1>
      <ul>
        {postData.map(({title,date,description,slug,id}) => (
          <li id={id}>
            <Link href={`/blog/${slug}`}>
              <a>
                {date}<br />
                {title}<br />
                {description}<br />
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
        description: string
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