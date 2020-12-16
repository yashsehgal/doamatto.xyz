import React from 'react'
import Head from 'next/head'

import styles from './[slug].module.scss'

import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('../../components/nav'))

/**
  * Major thanks to this Dev.to post:
  * https://dev.to/sagar/building-a-blog-with-next-js-253
  */

function BlogPostPage(props) {
    return(
        <>
            <Head>
                <title>{props.blog.title} - doamatto</title>
            </Head>
            <Navigation />
            <div>
                <h1 className={styles.header}>{props.blog.title}</h1>
                <section dangerouslySetInnerHTML={{
                    __html: props.blog.content
                }} />
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const fs = require('fs')
    const html = require('remark-html')
    const unified = require('unified')
    const markdown = require('remark-parse')
    const matter = require('gray-matter')
    const slug = context.params.slug
    const path = `${process.cwd()}/posts/${slug}.md`
    const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
    })
    const { data, content } = matter(rawContent)
    const result = await unified()
        .use(markdown)
        .use(html)
        .process(content)
    
    return {
        props: {
            blog: {
                ...data,
                content: result.toString(),
            }
        }
    }
}

export async function getStaticPaths(context) {
    const fs = require('fs')
    const path = `${process.cwd()}/posts`
    const files = fs.readdirSync(path, 'utf-8')
    const markdownFileNames = files
        .filter((fn) => fn.endsWith('.md'))
        .map((fn) => fn.replace('.md', ''))

    return {
        paths: markdownFileNames.map((fileName) => {
            return {
                params: {
                    slug: fileName,
                },
            }
        }),
        fallback: false,
    }
}

export default BlogPostPage