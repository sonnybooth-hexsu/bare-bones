import React from "react"
import Slider from "react-slick"
import "./slick-overrides.module.css"

export const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return <Slider {...settings}>{children}</Slider>
}
