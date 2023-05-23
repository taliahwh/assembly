// Styles
import styles from './post-analytics.module.scss';

// Assets
import {
  BsFillFileEarmarkTextFill,
  BsFillHeartFill,
  BsFillEyeFill,
} from 'react-icons/bs';

type PostAnalyticsProps = {
  likeCount: number;
  bookmarkCount: number;
  viewCount: number;
};

const PostAnalytics = ({
  likeCount,
  bookmarkCount,
  viewCount,
}: PostAnalyticsProps) => {
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.analyticsWrapper}>
        <BsFillHeartFill size="20" />
        <div>{likeCount}</div>
      </div>
      <div className={styles.analyticsWrapper}>
        <BsFillFileEarmarkTextFill size="20" />
        <div>{bookmarkCount}</div>
      </div>
      <div className={styles.analyticsWrapper}>
        <BsFillEyeFill size="20" />
        <div>{viewCount}</div>
      </div>
    </div>
  );
};

export default PostAnalytics;
