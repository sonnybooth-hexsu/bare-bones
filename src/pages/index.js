import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { CTABlock } from "../components/CTABlock"
import { Carousel } from "../components/Carousel"
import { ProductSlider } from "../components/ProductSlider"
import buttons from "../styles/buttons.module.css"
import lipsBefore from "../assets/images/lips-before.jpg"
import lipsAfter from "../assets/images/lips-after.jpg"
import signature from "../assets/images/signature.svg"
import heroImageSm from "../assets/images/hero-image-sm.jpg"
import heroImageMd from "../assets/images/hero-image-md.jpg"
import yaldaAbout from "../assets/images/yalda-about.jpg"
import avatar from "../assets/images/avatar.jpg"
import mesoestetic from "../assets/images/brand-logo-mesoestetic.svg"
import consultation from "../assets/images/consultation.svg"
import perfectPeel from "../assets/images/brand-logo-perfect-peel.png"
import profhilo from "../assets/images/brand-logo-profhilo.svg"
import teoxane from "../assets/images/brand-logo-teoxane.svg"
import zo from "../assets/images/brand-logo-zo.png"

import { Clock, Watch, Calendar, Tag, Check, ArrowRight } from "react-feather"

const IndexPage = () => (
  <Layout page="Home">
    <SEO title="Home" />
    {/* Hero Block */}
    <div className="bg-gray-400">
      <div
        className="pt-10 bg-unset lg:grid-cols-12 lg:bg-cover lg:h-screen-80 lg:flex lg:pt-0 lg:items-end lg:pb-24 lg:bg-bottom"
        style={{ backgroundImage: `url(${heroImageMd})` }}
      >
        <div className="container mx-auto pl-6 pr-6">
          <div className="pl-4 pr-4">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              {/* <p className="text-lg uppercase font-semibold tracking-widest mb-4 text-center lg:text-left">Welcome to</p> */}
              <h1 className="text-center text-4xl leading-tight mb-16 md:text-5xl md:mb-4 lg:text-left  xl:w-2/3">
                Welcome to your new wireframe kit
              </h1>
              <p className="text-sm text-center font-medium mb-8 md:mb-12 md:w-2/3 lg:w-full lg:text-left lg:mb-8">
                If you&lsquo;re looking for the latest in wireless headphones,
                look no further. These are perfect for TV, stereo, home, and
                cell phone.
              </p>
              <div>
                <a
                  className={`${buttons.btnPrimary} block mb-6 lg:mr-4 lg:inline-block`}
                  href="#"
                >
                  Book a consultation
                </a>
                <a
                  className={`${buttons.btnTertiary} block mb-6 lg:inline-block`}
                  href="#"
                >
                  See Treatments{" "}
                  <ArrowRight color="currentColor" className="inline mr-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="lg:hidden" src={heroImageSm} alt="Dr Yalda smiling" />
    </div>
    {/*  Logo Quilt*/}
    <div className="bg-gray-200">
      <div className="container mx-auto pl-6 pr-6 pt-10 pb-10">
        <div className="md:hidden">
          <Carousel
            settingsOverrides={{
              dots: false,
              arrows: false,
              infinite: true,
              autoplay: true,
              draggable: false,
              autoplaySpeed: 2000,
              waitForAnimate: true,
              swipeToSlide: false,
              speed: 300,
              responsive: [
                {
                  breakpoint: 768, //Tailwind md default
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ],
            }}
          >
            <div>
              <div className="h-16 flex align-center justify-center">
                {" "}
                <img
                  className="h-full pt-5 pb-5 pr-5 pl-5"
                  src={teoxane}
                  alt="Teoxane logo"
                />
              </div>
            </div>
            <div>
              <div className="h-16 flex align-center justify-center">
                {" "}
                <img
                  className="h-full pt-5 pb-5 pr-5 pl-5"
                  src={profhilo}
                  alt="Profhilo logo"
                />
              </div>
            </div>
            <div>
              <div className="h-16 flex align-center justify-center">
                {" "}
                <img
                  className="h-full pt-5 pb-5 pr-5 pl-5"
                  src={zo}
                  alt="Zo Skin Health logo"
                />
              </div>
            </div>
            <div>
              <div className="h-16 flex align-center justify-center">
                {" "}
                <img
                  className="h-full pt-3 pb-3 pr-3 pl-3"
                  src={perfectPeel}
                  alt="Perfect Peel logo"
                />
              </div>
            </div>
            <div>
              <div className="h-16 flex align-center justify-center">
                {" "}
                <img
                  className="h-full pt-5 pb-5 pr-5 pl-5"
                  src={mesoestetic}
                  alt="Mesoestetic logo"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <div className="gap-6 pl-4 pr-4 hidden md:grid lg:grid-cols-6 ">
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
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
        <div className="pl-4 pr-4 text-center lg:flex lg:justify-between">
          <a
            className={`${buttons.btnPrimary} block mt-8 md:inline-block lg:mt-0`}
            href="#"
          >
            Book a consultation
          </a>
          <a
            className={`${buttons.btnSecondary} block mt-8 md:ml-2 md:mr-2  md:inline-block lg:ml-0 lg:mr-0 lg:mt-0`}
            href="#"
          >
            Book a consultation
          </a>
          <a
            className={`${buttons.btnSecondaryOutline} block mt-8 lg:mt-0  md:inline-block`}
            href="#"
          >
            Book a consultation
          </a>
          <a
            className={`${buttons.btnTertiary} block mt-8 md:inline-block md:ml-2 lg:ml-0 lg:mt-0`}
            href="#"
          >
            See Treatments{" "}
            <ArrowRight color="currentColor" className="inline mr-2" />
          </a>
        </div>
      </div>
    </div>
    {/*  Cover 01 Right Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
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
            <h3 className="uppercase text-4xl leading-tight tracking-tight mb-6 md:text-5xl lg:pr-4">
              Enhance and <i className="lowercase">restore</i> your{" "}
              <i className="lowercase">natural</i> beauty.
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
              <p className="mb-4 text-gray-900">
                Dr Yalda is an expert in identifying the treatments that will
                help you look and feel your best. Her experience and artistic
                eye in conjunction with using the most premium brands allows her
                to provide her patients with satisfied, long lasting results:
              </p>
              <ul>
                <li className="pb-1 pt-1">
                  <Check className="inline mr-2 text-gray-900" />
                  <p className="text-gray-900 inline">
                    Reducing the signs of ageing
                  </p>
                </li>
                <li className="pb-1 pt-1">
                  {" "}
                  <Check className="inline mr-2 text-gray-900" />
                  <p className="text-gray-900 inline">
                    Defining your facial features
                  </p>
                </li>
                <li className="pb-1 pt-1">
                  {" "}
                  <Check className="inline mr-2 text-gray-900" />
                  <p className="text-gray-900 inline">
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
            <h3 className="uppercase text-4xl leading-tight tracking-tight mb-6 md:text-5xl">
              From a registered, <i className="lowercase">medical</i> doctor,
              and Mentor.
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
              <p className="mb-10 text-gray-900">
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
              Product Slider
            </span>{" "}
            - For before and after images of clients/products
          </h2>
        </div>
      </div>
    </div>
    {/* Product Slider */}
    <div className="bg-white">
      <div className="container mx-auto pl-6 pr-6 pt-20 pb-20 flex align-center">
        <div className="pl-4 pr-4">
          <h2 className="uppercase text-4xl text-center md:text-5xl lg:w-1/2">
            It&lsquo;s the <i className="lowercase">results</i> that count
          </h2>
          <p className="mb-20 text-center lg:w-1/2">
            Dr Yalda is a results-oriented aesthetics doctor that goes above and
            beyond to ensure clients are completely satisfied.
          </p>
        </div>
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl ">
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
          <p className="font-semibold">About This Treatment</p>
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
            <h5 className="text-2xl leading-tight tracking-tight mt-12 mb-16 md:text-3xl text">
              &quot;I have had lip fillers with Yalda for a while now and the
              results are <i className="lowercase">amazing.</i> Not only is she
              professional but she makes you feel{" "}
              <i className="lowercase">at ease.</i> It’s been nearly{" "}
              <i className="lowercase">6 months</i> since my fillers and my lips
              are still juicy as ever!&quot;
            </h5>
          </div>
          <p className="font-semibold">About This Treatment</p>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <p className="font-semibold">About This Treatment</p>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <p className="font-semibold">About This Treatment</p>
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
        <div className="lg:col-start-9 lg:col-span-4 lg:col-span-3 xl:col-start-10">
          <dl className="mb-8">
            <div className="flex justify-between pb-5 pt-5 border-solid border-t border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Clock size="28" className="inline mr-2 text-gray-900" />
                  <p className="inline font-semibold uppercase tracking-wide">
                    Treatment Time
                  </p>
                </div>
              </dt>
              <dd className="text-right inline">
                <h6>10 Minutes</h6>
              </dd>
            </div>
            <div className="flex justify-between pb-5 pt-5 border-solid border-t border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Watch size="28" className="inline mr-2 text-gray-900" />
                  <p className="inline font-semibold uppercase tracking-wide">
                    Downtime
                  </p>
                </div>
              </dt>
              <dd className="text-right inline">
                <h6>One day</h6>
              </dd>
            </div>
            <div className="flex justify-between pb-5 pt-5 border-solid border-t border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Calendar size="28" className="inline mr-2 text-gray-900" />
                  <p className="inline font-semibold uppercase tracking-wide">
                    Results
                  </p>
                </div>
              </dt>
              <dd className="text-right inline">
                <h6>3–4 Months</h6>
              </dd>
            </div>
            <div className="flex justify-between pb-5 pt-5 border-solid border-t border-b border-gray-900 flex justify-between">
              <dt>
                <div className="flex items-center">
                  <Tag size="28" className="inline mr-2 text-gray-900" />
                  <p className="text-s inline font-semibold uppercase tracking-wide">
                    Price
                  </p>
                </div>
              </dt>
              <dd className="text-right inline">
                <h6>From £100</h6>
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
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
          <h2 className="uppercase text-4xl leading-tight tracking-tight md:text-6xl md:pr-10">
            Look and <i className="lowercase">feel</i> your{" "}
            <i className="lowercase">very</i> best.
          </h2>
          <p className="leading-relaxed tracking-wide text-xl md:text-2xl ">
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
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
        <h2 className="uppercase text-4xl leading-tight tracking-tight md:text-6xl xl:pr-20">
          A <i className="lowercase">little bit</i> about Dr Yalda Jamali.
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
    {/* Fullwidth Image Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
              Fullwidth Image
            </span>{" "}
            - To display a fullwidth image
          </h2>
        </div>
      </div>
    </div>
    {/* Fullwidth Image*/}
    <div className="pt-8 pb-8">
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
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
          <h1 className="normal-case mb-12 text-4xl leading-tight tracking-tight pt-20 pb-20 md:text-6xl md:leading-snug md:tracking-tighter">
            {/* <p className="text-xs uppercase tracking-wider font-semibold mb-6">
              Get in touch
            </p> */}
            Send an{" "}
            <i className="border-b-2 border-solid border-black normal-case">
              email
            </i>
            , or leave a message in the{" "}
            <i className="italic-text border-b-2 border-solid border-black normal-case">
              contact form
            </i>
            . View work on{" "}
            <i className="border-b-2 border-solid border-black normal-case">
              Instagram
            </i>
            . See reviews on{" "}
            <i className="border-b-2 border-solid border-black normal-case">
              Facebook
            </i>
            .
          </h1>
        </div>
      </div>
    </div>
    {/*  Treatment Title Title */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl text-red-500 font-bold md:text-4xl ">
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
          <p className="text-s uppercase tracking-widest font-semibold mb-2">
            Treatments
          </p>
          <h1 className="uppercase text-4xl leading-tight tracking-tight mb-20 mt-2 md:text-6xl md:leading-snug md:tracking-tighter">
            Dr Yalda offers a range of <i className="lowercase">non-surgical</i>{" "}
            cosmetic treatments using high quality,{" "}
            <i className="lowercase">medical</i> products.
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
          <div className="flex justify-center">
            <p className="inline text-center text-xs font-semibold tracking-widest uppercase bg-black text-white rounded-full py-2 px-4 mb-4">
              Category
            </p>
          </div>
          <h1 className="uppercase text-4xl leading-tight tracking-tight mb-8 mt-2 text-center font-normal lg:text-5xl xl:text-6xl">
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
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
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
            <div className="rounded-full mr-3 overflow-hidden h-12 w-12">
              <img
                className="h-full w-full"
                src={avatar}
                alt="Dr Yalda Avatar"
              />
            </div>
            <div>
              <p className="text-md font-medium tracking-wide leading-none mb-1">
                By Dr Yalda
              </p>
              <p className="text-gray-600 text-sm font-medium leading-none">
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
          <p className="font-semibold">About This Treatment</p>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <p className="font-semibold">About This Treatment</p>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <p className="font-semibold">About This Treatment</p>
          <p className="mb-8">
            The revolutionary treatment has been around since the 1980’s and
            with very few risks and no recovery time it still remains one of the
            most popular non-surical cosmetic treatments. Botulinum Toxin
            injections minimises the appearance of lines and wrinkles by
            temporarily relaxing specific muscles, with results lasting 3 to 4
            months. They are also used for treatment of hyperhidrosis (excess
            sweating) and bruxism (involuntary habitual grinding of the teeth).
          </p>
          <p className="font-semibold">About This Treatment</p>
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
          <p>Share links</p>
        </div>
      </div>
    </div>
    {/*  How It Works Title  */}
    <div className="bg-gray-200">
      <div className="container mx-auto pr-6 pl-6">
        <div className="pl-4 pr-4">
          <h2 className="text-2xl pt-8 pb-8">
            <span className="text-3xl text-red-500 font-bold md:text-4xl">
              How It Works
            </span>{" "}
            - To explain product or services step by step
          </h2>
        </div>
      </div>
    </div>
    {/* How it works */}
    <div className="container mx-auto pr-6 pl-6">
      <div className="pt-20 pb-20 pl-4 pr-4">
        <h2 className="text-4xl text-center mb-10 md:text-5xl">How it works</h2>
        <div className="grid gap-6 pl-4 pr-4 lg:grid-cols-3 ">
          <div className="pb-16 pt-10 pr-5 pl-5">
            <div className="relative pl-6 -mb-12">
              <div className="text-10xl leading-none font-bold text-blue-300">
                1
              </div>
              <img
                className="absolute bottom-2 left-0 top-12 mb-4 h-10"
                src={consultation}
                alt="Doctor's clipboard icon"
              />
            </div>
            <div className="relative mt-4 z-20">
              <h3 className="font-bold text-xl">Consultation</h3>
              <p>
                First, a discussion of your goals and any previous treatments.
                Dr Yalda will then recommend the right treatment and plan for
                you.
              </p>
            </div>
          </div>
          <div className="pb-16 pt-10 pr-5 pl-5">
            <div className="relative pl-6 -mb-12">
              <div className="text-10xl leading-none font-bold text-blue-300">
                2
              </div>
              <img
                className="absolute bottom-2 left-0 top-12 mb-4 h-10"
                src={consultation}
                alt="Doctor's clipboard icon"
              />
            </div>
            <div className="relative mt-4 z-20">
              <h3 className="font-bold text-xl">Treatment</h3>
              <p>
                Most treatments take about 10 minutes, and are not painful
                because of the minimally invasive nature of non surgical
                treatments.
              </p>
            </div>
          </div>
          <div className="pb-16 pt-10 pr-5 pl-5">
            <div className="relative pl-6 -mb-12">
              <div className="text-10xl leading-none font-bold text-blue-300">
                3
              </div>
              <img
                className="absolute bottom-2 left-0 top-12 mb-4 h-10"
                src={consultation}
                alt="Doctor's clipboard icon"
              />
            </div>
            <div className="relative mt-4 z-20">
              <h3 className="font-bold text-xl">Aftercare and advice</h3>
              <p>
                You will be briefed about aftercare in your consultation. Dr
                Yalda will be on hand around the clock for any follow-up
                questions you might have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
