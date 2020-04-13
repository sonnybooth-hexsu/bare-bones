import React from "react"
import Slider from "react-slick"
import "./slick-overrides.module.css"

export const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, //Tailwind lg default
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
