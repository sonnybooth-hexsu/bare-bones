import React from "react"

type PostTypes = {
  title: string
  category: string
  path: string
  date: string
  image: string
}

export const PostCard = ({ title, category, path, date, image }: PostTypes) => {
  return (
    <div className="flex flex-col bg-white h-full relative">
      <div className="relative">
        <img width="100%" src={`/${image}`} alt="" />
        <div className="p-4 bg-red-500 inline-block inline-block absolute bottom-0">
          {category}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="flex-grow pb-20 text-2xl leading-tight">{title}</h3>
        <p>{date}</p>
      </div>
      <a className="absolute top-0 bottom-0 left-0 right-0" href={path}>
        <span className="sr-only">{title}</span>
      </a>
    </div>
  )
}

export default PostCard
