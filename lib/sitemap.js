const fs = require('fs')
const globby = require('globby');

(async function () {
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!pages/_*.tsx',
    '!pages/api'
  ])
  const map = `<?xml version="1.0" encoding="utf-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => {
    const path = page
      .replace('pages', '')
      .replace('data', '')
      .replace('.tsx', '')
      .replace('.mdx', '')
    const route = path === '/index' ? '' : path
    return `
      <url>
        <loc>${`https://www.doamatto.xyz${route}`}</loc>
      </url>
    `
  }).join('')}
  </urlset>

  `
  fs.writeFileSync('public/sitemap.xml', map, { encoding: 'utf8' })
})()
