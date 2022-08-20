import PropTypes from "prop-types";

import Book from "./Book";

const Shelf= ({ books, Update }) => {
  const shelves = [
    { id: "1", shelfName: "wantToRead", displayName: "Want To Read"},
    { id: "2", shelfName: "currentlyReading", displayName: "Currently Reading"},
    { id: "3", shelfName: "read", displayName: "Read"},
  ];

  return (
    <div className="bookshelf">
      {shelves.map(shelf => (
        <div key={shelf.id}>
          <h2 className="bookshelf-title">{shelf.displayName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === shelf.shelfName)
                .map(book => (
                  <li key={book.id}>
                    <Book book={book} Update={Update} />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      ))};
    </div>
  );
};

Shelf.propTypes = {
  Update: PropTypes.func,
  books: PropTypes.array.isRequired,
};

export default Shelf;