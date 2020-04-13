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
        <div className="container mx-auto pr-6 pl-6">
          <div className="pl-4 pr-4">
            <h2 className="text-2xl pt-8 pb-8">
              <span className="text-3xl text-red-500 font-bold md:text-4xl">
                Client service testimonial list CMS content
              </span>{" "}
              - add new testimonials at /admin
            </h2>
          </div>
          <div className="grid grid-cols-1">
            <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
              <div className="">
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
