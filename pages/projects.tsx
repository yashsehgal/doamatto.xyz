import React, { useState } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import dynamic from 'next/dynamic'
import { getSortedPostsData } from '@/lib/feedData'
const Header = dynamic(() => import('@/components/header'))

export default function IndexPage ({ postData }:{
  postData: {
    title: string
    date: string
    slug: string
    id: string
    tag: string
    tagShort: string
    description: string
  }[]
}) {
  const [searchVal, setSearchVal] = useState('')
  const filteredPosts = postData
    .sort((a,b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchVal.toLowerCase()))
  return (
    <>
    <NextSeo
      title="Projects - doamatto"
      description = "I've made a lot of stuff over time. Here's a collection of it all."
    />
    <div>
      <Header
        title="Projects" 
        subtitle= "I've made a lot of stuff over time. Here's a collection of it all."
      />
      <div className="relative w-full mb-4">
          <input
            aria-label="Search projects"
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search projects"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      <div className="grid grid-cols-1 justify-evenly sm:grid-cols-2 lg:grid-cols-3 projects">
        {!filteredPosts.length &&
          <p>No projects found. Maybe you misspelt something?</p>
        }
        {filteredPosts.map((frontMatter) => (
          <section className="border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-2 m-2 transition-colors post" key={frontMatter.id} id={frontMatter.id}>
            <Link href={`/projects/${frontMatter.slug}`}>
              <a className="text-xl font-bold">
                <p className="text-sm font-normal">Last status update on {frontMatter.date}</p>
                {frontMatter.title}
                <p className="text-sm font-normal">{frontMatter.description}</p>
                <p className={`${frontMatter.tagShort} tag`}>{frontMatter.tag}</p>
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = getSortedPostsData('other')
  return {
    props: {
      postData
    }
  }
}
