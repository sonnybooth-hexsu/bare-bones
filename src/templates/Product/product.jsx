import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    category,
    excerpt,
    image,
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
        title
        category
        excerpt
        image
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
  }
`
