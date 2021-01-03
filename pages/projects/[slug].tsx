import React from 'react'
import { getFiles, getFileBySlug, MDXComponents } from '@/lib/postData';
import hydrate from 'next-mdx-remote/hydrate';
import {default as Page} from '@/components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'

/**
  * Major thanks to this Dev.to post:
  * https://dev.to/sagar/building-a-blog-with-next-js-253
  *
  */

export default function ProjectPage({mdxSource, frontMatter}) {
    const content = hydrate(mdxSource, {
      components: MDXComponents
    });
    return <Page frontMatter={frontMatter}>{content}</Page>
}

export const getStaticPaths: GetStaticPaths = async () =>  {
    const posts = await getFiles('posts');
    return {
      paths: posts.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, '')
        }
      })),
      fallback: false
    };
  }
  
export const getStaticProps: GetStaticProps = async ({params}) => {
    const post = await getFileBySlug('posts', params.slug);
    return { props: post };
}