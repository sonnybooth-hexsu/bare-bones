import React from "react"
import styles from "./header.module.css"
import { Menu } from "react-feather"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
  navToggle?: () => {}
  navOpen: boolean
}

export const Header = ({
  siteTitle,
  navLinks,
  navToggle,
  navOpen,
}: HeaderProps) => {
  if (navOpen) return null

  return (
    <div className={styles.headerContainer}>
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className={styles.header}>
          <a href="/" className="text-xl sm:text-3xl">
            {siteTitle}
          </a>
          <nav className="hidden md:inline">
            <ol className={styles.headerNavigation}>
              {navLinks.map(({ name, page }, i) => (
                <li data-testid="headerNavigationLink" key={i}>
                  <a href={`${page}`}>{name}</a>
                </li>
              ))}
            </ol>
          </nav>
          <Menu
            onClick={navToggle}
            className="inline cursor-pointer md:hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
