import React from 'react'
import Link from 'next/link'

function IndexPage(props) {
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {props.blogs.map((blog, idx) => {
                    return(
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.slug}`}>
                                <a>{blog.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const fs = require("fs")
    const matter = require("gray-matter")
    const { v4: uuid } = require("uuid")
    const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8")
    const blogs = files
      .filter((fn) => fn.endsWith(".md"))
      .map((fn) => {
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
  
  export default IndexPage