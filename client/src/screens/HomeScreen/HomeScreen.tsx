import React from 'react';

// Styles
import styles from './homescreen.module.scss';

// Components
import BlogPreview from '../../components/blog-preview/BlogPreview';
import SearchBar from '../../components/search/SearchBar';

function HomeScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.headingText}>
          <h2 className={styles.header}>Top Stories</h2>
          <h5 className={styles.subheader}>
            Find new, handpicked stories you'll love. Updated daily.
          </h5>
        </div>

        <SearchBar />
      </div>

      {/* TODO - Implement masonry grid view */}
      <div className={styles.blogCardContainer}>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        {/* <BlogPreview /> */}
      </div>
    </div>
  );
}

export default HomeScreen;