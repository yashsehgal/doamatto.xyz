import {Post} from '../schemas' 
const fs = require('fs')
const RSS = require('rss')
const matter = require('gray-matter')

function dateSortDesc(a: any, b:any) {
  let d1 = new Date(a.date)
  let d2 = new Date(b.date)
  if (d1>d2) return -1
  if (d1<d2) return 1
  return 0
}

function fetchPosts(filePath: string) {
  const fg = require('fast-glob')
  const files = fg.sync(`${filePath}**/*.md`)
  return files
}

function generate() {
  const posts = getPosts()
  const feed = new RSS({
    title: "doamatto's blog",
    site_url: "https://doamatto.xyz",
    feed_url: "https://doamatto.xyz/feed.xml"
  })

  posts.sort(dateSortDesc).map((post: Post) => {
    feed.item({
      title: post.title,
      guid: post.slug,
      url: `https://doamatto.xyz/blog/${post.slug}`,
      date: post.date,
      description: post.description,
      author: "Matt Ronchetto (doamatto)"
    })
  })

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("./public/feed.xml", rss);
}

function getPosts() {
  const files = fetchPosts(`data/posts`)
  const posts: Array<Post> = files.map((file:string) => {
    const content = fs.readFileSync(`${file}`, 'utf-8')
    const data = matter(content)
    return {
      title: data.data.title || "",
      date: data.data.date || "",
      slug: data.data.slug || "",
      id: data.data.slug || "",
      tag: data.data.tag || "",
      tagShort: data.data.tagShort || "",
      description: data.data.description || "",
      content: data.data.content,
    }
  })

  return posts
}

generate()