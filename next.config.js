const withTM = require('@vercel/examples-ui/transpile')()

module.exports = withTM({
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    localeDetection: false,
  },
})
