import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
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
      <div className="bg-gray-200">
        <div className="container mx-auto pl-6 pr-6 pb-10 md:pl-0 md:pr-0">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Client service testimonial list CMS content
            </span>{" "}
            - add new testimonials at /admin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {reviews.map(({ name, message, image }, i) => (
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
