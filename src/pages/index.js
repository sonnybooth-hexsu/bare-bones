import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid-cols-1">
      <h1 className="mb-12">Bare Bones</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <div className="bg-gray-300 h-12">Grid Item 1</div>
      <div className="bg-gray-500 h-12">Grid Item 2</div>
      <div className="bg-gray-300 h-12">Grid Item 3</div>
      <div className="bg-gray-500 h-12">Grid Item 4</div>
      <div className="bg-gray-300 h-12">Grid Item 5</div>
      <div className="bg-gray-500 h-12">Grid Item 6</div>
      <div className="bg-gray-300 h-12">Grid Item 7</div>
      <div className="bg-gray-500 h-12">Grid Item 8</div>
      <div className="bg-gray-300 h-12">Grid Item 9</div>
      <div className="bg-gray-500 h-12">Grid Item 10</div>
      <div className="bg-gray-300 h-12">Grid Item 11</div>
      <div className="bg-gray-500 h-12">Grid Item 12</div>
    </div>
  </Layout>
)

export default IndexPage
