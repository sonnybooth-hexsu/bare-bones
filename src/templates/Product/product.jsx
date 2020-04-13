import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const isSSR = typeof window === "undefined"

  if (!isSSR) {
    const fbShare = () => {
      return ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        const js = d.createElement(s)
        js.id = id
        js.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
        fjs.parentNode.insertBefore(js, fjs)
      })(document, "script", "facebook-jssdk")
    }

    fbShare()
  }

  const domain = data.site.siteMetadata.domain
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    id,
    title,
    category,
    excerpt,
    image,
    path,
    productAttributeTitleOne,
    productAttributeTitleTwo,
    productAttributeTitleThree,
    productAttributeTitleFour,
    productAttributeValueOne,
    productAttributeValueTwo,
    productAttributeValueThree,
    productAttributeValueFour,
  } = frontmatter
  return (
    <Layout>
      <SEO title="Product" />
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className="grid grid-cols-1 mb-12">
          <p>Product template</p>
          <p>{id}</p>
          <p>{title}</p>
          <p>{category}</p>
          <p>{excerpt}</p>
          <p>{image}</p>
          <p>{productAttributeTitleOne}</p>
          <p>{productAttributeTitleTwo}</p>
          <p>{productAttributeTitleThree}</p>
          <p>{productAttributeTitleFour}</p>
          <p>{productAttributeValueOne}</p>
          <p>{productAttributeValueTwo}</p>
          <p>{productAttributeValueThree}</p>
          <p>{productAttributeValueFour}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div id="fb-root"></div>
          <div
            className="fb-share-button"
            data-href={`${domain}${path}`}
            data-layout="button_count"
          >
            Share to Facebook
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        title
        category
        excerpt
        image
        path
        productAttributeTitleOne
        productAttributeTitleTwo
        productAttributeTitleThree
        productAttributeTitleFour
        productAttributeValueOne
        productAttributeValueTwo
        productAttributeValueThree
        productAttributeValueFour
      }
    }
    site {
      siteMetadata {
        domain
      }
    }
  }
`
