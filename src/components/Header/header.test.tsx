import React from "react"
import { render, cleanup } from "@testing-library/react"
import { queryAllByTestId } from "@testing-library/dom"
import Header from "./header"

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

describe("<Header />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Header siteTitle="Test Site" navLinks={testNavLinks} />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the length of links passed through", () => {
    const { container } = render(
      <Header siteTitle="Test Site" navLinks={testNavLinks} />
    )

    expect(queryAllByTestId(container, "headerNavigationLink")).toHaveLength(
      testNavLinks.length
    )
  })
})
