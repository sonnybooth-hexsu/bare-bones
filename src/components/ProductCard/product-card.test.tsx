/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { getByText, getByTestId } from "@testing-library/dom"
import { ProductCard } from "./product-card"

afterEach(() => {
  cleanup()
})

describe("<ProductCard />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ProductCard
        title="Test title"
        path="/test-product"
        excerpt="I am a test excerpt"
        image="/test-product.jpg"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the title text passed through", () => {
    const { container } = render(
      <ProductCard
        title="Test title"
        path="/test-product"
        excerpt="I am a test excerpt"
        image="/test-product.jpg"
      />
    )

    const titleEl = getByTestId(container, "productCardTitle")

    expect(getByText(titleEl, "Test title"))
  })
})
