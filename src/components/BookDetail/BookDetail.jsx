import { useLoaderData, useParams } from "react-router-dom";
import Button from "../Button/Button";
import { addReadList } from "../../utility/addToDb";

export default function BookDetail() {
  const { bookId } = useParams();
  const books = useLoaderData();
  const id = parseInt(bookId);
  const book = books.find((book) => book.bookId === id);
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleReadList = (id) => {
    console.log("Clicked ");
    addReadList(id)
  }

  return (
    <div className="hero">
      <div className="hero-content grid lg:grid-cols-2 gap-10">
        <div className="bg-slate-500 lg:p-16 h-full rounded-2xl">
          <img
            src={image}
            className="w-full lg:h-[564px] object-contain rounded-lg lg:p-5"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="mt-4">By : {author}</p>
          <div className="divider"></div>
          <p className="text-xl font-medium">{category}</p>
          <div className="divider"></div>
          <p className="mb-8">
            <span className="font-bold">Review :</span> {review}
          </p>
          <div className="flex items-center gap-4">
            <h2 className="font-bold">Tag</h2>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="font-medium text-[#23BE0A] py-2 px-4 bg-[#235a0a80] rounded-3xl"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex gap-14">
            <div className="space-y-3">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">{totalPages}</p>
              <p className="font-semibold">{publisher}</p>
              <p className="font-semibold">{yearOfPublishing}</p>
              <p className="font-semibold">{rating}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <Button onClick={() => handleReadList(bookId)} isPrimary={true}>Read</Button>
            <Button>Wishlist</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
