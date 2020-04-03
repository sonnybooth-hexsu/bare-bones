module.exports = {
  siteMetadata: {
    title: `Dr Yalda`,
    description: `A bare bones website for client development`,
    author: `@sonnybooth-hexsu`,
    navLinks: [
      {
        name: `Home`,
        page: `link-1`,
        id: 1,
      },
      {
        name: `Treatments`,
        page: `link-2`,
        id: 2,
      },
      {
        name: `About`,
        page: `link-3`,
        id: 3,
      },
      {
        name: `Blog`,
        page: `link-4`,
        id: 4,
      },
      {
        name: `Contact`,
        page: `link-5`,
        id: 5,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
  ],
}
