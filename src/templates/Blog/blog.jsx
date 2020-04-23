import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"
import styles from "./blog.module.css"

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

    const twitterShare = () => {
      window.twttr = (function(d, s, id) {
        const fjs = d.getElementsByTagName(s)[0]
        const t = window.twttr || {}
        if (d.getElementById(id)) return t
        const js = d.createElement(s)
        js.id = id
        js.src = "https://platform.twitter.com/widgets.js"
        fjs.parentNode.insertBefore(js, fjs)

        t._e = []
        t.ready = function(f) {
          t._e.push(f)
        }

        return t
      })(document, "script", "twitter-wjs")
    }

    twitterShare()
    fbShare()
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <div className="pl-4 pr-4 flex flex-col">
          <div className="flex justify-center">
            <p className="inline text-center text-xs font-semibold tracking-widest uppercase bg-black text-white rounded-full py-2 px-4 mb-4">
              {category}
            </p>
          </div>
          <h1 className="uppercase text-4xl leading-tight tracking-tight mb-8 mt-2 text-center font-normal lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="text-center font-semi-bold">{excerpt}</p>
        </div>
      </div>
      <div className="container mx-auto pr-6 pl-6">
        <div className="grid grid-cols-1 gap-6 pt-20 pb-20 pl-4 pr-4 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <div className="rounded-full h-12 w-12 mr-2 mr-2 overflow-hidden h-16 w-16">
                <img className="h-full w-full" src={authorImage} alt={author} />
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
          </div>
          <div
            className={`${styles.blogContent} lg:col-span-8`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="lg:col-span-2">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-show-count="false"
            >
              Tweet
            </a>
            <div
              className="fb-share-button"
              data-href={`${domain}${path}`}
              data-layout="button"
              data-show-count="false"
            >
              Share to Facebook
            </div>
          </div>
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
