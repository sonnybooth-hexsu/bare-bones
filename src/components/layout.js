import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navLinks {
            name
            page
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        navLinks={data.site.siteMetadata.navLinks}
      />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
