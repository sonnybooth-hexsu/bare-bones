import React from "react"
import buttons from "../../styles/buttons.module.css"

export const CTABlock = () => {
  return (
    <div className="bg-gray-700">
      <div className="container mx-auto pl-6 pr-6 pt-24 pb-24">
        <div className="pl-4 pr-4 display flex flex-col md:flex-row">
          <div>
          <h2 className="uppercase mb-2 text-white">
            Book your appointment with Dr Yalda<i className="lowercase">today.</i>
          </h2>
          <p className="mt-6 mx-auto mb-4 text-white">
            Book your appointment with Dr Yalda today. A bespoke consultation,
            without obligation, is provided before each treatment.
          </p>
          </div>
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
