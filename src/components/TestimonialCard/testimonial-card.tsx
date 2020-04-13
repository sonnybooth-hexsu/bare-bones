import React from "react"

type TestimonialCardProps = {
  name: string
  message: string
  image: string
}

export const TestimonialCard = ({
  name,
  message,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white pt-16 pr-16 pl-16 pb-10 md:pl-24 shadow-md h-full">
      <div className="flex">
        <div className="rounded-full h-12 w-12 mr-2 mb-4 overflow-hidden h-16 w-16">
          <img
            className="h-full w-full"
            src={`/${image}`}
            alt="Testimonial client face"
          />
        </div>
        <div>
          <h3 className="text-lg mb-1">{name}</h3>
          <p className="text-xs leading-5 font-semibold">Client</p>
        </div>
      </div>
      <p data-testid="testimonialCardMessage">{message}</p>
    </div>
  )
}

export default TestimonialCard
