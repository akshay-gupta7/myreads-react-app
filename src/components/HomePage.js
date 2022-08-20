

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


import Shelf from "./Shelf";

const HomePage = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <Shelf books={books} updateBook={updateBook} />
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  updateBook: PropTypes.func,
  books: PropTypes.array.isRequired,
};

export default HomePage;