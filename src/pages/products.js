import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { graphql } from "gatsby"

const Products = props => {
  const data = props.data.allFile.edges
  const products = []

  console.log(props);

  data.map(product => {
    return products.push(product.node.childMarkdownRemark.frontmatter)
  })

  return (
    <Layout>
      <SEO title="Products" />
      <div className="bg-gray-200">
        <div className="container mx-auto pb-10">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Product list CMS content
            </span>{" "}
            - add new products at /admin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
            <p>products</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "products" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              category
              path
              date(formatString: "MMMM DD, YYYY")
              excerpt
              image
              imageLarge
            }
          }
        }
      }
    }
  }
`
