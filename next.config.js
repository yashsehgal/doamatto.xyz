const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

module.export = withMDX({
  pageExtensions: ['mdx', 'jsx', 'js', 'md', 'ts', 'tsx']
})

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'jp'],
    defaultLocale: 'en',
    localeDetection: true
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
    return config
  },
  webpackDevMiddleware: config => {
    return config
  }
}
