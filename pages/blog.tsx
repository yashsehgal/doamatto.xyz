import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function IndexPage({
    props
    }: {
        props: {
            blog: {
                title: string
                date: string
                description: string
                slug: string
            }
        }
    }) {
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                <li key={props.blog.slug}>
                    <Link href={`/blog/${props.blog.slug}`}>
                        <a>{props.blog.date}<br />{props.blog.title}</a>
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
    const blogs = files
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
      props: { blogs },
    }
}