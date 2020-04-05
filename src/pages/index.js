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
import treatmentHeader from "../assets/images/treatment-header.jpg"
import signature from "../assets/images/signature.svg"
import heroImageSm from "../assets/images/hero-image-sm.jpg"

import {
  Clock,
  Watch,
  Calendar,
  Tag,
  Check,
  CheckCircle,
  CheckSquare,
  ArrowRight,
} from "react-feather"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-gray-100">
      <div className="hero-block pt-10 md:grid-cols-12">
        <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0 md:col-span-5">
          <h1>Dr Yalda Jamali</h1>
          <p className="mb-10">
            Providing a medical approach to facial aesthetics in London &amp;
            Nottingham. Another sentence here is required approximately this
            length.
          </p>
          <a
            href="#"
            className="btn__primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded block mb-5 md:inline"
          >
            Book a consultation
          </a>
          <a
            href="#"
            className="btn__secondary bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 text-center border-2 border-solid border-blue-500 hover:border-transparent rounded block md:inline"
          >
            See Treatments
          </a>
        </div>
      </div>
      <img
        className="md:object-none"
        src={heroImageSm}
        alt="A mock signature of Dr Yalda "
      />
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
            Testimonial component
          </span>{" "}
          - for client reviews and such alike
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
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
              alt="Dr Yalda pushing a client's hair back, as part of the consultation process."
            />
          </div>
        </div>
        <div className="md:flex mb-2">
          <div className="w-full mt-8 md:mt-0 md:w-7/12 md:pr-20">
            <img
              className=""
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
              alt="Dr Yalda pushing a client's hair back, as part of the consultation process."
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
                <Check className="inline mr-2" />
                Reducing the signs of ageing
              </li>
              <li>
                <CheckCircle className="inline mr-2" />
                Defining your facial features
              </li>
              <li>
                <CheckSquare className="inline mr-2" />
                Reducing the signs of ageing
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
    {/* CTA Block */}
    <CTABlock />
    {/* Product Slider */}
    <div className="bg-gray-200">
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Product Slider component
          </span>
          - for before and after images of clients/products
        </h2>
        <div className="grid pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
        </div>
        {/* Fullwidth Image Product Card Title */}
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Fullwidth Image Product Card
          </span>{" "}
          - Used to show off products and services
        </h2>
        {/* Fullwidth Image Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pb-12">
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} alt="Lips" />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Soft Tissue Fillers
              </h2>
              <p className="mb-12">
                Instantly soften fine lines &amp; wrinkles, restore age-related
                volume loss and augment and contour facial features.
              </p>
              <a href="#">View</a>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} alt="Lips" />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">Profhilo</h2>
              <p className="mb-12">
                A skin bio-remodelling treatment which improves skin quality and
                laxity and combats signs of ageing.
              </p>
              <a href="#">View</a>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} alt="Lips" />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Chemical Peels
              </h2>
              <p className="mb-12">
                Removes dead skin cells and encourages new ones to form. Treats
                acne, sun damage and pigmentation
              </p>
              <a href="#">View</a>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-red-200 pt-16 pb-16 flex justify-center">
              <img className="h-20" src={lipsFillers} alt="Lips" />
            </div>
            <div className="pr-8 pb-8 pl-8">
              <h2 className="mt-12 mb-2 text-3xl tracking-wide">
                Soft Tissue Fillers
              </h2>
              <p className="mb-12">
                Instantly soften fine lines &amp; wrinkles, restore age-related
                volume loss and augment and contour facial features.
              </p>
              <a href="#">View</a>
            </div>
          </div>
        </div>
        {/* Fullwidth Image Product Card Title */}
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Icon Product Card
          </span>{" "}
          - Used to show off products and services
        </h2>
        {/* Icon Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/* Icon Product Card */}
          <div className="bg-white pr-12 pt-12 pb-12 pl-12">
            <img className="h-12" src={lipsFillers} alt="Lips" />
            <h2 className="mt-8 mb-2 text-3xl tracking-wide">
              Soft Tissue Fillers
            </h2>
            <p className="mb-12">
              Instantly soften fine lines &amp; wrinkles, restore age-related
              volume loss and augment and contour facial features.
            </p>
            <div className="flex items-end">
              {" "}
              <ArrowRight className="mr-2 text-gray-900" />
            </div>
          </div>
          {/* Icon Product Card */}
          <div className="bg-white pr-12 pt-12 pb-12 pl-12">
            <img className="h-12" src={lipsFillers} alt="Lips" />
            <h2 className="mt-8 mb-2 text-3xl tracking-wide">Profhilo</h2>
            <p className="mb-12">
              A skin bio-remodelling treatment which improves skin quality and
              laxity and combats signs of ageing.
            </p>
            <div className="flex items-end">
              {" "}
              <ArrowRight className="mr-2 text-gray-900" />
            </div>
          </div>
          {/* Icon Product Card */}
          <div className="bg-white pr-12 pt-12 pb-12 pl-12">
            <img className="h-12" src={lipsFillers} alt="Lips" />
            <h2 className="mt-8 mb-2 text-3xl tracking-wide">Chemical Peels</h2>
            <p className="mb-12">
              Removes dead skin cells and encourages new ones to form. Treats
              acne, sun damage and pigmentation
            </p>
            <div className="flex items-end">
              {" "}
              <ArrowRight className="mr-2 text-gray-900" />
            </div>
          </div>
          {/* Icon Product Card */}
          <div className="bg-white pr-12 pt-12 pb-12 pl-12">
            <img className="h-12" src={lipsFillers} alt="Lips" />
            <h2 className="mt-8 mb-2 text-3xl tracking-wide">Microneedling</h2>
            <p className="mb-12">
              Treat a multitude of skin concerns, including scarring,
              pigmentation, ageing and sun damage.
            </p>
            <div className="flex items-end">
              {" "}
              <ArrowRight className="mr-2 text-gray-900" />
            </div>
          </div>
          {/* Icon Product Card */}
          <div className="bg-white pr-12 pt-12 pb-12 pl-12">
            <img className="h-12" src={lipsFillers} alt="Lips" />
            <h2 className="mt-8 mb-2 text-3xl tracking-wide">
              Medical Grade Skincare
            </h2>
            <p className="mb-12">
              Treat a multitude of skin concerns including skin tags, treat deep
              lines and excess sagging skin around the eyes.
            </p>
            <div className="flex items-end">
              {" "}
              <ArrowRight className="mr-2 text-gray-900" />
            </div>
          </div>
          {/* Icon Product Card */}
          <div className="bg-white pr-12 pt-12 pb-12 pl-12">
            <img className="h-12" src={lipsFillers} alt="Lips" />
            <h2 className="mt-8 mb-2 text-3xl tracking-wide">
              Lines &amp; Wrinkles
            </h2>
            <p className="mb-12">
              Minimise the appearance of fine lines and wrinkles by temporarily
              relaxing specific muscles.
            </p>
            <div className="flex items-end">
              {" "}
              <ArrowRight className="mr-2 text-gray-900" />
            </div>
          </div>
        </div>
        {/* Treatment Content Title */}
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            Treatment Content
          </span>{" "}
          - Used to describe a treatment or service
        </h2>
        {/* Treatment Content */}
        <div className="grid grid-cols-1 grid md:grid-cols-12 gap-6 pb-12">
          <div className="md:col-span-8">
            <h2>About This Treatment</h2>
            <p>
              The revolutionary treatment has been around since the 1980’s and
              with very few risks and no recovery time it still remains one of
              the most popular non-surical cosmetic treatments. Botulinum Toxin
              injections minimises the appearance of lines and wrinkles by
              temporarily relaxing specific muscles, with results lasting 3 to 4
              months. They are also used for treatment of hyperhidrosis (excess
              sweating) and bruxism (involuntary habitual grinding of the
              teeth).
            </p>
            <div className="border-solid border-l-4 border-red-500 pl-6 md:pr-48 md:ml-10">
              <h5 className="text-2xl leading-tight mt-8 mb-8 md:text-3xl">
                &quot;I have had lip fillers with Yalda for a while now and the
                results are amazing. Not only is she professional but she makes
                you feel at ease. It’s been nearly 6 months since my fillers and
                my lips are still juicy as ever!&quot;
              </h5>
            </div>
            <p className="pb-8">
              The revolutionary treatment has been around since the 1980’s and
              with very few risks and no recovery time it still remains one of
              the most popular non-surical cosmetic treatments. Botulinum Toxin
              injections minimises the appearance of lines and wrinkles by
              temporarily relaxing specific muscles, with results lasting 3 to 4
              months. They are also used for treatment of hyperhidrosis (excess
              sweating) and bruxism (involuntary habitual grinding of the
              teeth).
            </p>
          </div>
          {/* Overview Attributes */}
          <div className="md:col-start-10 md:col-span-3">
            <dl className="mb-8">
              <dt className="pb-4 pt-4 border-solid border-t-2 border-gray-900 flex justify-between">
                <div>
                  <Clock className="inline mr-2 text-gray-900" />
                  <p className="inline font-bold">Treatment Time</p>
                </div>
                <dd className="text-right inline">10 Minutes</dd>
              </dt>
              <dt className="pb-4 pt-4 border-solid border-t-2 border-gray-900 flex justify-between">
                <div>
                  <Watch className="inline mr-2 text-gray-900" />
                  <p className="inline font-bold">Downtime</p>
                </div>
                <dd className="text-right inline">One day</dd>
              </dt>
              <dt className="pb-4 pt-4 border-solid border-t-2 border-gray-900 flex justify-between">
                <div>
                  <Calendar className="inline mr-2 text-gray-900" />
                  <p className="inline font-bold">Results Last</p>
                </div>
                <dd className="text-right inline">3–4 Months</dd>
              </dt>
              <dt className="pb-4 pt-4 border-solid border-t-2 border-gray-900 border-solid border-b-2 border-gray-900 flex justify-between">
                <div>
                  <Tag className="inline mr-2 text-gray-900" />
                  <p className="inline font-bold">Price</p>
                </div>
                <dd className="text-right inline">Staring from £100</dd>
              </dt>
            </dl>
          </div>
        </div>
        {/* Treatment Content Title */}
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            50/50 Content Block
          </span>{" "}
          - To display 50/50 content with text hierarchy
        </h2>
        {/* About Content */}
        <div className="grid grid-cols-1 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl leading-tight tracking-wide md:text-3xl">
              Dr. Yalda Jamali is a qualified medical doctor specialising in
              aesthetic medicine. She runs a successful clinic and mentors at
              the Harley Academy.
            </h2>
          </div>
          <div>
            <p className="pb-4">
              She graduated from the University of Manchester with a Bachelor of
              Medicine, Bachelor of Surgery (MBChB) and holds a Level 7
              postgraduate qualification in facial injectables. Dr Yalda is
              passionate about ensuring aesthetics is a carefully regulated
              industry, conducted with extreme precision, diligence and care.{" "}
            </p>
            <p className="pb-4">
              She has a key artistic eye for detail. Her clients regard her as a
              personable, results-oriented aesthetics doctor. Dr Yalda goes
              above and beyond to ensure that her clients are completely
              satisfied by their results. In addition to running a successful
              clinic in Nottingham, Dr Yalda is a mentor at the Harley Academy
              in London for medical professionals wishing to enter the
              aesthetics field. In her capacity as a mentor, Dr Yalda provides
              her insights and expert observations into the aesthetics industry
              to the next generation of medical aesthetic professionals.
            </p>
            <p className="pb-4">
              In addition to running a successful clinic in Nottingham, Dr Yalda
              is a mentor at the Harley Academy in London for medical
              professionals wishing to enter the aesthetics field. In her
              capacity as a mentor, Dr Yalda provides her insights and expert
              observations into the aesthetics industry to the next generation
              of medical aesthetic professionals.
            </p>
            <p className="pb-4">
              Dr Yalda also demonstrates her clinical skills at the GILD Clinic
              in London, focusing on the practical application of facial
              injectables and skin rejuvenation.
            </p>
            <img
              className="pt-5 h-20"
              src={signature}
              alt="A mock signature of Dr Yalda "
            />
          </div>
        </div>
        {/* 50/50 Header Title */}
        <h2 className="text-2xl pt-8 pb-8">
          <span className="text-3xl md:text-4xl text-red-500 font-bold">
            50/50 Header
          </span>{" "}
          - Display a 50% hero image and text
        </h2>
        {/* Final Container Div */}
      </div>
      {/* 50/50 Header */}
      <div className="grid grid-rows-2 md:grid-cols-2">
        <div className="flex flex-col justify-center bg-gray-300 pt-20 pb-20 pr-8 pl-8 md:pt-0 md:pb-0 md:h-full md:pr-12 md:pl-12 lg:pr-20 lg:pl-20 xl:pr-50 xl:pl-50">
          <h1>Soft Tissue Fillers</h1>
          <p className="pb-6">
            Instantly soften fine lines & wrinkles, restore age-related volume
            loss and augment and contour facial features.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book a consultation
          </button>
        </div>
        <div className="md:h-full">
          <img
            src={treatmentHeader}
            alt="Close up of model in profile pose, with head turned to the left."
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
