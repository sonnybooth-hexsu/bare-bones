import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const Success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <div className="bg-gray-200">
        <div className="container mx-auto pl-6 pr-6 pb-10 md:pl-0 md:pr-0">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Success
            </span>{" "}
            - we will be in touch soon
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default Success
