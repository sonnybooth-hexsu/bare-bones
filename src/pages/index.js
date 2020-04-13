import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { CTABlock } from "../components/CTABlock"
import { ProductSlider } from "../components/ProductSlider"
import lipsBefore from "../assets/images/lips-before.jpg"
import lipsAfter from "../assets/images/lips-after.jpg"
import treatmentHeader from "../assets/images/treatment-header.jpg"
import signature from "../assets/images/signature.svg"
import heroImageSm from "../assets/images/hero-image-sm.jpg"
import heroImageMd from "../assets/images/hero-image-MD.jpg"
import yaldaAbout from "../assets/images/yalda-about.jpg"
import yaldaAboutSm from "../assets/images/about-image.png"
import avatar from "../assets/images/avatar.jpg"
import mesoestetic from "../assets/images/brand-logo-mesoestetic.svg"
import perfectPeel from "../assets/images/brand-logo-perfect-peel.png"
import profhilo from "../assets/images/brand-logo-profhilo.svg"
import teoxane from "../assets/images/brand-logo-teoxane.svg"
import zo from "../assets/images/brand-logo-zo.png"

import { Clock, Watch, Calendar, Tag, Check, ArrowRight } from "react-feather"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Hero Block */}
    <div className="bg-gray-400">
      <div
        className="hero-block pt-10 lg:grid-cols-12 bg-unset lg:bg-cover lg:h-screen-80 lg:flex lg:pt-0 lg:items-center lg:bg-bottom"
        style={{ backgroundImage: `url(${heroImageMd})` }}
      >
        <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0 md:pr-0">
          <div className="pl-4 pr-4">
            <div className="md:w-1/2 flex flex-col">
              <h1 className="text-center mb-12 md:text-left md:text-7xl">
                Dr Yalda Jamali
              </h1>
              <p className="text-center md:text-left font-medium mb-10 lg:mb-20">
                Providing a medical approach to facial aesthetics in London
                &amp; Nottingham. Another sentence here is required
                approximately this length.
              </p>
              <div>
                <a
                  className="btn__primary block md:inline-block mb-4 md:mb-0 lg:mr-4"
                  href="#"
                >
                  Book a consultation
                </a>
                <a className="btn__tertiary block md:inline-block" href="#">
                  See Treatments{" "}
                  <ArrowRight className="inline mr-2 text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="md:hidden lg:hidden"
        src={heroImageSm}
        alt="Dr Yalda smiling"
      />
    </div>
    {/* Logo Quilt Title
        <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Logo Quilt
            </span>{" "}
            - To display clients, partnerships, social proof ETC
          </h2>
        </div>
      </div>
    </div> */}
    {/*  Logo Quilt*/}
    <div className="bg-gray-200">
      <div className="container mx-auto pl-6 pr-6 pt-10 pb-10">
        <div className="grid gap-6 pl-4 pr-4 lg:grid-cols-6 ">
          <p className="text-sm font-medium text-center text-gray-600 md:items-center lg:flex lg:text-left ">
            Partnerships with leading aesthetics brands:
          </p>
          <div className="w-full h-16 flex items-center justify-center mb-5 lg:mb-0">
            {" "}
            <img
              className="h-full p-5 lg:p-4"
              src={teoxane}
              alt="Teoxane logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center mb-5 lg:mb-0">
            {" "}
            <img
              className="h-full p-5 lg:p-4"
              src={profhilo}
              alt="Profhilo logo"
            />
          </div>
          <div className="w-full h-16 flex items-center justify-center mb-5 lg:mb-0">
            {" "}
            <img className="p-12 lg:p-4" src={zo} alt="Zo Skin Health logo" />
          </div>
          <div className="w-full h-16 flex items-center justify-center mb-5 lg:mb-0">
            {" "}
            <img
              className="p-12 lg:p-2" 
              src={perfectPeel}
              alt="Perfect Peel logo"
            />
          </div>
          <div className="w-full h-16 flex items-center justify-center mb-5 lg:mb-0">
            {" "}
            <img
              className="h-full p-4 lg:p-4"
              src={mesoestetic}
              alt="Mesoestetic logo"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Buttons Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Buttons
            </span>{" "}
            - For clicking
          </h2>
        </div>
      </div>
    </div>
    {/* Buttons */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 grid grid-cols-1 grid pt-20 pb-20">
        <div className="pl-4 pr-4 lg:flex lg:justify-between">
          <a className="btn__primary inline-block mt-8 lg:mt-0" href="#">
            Book a consultation
          </a>
          <a className="btn__secondary inline-block mt-8 lg:mt-0" href="#">
            Book a consultation
          </a>
          <a
            className="btn__secondary__outline inline-block mt-8 lg:mt-0"
            href="#"
          >
            Book a consultation
          </a>
          <a className="btn__tertiary inline-block mt-8 lg:mt-0" href="#">
            See Treatments <ArrowRight className="inline mr-2 text-gray-900" />
          </a>
        </div>
      </div>
    </div>
    {/*  Cover 01 Right Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Cover 01 Right
            </span>{" "}
            - To display some text, and an image on the right
          </h2>
        </div>
      </div>
    </div>
    {/*  Cover 01 Right*/}
    <div className="container mx-auto pl-6 pr-6 pb-10 pt-20 pb-20">
      <div className="pl-4 pr-4">
        <div className="md:flex md:flex-wrap lg:flex-col lg:relative">
          <div className="md:order-1 md:w-1/2 lg:pr-3">
            <h3 className="text-5xl leading-tight tracking-normal mb-6">
              Enhance <i>&amp;</i> restore your natural beauty.
            </h3>
          </div>
          <div className="md:w-full md:order-3 lg:absolute lg:w-1/2 lg:top-0 lg:right-0">
            <img
              className="mb-6"
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
              alt="Dr Yalda pushing a client&lsquo;s hair back, as part of the consultation process."
            />
          </div>
          <div className="md:order-2 md:w-1/2 lg:pr-10 lg:pb-20">
            <div>
              <p className="mb-8 text-gray-700">
                Dr Yalda is an expert in identifying the treatments that will
                help you look and feel your best. Her experience and artistic
                eye in conjunction with using the most premium brands allows her
                to provide her patients with satisfied, long lasting results:
              </p>
              <ul>
                <li className="pb-1 pt-1">
                  <Check className="inline mr-2 text-gray-700" />
                  <p className="text-gray-700 inline">
                    Reducing the signs of ageing
                  </p>
                </li>
                <li className="pb-1 pt-1">
                  {" "}
                  <Check className="inline mr-2 text-gray-700" />
                  <p className="text-gray-700 inline">
                    Defining your facial features
                  </p>
                </li>
                <li className="pb-1 pt-1">
                  {" "}
                  <Check className="inline mr-2 text-gray-700" />
                  <p className="text-gray-700 inline">
                    Improving your overall skin health
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  Cover 01 Left Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Cover 01 Left
            </span>{" "}
            - To display some text, and an image on the left
          </h2>
        </div>
      </div>
    </div>
    {/*  Cover 01 Left */}
    <div className="container mx-auto pl-6 pr-6 pb-10 pt-20 pb-20">
      <div className="pl-4 pr-4">
        <div className="md:flex  md:flex-wrap lg:flex-col lg:relative">
          <div className="md:order-2 md:w-1/2 lg:pr-3">
            <h3 className="text-5xl leading-tight tracking-normal mb-6">
              From a registered, medical doctor.
            </h3>
          </div>
          <div className="md:w-full md:order-1 lg:w-1/2">
            <img
              className="mb-6"
              src="https://frosty-ardinghelli-04f7f2.netlify.com/static/home-3-e5af273814dfcb6ee426fd73f696247e.jpg"
              alt="Dr Yalda pushing a client&lsquo;s hair back, as part of the consultation process."
            />
          </div>
          <div className="md:order-3 md:w-1/2 lg:pr-10 lg:pb-20">
            <div>
              <p className="mb-10 text-gray-700">
                Dr Yalda is an expert in identifying the treatments that will
                help you look and feel your best. Her experience and artistic
                eye in conjunction with using the most premium brands allows her
                to provide her patients with satisfied, long lasting results:
              </p>
              <button className="bg-black hover:bg-gray-900 text-white font-light py-6 px-12 inline">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Block Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Call To Action
            </span>{" "}
            - Used to usher users to info/sale points
          </h2>
        </div>
      </div>
    </div>
    {/* CTA Block*/}
    <CTABlock />
    {/* Product Slider Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Product Slider
            </span>{" "}
            - For before and after images of clients/products
          </h2>
        </div>
      </div>
    </div>
    {/* Product Slider */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pl-4 pr-4">
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
          <ProductSlider leftImage={lipsBefore} rightImage={lipsAfter} />
        </div>
      </div>
    </div>
    {/* Treatment Content Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Treatment Content
            </span>{" "}
            - Used to describe a treatment or service
          </h2>
        </div>
      </div>
    </div>
    {/* Treatment Content */}
    <div className="container mx-auto pr-6 pl-6">
      <div className="grid grid-cols-1 grid lg:grid-cols-12 gap-6 pt-20 pb-20 pl-4 pr-4">
        <div className="lg:col-span-8">
          <h2>About This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <div className="border-solid border-l-4 border-red-500 pl-6 lg:pr-48 lg:ml-10">
            <h5 className="text-2xl leading-tight mt-12 mb-16 md:text-3xl">
              &quot;I have had lip fillers with Yalda for a while now and the
              results are amazing. Not only is she professional but she makes
              you feel at ease. It’s been nearly 6 months since my fillers and
              my lips are still juicy as ever!&quot;
            </h5>
          </div>
          <h2>More about This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <h2>More about This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <h2>More about This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
        </div>
        {/* Treatment Content/Overview Attributes */}
        <div className="lg:col-start-10 lg:col-span-3">
          <dl className="mb-8">
            <div className="flex justify-between pb-5 pt-5 border-solid border-t-2 border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Clock size="28" className="inline mr-1 text-gray-900" />
                  <p className="inline font-semibold">Treatment Time</p>
                </div>
              </dt>
              <dd className="text-right inline">10 Minutes</dd>
            </div>
            <div className="flex justify-between pb-5 pt-5 border-solid border-t-2 border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Watch size="28" className="inline mr-1 text-gray-900" />
                  <p className="inline font-semibold">Downtime</p>
                </div>
              </dt>
              <dd className="text-right inline">One day</dd>
            </div>
            <div className="flex justify-between pb-5 pt-5 border-solid border-t-2 border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Calendar size="28" className="inline mr-1 text-gray-900" />
                  <p className="inline font-semibold">Results Last</p>
                </div>
              </dt>
              <dd className="text-right inline">3–4 Months</dd>
            </div>
            <div className="flex justify-between pb-5 pt-5 border-solid border-t-2 border-b-2 border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Tag size="28" className="inline mr-1 text-gray-900" />
                  <p className="inline font-semibold">Price</p>
                </div>
              </dt>
              <dd className="text-right inline border-solid border-gray-900">
                Staring from £100
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    {/* Text Block 01 Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Text Block 01
            </span>{" "}
            - For text
          </h2>
        </div>
      </div>
    </div>
    {/* Text Block 01 */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 grid grid-cols-1 grid gap-6 pt-20 pb-20">
        <div className="pl-4 pr-4 grid gap-6 lg:grid-cols-2">
          <h2 className="text-5xl leading-tight tracking-normal md:text-6xl md:pr-10">
            Look &amp; feel your best.
          </h2>
          <p className="paragraph-large">
            Dr Yalda offers a range of cosmetic injectables and skin treatment
            plans tailored to your concerns. From facial contouring to subtle
            but effective &apos;tweakments&apos; and the use of medical-grade
            skincare to improve specific skin conditions, Dr Yalda will work
            with you to create the right treatment plan for you.{" "}
          </p>
        </div>
      </div>
    </div>
    {/* About Content Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              About Content Block
            </span>{" "}
            - To display about content
          </h2>
        </div>
      </div>
    </div>
    {/* About Content */}
    <div className="container mx-auto pl-6 pr-6 grid grid-cols-1 grid gap-6 pt-20 pb-20">
      <div className="pl-4 pr-4 grid gap-6 lg:grid-cols-2">
        <h2 className="text-5xl leading-tight tracking-normal md:text-6xl md:pr-20">
          A little bit about Dr Yalda.
        </h2>
        <div>
          <p className="mb-4">
            Dr. Yalda Jamali is a qualified medical doctor specialising in
            aesthetic medicine. She runs a successful clinic and mentors at the
            Harley Academy. She graduated from the University of Manchester with
            a Bachelor of Medicine, Bachelor of Surgery (MBChB) and holds a
            Level 7 postgraduate qualification in facial injectables. She is
            passionate about ensuring aesthetics is a carefully regulated
            industry, conducted with extreme precision, diligence and care.{" "}
          </p>
          <p className="mb-4">
            She has a key artistic eye for detail. Her clients regard her as a
            personable, results-oriented aesthetics doctor. Dr Yalda goes above
            and beyond to ensure that her clients are completely satisfied by
            their results.
          </p>
          <p className="mb-4">
            In addition to running a successful clinic in Nottingham, Dr Yalda
            is a mentor at the Harley Academy in London for medical
            professionals wishing to enter the aesthetics field. In her capacity
            as a mentor, Dr Yalda provides her insights and expert observations
            into the aesthetics industry to the next generation of medical
            aesthetic professionals.
          </p>
          <p className="mb-4">
            Dr Yalda also demonstrates her clinical skills at the GILD Clinic in
            London, focusing on the practical application of facial injectables
            and skin rejuvenation.
          </p>
          <img
            className="pt-5 h-15"
            src={signature}
            alt="A mock signature of Dr Yalda "
          />
        </div>
      </div>
    </div>
    {/* 50/50 Header Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              50/50 Header
            </span>{" "}
            - Display a 50/50 hero image and text
          </h2>
        </div>
      </div>
    </div>
    {/* 50/50 Header*/}
    <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex flex-col justify-center bg-white pt-20 pb-20 pr-8 pl-8 lg:pt-0 lg:pb-0 lg:h-full md:pr-12 md:pl-12 lg:pr-20 lg:pl-20 xl:pr-50 xl:pl-50">
        <div className="pl-4 pr-4">
          <h1 className="text-5xl leading-tight tracking-normal mb-2 md:text-6xl">Soft Tissue Fillers</h1>
          <p className="mb-12">
            Instantly soften fine lines &amp; wrinkles, restore age-related
            volume loss and augment and contour facial features.
          </p>
          <button className="btn__primary">Book a consultation</button>
        </div>
      </div>
      <div className="lg:h-full">
        <img
          src={treatmentHeader}
          alt="Close up of model in profile pose, with head turned to the left."
        />
      </div>
    </div>
    {/* Fullwidth Image Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Fullwidth Image
            </span>{" "}
            - To display a fullwidth image
          </h2>
        </div>
      </div>
    </div>
    {/* Fullwidth Image*/}
    <div className="pt-20 pb-20">
      <div className="lg:pl-8 lg:pr-8">
        <img
          className="w-full"
          src={yaldaAbout}
          alt="Dr Yalda slightly smiling"
        />
      </div>
    </div>
    {/*  Contact Title Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Contact Title
            </span>{" "}
            - Just another hero title, with anchor links
          </h2>
        </div>
      </div>
    </div>
    {/*  Contact Title */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <div className="pl-4 pr-4">
          <h1 className="text-5xl leading-tight tracking-normal mb-12 mt-2 md:text-6xl md:leading-snug pt-20 pb-20 ">
            <i className="border-b-4 border-solid border-black">Email</i>, or
            leave a message in the{" "}
            <i className="border-b-4 border-solid border-black">contact form</i>
            . View work on{" "}
            <i className="border-b-4 border-solid border-black">Instagram</i>.
            See reviews on{" "}
            <i className="border-b-4 border-solid border-black">Facebook</i>.
          </h1>
        </div>
      </div>
    </div>
    {/*  Treatment Title Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Treatment Title
            </span>{" "}
            - Just another hero title, with a CTA button
          </h2>
        </div>
      </div>
    </div>
    {/*  Contact Title */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <div className="pl-4 pr-4">
          <h1 className="text-5xl leading-tight tracking-normal mb-12 mt-2 md:text-6xl md:leading-snug pt-20 pb-20">
            Dr Yalda offers a range of non-surgical cosmetic treatments using
            high quality, medically approved products.
          </h1>
          <button className="bg-black hover:bg-gray-900 text-white font-light py-6 px-12 inline">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
    {/*  Blog Post Title Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Blog Post Title
            </span>{" "}
            - Just another hero title, aligned center
          </h2>
        </div>
      </div>
    </div>
    {/*  Blog Post Title */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20">
        <div className="pl-4 pr-4 flex flex-col">
          <p className="text-center text-xs font-semi-bold">Category</p>
          <h1 className="text-5xl leading-tight tracking-normal mb-8 mt-2 md:text-6xl leading-tight text-center font-normal">
            Considerations for darker skin types when choosing in-clinic skin
            treatments.
          </h1>
          <p className="text-center font-semi-bold">
            Cleansing is an essential step in any skin regime. Learn how to
            properly double cleanse your skin.
          </p>
        </div>
      </div>
    </div>
    {/*  Blog Post Title  */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl md:text-4xl text-red-500 font-bold">
              Blog Post
            </span>{" "}
            - Blog post
          </h2>
        </div>
      </div>
    </div>
    {/* Blog Post */}
    <div className="container mx-auto pr-6 pl-6">
      <div className="grid grid-cols-1 grid lg:grid-cols-12 gap-6 pt-20 pb-20 pl-4 pr-4">
        {/* Blog Post Avatar, Posted by, Date Stamp */}
        <div className="lg:col-span-2">
          <div className="flex items-center">
            <div className="rounded-full h-12 w-12 mr-2 mr-2 overflow-hidden h-16 w-16">
              <img
                className="h-full w-full"
                src={avatar}
                alt="Dr Yalda Avatar"
              />
            </div>
            <div>
              <p className="pb-0 mb-0 text-md font-medium tracking-wide">
                By Dr Yalda
              </p>
              <p className="pb-0 mb-0 text-gray-600 text-sm font-medium">
                8th Oct, 2020
              </p>
            </div>
          </div>
        </div>
        {/* Fullwidth Blog Image */}
        <div className="lg:col-span-8">
          <div className="mt-0 mb-8">
            <div className="">
              <img
                className="w-full"
                src={yaldaAbout}
                alt="Dr Yalda slightly smiling"
              />
            </div>
          </div>
          {/* Main body blog content */}
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <h2>About This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <h2>More about This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <h2>More about This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <h2>More about This Treatment</h2>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
        </div>
        {/* Right hand column (Share Links) */}
        <div className="lg:col-span-2">
          <div className="flex items-center">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-show-count="false"
            >
              Tweet
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
          <div
            className="fb-share-button"
            data-href="https://www.your-domain.com/your-page.html"
            data-layout="button_count"
          ></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
