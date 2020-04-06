import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import { HeaderOpen } from "../HeaderOpen"
import { Footer } from "../Footer"
import ThemeContext from "../../context/ThemeContext"

type LayoutProps = {
  children: React.ReactNode
  theme: React.Provider<{}>
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
    <ThemeContext.Consumer>
      {theme => {
        return (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              navLinks={data.site.siteMetadata.navLinks}
              navToggle={theme.navToggle}
              navOpen={theme.navOpen}
            />
            <HeaderOpen
              siteTitle={data.site.siteMetadata.title}
              navLinks={data.site.siteMetadata.navLinks}
              navToggle={theme.navToggle}
              navOpen={theme.navOpen}
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
      }}
    </ThemeContext.Consumer>
  )
}

export default Layout
