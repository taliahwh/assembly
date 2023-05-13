import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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

      {/* TODO - Responsive top stories */}
      {/* Top Stories Component */}
      <div className={styles.topStoriesContainer}>
        <BlogPreview />
        <BlogPreview />
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
