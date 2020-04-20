import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Not Found" />
    <div className="container mx-auto pl-6 pr-6 pb-10 md:pl-0 md:pr-0">
      <p>
        Page not found. <a href="/">Return home</a>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
