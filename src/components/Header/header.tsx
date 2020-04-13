import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"
import { Menu } from "react-feather"
import { Search } from "../Search"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
  navToggle: () => Function
}

export const Header = ({ siteTitle, navLinks, navToggle }: HeaderProps) => {
  const data = useStaticQuery(
    graphql`
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
  )

  return (
    <div className={styles.headerContainer}>
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <a href="/">{siteTitle}</a>
          </div>
          {data && <Search items={data.allFile.edges} />}
          <nav className={styles.headerNavigation}>
            <ol>
              {navLinks.map(({ name, page }, i) => (
                <li data-testid="headerNavigationLink" key={i}>
                  <a href={`${page}`}>{name}</a>
                </li>
              ))}
            </ol>
          </nav>
          <Menu onClick={navToggle} className={styles.headerMenuIcon} />
        </div>
      </div>
    </div>
  )
}

export default Header
