import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';

import Book from "./Book";

const SearchBook = ({ showBook, Update, searchString, setSearchString }) => {
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link
        to={"/"}
        className="close-search"
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <DebounceInput
          minLength={3}
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {searchString === "" ? (
          <div></div>
        ) : (showBook.map(book => (
            <li key={book.id}>
              <Book book={book} Update={Update} />
            </li>
          )
        ))}
      </ol>
    </div>
  </div>
  );
};

SearchBook.propTypes = {
  Update: PropTypes.func,
  searchString: PropTypes.string.isRequired,
  setSearchString: PropTypes.func.isRequired,
  showBook: PropTypes.array.isRequired
};

export default SearchBook;