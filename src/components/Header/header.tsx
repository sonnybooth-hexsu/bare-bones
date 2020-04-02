import React from "react"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: number; id: number }>
}

const Header = ({ siteTitle, navLinks }: HeaderProps) => {
  return (
    <>
      <p>{siteTitle}</p>

      <ol>
        {navLinks.map(({ name, page, id }) => (
          <li key={id}>
            <a href={`/${page}`}>{name}</a>
          </li>
        ))}
      </ol>
    </>
  )
}

export default Header
