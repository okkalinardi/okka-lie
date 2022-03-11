/** @type {import('gatsby').GatsbyConfig} */
const path = require('path')

require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
      title: '',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-typescript-scss-modules", {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['*']
    }
  }],
};