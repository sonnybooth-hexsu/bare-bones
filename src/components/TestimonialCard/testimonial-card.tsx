import React from "react"

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white pt-16 pr-16 pb-10 pl-24 shadow-md h-full">
      <div className="flex">
        <div className="rounded-full h-12 w-12 mr-2 mb-4 overflow-hidden">
          <img
            className="h-full w-full"
            src="https://i.pravatar.cc/150?img=32"
          />
        </div>
        <div>
          <h3 className="text-lg mb-1">Amelia</h3>
          <p className="text-xs leading-5 text-blue-400 font-semibold">
            Client
          </p>
        </div>
      </div>
      <p>{testimonial}</p>
    </div>
  )
}

export default TestimonialCard
