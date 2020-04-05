import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { PostCard } from "../components/PostCard"
import { TestimonialCard } from "../components/TestimonialCard"
import { CTABlock } from "../components/CTABlock"
import { ProductSlider } from "../components/ProductSlider"
import lipsBefore from "../assets/images/lips-before.jpg"
import lipsAfter from "../assets/images/lips-after.jpg"
import lipsFillers from "../assets/images/lip-fillers.svg"
import { Clock } from "react-feather"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-gray-100">
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className="grid grid-cols-1 pt-8 pb-8">
          <h1>Bare Bones</h1>
          <h2 className="text-2xl text-red-500">
            A bare bones website for client development
          </h2>
        </div>
        <div className="">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Linked Title Component - for hotspot areas
            </span>{" "}
          </h2>
          <h1 className="mb-12 mt-2 text-6xl leading-tight tracking-tight">
            <i className="border-b-4 border-solid border-black">Email</i>, or
            leave a message in the{" "}
            <i className="border-b-4 border-solid border-black">contact form</i>
            . View work on{" "}
            <i className="border-b-4 border-solid border-black">Instagram</i>.
            See reviews on{" "}
            <i className="border-b-4 border-solid border-black">Facebook</i>.
          </h1>
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Post Card component
          </span>{" "}
          - for blogs and articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12">
          <PostCard
            key={`post-card-${1}`}
            title={
              "Considerations for darker skin types when choosing in-clinic skin treatments"
            }
            category="Category"
            path="/cheek-fillers"
            date="October 07, 2019"
            excerpt="Cheek Fillers description"
            image="assets/cheek-filler-image.jpg"
            imageLarge="assets/cheek-filler-image.jpg"
          />
          <PostCard
            key={`post-card-${2}`}
            title={
              "Considerations for darker skin types when choosing in-clinic skin treatments"
            }
            category="Category"
            path="/cheek-fillers"
            date="October 07, 2019"
            excerpt="Cheek Fillers description"
            image="assets/cheek-filler-image.jpg"
            imageLarge="assets/cheek-filler-image.jpg"
          />
          <PostCard
            key={`post-card-${3}`}
            title={
              "Considerations for darker skin types when choosing in-clinic skin treatments"
            }
            category="Category"
            path="/cheek-fillers"
            date="October 07, 2019"
            excerpt="Cheek Fillers description"
            image="assets/cheek-filler-image.jpg"
            imageLarge="assets/cheek-filler-image.jpg"
          />
          <PostCard
            key={`post-card-${4}`}
            title={
              "Considerations for darker skin types when choosing in-clinic skin treatments"
            }
            category="Category"
            path="/cheek-fillers"
            date="October 07, 2019"
            excerpt="Cheek Fillers description"
            image="assets/cheek-filler-image.jpg"
            imageLarge="assets/cheek-filler-image.jpg"
          />
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Testimonial component
          </span>{" "}
          - for client reviews and such alike
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-12">
          <TestimonialCard testimonial="I have had lip fillers with Yalda for a while now and the results are amazing. Not only is she professional, but she makes you feel at ease immediately. It’s been 6 months since my fillers and my lips are as juicy as ever!" />
          <TestimonialCard testimonial="Just had my lips done with Yalda and I absolutely love them. She’s absolutely brilliant and has done a fantastic job." />
          <TestimonialCard testimonial="I have had lip fillers with Yalda for a while now and the results are amazing. Not only is she professional, but she makes you feel at ease immediately. It’s been 6 months since my fillers and my lips are as juicy as ever!" />
          <TestimonialCard testimonial="Just had my lips done with Yalda and I absolutely love them. She’s absolutely brilliant and has done a fantastic job." />
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Cover component
          </span>{" "}
          - for image &amp; text client info. Order can be switched depending on
          design choice
        </h2>
        <div className="md:flex mb-12">
          <div className="md:w-5/12 flex flex-col justify-center">
            <h3 className="text-3xl leading-tight pb-2">
              Enhance and restore your natural beauty with non-surgical cosmetic
              treatments.
            </h3>
            <p className="pb-4">
              Dr Yalda is an expert in identifying the treatments that will help
              you look and feel your best. Her experience and artistic eye in
              conjunction with using the most premium brands allows her to
              provide her patients with satisfied, long lasting results:
            </p>
            <ul>
              <li>Reducing the signs of ageing</li>
              <li>Defining your facial features</li>
              <li>Improving your overall skin health</li>
            </ul>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-7/12 md:pl-20">
            <img
              className=""
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
            />
          </div>
        </div>
        <div className="md:flex mb-2">
          <div className="w-full mt-8 md:mt-0 md:w-7/12 md:pr-20">
            <img
              className=""
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
            />
          </div>
          <div className="md:w-5/12 mt-8 flex flex-col justify-center pb-10">
            <h3 className="text-3xl leading-tight pb-2">
              Enhance and restore your natural beauty with non-surgical cosmetic
              treatments.
            </h3>
            <p className="pb-4">
              Dr Yalda is an expert in identifying the treatments that will help
              you look and feel your best. Her experience and artistic eye in
              conjunction with using the most premium brands allows her to
              provide her patients with satisfied, long lasting results:
            </p>
            <ul>
              <li>
                <Clock />
                Reducing the signs of ageing
              </li>
              <li>
                <Clock />
                Defining your facial features
              </li>
              <li>
                <Clock />
                Improving your overall skin health
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Call To Action component
          </span>{" "}
          - Used to usher users to info/sale points
        </h2>
      </div>
    </div>
    <CTABlock />
    <div className="bg-gray-200">
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Product Slider component
          </span>
          - for before and after images of clients/products
        </h2>
        <div className="grid pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
        </div>
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Product Card
          </span>{" "}
          - Used to show off products and services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 pb-12">
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Soft Tissue Fillers
              </h2>
              <p className="mb-12">
                Instantly soften fine lines &amp; wrinkles, restore age-related
                volume loss and augment and contour facial features.
              </p>
              <a href="#">View Treatment</a>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Soft Tissue Fillers
              </h2>
              <p className="mb-12">
                Instantly soften fine lines &amp; wrinkles, restore age-related
                volume loss and augment and contour facial features.
              </p>
              <a href="#">View Treatment</a>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Soft Tissue Fillers
              </h2>
              <p className="mb-12">
                Instantly soften fine lines &amp; wrinkles, restore age-related
                volume loss and augment and contour facial features.
              </p>
              <a href="#">View Treatment</a>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Soft Tissue Fillers
              </h2>
              <p className="mb-12">
                Instantly soften fine lines &amp; wrinkles, restore age-related
                volume loss and augment and contour facial features.
              </p>
              <a href="#">View Treatment</a>
            </div>
          </div>
          <h2>About This Treatment</h2>
          <p>
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
