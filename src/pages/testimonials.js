import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { TestimonialCard } from "../components/TestimonialCard"

const Testimonials = props => {
  console.log(props)
  const testimonials = []

  return (
    <Layout>
      <SEO title="Testimonials" />
      <div className="bg-gray-200">
        <div className="container mx-auto pb-10">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Testimonial list CMS content
            </span>{" "}
            - add new testimonials at /admin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
            {testimonials.map(({ name, message, image }, i) => (
              <TestimonialCard
                key={`testimonial-${i}`}
                name={name}
                image={image}
                message={message}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Testimonials
