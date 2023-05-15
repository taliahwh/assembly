import React from 'react';

// Component
import TagComponent from '../tag/TagComponent';

// Styles
import styles from './blog-preview.module.scss';

type BlogPreviewProps = {
  excerpt: string;
};

function BlogPreview() {
  return (
    <div className={styles.container}>
      <img
        className={styles.postImage}
        src="https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />

      <div className={styles.textContainer}>
        <div className={styles.postDetailsContainer}>
          <TagComponent />
          <p className={styles.publisherName}>by Laura Cross</p>
          <p className={styles.publishedDate}>about 2 days ago</p>
        </div>
        <h5 className={styles.title}>The Benefits of a Weekly Plan</h5>
        <p className={styles.excerpt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam
          enim obcaecati qui fugit ratione adipisci tenetur quibusdam!
          Blanditiis quasi quod distinctio error illum natus corporis?
        </p>
      </div>
    </div>
  );
}

export default BlogPreview;
