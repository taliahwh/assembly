import React from 'react';

// Styles
import styles from './post-details.module.scss';

// Components
import TagComponent from '../../components/tag/TagComponent';
import PublisherDetails from '../../components/publisher-details/PublisherDetails';

const PostDetails = () => {
  const onSelectTip = (value: string) => {
    console.log(`Tip: $${value}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The History of Soccer </h1>

      <div className={styles.postInfoContainer}>
        <TagComponent category="sports" />

        <div className={styles.sentenceDetails}>
          <p className={styles.sentence}>
            by <span className={styles.publisherName}>Toni Miller</span>
          </p>
          <p>•</p>
          <p className={styles.publishedDate}>about 23 hours ago</p>
        </div>
      </div>

      <img
        className={styles.postImage}
        src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      />

      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores
          itaque libero dolor rem eveniet repudiandae recusandae porro hic error
          cupiditate soluta dolorum molestiae nesciunt, perferendis minima et
          maxime. Expedita? Eius ea quaerat nulla facere, quasi saepe impedit
          culpa fugit minima enim corporis laborum harum a sequi maiores illo.
          Voluptates odit reiciendis a laboriosam ipsam obcaecati qui molestiae
          odio animi. Obcaecati nam, tempore quisquam blanditiis pariatur dolore
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores
          itaque libero dolor rem eveniet repudiandae recusandae porro hic error
          cupiditate soluta dolorum molestiae nesciunt, perferendis minima et
          maxime. Expedita? Eius ea quaerat nulla facere, quasi saepe impedit
          culpa fugit minima enim corporis laborum harum a sequi maiores illo.
          Voluptates odit reiciendis a laboriosam ipsam obcaecati qui molestiae
          odio animi. Obcaecati nam, tempore quisquam blanditiis pariatur dolore
          inventore vero quasi, commodi repudiandae consequuntur dicta suscipit
          at magnam necessitatibus cumque aliquid sed velit? Id numquam
          excepturi possimus debitis qui, assumenda dolores.{'\n'} Atque
          voluptatem, explicabo laboriosam officiis reprehenderit rerum nam
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores
          itaque libero dolor rem eveniet repudiandae recusandae porro hic error
          cupiditate soluta dolorum molestiae nesciunt, perferendis minima et
          maxime. Expedita? Eius ea quaerat nulla facere, quasi saepe impedit
          culpa fugit minima enim corporis laborum harum a sequi maiores illo.
          Voluptates odit reiciendis a laboriosam ipsam obcaecati qui molestiae
          odio animi. Obcaecati nam, tempore quisquam blanditiis pariatur dolore
        </p>
      </div>

      <PublisherDetails onSelectTip={onSelectTip} />
    </div>
  );
};

export default PostDetails;
