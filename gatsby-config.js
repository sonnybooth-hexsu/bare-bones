module.exports = {
  siteMetadata: {
    title: `Bare Bones`,
    description: `A bare bones website for client development`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-offline`,
  ],
}
