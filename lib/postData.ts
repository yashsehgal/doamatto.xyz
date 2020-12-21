import fs from 'fs'
import html from 'remark-html'
import unified from 'unified'
import markdown from 'remark-parse'
import matter from 'gray-matter'

export async function staticProps(context:any, type:string) {
  var slug = context.params.slug
  var dir: string;
  if (type === "blog") {
    dir = `${process.cwd()}/data/posts/${slug}.md`
  } else {
    dir = `${process.cwd()}/data/projects/${slug}.md`
  }
  const rawContent = fs.readFileSync(dir, {
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
        content: result.toString()
      }
    }
  }
}

export async function staticPaths(context:any, type:string) {
  var dir: string;
  if (type === "blog") {
    dir = `${process.cwd()}/data/posts`
  } else {
    dir = `${process.cwd()}/data/projects`
  }
  const files = fs.readdirSync(dir, 'utf-8')
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