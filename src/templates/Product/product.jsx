import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"
import { Clock, Watch, Calendar, Tag } from "react-feather"
import { CTABlock } from "../../components/CTABlock"
import buttons from "../../styles/buttons.module.css"

export default function Template({ data }) {
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

  const domain = data.site.siteMetadata.domain
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    id,
    title,
    category,
    excerpt,
    image,
    imageLarge,
    path,
    productAttributeTitleOne,
    productAttributeTitleTwo,
    productAttributeTitleThree,
    productAttributeTitleFour,
    productAttributeValueOne,
    productAttributeValueTwo,
    productAttributeValueThree,
    productAttributeValueFour,
  } = frontmatter
  return (
    <Layout>
      <SEO title="Product" />
      <div className="grid lg:grid-cols-2">
        <div className="bg-gray-500 flex flex-col align-center justify-center">
          <div className="container mx-auto pl-6 pr-6 pt-8 pb-8 lg:pl-0 lg:pr-0 lg:w-screen lg:left-tran-half">
            <div className="lg:w-1/2">
              <h1>{title}</h1>
              <p className="mt-4">{excerpt}</p>
              <button className={`${buttons.btnPrimary} mt-8`}>
                Book a consultation
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={`/${imageLarge}`} alt="product ad" />
        </div>
      </div>
      <div className="container mx-auto pl-6 pr-6 pt-8 pb-8 md:pl-0 md:pr-0">
        <div className="grid md:grid-cols-12">
          <div
            className="mb-6 md:col-span-8 md:pr-24 lg:col-span-7 lg:col-start-1"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="md:col-span-4 lg:col-span-3">
            <dl>
              <div className="flex justify-between pb-5 pt-5 border-solid border-t border-gray-900 flex justify-between">
                <dt>
                  <div className="flex items-center">
                    <Clock size="28" className="inline mr-2 text-gray-900" />
                    <p className="inline font-semibold uppercase tracking-wide">
                      {productAttributeTitleOne}
                    </p>
                  </div>
                </dt>
                <dd className="text-right inline font-semibold">
                  {productAttributeValueOne}
                </dd>
              </div>
              <div className="flex justify-between pb-5 pt-5 border-solid border-t border-gray-900 flex justify-between">
                <dt>
                  <div className="flex items-center">
                    <Watch size="28" className="inline mr-2 text-gray-900" />
                    <p className="inline font-semibold uppercase tracking-wide">
                      {productAttributeTitleTwo}
                    </p>
                  </div>
                </dt>
                <dd className="text-right inline font-semibold">
                  {productAttributeValueTwo}
                </dd>
              </div>
              <div className="flex justify-between pb-5 pt-5 border-solid border-t border-gray-900 flex justify-between">
                <dt>
                  <div className="flex items-center">
                    <Calendar size="28" className="inline mr-2 text-gray-900" />
                    <p className="inline font-semibold uppercase tracking-wide">
                      {productAttributeTitleThree}
                    </p>
                  </div>
                </dt>
                <dd className="text-right inline font-semibold">
                  {productAttributeValueThree}
                </dd>
              </div>
              <div className="flex justify-between pb-5 pt-5 border-solid border-t border-b border-gray-900 flex justify-between">
                <dt>
                  <div className="flex items-center">
                    <Tag size="28" className="inline mr-2 text-gray-900" />
                    <p className="text-s inline font-semibold uppercase tracking-wide">
                      {productAttributeTitleFour}
                    </p>
                  </div>
                </dt>
                <dd className="text-right inline font-semibold">
                  {productAttributeValueFour}
                </dd>
              </div>
            </dl>
            <div
              className="fb-share-button mt-4"
              data-href={`${domain}${path}`}
              data-layout="button_count"
            >
              Share to Facebook
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <CTABlock />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        title
        category
        excerpt
        image
        imageLarge
        path
        productAttributeTitleOne
        productAttributeTitleTwo
        productAttributeTitleThree
        productAttributeTitleFour
        productAttributeValueOne
        productAttributeValueTwo
        productAttributeValueThree
        productAttributeValueFour
      }
    }
    site {
      siteMetadata {
        domain
      }
    }
  }
`
