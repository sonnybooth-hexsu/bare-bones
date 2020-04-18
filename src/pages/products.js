import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { graphql } from "gatsby"
import { ProductCard } from "../components/ProductCard"
import { ProductCardIcon } from "../components/ProductCardIcon"
import { Filter } from "../components/Filter"

const Products = props => {
  const data = props.data.allFile.edges
  const productCategories = props.data.site.siteMetadata.productCategories
  const productsDestructured = []

  data.map(obj => {
    return productsDestructured.push(obj.node.childMarkdownRemark.frontmatter)
  })

  const [products, setProductsState] = useState(productsDestructured)

  return (
    <Layout>
      <SEO title="Products" />
      <div className="bg-gray-200">
        <div className="container mx-auto pl-6 pr-6 pb-10 md:pl-0 md:pr-0">
          <div className="grid grid-cols-1 pt-12 md:grid-cols-5 xl:grid-cols-7 md:gap-12">
            <div className="grid-cols-1 md:col-span-2 xl:col-span-2">
              <div className="bg-white p-10 pt-6">
                <h3 className="text-2xl ">Filter</h3>
                <Filter
                  types={productCategories}
                  items={productsDestructured}
                  setItemsState={setProductsState}
                />
              </div>
            </div>
            <div className="col-span-3 xl:col-span-5">
              <h2 className="text-2xl pb-8">
                <span className="text-3xl md:text-4xl text-red-500 font-bold">
                  Product list CMS content cards (one)
                </span>{" "}
                - add new products at /admin
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
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
              id
              layout
              title
              category
              path
              excerpt
              image
              imageLarge
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
    site {
      siteMetadata {
        productCategories {
          title
          uid
        }
      }
    }
  }
`
