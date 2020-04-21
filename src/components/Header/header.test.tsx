/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { queryAllByTestId } from "@testing-library/dom"
import Header from "./header"

const testNavLinks = [
  {
    name: `Link 1`,
    page: `link-1`,
    subLinks: [],
    id: 1,
  },
  {
    name: `Link 2`,
    page: `link-2`,
    subLinks: [],
    id: 2,
  },
  {
    name: `Link 3`,
    page: `link-3`,
    subLinks: [],
    id: 3,
  },
]

afterEach(() => {
  cleanup()
})

describe("<Header />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Header
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        pageSelected="Home"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the length of links passed through", () => {
    const { container } = render(
      <Header
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        pageSelected="Home"
      />
    )

    expect(queryAllByTestId(container, "headerNavigationLink")).toHaveLength(
      testNavLinks.length
    )
  })
})
