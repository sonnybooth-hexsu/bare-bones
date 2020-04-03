import React from "react"
import styles from "./header.module.css"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
}

export const Header = ({ siteTitle, navLinks }: HeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className={styles.header}>
          <p className="text-xl sm:text-3xl">{siteTitle}</p>
          <nav>
            <ol className={styles.headerNavigation}>
              {navLinks.map(({ name, page }, i) => (
                <li data-testid="headerNavigationLink" key={i}>
                  <a href={`/${page}`}>{name}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
