import React from 'react';

// Styles
import styles from './not-found.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops!</h1>
      <h6 className={styles.errorMessage}>
        Sorry, an unexpected error has occurred.
      </h6>
      <p className={styles.returnBtn}>Return to home</p>
    </div>
  );
}

export default NotFound;
