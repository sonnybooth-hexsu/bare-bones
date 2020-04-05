import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { PostCard } from "../components/PostCard"
import { graphql } from "gatsby"

const Blogs = props => {
  const data = props.data.allFile.edges
  const blogs = []

  data.map(blog => {
    return blogs.push(blog.node.childMarkdownRemark.frontmatter)
  })

  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="bg-gray-200">
        <div className="container mx-auto pb-10">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Post list CMS content
            </span>{" "}
            - add new posts at /admin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
            {blogs.map(
              (
                { title, category, path, date, excerpt, image, imageLarge },
                i
              ) => (
                <PostCard
                  key={`post-card-${i}`}
                  title={title}
                  category={category}
                  path={path}
                  date={date}
                  excerpt={excerpt}
                  image={image}
                  imageLarge={imageLarge}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blogs" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              layout
              title
              category
              path
              date(formatString: "MMMM DD, YYYY")
              excerpt
              image
              imageLarge
            }
          }
        }
      }
    }
  }
`
