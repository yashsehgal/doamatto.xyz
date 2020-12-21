import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export function getSortedPostsData(type: string) {
  var dir: string;
  if (type === "blog") {
    dir = path.join(process.cwd(), 'data/posts')
  } else {
    dir = path.join(process.cwd(), 'data/projects')
  }
  const fileNames = fs.readdirSync(dir)
  const postData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(dir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as {
        title: string
        date: string
        slug: string
        id: string
        tag: string
        description: string
      })
    }
  })
  if(type === "blog") {
    return postData.sort((a,b) => {
      if(a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } else {
    return postData
  }
}