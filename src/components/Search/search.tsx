// @ts-nocheck
import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

const SearchBar = ({ data }) => {
  const productsData = data.allFile.edges
  const products = []

  productsData.map(product => {
    return products.push(product.node.childMarkdownRemark.frontmatter)
  })

  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = products.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <div className="flex-grow ml-3 mr-3 h-10 md:relative md:ml-6 md:mr-6 md:flex-grow-0">
      <input
        className="block h-full text-base appearance-none bg-gray-200 text-gray-700 rounded w-full p-2 leading-tight focus:outline-none focus:bg-gray-800"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length > 3 && searchResults.length > 0 && (
        <ul className="bg-white p-4 w-full absolute left-0">
          <nav>
            {searchResults.map(({ title, path }, i) => (
              <li className="text-base" key={`search-item-${i}`}>
                <a href={path}>{title}</a>
              </li>
            ))}
          </nav>
        </ul>
      )}
    </div>
  )
}

export const Search = props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <SearchBar data={data} {...props} />}
  />
)
