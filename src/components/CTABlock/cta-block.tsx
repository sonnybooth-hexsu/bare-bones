import React from "react"

export const CTABlock = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto text-center pt-24 pb-24 w-9/12 md:w-8/12 lg:w-5/12">
        <div className="pl-4 pr-4">
          <h2 className="text-4xl mb-2 leading-tight md:text-6xl uppercase">
          Book your appointment <span className="italic-text">today.</span> 
          </h2>
          <p className="mt-6 mx-auto mb-4">
            Book your appointment with Dr Yalda today. A bespoke consultation,
            without obligation, is provided before each treatment.
          </p>
          <a className="btn__primary inline-block mt-8" href="/contact">
            Book a consultation
          </a>
        </div>
      </div>
    </div>
  )
}
