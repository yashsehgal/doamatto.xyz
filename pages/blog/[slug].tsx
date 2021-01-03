import React from 'react'
import { staticPaths, staticProps, MDXComponents } from '@/lib/postData';
import hydrate from 'next-mdx-remote/hydrate';
import {default as Page} from '@/components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function BlogPostPage({mdxSource, frontMatter}) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });
  return <Page frontMatter={frontMatter}>{content}</Page>
}

export const getStaticPaths: GetStaticPaths = async () =>  {
  return staticPaths('posts')
}
  
export const getStaticProps: GetStaticProps = async ({params}) => {
    return staticProps('posts', {params})
}
