import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/header"
import "../../styles/reset.module.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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

export default Layout
