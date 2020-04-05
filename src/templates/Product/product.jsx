import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    date,
    title,
    author,
    category,
    excerpt,
    image,
    imageLarge,
  } = frontmatter
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className="grid grid-cols-1 mb-12">
          <p>Product template</p>
          <p>{date}</p>
          <p>{title}</p>
          <p>{author}</p>
          <p>{category}</p>
          <p>{excerpt}</p>
          <p>{image}</p>
          <p>{imageLarge}</p>
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
        date(formatString: "MMMM DD, YYYY")
        title
        author
        category
        excerpt
        image
        imageLarge
      }
    }
  }
`
