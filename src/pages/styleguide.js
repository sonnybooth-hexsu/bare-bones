import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const Styleguide = () => {
  return (
    <Layout page="Guides">
      <SEO title="Styleguide" />
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <h1>Styleguide</h1>
      </div>
    </Layout>
  )
}

export default Styleguide
