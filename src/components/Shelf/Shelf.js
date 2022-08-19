import React from 'react';
import PropTypes from 'prop-types';
import styles from './Shelf.module.css';

const Shelf = () => (
  <div className={styles.Shelf} data-testid="Shelf">
    Shelf Component
  </div>
);

Shelf.propTypes = {};

Shelf.defaultProps = {};

export default Shelf;
