import "./App.css";
import react from "react";
import { useEffect, useState } from "react";

import * as BookAPIlayer from "./BooksAPI";
import SearchBook from "./components/SearchBook";
import HomePage from "./components/HomePage";


function App(){

  const [books, setBooks] =  useState([]);
  const [showBook, setShowBooks] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const getAll = async () =>{
      const res = await BookAPIlayer.getAll();
      setBooks(res);
    };
    getAll();
  }, []);

  /* function to update book as per the shelf*/

  const Update = async(book, shelf) => {
    await BooksAPI.update(book, shelf);
    const getupdatedBooks = await BookAPIlayer.getAll();
    setBooks(getupdatedBooks);
  };

  const updateSearchString = (searchString) => {
    setSearchString(searchString);
    BooksAPI
      .search(searchString, 30)
      .then(res => {
        if (Array.isArray(res)) {
          res.forEach(x => {
            books.forEach((book) => {
              if(x.id === book.id) {
                x.shelf = book.shelf
              }
            });
          });
          setShowBooks(res.filter(x => x.authors !== undefined && x.imageLinks !== undefined));
        } else {
          setShowBooks([]);
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
      <Routes>
        <Route path="/search" element={
          <Search Update={Update} query={query} updateQuery={updateQuery} displayBooks={displayBooks} />
        } />
        <Route path="/" element={
          <Home books={books} Update={Update} />
        } />
      </Routes>
    </div>
  );
}
export default App;
