import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Carousel } from "../components/Carousel"
import { TestimonialCard } from "../components/TestimonialCard"

const Reviews = props => {
  const data = props.data.allFile.edges
  const reviews = []

  data.map(review => {
    return reviews.push(review.node.childMarkdownRemark.frontmatter)
  })

  return (
    <Layout>
      <SEO title="Reviews" />
      {/*  Reviews Title */}
      <div className="bg-gray-200">
        <div className="container mx-auto pl-6 pr-6 pb-10 md:pl-0 md:pr-0">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-3 col-span-8">
              <h2 className="text-2xl pt-8 pb-8 text-center">
                <span className="text-3xl md:text-4xl font-bold">
                  Client service testimonial list CMS content
                </span>{" "}
                - add new testimonials at /admin
              </h2>
            </div>

            <div className="col-start-2 col-span-10">
              <Carousel>
                {reviews.map(({ name, message, image }, i) => (
                  <TestimonialCard
                    key={`testimonial-${i}`}
                    name={name}
                    image={image}
                    message={message}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-24">
            <div className="col-span-12 text-center md:pr-8 md:col-span-8 md:text-left lg:col-span-4">
              <h2 className="text-3xl">Reviews</h2>
              <p>
                A description about reviews, a description about reviews, a
                description about reviews, a description about reviews, a
                description about reviews.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {reviews.map(({ name, message, image }, i) => (
                  <TestimonialCard
                    classes={`mb-4`}
                    key={`testimonial-${i}`}
                    name={name}
                    image={image}
                    message={message}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Reviews

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "reviews" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              message
              image
            }
          }
        }
      }
    }
  }
`
