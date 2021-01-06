const fs = require('fs')
const globby = require('globby')


export default async function sitemap() {
  const pages = await globby(['pages/**/*']);
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => {
        const path = page.replace('pages', '')
                         .replace('.tsx', '')
                         .replace('.mdx', '')
        const route = path === '/index' ? '' : path
        return `
          <url>
            <loc>
              ${`https://v2.testing.doamatto.xyz${route}`}
            </loc>
          </url>
        `
      }).join('')}
    </urlset>
  `
  fs.writeFileSync('public/sitemap.xml', sitemap)
  // TODO: generate HTML
}