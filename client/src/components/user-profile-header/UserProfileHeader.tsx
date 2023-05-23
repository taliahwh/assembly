import React from 'react';

// Styles
import styles from './user-profile-header.module.scss';

// Assets
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const UserProfileHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.profileImage}
          src="https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
        />
      </div>

      <div className={styles.userDetailsContainer}>
        <h4 className={styles.name}>Toni Miller</h4>

        <div className={styles.socialContainer}>
          <BsTwitter className={styles.twitterIcon} />
          <BsInstagram className={styles.instagramIcon} />
        </div>

        <div className={styles.metaContainer}>
          <p className={styles.joinedAt}>
            Joined <span className={styles.bold}>May 2023</span>
          </p>

          <p>|</p>

          <p>
            <span className={styles.bold}>3</span> posts
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;
