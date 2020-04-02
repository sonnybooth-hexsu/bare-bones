import React from "react"
import styles from "./header.module.css"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: number; id: number }>
}

const Header = ({ siteTitle, navLinks }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <p>{siteTitle}</p>

      <ol className={styles.headerNavigation}>
        {navLinks.map(({ name, page }, i) => (
          <li key={i}>
            <a href={`/${page}`}>{name}</a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Header
