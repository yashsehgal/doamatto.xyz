import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export function getSortedPostsData(type: string) {
  const fileNames = fs.readdirSync(path.join(process.cwd(), 'data/projects'))
  const postData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(process.cwd(), 'data/projects', fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as {
        title: string
        date: string
        slug: string
        id: string
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