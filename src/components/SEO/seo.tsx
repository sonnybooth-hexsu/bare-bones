import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ThemeContext from "../../context/ThemeContext"

type SEOProps = {
  description: string
  lang: string
  meta: Array<any>
  title: string
}

export const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            bodyAttributes={{
              class: `${theme.navOpen ? "overflow-hidden" : ""}`,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)}
          >
            <link rel="stylesheet" href="https://use.typekit.net/nbx8okc.css" />
            <link rel="stylesheet" href="https://use.typekit.net/nbx8okc.css" />
            <link rel="stylesheet" href="https://use.typekit.net/nbx8okc.css" />
            <link rel="stylesheet" href="https://use.typekit.net/nbx8okc.css" />
          </Helmet>
        )
      }}
    </ThemeContext.Consumer>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
