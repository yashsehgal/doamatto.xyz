import React from 'react'
import { staticProps, staticPaths, MDXComponents } from '@/lib/postData';
import hydrate from 'next-mdx-remote/hydrate';
import {default as Page} from '@/components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function ProjectPage({mdxSource, frontMatter}) {
    const content = hydrate(mdxSource, {
      components: MDXComponents
    });
    return <Page frontMatter={frontMatter}>{content}</Page>
}

export const getStaticPaths: GetStaticPaths = async () =>  {
  return staticPaths('projects')
}
  
export const getStaticProps: GetStaticProps = async ({params}) => {
    return staticProps('projects', {params})
}
