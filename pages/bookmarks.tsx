import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

import {default as Bookmark} from '@/components/item'

export default function Home () {
  return (
    <>
      <NextSeo
        title="Bookmarks - doamatto"
        description="I find a lot of cool things and like to save some of them."
      />
      <Head>
        <title>Bookmarks - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Bookmarks" subtitle="Cool things that I saved for later." />
      <div className="content">
        <Bookmark
          title="Sharpen Design"
          description="Randomly generated design prompts. Great practice for all designers."
          url="https://sharpen.design/"
          />
        <Bookmark
          title="Cypress"
          description="A testing suite that seems pretty useful. I need to try it still."
          url="https://cypress.io/"
          />
      </div>
    </>
  )
}