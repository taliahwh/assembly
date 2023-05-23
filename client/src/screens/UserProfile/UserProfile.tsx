import React from 'react';

// Components
import UserProfileHeader from '../../components/user-profile-header/UserProfileHeader';
import UserPostCard from '../../components/user-posts/UserPostCard';

// Styles
import styles from './user-profile.module.scss';

const UserProfile = () => {
  return (
    <>
      <UserProfileHeader />
      <div className={styles.container}>
        <h4 className={styles.header}>Posts</h4>

        <div className={styles.postsContainer}>
          <UserPostCard />
          <UserPostCard />
          <UserPostCard />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
