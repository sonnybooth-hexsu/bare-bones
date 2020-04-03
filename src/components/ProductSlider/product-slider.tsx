import React from "react"
import ReactCompareImage from "react-compare-image"

type ProductSliderProps = {
  leftImage: string
  rightImage: string
}

export const ProductSlider = ({
  leftImage,
  rightImage,
}: ProductSliderProps) => {
  return <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />
}
