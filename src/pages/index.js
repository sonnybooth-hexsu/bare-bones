import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { PostCard } from "../components/PostCard"
import { TestimonialCard } from "../components/TestimonialCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid-cols-1">
      <h1 className="mb-12">Bare Bones</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-gray-200 mb-4">
      <div>
        <PostCard heading="Considerations for darker skin types when choosing in-clinic skin treatments" />
      </div>
      <div className="">
        <PostCard heading="Getting you wedding-ready!" />
      </div>
      <div className="bg-gray-500 h-12 p-4 text-center">Grid Item 3</div>
      <div className="bg-gray-300 h-12 p-4 text-center">Grid Item 4</div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-gray-200">
      <div className="">
        <TestimonialCard testimonial="I have had lip fillers with Yalda for a while now and the results are amazing. Not only is she professional, but she makes you feel at ease immediately. It’s been 6 months since my fillers and my lips are as juicy as ever!" />
      </div>
      <div className="">
        <TestimonialCard testimonial="Just had my lips done with Yalda and I absolutely love them. She’s absolutely brilliant and has done a fantastic job." />
      </div>
      <div className="bg-gray-500 h-12 p-4 text-center">Grid Item 3</div>
      <div className="bg-gray-300 h-12 p-4 text-center">Grid Item 4</div>
    </div>
  </Layout>
)

export default IndexPage
