import React from "react"

export const PostCard = ({ heading }) => {
  return (
    <div className="flex flex-col bg-white h-full">
      <div className="relative">
        <img
          width="100%"
          src="https://frosty-ardinghelli-04f7f2.netlify.com/assets/blog-02.jpg"
          alt=""
        />
        <div className="p-4 bg-red-500 inline-block inline-block absolute bottom-0">
          Health
        </div>
      </div>
      <div className="flex flex-col flex-grow p-5">
        <h3 className="flex-grow pb-20 text-2xl leading-snug">{heading}</h3>
        <p>October 07, 2019</p>
      </div>
    </div>
  )
}

export default PostCard
