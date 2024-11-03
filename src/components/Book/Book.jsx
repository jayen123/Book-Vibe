import React from "react";
import { CiStar } from "react-icons/ci";
export default function Book({ book }) {
  const { image, tags, bookName, publisher, category, rating } = book;
  return (
    <div className="card p-6 border shadow-xl">
      <figure className="bg-[#F3F3F3] py-8 px-24 rounded-2xl mb-6">
        <img
          className="w-[134px] h-[166px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-0">
        <div className="flex gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-medium text-[#23BE0A] py-2 px-4 bg-[#235a0a80] rounded-3xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="font-medium">By : {publisher}</p>
        <div className="border-t border-dashed my-5"></div>
        <div className="card-actions flex justify-between">
          <span className="text-white/60 font-medium">{category}</span>
          <span className="flex items-center gap-2">
            {rating} <CiStar size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}
