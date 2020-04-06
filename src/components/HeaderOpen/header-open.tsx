import React from "react"
import styles from "./header-open.module.css"
import { X } from "react-feather"

type HeaderOpenProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
  navToggle?: () => {}
  navOpen: boolean
}

export const HeaderOpen = ({
  siteTitle,
  navLinks,
  navToggle,
  navOpen,
}: HeaderOpenProps) => {
  if (!navOpen) return null

  return (
    <div className={styles.headerContainer}>
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className={styles.header}>
          <a href="/" className="text-xl sm:text-3xl">
            {siteTitle}
          </a>
          <X className="cursor-pointer" onClick={navToggle} />
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
