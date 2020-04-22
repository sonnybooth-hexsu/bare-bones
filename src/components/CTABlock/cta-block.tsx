import React from "react"
import buttons from "../../styles/buttons.module.css"

export const CTABlock = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto text-center pt-24 pb-24 w-9/12 md:w-8/12 lg:w-5/12">
        <div className="pl-4 pr-4">
          <h2 className="uppercase mb-2 md:text-6xl">
            Book your appointment <i className="lowercase">today.</i>
          </h2>
          <p className="mt-6 mx-auto mb-4">
            Book your appointment with Dr Yalda today. A bespoke consultation,
            without obligation, is provided before each treatment.
          </p>
          <a
            className={`${buttons.btnPrimary} inline-block mt-8`}
            href="/contact"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </div>
  )
}
