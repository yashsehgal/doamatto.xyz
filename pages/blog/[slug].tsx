import React from 'react'
import Head from 'next/head'
import {NextSeo} from 'next-seo'
import { GetStaticProps, GetStaticPaths } from 'next'
import { staticPaths, staticProps } from '../../lib/postData'

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
                <h1 className="header">{props.blog.title}</h1>
                <section dangerouslySetInnerHTML={{
                    __html: props.blog.content
                }} />
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return staticProps(context, 'blog')
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    return staticPaths(context, 'blog')
}

export default BlogPostPage
