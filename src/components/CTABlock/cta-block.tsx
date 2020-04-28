import React from "react"
import buttons from "../../styles/buttons.module.css"

export const CTABlock = () => {
  return (
    <div className="bg-gray-700">
      <div className="container mx-auto pl-6 pr-6 pt-24 pb-24">
        <div className="pl-4 pr-4 grid gap-4 md:grid-cols-12 md:items-center">
          <div className="col-span-8">
            <h2 className="uppercase mb-2 text-white">
              Book your appointment with Dr Yalda{" "}
              <i className="lowercase"> today.</i>
            </h2>
            <p className="mt-6 mx-auto mb-4 text-white md:mb-0">
              Book your appointment with Dr Yalda today. A bespoke consultation,
              without obligation, is provided before each treatment.
            </p>
          </div>
          <a
            className={`${buttons.btnPrimary} inline-block mt-8 md:mt-0 md:col-start-10 md:col-span-2`}
            href="/contact"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </div>
  )
}
