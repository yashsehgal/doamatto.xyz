import React from 'react'
import App from 'next/app'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.scss' // global stylesheet

import BLMBanner from '@/components/blm-banner'
import { default as Navigation } from '@/components/nav'
import { default as Footer } from '@/components/footer'

export default class _app extends App {
  render () {
    const { Component, pageProps }: AppProps = this.props
    return (
      <>
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
        <a href="#maincontent" className="skipToMain">Skip to main content</a>
        <BLMBanner />
        <Navigation />
        <Component {...pageProps}/>
        <Footer />
      </>
    )
  }
}
