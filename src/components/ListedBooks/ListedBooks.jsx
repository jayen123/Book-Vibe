import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList, getWishlist } from "../../utility/addToDb";
import ListedBook from "../ListedBook/ListedBook";
export default function ListedBooks() {
  const books = useLoaderData();
  const dbReadBooks = getReadList();
  const dbWishedBooks = getWishlist();

  const dbReadBooksId = dbReadBooks.map((book) => parseInt(book));
  const dbWishedBooksId = dbWishedBooks.map((book) => parseInt(book));

  const readBooks = books.filter((book) => dbReadBooksId.includes(book.bookId));
  console.log("🚀 ~ ListedBooks ~ readBooks:", readBooks);
  const wishlistBooks = books.filter((book) =>
    dbWishedBooksId.includes(book.bookId)
  );
  console.log("🚀 ~ ListedBooks ~ wishlistBooks:", wishlistBooks);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8 bg-gray-600 rounded-2xl mb-10">
        Books
      </h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-xl font-bold mb-5">Reading Books</h2>
            <div className="space-y-5">
              {readBooks.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))}
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
