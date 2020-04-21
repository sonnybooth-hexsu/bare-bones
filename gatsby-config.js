/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `Bare Bones`,
    description: `A bare bones website for client development lorem ipsum dolor sit amet.`,
    email: `sonnyboothwebdesign@gmail.com`,
    telephone: `+447792471765`,
    author: `@sonnybooth-hexsu`,
    domain: `https://hexsu-bare-bones.netlify.com`,
    navLinks: [
      {
        name: `Guides`,
        page: `/guides`,
        subLinks: [
          {
            name: `Styleguide`,
            page: `/styleguide`,
            id: 1,
          },
          {
            name: `Components`,
            page: `/components`,
            id: 2,
          },
          {
            name: `Forms`,
            page: `/forms`,
            id: 3,
          },
        ],
        id: 1,
      },
      {
        name: `CMS Blogs`,
        page: `/blogs`,
        subLinks: [],
        id: 2,
      },
      {
        name: `CMS Products`,
        page: `/products`,
        subLinks: [],
        id: 3,
      },
      {
        name: `CMS Reviews`,
        page: `/reviews`,
        subLinks: [],
        id: 4,
      },
    ],
    productCategories: [
      {
        title: "Categories",
        uid: "category"
      },
    ],
    blogCategories: [
      {
        title: "Author",
        uid: "author"
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bare Bones",
        short_name: "Bare Bones",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        icon: "src/assets/images/favicon.png",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reviews`,
        path: `${__dirname}/reviews`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
}
