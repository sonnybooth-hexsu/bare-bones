import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import { Footer } from "../Footer"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          email
          telephone
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
      <Footer
        siteTitle={data.site.siteMetadata.title}
        navLinks={data.site.siteMetadata.navLinks}
        description={data.site.siteMetadata.description}
        email={data.site.siteMetadata.email}
        telephone={data.site.siteMetadata.telephone}
      />
    </>
  )
}

export default Layout
