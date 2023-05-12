import React from 'react';

// Styles
import styles from './homescreen.module.scss';

// Components
import BlogPreview from '../../components/blog-preview/BlogPreview';

function HomeScreen() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Top Stories</h2>
      <h5 className={styles.subheader}>
        Find new, handpicked stories you'll love. Updated daily.
      </h5>

      {/* TODO - Implement masonry grid view */}
      <div className={styles.blogCardContainer}>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
    </div>
  );
}

export default HomeScreen;
