module.exports = {
  siteMetadata: {
    title: `Bare Bones`,
    description: `A bare bones website for client development`,
    email: `sonnyboothwebdesign@gmail.com`,
    telephone: `+447792471765`,
    author: `@sonnybooth-hexsu`,
    navLinks: [
      {
        name: `CMS Blogs`,
        page: `/blogs`,
        id: 1,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
}
