import React, { useContext, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import { HeaderOpen } from "../HeaderOpen"
import { Footer } from "../Footer"
import { Whatsapp } from "../Whatsapp"
import { ThemeContext } from "../../context/ThemeContext"

type LayoutProps = {
  page: string
  children: ReactNode
}

export const Layout = ({ page, children }: LayoutProps) => {
  const { navOpen, navToggle, openMenu, menuToggle } = useContext(ThemeContext)
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
            subLinks {
              name
              page
              id
            }
            id
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
          pageSelected={page}
          openMenu={openMenu}
          menuToggle={menuToggle}
        />
      ) : (
        <HeaderOpen
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
          navToggle={navToggle}
        />
      )}
      <main onClick={() => menuToggle(0)}>{children}</main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        navLinks={data.site.siteMetadata.navLinks}
        description={data.site.siteMetadata.description}
        email={data.site.siteMetadata.email}
        telephone={data.site.siteMetadata.telephone}
      />
      {data && <Whatsapp telephone={data.site.siteMetadata.telephone} />}
    </>
  )
}

export default Layout
