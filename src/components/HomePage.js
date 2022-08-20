

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


import Shelf from "./Shelf";

const HomePage = ({ books, Update }) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <Shelf books={books} Update={Update} />
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  Update: PropTypes.func,
  books: PropTypes.array.isRequired,
};

export default HomePage;