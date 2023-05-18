import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './not-found.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops!</h1>
      <h6 className={styles.errorMessage}>
        Sorry, an unexpected error has occurred.
      </h6>
      <Link to="/">
        <p className={styles.returnBtn}>Return to home</p>
      </Link>
    </div>
  );
}

export default NotFound;
