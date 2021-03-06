import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"
import helpers from "../../styles/helpers.module.css"
import styles from "./blog.module.css"
import { CTABlock } from "../../components/CTABlock"

export default function Template({ data }) {
  const domain = data.site.siteMetadata.domain
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark
  const {
    date,
    title,
    path,
    author,
    category,
    excerpt,
    authorImage,
  } = frontmatter

  const { readingTime } = fields

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
      <div className="bg-gray-200">
        <div className="container mx-auto pl-6 pr-6 pt-24 pb-24">
          <div className="pl-4 pr-4 flex flex-col">
            <div className="flex justify-center">
              <p className={`${helpers.chipDark} mb-4`}>{category}</p>
            </div>
            <h1 className="uppercase mb-8 mt-2 text-center">{title}</h1>
            <p className="large-text text-center">{excerpt}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pr-6 pl-6">
        <div className="grid grid-cols-1 gap-6 pt-20 pb-20 pl-4 pr-4 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <div className="rounded-full h-12 w-12 mr-2 mr-2 overflow-hidden">
                <img className="h-full w-full" src={authorImage} alt={author} />
              </div>
              <div>
                <p className="mb-0 font-semibold">{author}</p>
                <p className={`${helpers.caption}`}>{date}</p>
              </div>
            </div>
          </div>
          <p>{readingTime.text}</p>
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
      <CTABlock />
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
      fields {
        readingTime {
          text
        }
      }
    }
    site {
      siteMetadata {
        domain
      }
    }
  }
`
