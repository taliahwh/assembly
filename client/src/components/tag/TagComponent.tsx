import React from 'react';

// Styles
import styles from './tag.module.scss';

function TagComponent() {
  return (
    <div className={styles.tagContainer}>
      <p className={styles.tagName}>productivity</p>
    </div>
  );
}

export default TagComponent;
