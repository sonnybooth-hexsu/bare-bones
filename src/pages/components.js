import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { TextImage } from "../components/TextImage"

const Components = () => {
  return (
    <Layout page="Guides">
      <SEO title="Components" />
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <h1>Bla</h1>
        <TextImage />
      </div>
    </Layout>
  )
}

export default Components
