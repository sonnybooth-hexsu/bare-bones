import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Carousel } from "../components/Carousel"
import { TestimonialCard } from "../components/TestimonialCard"
import buttons from "../styles/buttons.module.css"

const Reviews = props => {
  const data = props.data.allFile.edges
  const reviews = []

  data.map(review => {
    return reviews.push(review.node.childMarkdownRemark.frontmatter)
  })

  return (
    <Layout page="CMS Reviews">
      <SEO title="Reviews" />
      {/* Review Slider Title */}
      <div className="bg-gray-300">
        <div className="container mx-auto pr-6 pl-6">
          <div className="pl-4 pr-4">
            <h2 className="pt-8 pb-8 text-3xl">
              <span className="font-bold">Review Slider CMS content</span> - add
              new testimonials at /admin
            </h2>
          </div>
        </div>
      </div>
      {/* Review Slider */}
      <div className="bg-gray-200 pt-20 pb-10">
        <div className="container mx-auto pl-6 pr-6 pb-10">
          <div className="col-start-2 col-span-10 pr-4 pl-4">
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
      {/* Reviews 2  Title*/}
      <div className="bg-gray-300">
        <div className="container mx-auto pr-6 pl-6">
          <div className="pl-4 pr-4">
            <h2 className="pt-8 pb-8 text-3xl">
              <span className="font-bold">Reviews 2</span> - Lorem
            </h2>
          </div>
        </div>
      </div>
      {/* Reviews 2 */}
      <div className="bg-gray-200 pt-20 pb-16">
        <div className="container mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-12 text-center md:pr-8 md:col-span-10 md:text-left lg:col-span-4">
            <div className="pr-4 pl-4">
              <h3 className="mb-6">Client Testimonials</h3>
              <p className="mb-6">
                A description about reviews, a description about reviews, a
                description about reviews, a description about reviews, a
                description about reviews.
              </p>
              <a
                className={`${buttons.btnPrimary} block md:inline-block mb-4 md:mb-0 lg:mr-4`}
                href="#"
              >
                See more reviews
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="pr-4 pl-4">
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
