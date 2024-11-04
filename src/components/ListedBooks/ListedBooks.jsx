import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList, getWishlist } from "../../utility/addToDb";
import ReadBook from "../ReadBook/ReadBook";
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
      <h1 className="text-3xl font-bold text-center py-8 bg-gray-600 rounded-2xl">
        Books
      </h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2>Reading Books</h2>
            {readBooks.map((book) => (
              <ReadBook key={book.bookId} book={book} />
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
