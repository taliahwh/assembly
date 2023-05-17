import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

// Styles
import styles from './publisher-details.module.scss';

// Components
import Dropdown from '../dropdown/Dropdown';

/**
 * TODO
 * - make buttons smaller in mobile
 */

// https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

type PublisherDetailsProps = {
  onSelectTip: (value: string) => void;
};

const PublisherDetails = ({ onSelectTip }: PublisherDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.publisherImage}
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="publisher"
        />
      </div>

      <div className={styles.publisherDetailsContainer}>
        <h6 className={styles.publisherName}>Toni Miller</h6>
        <p className={styles.publisherBio}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          excepturi doloribus fugiat, ut aspernatur quae, nam vitae fuga
          doloremque laboriosam culpa alias, repellat voluptatem sit. Nostrum
          rerum praesentium pariatur provident.
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.flexBtnContainer}>
            <div className={styles.outlinedBtn}>Subscribe</div>
            <div className={styles.likeContainer}>
              <BsHeartFill />
            </div>
          </div>

          <div className={styles.flexBtnContainer}>
            <Dropdown onSelectTip={onSelectTip} />
            <div className={styles.btn}>Send tip</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherDetails;
