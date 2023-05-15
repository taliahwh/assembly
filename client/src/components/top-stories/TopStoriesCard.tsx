import React from 'react';

import styles from './top-stories.module.scss';

type BlogPreviewProps = {
  excerpt: string;
};

function TopStoriesCard() {
  return (
    <div className={styles.container}>
      <img
        className={styles.postImage}
        src="https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />

      {/* <div className={styles.textContainer}>
        <div>
          <h5 className={styles.title}>The Benefits of a Weekly Plan</h5>
          <p className={styles.excerpt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam
            enim obcaecati qui fugit ratione adipisci tenetur quibusdam!
            Blanditiis quasi quod distinctio error illum natus corporis?
          </p>
        </div>

        <div className={styles.publisherContainer}>
          <img
            className={styles.publisherImage}
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
          <div className={styles.publisherDetails}>
            <p className={styles.publisherName}>Laura Castro</p>
            <p className={styles.publishedDate}>about 2 days ago</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default TopStoriesCard;
