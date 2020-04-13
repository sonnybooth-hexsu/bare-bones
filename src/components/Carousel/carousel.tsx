import React, { ReactNode } from "react"
import Slider from "react-slick"
import "./slick-overrides.module.css"
import { ArrowRight, ArrowLeft } from "react-feather"

type ArrowProps = {
  className?: string
  style?: object
  onClick?: () => void
}

type CarouselProps = {
  children: ReactNode
}

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ArrowRight />
    </div>
  )
}

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ArrowLeft />
    </div>
  )
}

export const Carousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, //Tailwind lg default
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, //Tailwind md default
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return <Slider {...settings}>{children}</Slider>
}
