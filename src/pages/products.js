import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { graphql } from "gatsby"
import { ProductCard } from "../components/ProductCard"
import { ProductCardIcon } from "../components/ProductCardIcon"

const Products = props => {
  const data = props.data.allFile.edges
  const products = []

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
              Product list CMS content cards (one)
            </span>{" "}
            - add new products at /admin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
            {products.map(({ title, path, excerpt, image }, i) => (
              <ProductCard
                key={`product-card-${i}`}
                title={title}
                path={path}
                excerpt={excerpt}
                image={image}
              />
            ))}
          </div>
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Product list CMS content (two)
            </span>{" "}
            - add new products at /admin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
            {products.map(({ title, path, excerpt, image }, i) => (
              <ProductCardIcon
                key={`product-card-image-${i}`}
                title={title}
                path={path}
                excerpt={excerpt}
                image={image}
              />
            ))}
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
              layout
              title
              category
              path
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
      }
    }
  }
`
