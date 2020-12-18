module.exports = {
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
