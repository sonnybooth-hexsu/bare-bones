import React from "react"
import helpers from "../../styles/helpers.module.css"

type TestimonialCardProps = {
  name: string
  message: string
  image: string
  classes: string
}

export const TestimonialCard = ({
  name,
  message,
  image,
  classes,
}: TestimonialCardProps) => {
  return (
    <div
      className={`bg-white pt-16 pr-16 pl-16 pb-10 md:pl-24 shadow-md h-full ${classes}`}
    >
      <div className="flex">
        <div className="rounded-full mr-2 mb-4 overflow-hidden h-16 w-16">
          <img
            className="h-full w-full"
            src={image}
            alt="Testimonial client face"
          />
        </div>
        <div>
          <h4 className="mb-1">{name}</h4>
          <p className={`${helpers.caption}`}>Client</p>
        </div>
      </div>
      <p data-testid="testimonialCardMessage">{message}</p>
    </div>
  )
}

export default TestimonialCard
