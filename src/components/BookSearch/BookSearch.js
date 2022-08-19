import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookSearch.module.css';

const BookSearch = () => (
  <div className={styles.BookSearch} data-testid="BookSearch">
    BookSearch Component
  </div>
);

BookSearch.propTypes = {};

BookSearch.defaultProps = {};

export default BookSearch;
