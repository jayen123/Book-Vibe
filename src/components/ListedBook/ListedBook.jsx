import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi2";
import { FaBook } from "react-icons/fa6";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function ListedBook({ book }) {
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    bookId,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className="card flex-col md:flex-row card-side bg-base-100 shadow-xl p-6 border rounded-xl">
      <figure className="p-10 bg-gray-600 rounded-xl">
        <img src={image} className="h-[172px]" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex items-center flex-wrap gap-4">
          <h2 className="font-bold">Tag</h2>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-medium text-[#23BE0A] py-2 px-4 bg-[#235a0a80] rounded-3xl"
            >
              #{tag}
            </span>
          ))}
          <div className="flex items-center gap-2">
            <CiLocationOn size={24} />{" "}
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <HiUserGroup size={24} />
            <span>Publisher: {publisher} </span>
          </div>
          <div className="flex items-center gap-2">
            <FaBook />
            <span>Page {totalPages} </span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="card-actions items-center">
          <span className="font-medium text-[#328EFF] py-2 px-4 bg-[#328eff26] rounded-3xl">
            Category: {category}
          </span>
          <span className="font-medium text-[#FFAC33] py-2 px-4 bg-[#ffac3326] rounded-3xl">
            Rating: {rating}
          </span>
          <Link to={`/books/${bookId}`}>
            <Button isPrimary={true} className="rounded-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
