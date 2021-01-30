import React from 'react'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

export default function Sitemap () {
  return (
    <>
    <NextSeo
      title="Sitemap - doamatto"
      description = "A slew of pages that are available on the site."
    />
    <div className="content">
      <Header title="Sitemap" />
        <p>So far, there is only an XML version of the sitemap.An HTML version is coming soon™.</p>
        <a
          href="/sitemap.xml"
          title="Go to XML sitemap"
          className="button">
            Go to XML sitemap
        </a>
    </div>
    </>
  )
}
