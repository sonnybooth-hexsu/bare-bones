import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"
import buttons from "../../styles/buttons.module.css"
import { Menu } from "react-feather"
import arrowDown from "../../assets/icons/arrow-dropdown.svg"
import logo from "../../assets/icons/logo.svg"

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
  openMenu: number
  menuToggle: () => Function
}

const SubMenuItem = ({ name, subLinks, id, open, openTrigger }) => {
  return (
    <li
      tabIndex={0}
      key={`navigation-item-${id}`}
      data-testid="subLinkMenu"
      onClick={e => {
        if (open) {
          openTrigger(0)
        } else {
          e.stopPropagation()
          openTrigger(id)
        }
      }}
    >
      <span className={styles.headerNavigationSubMenu}>
        {name}
        <img
          src={arrowDown}
          alt="Open arrow"
          className={`${open ? "transform rotate-180" : ""}`}
        />
      </span>
      <div
        data-testid="subLinkMenuList"
        className={`${open ? "block" : "hidden"}`}
      >
        {subLinks.map(({ name, page, id }) => (
          <a key={`navigation-sublink-item-${id}`} href={page}>
            {name}
          </a>
        ))}
      </div>
    </li>
  )
}

const Navigation = ({ navLinks, pageSelected, openMenu, menuToggle }) => {
  return (
    <nav className={styles.headerNavigation}>
      <ol>
        {navLinks.map(({ name, page, subLinks, id }) => {
          return subLinks.length > 0 ? (
            <SubMenuItem
              key={`navigation-item-${id}`}
              name={name}
              subLinks={subLinks}
              id={id}
              open={openMenu === id}
              openTrigger={menuToggle}
            />
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
  )
}

export const Header = ({
  siteTitle,
  navLinks,
  navToggle,
  pageSelected,
  openMenu,
  menuToggle,
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
      <div className={styles.header}>
        <Menu onClick={navToggle} className={styles.headerMenuIcon} />
        <div className={styles.headerLogo}>
          <a href="/">
            <img src={logo} alt={siteTitle} />
          </a>
        </div>
        <Navigation
          navLinks={navLinks}
          pageSelected={pageSelected}
          openMenu={openMenu}
          menuToggle={menuToggle}
        />
        <a
          className={`${buttons.btnSecondaryOutline} ${buttons.btnSmall} ml-6`}
          href="#"
        >
          Book a consultation
        </a>
      </div>
    </div>
  )
}
