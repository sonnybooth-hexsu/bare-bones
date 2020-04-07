import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import { HeaderOpen } from "../HeaderOpen"
import { Footer } from "../Footer"
import { ThemeContext } from "../../context/ThemeContext"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { navOpen, navToggle } = useContext(ThemeContext)
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
      {!navOpen ? (
        <Header
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
          navToggle={navToggle}
        />
      ) : (
        <HeaderOpen
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
          navToggle={navToggle}
        />
      )}
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
