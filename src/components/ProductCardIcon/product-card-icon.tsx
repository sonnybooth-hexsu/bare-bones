import React from "react"
import { ArrowRight } from "react-feather"

type ProductCardIconProps = {
  title: string
  path: string
  excerpt: string
  image: string
}

export const ProductCardIcon = ({
  title,
  path,
  excerpt,
  image,
}: ProductCardIconProps) => {
  return (
    <div className="bg-white pr-12 pt-12 pb-12 pl-12 relative">
      <img className="h-12" src={image} alt="Lips" />
      <h2
        data-testid="productCardIconTitle"
        className="mt-8 mb-2 text-3xl tracking-wide"
      >
        {title}
      </h2>
      <p className="mb-12">{excerpt}</p>
      <div className="flex justify-end items-end">
        {" "}
        <ArrowRight className="mr-2 text-gray-900" />
      </div>
      <a className="absolute top-0 bottom-0 left-0 right-0" href={path}>
        <span className="sr-only">{title}</span>
      </a>
    </div>
  )
}
