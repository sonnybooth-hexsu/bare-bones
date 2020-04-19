import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const domain = data.site.siteMetadata.domain
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    date,
    title,
    path,
    author,
    category,
    excerpt,
    authorImage,
  } = frontmatter
  const isSSR = typeof window === "undefined"

  if (!isSSR) {
    const fbShare = () => {
      return ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        const js = d.createElement(s)
        js.id = id
        js.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
        fjs.parentNode.insertBefore(js, fjs)
      })(document, "script", "facebook-jssdk")
    }

    fbShare()
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className="bg-gray-500">
        <div className="container mx-auto text-center pt-12 pb-12 pl-6 pr-6 md:pl-0 md:pr-0 md:pb-20 md:pt-20">
          <p className="font-bold">{category}</p>
          <h1 className="leading-none text-5xl pt-2 pb-2 md:text-6xl">
            {title}
          </h1>
          <h2>{excerpt}</h2>
        </div>
      </div>
      <div className="container mx-auto mt-12 pl-6 pr-6 md:pl-0 md:pr-0">
        <div className="grid pb-20 md:grid-cols-12">
          <div className="md:col-span-3 lg:col-span-2">
            <div className="flex items-center">
              <div className="rounded-full h-12 w-12 mr-2 mr-2 overflow-hidden h-16 w-16">
                <img
                  className="h-full w-full"
                  src={`/${authorImage}`}
                  alt={author}
                />
              </div>
              <div>
                <p className="pb-0 mb-0 text-md font-medium tracking-wide">
                  {author}
                </p>
                <p className="pb-0 mb-0 text-gray-600 text-sm font-medium">
                  {date}
                </p>
              </div>
            </div>
            <div
              className="fb-share-button mt-4"
              data-href={`${domain}${path}`}
              data-layout="button_count"
            >
              Share to Facebook
            </div>
          </div>
          <div
            className="mt-10 md:mt-0 md:col-span-8 md:col-start-5 lg:col-start-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
        author
        category
        excerpt
        authorImage
      }
    }
    site {
      siteMetadata {
        domain
      }
    }
  }
`
