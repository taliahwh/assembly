import React from 'react';

// Styles
import styles from './tag.module.scss';

type TagComponentProps = {
  category: string;
};

function TagComponent({ category }: TagComponentProps) {
  return (
    <div className={styles.tagContainer}>
      <p className={styles.tagName}>{category}</p>
    </div>
  );
}

export default TagComponent;
