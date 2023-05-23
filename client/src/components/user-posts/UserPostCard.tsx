import { Link } from 'react-router-dom';

// Components
import PostAnalytics from '../post-analytics/PostAnalytics';

// Styles
import styles from './user-post-card.module.scss';

type UserPostCardProps = {
  edit: boolean;
};

const UserPostCard = ({ edit }: UserPostCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.postImage}
          src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
      </div>

      <div className={styles.postDetailsContainer}>
        <p className={styles.createdAt}>MAY 15, 2023 3:00 PM</p>

        <div className={styles.postContentContainer}>
          <Link to={`/post/:id`} className={styles.link}>
            <h4 className={styles.title}>
              Hide Your Grails. The Rich Are Coming
            </h4>
          </Link>

          <p className={styles.excerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            cupiditate quaerat facilis beatae. Exercitationem fugit dignissimos
            aperiam tenetur excepturi non nemo atque consectetur quod minus
            illum est, officiis libero voluptas.
          </p>

          {edit ? (
            <div className={styles.btnContainer}>
              <div className={styles.editPostBtn}>Edit Post</div>

              <PostAnalytics
                likeCount={37}
                bookmarkCount={99}
                viewCount={284}
              />
            </div>
          ) : (
            <div className={styles.btnContainer}>
              <div />

              <PostAnalytics
                likeCount={37}
                // bookmarkCount={99}
                // viewCount={284}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
