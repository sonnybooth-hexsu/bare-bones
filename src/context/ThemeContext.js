import React, { useState } from "react"

export const ThemeContext = React.createContext()

export const Provider = props => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <ThemeContext.Provider
      value={{
        navOpen,
        navToggle: () => setNavOpen(!navOpen),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default Provider
