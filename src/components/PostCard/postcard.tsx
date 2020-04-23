import React from "react"
import helpers from "../../styles/helpers.module.css"

type PostCardProps = {
  title: string
  category: string
  path: string
  date: string
  image: string
}

export const PostCard = ({
  title,
  category,
  path,
  date,
  image,
}: PostCardProps) => {
  return (
    <div className="flex flex-col bg-white h-full relative">
      <div className="relative">
        <img width="100%" src={`/${image}`} alt="Post" />
        <div className={helpers.chipDark}>{category}</div>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="flex-grow pb-20 text-3xl leading-tight">{title}</h3>
        <p className={`${helpers.caption}`}>{date}</p>
      </div>
      <a className="absolute top-0 bottom-0 left-0 right-0" href={path}>
        <span className="sr-only">{title}</span>
      </a>
    </div>
  )
}
