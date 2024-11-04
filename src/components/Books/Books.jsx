import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);
  console.log("🚀 ~ Books ~ books:", books)
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="py-[100px]">
      <h2 className="text-center text-4xl font-bold mb-8">Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}
