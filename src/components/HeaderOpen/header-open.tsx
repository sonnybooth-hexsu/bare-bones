import React, { useState } from "react"
import { X, ChevronDown, ChevronUp } from "react-feather"
import logo from "../../assets/icons/logo.svg"
import styles from "./header-open.module.css"

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
      data-testid="subLinkMenu"
      className={`animate-reveal delay-${id}`}
      onClick={() => setOpenState(!openState)}
    >
      <span className={styles.headerNavigationSubMenu}>
        {name}
        {openState ? <ChevronUp /> : <ChevronDown />}
      </span>
      <div
        data-testid="subLinkMenuList"
        className={`${openState ? "block" : "hidden"}`}
      >
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
      <div className={styles.header}>
        <a href="/" className={styles.headerLogo}>
          <img src={logo} alt={siteTitle} />
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
                data-testid="headerOpenNavigationLink"
                key={`navigation-item-${id}`}
              >
                <a href={`${page}`}>{name}</a>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
