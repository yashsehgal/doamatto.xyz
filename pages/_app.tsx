import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.scss' // global stylesheet

import BLMBanner from '@/components/blm-banner'
import {default as Navigation} from '@/components/nav'
import {default as Footer} from '@/components/footer'

export default class _app extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_GB',
            url: 'https://doamatto.xyz',
            description: 'Hello and bienvenue! My name\'s Matt and this is my website.',
            site_name: 'doamatto'
          }}
          twitter={{
            handle: '@doamatto',
            site: '@doamatto',
            cardType: 'summary'
          }}
        />
        <Head>
          <link rel="icon" href="/assets/logo.svg"/>
          <link rel="shortcut icon" href="/assets/logo.svg"/>
          <link rel="apple-touch-icon" href="/assets/logo-bg.svg"/>
          <link rel="author" href="humans.txt"/>
        </Head>
        <a href="#maincontent" className="skipToMain">Skip to main content</a>
        <BLMBanner />
        <Navigation />
        <Component {...pageProps} className="container" />
        <Footer />
      </React.Fragment>
    )
  }
}
