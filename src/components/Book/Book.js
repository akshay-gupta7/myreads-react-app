import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = () => (
  <div className={styles.Book} data-testid="Book">
    Book Component
  </div>
);

Book.propTypes = {};

Book.defaultProps = {};

export default Book;
