import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { TextImage } from "../components/TextImage"
import cover1 from "../assets/images/cover-1.jpg"
import buttons from "../styles/buttons.module.css"

const Components = () => {
  return (
    <Layout page="Guides">
      <SEO title="Components" />
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <h1>Components</h1>
        <TextImage image={cover1} imageAlt="Girl smiling">
          <h2>
            ENHANCE AND <i>restore</i> YOUR <i>natural</i> BEAUTY.
          </h2>
          <p>
            Lorem tempor leo turpis enim nisi ultrices enim sed facilisis.
            Venenatis tellus urna, semper quis. Volutpat nisl est sit blandit
            dictum adipiscing odio amet euismod.
          </p>
          <a className={`${buttons.btnPrimary}`} href="#">
            Book a consultation
          </a>
        </TextImage>
        <TextImage reverse image={cover1}>
          <h2>
            ENHANCE AND <i>restore</i> YOUR <i>natural</i> BEAUTY.
          </h2>
          <p>
            Lorem tempor leo turpis enim nisi ultrices enim sed facilisis.
            Venenatis tellus urna, semper quis. Volutpat nisl est sit blandit
            dictum adipiscing odio amet euismod.
          </p>
          <a className={`${buttons.btnPrimary}`} href="#">
            Book a consultation
          </a>
        </TextImage>
      </div>
    </Layout>
  )
}

export default Components
