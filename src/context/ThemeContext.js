import React, { useState } from "react"

export const ThemeContext = React.createContext()

export const Provider = props => {
  const [navOpen, setNavOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(0)

  return (
    <ThemeContext.Provider
      value={{
        navOpen,
        navToggle: () => setNavOpen(!navOpen),
        openMenu,
        menuToggle: id => setOpenMenu(id),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default Provider
