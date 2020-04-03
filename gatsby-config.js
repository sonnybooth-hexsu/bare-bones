module.exports = {
  siteMetadata: {
    title: `Bare Bones`,
    description: `A bare bones website for client development`,
    email: `sonnyboothwebdesign@gmail.com`,
    telephone: `+447792471765`,
    author: `@sonnybooth-hexsu`,
    navLinks: [
      {
        name: `Link 1`,
        page: `link-1`,
        id: 1,
      },
      {
        name: `Link 2`,
        page: `link-2`,
        id: 2,
      },
      {
        name: `Link 3`,
        page: `link-3`,
        id: 3,
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
