import React from 'react'
import { staticProps, staticPaths, MDXComponents } from '@/lib/postData'
import { NextSeo } from 'next-seo'
import hydrate from 'next-mdx-remote/hydrate'
import { default as Page } from '@/components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function ProjectPage ({ mdxSource, frontMatter }) {
  const title = frontMatter.title
  const description = frontMatter.description
  const date = frontMatter.date
  
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })
  
  return (
    <NextSeo
      title={title}
      description={description}
    />
    <Head>
      <title>{title} - doamatto</title>
    </Head>
    <Page frontMatter={frontMatter}>{content}</Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return staticPaths('projects')
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return staticProps('projects', { params })
}
