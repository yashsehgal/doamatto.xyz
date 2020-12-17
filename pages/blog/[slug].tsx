import React from 'react'
import Head from 'next/head'
import {NextSeo} from 'next-seo'
const styles = require('./[slug].module.scss')
import { GetStaticProps, GetStaticPaths } from 'next'

/**
  * Major thanks to this Dev.to post:
  * https://dev.to/sagar/building-a-blog-with-next-js-253
  *
  */

function BlogPostPage(props) {
    return(
        <>
            <NextSeo
                title={props.blog.title}
                description={props.blog.description}
            />
            <Head>
                <title>{props.blog.title} - doamatto</title>
            </Head>
            <div className="container">
                <h1 className={styles.header}>{props.blog.title}</h1>
                <section dangerouslySetInnerHTML={{
                    __html: props.blog.content
                }} />
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
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

export const getStaticPaths: GetStaticPaths = async (context) => {
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
