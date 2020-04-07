import React from "react"
import styles from "./header-open.module.css"
import { X } from "react-feather"

type HeaderOpenProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
  navToggle?: () => {}
}

export const HeaderOpen = ({
  siteTitle,
  navLinks,
  navToggle,
}: HeaderOpenProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className={styles.header}>
          <a href="/" className={styles.headerLogo}>
            {siteTitle}
          </a>
          <X className={styles.headerMenuIcon} onClick={navToggle} />
        </div>
        <nav className={styles.headerNavigation}>
          <ol>
            {navLinks.map(({ name, page }, i) => (
              <li
                className={`animate-reveal delay-${i}`}
                data-testid="headerNavigationLink"
                key={i}
              >
                <a href={`${page}`}>{name}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
