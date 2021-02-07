import React from 'react'
import { staticPaths, staticProps, MDXComponents } from '@/lib/postData'
import hydrate from 'next-mdx-remote/hydrate'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { default as Page } from '@/components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function BlogPostPage ({ mdxSource, frontMatter }) {
  const title = frontMatter.title
  const description = frontMatter.description
  const date = frontMatter.date
  
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })
  return (
    <>
      <NextSeo
        title={title}
        description={description}
      />
      <Head>
        <title>{title} - doamatto</title>
      </Head>
      <Page frontMatter={frontMatter}>{content}</Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return staticPaths('posts')
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return staticProps('posts', { params })
}
