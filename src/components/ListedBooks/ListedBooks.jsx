import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList, getWishlist } from "../../utility/addToDb";
import ListedBook from "../ListedBook/ListedBook";
import { useEffect, useState } from "react";
export default function ListedBooks() {
  const [sortBy, setSortBy] = useState("");
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const dbReadBooks = getReadList();
    const dbWishedBooks = getWishlist();

    const dbReadBooksId = dbReadBooks.map((book) => parseInt(book));
    const dbWishedBooksId = dbWishedBooks.map((book) => parseInt(book));

    const readBooks = books.filter((book) =>
      dbReadBooksId.includes(book.bookId)
    );
    setReadBooks(readBooks);
    const wishlistBooks = books.filter((book) =>
      dbWishedBooksId.includes(book.bookId)
    );
    setWishlistBooks(wishlistBooks);
  }, []);

  const handleSort = (sortedBy) => {
    setSortBy(sortedBy);
    if (sortedBy === "Rating") {
      const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
      setReadBooks(sortedBooks);
      setWishlistBooks(sortedBooks);
    }
    if (sortedBy === "Number of pages") {
      const sortedBooks = [...books].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadBooks(sortedBooks);
      setWishlistBooks(sortedBooks);
    }
    if (sortedBy === "Publisher year") {
      const sortedBooks = [...books].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadBooks(sortedBooks);
      setWishlistBooks(sortedBooks);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8 bg-gray-600 rounded-2xl mb-10">
        Books
      </h1>
      <details className="dropdown mb-5">
        <summary className="btn m-1">
          {sortBy ? `Sort By ${sortBy}` : "Sort By"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleSort("Rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("Number of pages")}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => handleSort("Publisher year")}>
            <a>Publisher year</a>
          </li>
        </ul>
      </details>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-xl font-bold mb-5">Reading Books</h2>
            <div className="space-y-5">
              {readBooks ? (
                readBooks.map((book) => (
                  <ListedBook key={book.bookId} book={book} />
                ))
              ) : (
                <h1>Loading....</h1>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-xl font-bold mb-5">Wishlist Books</h2>
            <div className="space-y-5">
              {wishlistBooks.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
