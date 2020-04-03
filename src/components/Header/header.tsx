import React from "react"
import styles from "./header.module.css"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
}

export const Header = ({ siteTitle, navLinks }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <p>{siteTitle}</p>

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
  )
}

export default Header
