import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { PostCard } from "../components/PostCard"
import { TestimonialCard } from "../components/TestimonialCard"
import { CTABlock } from "../components/CTABlock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <h1 className="mb-12 mt-12 text-6xl leading-tight pt-40 pb-40 tracking-tight">
            <i className="border-b-4 border-solid border-black">Email</i>, or
            leave a message in the{" "}
            <i className="border-b-4 border-solid border-black">contact form</i>
            . View work on{" "}
            <i className="border-b-4 border-solid border-black">Instagram</i>.
            See reviews on{" "}
            <i className="border-b-4 border-solid border-black">Facebook</i>.
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
          <div>
            <PostCard heading="Considerations for darker skin types when choosing in-clinic skin treatments" />
          </div>
          <div className="">
            <PostCard heading="Getting you wedding-ready!" />
          </div>
          <div className="bg-gray-500 h-12 p-4 text-center">Grid Item 3</div>
          <div className="bg-gray-300 h-12 p-4 text-center">Grid Item 4</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
          <TestimonialCard testimonial="I have had lip fillers with Yalda for a while now and the results are amazing. Not only is she professional, but she makes you feel at ease immediately. It’s been 6 months since my fillers and my lips are as juicy as ever!" />
          <TestimonialCard testimonial="Just had my lips done with Yalda and I absolutely love them. She’s absolutely brilliant and has done a fantastic job." />
          <div className="bg-gray-500 h-12 p-4 text-center">Grid Item 3</div>
          <div className="bg-gray-300 h-12 p-4 text-center">Grid Item 4</div>
        </div>
        <div className="md:flex mb-12">
          <div className="md:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl">
              Enhance and restore your natural beauty with non-surgical cosmetic
              treatments.
            </h2>
            <p>
              Dr Yalda is an expert in identifying the treatments that will help
              you look and feel your best. Her experience and artistic eye in
              conjunction with using the most premium brands allows her to
              provide her patients with satisfied, long lasting results:
            </p>
            <ul>
              <li>Reducing the signs of ageing</li>
              <li>Defining your facial features</li>
              <li>Improving your overall skin health</li>
            </ul>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-7/12 md:pl-20">
            <img
              className=""
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <CTABlock />
  </Layout>
)

export default IndexPage
