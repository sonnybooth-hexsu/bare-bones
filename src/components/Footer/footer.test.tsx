/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { queryAllByTestId, getByText, getByTestId } from "@testing-library/dom"
import Footer from "./footer"

const testNavLinks = [
  {
    name: `Link 1`,
    page: `link-1`,
    id: 1,
  },
  {
    name: `Link 2`,
    page: `link-2`,
    id: 2,
  },
  {
    name: `Link 3`,
    page: `link-3`,
    id: 3,
  },
]

afterEach(() => {
  cleanup()
})

describe("<Footer />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Footer
        siteTitle="Test Site"
        navLinks={testNavLinks}
        description="I am test description"
        email="test@email.com"
        telephone="+441111111111"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the length of links passed through", () => {
    const { container } = render(
      <Footer
        siteTitle="Test Site"
        navLinks={testNavLinks}
        description="I am test description"
        email="test@email.com"
        telephone="+441111111111"
      />
    )

    expect(queryAllByTestId(container, "footerNavigationLink")).toHaveLength(
      testNavLinks.length
    )
  })

  it("should have the description text passed through", () => {
    const { container } = render(
      <Footer
        siteTitle="Test Site"
        navLinks={testNavLinks}
        description="I am test description"
        email="test@email.com"
        telephone="+441111111111"
      />
    )

    const descriptionEl = getByTestId(container, "footerNavigationDescription")

    expect(getByText(descriptionEl, "I am test description"))
  })
})
