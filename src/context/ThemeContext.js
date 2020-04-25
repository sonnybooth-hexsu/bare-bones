import React, { useState, createContext } from "react"

export const ThemeContext = createContext()

export const Provider = props => {
  const [navOpen, setNavOpen] = useState(false)
  const [filterLock, setFilterLock] = useState(false)
  const [openMenu, setOpenMenu] = useState(0)

  return (
    <ThemeContext.Provider
      value={{
        navOpen,
        navToggle: () => setNavOpen(!navOpen),
        openMenu,
        menuToggle: id => setOpenMenu(id),
        filterLock,
        filterLockToggle: bool => setFilterLock(bool),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default Provider
