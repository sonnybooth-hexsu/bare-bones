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
        <div className="grid grid-cols-1 pt-8 pb-8">
          <h1 className="text-4xl">Bare Bones</h1>
          <h2 className="text-2xl text-red-500">
            A bare bones website for client development
          </h2>
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-4xl text-red-500 font-bold">
            PostCard component
          </span>{" "}
          - for blogs and articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
          <PostCard heading="Considerations for darker skin types when choosing in-clinic skin treatments" />
          <PostCard heading="Getting you wedding-ready!" />
          <PostCard heading="Considerations for darker skin types when choosing in-clinic skin treatments" />
          <PostCard heading="Getting you wedding-ready!" />
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-4xl text-red-500 font-bold">
            Testimonial component
          </span>{" "}
          - for client reviews and such alike
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-12">
          <TestimonialCard testimonial="I have had lip fillers with Yalda for a while now and the results are amazing. Not only is she professional, but she makes you feel at ease immediately. It’s been 6 months since my fillers and my lips are as juicy as ever!" />
          <TestimonialCard testimonial="Just had my lips done with Yalda and I absolutely love them. She’s absolutely brilliant and has done a fantastic job." />
          <TestimonialCard testimonial="I have had lip fillers with Yalda for a while now and the results are amazing. Not only is she professional, but she makes you feel at ease immediately. It’s been 6 months since my fillers and my lips are as juicy as ever!" />
          <TestimonialCard testimonial="Just had my lips done with Yalda and I absolutely love them. She’s absolutely brilliant and has done a fantastic job." />
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-4xl text-red-500 font-bold">
            Cover component
          </span>{" "}
          - for image & text client info. Order can be switched depending on
          design choice
        </h2>
        <div className="md:flex mb-12">
          <div className="md:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl leading-tight pb-2">
              Enhance and restore your natural beauty with non-surgical cosmetic
              treatments.
            </h2>
            <p className="pb-4">
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
        <div className="md:flex mb-12">
          <div className="w-full mt-8 md:mt-0 md:w-7/12 md:pr-20">
            <img
              className=""
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
            />
          </div>
          <div className="md:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl leading-tight pb-2">
              Enhance and restore your natural beauty with non-surgical cosmetic
              treatments.
            </h2>
            <p className="pb-4">
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
        </div>
      </div>
    </div>
    <CTABlock />
  </Layout>
)

export default IndexPage
