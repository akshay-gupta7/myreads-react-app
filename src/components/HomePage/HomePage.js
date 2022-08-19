import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    HomePage Component
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
