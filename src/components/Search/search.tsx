import React, { useState, useEffect, SyntheticEvent } from "react"

type ProductItemProps = {
  node: {
    childMarkdownRemark: {
      frontmatter: ProductProps
    }
  }
}

type SearchBarProps = {
  items: ProductItemProps[]
}

type ProductProps = {
  layout: string
  title: string
  category: string
  path: string
  excerpt: string
  image: string
  productAttributeTitleOne: string
  productAttributeTitleTwo: string
  productAttributeTitleThree: string
  productAttributeTitleFour: string
  productAttributeValueOne: string
  productAttributeValueTwo: string
  productAttributeValueThree: string
  productAttributeValueFour: string
}

export const Search = ({ items }: SearchBarProps) => {
  const products: ProductProps[] = []

  items.map((product: ProductItemProps) => {
    return products.push(product.node.childMarkdownRemark.frontmatter)
  })

  const [searchResults, setSearchResults] = useState<ProductProps[] | []>([])
  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    setSearchTerm(value)
  }

  useEffect(() => {
    const results = products.filter(({ title }: ProductProps) =>
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
            {(searchResults as ProductProps[]).map(({ title, path }, i) => (
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
