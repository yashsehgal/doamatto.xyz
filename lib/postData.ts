import fs from 'fs'
import readingTime from 'reading-time'
import Image from 'next/image'
import mdxPrism from 'mdx-prism'
import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'
import path from 'path'

const root = process.cwd()
export const MDXComponents = { Image }

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug')
      ],
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  };
}

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}