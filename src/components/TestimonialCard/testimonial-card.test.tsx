/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { getByText, getByTestId } from "@testing-library/dom"
import { TestimonialCard } from "./testimonial-card"

afterEach(() => {
  cleanup()
})

describe("<ProductCard />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <TestimonialCard
        name="Mr Test"
        message="I am a test review"
        image="test-img.jpg"
        classes="mb-4"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the title text passed through", () => {
    const { container } = render(
      <TestimonialCard
        name="Mr Test"
        message="I am a test review"
        image="test-img.jpg"
        classes="mb-4"
      />
    )

    const imgEl = getByTestId(container, "testimonialCardMessage")

    expect(getByText(imgEl, "I am a test review"))
  })
})
