import React, { useState } from "react"
import styles from "./header-open.module.css"
import { X, ChevronDown, ChevronUp } from "react-feather"

type HeaderOpenProps = {
  siteTitle: string
  navLinks: Array<{
    name: string
    page: string
    id: number
    subLinks: Array<{ name: string; page: string; id: number }>
  }>
  navToggle: () => Function
}

const SubMenuItem = ({ name, subLinks, id }) => {
  const [openState, setOpenState] = useState(false)

  return (
    <li
      key={`navigation-item-${id}`}
      className={`animate-reveal delay-${id}`}
      onClick={() => setOpenState(!openState)}
    >
      <span className={styles.headerNavigationSubMenu}>
        {name}
        {openState ? <ChevronUp /> : <ChevronDown />}
      </span>
      <div className={`${openState ? "block" : "hidden"}`}>
        {subLinks.map(({ name, page, id }) => (
          <a key={`navigation-sublink-item-${id}`} href={page}>
            {name}
          </a>
        ))}
      </div>
    </li>
  )
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
            {navLinks.map(({ name, page, subLinks, id }) => {
              return subLinks.length > 0 ? (
                <SubMenuItem
                  key={`navigation-item-${id}`}
                  name={name}
                  subLinks={subLinks}
                  id={id}
                />
              ) : (
                <li
                  className={`animate-reveal delay-${id}`}
                  data-testid="headerNavigationLink"
                  key={`navigation-item-${id}`}
                >
                  <a href={`${page}`}>{name}</a>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}
