import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))
const Unsplash = dynamic(() => import('@/components/metrics/unsplash'))
const GitHub = dynamic(() => import('@/components/metrics/github'))

export default function dashboard () {
  return (
    <>
      <NextSeo
        title="Dashbaord - doamatto"
        description="Some neat numbers that mean just about nothing."
      />
      <Head>
        <title>Dashboard - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Dashboard" subtitle="Some neat numbers that mean just about nothing." />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full pt-4">
        <Unsplash />
        <GitHub />
      </div>
    </>
  )
}