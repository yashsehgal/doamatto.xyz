import React from 'react';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.scss'; // global stylesheet

import dynamic from 'next/dynamic'
const BLM_Banner = dynamic(() => import('../components/blm-banner'))
const Footer = dynamic(() => import('../components/footer'))

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_GB',
            url: 'https://doamatto.xyz',
            site_name: 'doamatto',
          }}
          twitter={{
            handle: '@doamatto',
            site: '@doamatto',
            cardType: 'summary',
          }}
        />
        <BLM_Banner />
        <Component {...pageProps} className="container" />
        <Footer />
      </React.Fragment>
    )
  }
}