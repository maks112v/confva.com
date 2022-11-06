const withTM = require('next-transpile-modules')(['config'])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    allowFutureImage: true,
  },
})
