import React, { Component, createContext } from "react"

const defaultState = {
  navOpen: false,
  navToggle: () => {},
}
const ThemeContext = createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    navOpen: false,
  }

  navToggle = () => {
    const navOpen = !this.state.navOpen
    this.setState({ navOpen })
  }

  render() {
    const { children } = this.props
    const { navOpen } = this.state
    return (
      <ThemeContext.Provider
        value={{
          navOpen,
          navToggle: this.navToggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext
export { ThemeProvider }
