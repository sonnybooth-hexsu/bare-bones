import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { PostCard } from "../components/PostCard"
import { Filter } from "../components/Filter"

const Blogs = props => {
  const data = props.data.allFile.edges
  const blogCategories = props.data.site.siteMetadata.blogCategories
  const blogsDestructured = []

  data.map(blog => {
    return blogsDestructured.push(blog.node.childMarkdownRemark.frontmatter)
  })

  const [blogs, setBlogsState] = useState(blogsDestructured)

  return (
    <Layout page="CMS Blogs">
      <SEO title="Blogs" />
      <div className="bg-gray-200">
        <div className="container mx-auto pb-10 pl-6 pr-6">
          <div className="grid grid-cols-1 pr-4 pl-4 pt-12 md:gap-6 md:grid-cols-5 xl:grid-cols-7">
            <div className="grid-cols-1 md:col-span-2 xl:col-span-2">
              <Filter
                types={blogCategories}
                items={blogsDestructured}
                setItemsState={setBlogsState}
              />
            </div>
            <div className="col-span-3 xl:col-span-5">
              <div className="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
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
              id
              category
              author
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
    site {
      siteMetadata {
        blogCategories {
          title
          uid
        }
      }
    }
  }
`
