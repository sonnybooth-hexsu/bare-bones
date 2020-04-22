import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import { MapPin, Phone, Mail } from "react-feather"

const Forms = () => {
  return (
    <Layout page="Guides">
      <SEO title="Forms" />
      <div className="container mx-auto pl-6 pr-6 pb-10 pb-40">
        <div className="pl-4 pr-4">
          <div className="md:flex md:flex-wrap lg:flex-col lg:relative">
            <div className="md:order-1 md:w-1/2">
              <h3 className="text-center font-semibold text-2xl pb-4 md:text-left md:pr-10">
                Dr Yalda would love to hear from you
              </h3>
              <p className="text-center pb-4 md:text-left md:pr-10 lg:pb-16 lg:pr-32">
                If you&apos;d like to get in touch, please leave a message in
                the quick form. Dr Yalda repond to you within two days.
              </p>
            </div>
            <div className="md:w-full md:order-3 lg:absolute lg:w-1/2 lg:top-0 lg:right-0">
              <form
                className="w-full mx-auto mt-10 mb-10 md:mr-0 md:ml-0 lg:mt-0"
                name="contact"
                method="post"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 lg:w-full">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="first-name"
                    >
                      Your Name <p className="text-red-500 inline">*</p>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="Please enter your name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 lg:w-full">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="last-name"
                    >
                      Email Address <p className="text-red-500 inline">*</p>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Please enter your email address"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message <p className="text-red-500 inline">*</p>
                    </label>
                    <textarea
                      className="appearance-none h-40 block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="message"
                      name="message"
                      placeholder="Please leave your message here, be as brief or detailed as you like."
                    />
                  </div>
                </div>
                <button
                  className="text-sm border-4 text-white w-full px-4 py-4 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="md:order-2 md:w-1/2 lg:pr-10 lg:pb-20 md:pl-2 lg:pl-0 ">
              <div className="mb-4 flex align-center">
                <MapPin className="inline mr-2"/>
                <p className="inline">
                  <span>
                    <strong>London:</strong>
                  </span>{" "}
                  GILD, 4-6 Copthall Ave, London EC2R 7DA
                </p>
              </div>
              <div className="mb-4 flex align-center">
                <MapPin className="inline mr-2"/>
                <p className="inline">
                  <span>
                    <strong>Nottingham:</strong>
                  </span>{" "}
                  144 Forest road, NG17 9HH
                </p>
              </div>
              <div className="mb-4 flex align-center">
                <Phone className="inline mr-2"/>
                <p className="inline">(+44)7720756108</p>
              </div>
              <div className="mb-4 flex align-center">
                <Mail className="inline mr-2"/>
                <a href="mailto:info@dryalda.com">info@dryalda.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Forms
