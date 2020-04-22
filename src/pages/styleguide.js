import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import buttons from "../styles/buttons.module.css"
import { ArrowRight } from "react-feather"

const Styleguide = () => {
  return (
    <Layout page="Guides">
      <SEO title="Styleguide" />
      <div className="bg-gray-200">
        <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
          <h1>Styleguide</h1>
        </div>
        <div className="container mx-auto pl-6 pr-6 pt-20 pb-20 md:pl-16 md:pr-16 lg:pl-40 lg:pr-40 xl:pl-6 xl:pr-6 ">
          <div className="grid grid-cols-2 gap-20 cols-50-reverse">
            <div className="bg-white p-10">
              <h4>Colours</h4>
            </div>
            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-black h-8 w-8"></div>
                <div className="bg-white h-8 w-8"></div>
              </div>
              <div className="grid grid-cols-9 grid-rows-12 gap-2">
                <div className="bg-gray-900 h-8 w-8"></div>
                <div className="bg-gray-800 h-8 w-8"></div>
                <div className="bg-gray-700 h-8 w-8"></div>
                <div className="bg-gray-600 h-8 w-8"></div>
                <div className="bg-gray-500 h-8 w-8"></div>
                <div className="bg-gray-400 h-8 w-8"></div>
                <div className="bg-gray-300 h-8 w-8"></div>
                <div className="bg-gray-200 h-8 w-8"></div>
                <div className="bg-gray-100 h-8 w-8"></div>
                <div className="bg-red-900 h-8 w-8"></div>
                <div className="bg-red-800 h-8 w-8"></div>
                <div className="bg-red-700 h-8 w-8"></div>
                <div className="bg-red-600 h-8 w-8"></div>
                <div className="bg-red-500 h-8 w-8"></div>
                <div className="bg-red-400 h-8 w-8"></div>
                <div className="bg-red-300 h-8 w-8"></div>
                <div className="bg-red-200 h-8 w-8"></div>
                <div className="bg-red-100 h-8 w-8"></div>
                <div className="bg-orange-900 h-8 w-8"></div>
                <div className="bg-orange-800 h-8 w-8"></div>
                <div className="bg-orange-700 h-8 w-8"></div>
                <div className="bg-orange-600 h-8 w-8"></div>
                <div className="bg-orange-500 h-8 w-8"></div>
                <div className="bg-orange-400 h-8 w-8"></div>
                <div className="bg-orange-300 h-8 w-8"></div>
                <div className="bg-orange-200 h-8 w-8"></div>
                <div className="bg-orange-100 h-8 w-8"></div>
                <div className="bg-yellow-900 h-8 w-8"></div>
                <div className="bg-yellow-800 h-8 w-8"></div>
                <div className="bg-yellow-700 h-8 w-8"></div>
                <div className="bg-yellow-600 h-8 w-8"></div>
                <div className="bg-yellow-500 h-8 w-8"></div>
                <div className="bg-yellow-400 h-8 w-8"></div>
                <div className="bg-yellow-300 h-8 w-8"></div>
                <div className="bg-yellow-200 h-8 w-8"></div>
                <div className="bg-yellow-100 h-8 w-8"></div>
                <div className="bg-green-900 h-8 w-8"></div>
                <div className="bg-green-800 h-8 w-8"></div>
                <div className="bg-green-700 h-8 w-8"></div>
                <div className="bg-green-600 h-8 w-8"></div>
                <div className="bg-green-500 h-8 w-8"></div>
                <div className="bg-green-400 h-8 w-8"></div>
                <div className="bg-green-300 h-8 w-8"></div>
                <div className="bg-green-200 h-8 w-8"></div>
                <div className="bg-green-100 h-8 w-8"></div>
                <div className="bg-teal-900 h-8 w-8"></div>
                <div className="bg-teal-800 h-8 w-8"></div>
                <div className="bg-teal-700 h-8 w-8"></div>
                <div className="bg-teal-600 h-8 w-8"></div>
                <div className="bg-teal-500 h-8 w-8"></div>
                <div className="bg-teal-400 h-8 w-8"></div>
                <div className="bg-teal-300 h-8 w-8"></div>
                <div className="bg-teal-200 h-8 w-8"></div>
                <div className="bg-teal-100 h-8 w-8"></div>
                <div className="bg-blue-900 h-8 w-8"></div>
                <div className="bg-blue-800 h-8 w-8"></div>
                <div className="bg-blue-700 h-8 w-8"></div>
                <div className="bg-blue-600 h-8 w-8"></div>
                <div className="bg-blue-500 h-8 w-8"></div>
                <div className="bg-blue-400 h-8 w-8"></div>
                <div className="bg-blue-300 h-8 w-8"></div>
                <div className="bg-blue-200 h-8 w-8"></div>
                <div className="bg-blue-100 h-8 w-8"></div>
                <div className="bg-indigo-900 h-8 w-8"></div>
                <div className="bg-indigo-800 h-8 w-8"></div>
                <div className="bg-indigo-700 h-8 w-8"></div>
                <div className="bg-indigo-600 h-8 w-8"></div>
                <div className="bg-indigo-500 h-8 w-8"></div>
                <div className="bg-indigo-400 h-8 w-8"></div>
                <div className="bg-indigo-300 h-8 w-8"></div>
                <div className="bg-indigo-200 h-8 w-8"></div>
                <div className="bg-indigo-100 h-8 w-8"></div>
                <div className="bg-purple-900 h-8 w-8"></div>
                <div className="bg-purple-800 h-8 w-8"></div>
                <div className="bg-purple-700 h-8 w-8"></div>
                <div className="bg-purple-600 h-8 w-8"></div>
                <div className="bg-purple-500 h-8 w-8"></div>
                <div className="bg-purple-400 h-8 w-8"></div>
                <div className="bg-purple-300 h-8 w-8"></div>
                <div className="bg-purple-200 h-8 w-8"></div>
                <div className="bg-purple-100 h-8 w-8"></div>
                <div className="bg-pink-900 h-8 w-8"></div>
                <div className="bg-pink-800 h-8 w-8"></div>
                <div className="bg-pink-700 h-8 w-8"></div>
                <div className="bg-pink-600 h-8 w-8"></div>
                <div className="bg-pink-500 h-8 w-8"></div>
                <div className="bg-pink-400 h-8 w-8"></div>
                <div className="bg-pink-300 h-8 w-8"></div>
                <div className="bg-pink-200 h-8 w-8"></div>
                <div className="bg-pink-100 h-8 w-8"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pl-6 pr-6 pt-20 pb-20 md:pl-16 md:pr-16 lg:pl-40 lg:pr-40 xl:pl-6 xl:pr-6 ">
          <div className="grid grid-cols-2 gap-20 cols-50-reverse">
            <div className="bg-white p-10">
              <h4>Typography</h4>
            </div>
            <div className="grid grid-cols-1 grid-rows-12 gap-2">
              <div className="">
                <h1>Heading One</h1>
              </div>
              <div className="">
                <h2>Heading Two</h2>
              </div>
              <div className="">
                <h3>Heading Three</h3>
              </div>
              <div className="">
                <h4>Heading Four</h4>
              </div>
              <div className="">
                <h5>Heading Five</h5>
              </div>
              <div className="">
                <h6>Heading Six</h6>
              </div>
              <div className="">
                <p className="large-text">Large Text</p>
              </div>
              <div className="">
                <p>Body Text</p>
              </div>
              <div>
                <p className="overline">Overline Text</p>
              </div>
              <div>
                <p className="caption">Caption Text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pl-6 pr-6 pt-20 pb-20 md:pl-16 md:pr-16 lg:pl-40 lg:pr-40 xl:pl-6 xl:pr-6 ">
          <div className="grid grid-cols-2 gap-20 cols-50-reverse">
            <div className="bg-white p-10">
              <h4>Buttons</h4>
            </div>
            <div className="grid grid-cols-1 grid-rows-12 gap-2">
              <a
                className={`${buttons.btnPrimary} block mt-8 md:inline-block lg:mt-0`}
                href="#"
              >
                Book a consultation
              </a>
              <a
                className={`${buttons.btnSecondary} block mt-8 md:ml-2 md:mr-2 md:inline-block lg:ml-0 lg:mr-0 lg:mt-0`}
                href="#"
              >
                Book a consultation
              </a>
              <a
                className={`${buttons.btnSecondaryOutline} block mt-8 lg:mt-0 md:inline-block`}
                href="#"
              >
                Book a consultation
              </a>
              <a
                className={`${buttons.btnTertiary} block mt-8 md:inline-block md:ml-2 lg:ml-0 lg:mt-0`}
                href="#"
              >
                See Treatments{" "}
                <ArrowRight
                  size="16"
                  color="currentColor"
                  className="inline mr-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Styleguide
