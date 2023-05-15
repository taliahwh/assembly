import React from 'react';
import moment from 'moment';

// Component
import TagComponent from '../tag/TagComponent';

// Styles
import styles from './blog-preview.module.scss';

// Types
import { BlogPreviewProps } from '../../types/posts';

function BlogPreview({
  post_image,
  title,
  excerpt,
  category,
  publisher,
  publisher_id,
  created_at,
  profileImage,
  username,
}: BlogPreviewProps) {
  return (
    <div className={styles.container}>
      <img className={styles.postImage} src={post_image} />

      <div className={styles.textContainer}>
        <div className={styles.postDetailsContainer}>
          <TagComponent category={category} />
          <p className={styles.publisherName}>
            <span>by</span> {publisher}
          </p>
          <p className={styles.publishedDate}>
            {moment(created_at).format('l')}
          </p>
        </div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </div>
  );
}

export default BlogPreview;
