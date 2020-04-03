import React from "react"

export const CTABlock = () => {
  return (
    <div className="bg-gray-500">
      <div className="container mx-auto text-center pt-20 pb-20">
        <h2 className="text-4xl">Book Your Appointment Today</h2>
        <p className="mt-6 w-6/12 mx-auto">
          Book your appointment with Dr Yalda today. A complimentary
          consultation and assessment takes place before each treatment.
        </p>
        <a
          className="inline-block mt-8 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded"
          href="#"
        >
          Book a consultation
        </a>
      </div>
    </div>
  )
}
