import React from "react"

type ProductCardProps = {
  title: string
  path: string
  excerpt: string
  image: string
}

export const ProductCard = ({
  title,
  path,
  excerpt,
  image,
}: ProductCardProps) => {
  return (
    <div className="bg-white">
      <div className="bg-red-200 pt-16 pb-16 flex justify-center">
        <img className="h-20" src={image} alt="Lips" />
      </div>
      <div className="pr-8 pb-8 pl-8">
        <h2
          data-testid="productCardTitle"
          className="mt-12 mb-2 text-3xl tracking-wide"
        >
          {title}
        </h2>
        <p className="mb-12">{excerpt}</p>
        <a href={path}>View Product</a>
      </div>
    </div>
  )
}
