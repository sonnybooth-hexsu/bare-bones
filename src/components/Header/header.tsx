import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"
import { Menu, ChevronDown } from "react-feather"
import { Search } from "../Search"
import { Whatsapp } from "../Whatsapp"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{
    name: string
    page: string
    id: number
    subLinks: Array<{ name: string; page: string; id: number }>
  }>
  navToggle: () => Function
  pageSelected: string
}

export const Header = ({
  siteTitle,
  navLinks,
  navToggle,
  pageSelected,
}: HeaderProps) => {
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
        site {
          siteMetadata {
            telephone
          }
        }
      }
    `
  )

  return (
    <div className={styles.headerContainer}>
      <div className="container mx-auto pl-6 pr-6">
        <div className="pl-4 pr-4">
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <a href="/">{siteTitle}</a>
            </div>
            {data && <Search items={data.allFile.edges} />}
            <nav className={styles.headerNavigation}>
              <ol>
                {navLinks.map(({ name, page, subLinks, id }) => {
                  return subLinks.length > 0 ? (
                    <li tabIndex={0} key={`navigation-item-${id}`}>
                      <span className={styles.headerNavigationSubMenu}>
                        {name}
                        <ChevronDown />
                      </span>
                      <div>
                        {subLinks.map(({ name, page, id }) => (
                          <a key={`navigation-sublink-item-${id}`} href={page}>
                            {name}
                          </a>
                        ))}
                      </div>
                    </li>
                  ) : (
                    <li
                      className={`${pageSelected === name ? "underline" : ""}`}
                      data-testid="headerNavigationLink"
                      key={`navigation-item-${id}`}
                    >
                      <a href={`${page}`}>{name}</a>
                    </li>
                  )
                })}
              </ol>
            </nav>
            {data && <Whatsapp telephone={data.site.siteMetadata.telephone} />}
            <Menu onClick={navToggle} className={styles.headerMenuIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
