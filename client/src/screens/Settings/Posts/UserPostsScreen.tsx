import React from 'react';

// Components
import ActiveSettingsPage from '../../../components/settings-header/ActiveSettingsPage';
import UserPostCard from '../../../components/user-posts/UserPostCard';

// Styles
import styles from './user-posts.module.scss';

const UserPostsScreen = () => {
  return (
    <>
      <ActiveSettingsPage activePage="posts" />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Posts</h1>
          <h6 className={styles.subheader}>
            View and manage posts, all in one place.
          </h6>
        </div>
        <UserPostCard />
      </div>
    </>
  );
};

export default UserPostsScreen;
