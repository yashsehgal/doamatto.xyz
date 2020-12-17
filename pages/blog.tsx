import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { stringify } from 'querystring'

export default function IndexPage(props) {
  return(
    <div>
      <h1>Posts</h1>
      <ul>
        <li key={props.blogs.id}>
          <Link href={`/blog/${props.blogs.slug}`}>
            <a>{props.blogs.date}<br />{props.blogs.title}</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const fs = require("fs")
    const matter = require("gray-matter")
    const { v4: uuid } = require("uuid")
    const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8")
    const blogs = await files
      .filter((fn: string) => fn.endsWith(".md"))
      .map((fn: any) => {
        const path = `${process.cwd()}/posts/${fn}`
        const rawContent = fs.readFileSync(path, {
          encoding: "utf-8",
        })
        const { data } = matter(rawContent)
  
        return { ...data, id: uuid() }
    })
    return {
      props: {
          blogs
      }
    }
}