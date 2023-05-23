// Styles
import styles from './post-analytics.module.scss';

// Assets
import {
  BsFillFileEarmarkTextFill,
  BsFillHeartFill,
  BsFillEyeFill,
} from 'react-icons/bs';

const PostAnalytics = () => {
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.analyticsWrapper}>
        <BsFillHeartFill size="20" />
        <div>37</div>
      </div>
      <div className={styles.analyticsWrapper}>
        <BsFillFileEarmarkTextFill size="20" />
        <div>99</div>
      </div>
      <div className={styles.analyticsWrapper}>
        <BsFillEyeFill size="20" />
        <div>54</div>
      </div>
    </div>
  );
};

export default PostAnalytics;
