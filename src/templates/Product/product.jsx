import React from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import { graphql } from "gatsby"
import { Clock, Watch, Calendar, Tag } from "react-feather"
import buttons from "../../styles/buttons.module.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    excerpt,
    imageLarge,
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
      <SEO title={title} />
      <div className="grid lg:grid-cols-2">
        <div className="bg-gray-500 flex flex-col align-center justify-center">
          <div className="container mx-auto pl-6 pr-6 pt-24 pb-24 lg:w-screen lg:left-tran-half">
            <div className="pl-4 pr-4">
              <div className="lg:w-1/2">
                <h1>{title}</h1>
                <p className="mt-4">{excerpt}</p>
                <button className={`${buttons.btnPrimary} mt-8`}>
                  Book a consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={imageLarge} alt="Product advert" />
        </div>
      </div>
      <div className="container mx-auto pl-6 pr-6 pt-8 pb-20">
        <div className="pl-4 pr-4">
          <div className="grid md:grid-cols-12">
            <div
              className="mb-6 md:col-span-8 lg:col-span-7 lg:col-start-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="mt-8 md:mt-0 md:col-span-3 md:col-start-10 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10">
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
                      <Calendar
                        size="28"
                        className="inline mr-2 text-gray-900"
                      />
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
        title
        excerpt
        imageLarge
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
  }
`
