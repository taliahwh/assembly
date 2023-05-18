import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './active-settings-page.module.scss';

type ActiveSettingsPageProps = {
  activePage: string;
};

const ActiveSettingsPage = ({ activePage }: ActiveSettingsPageProps) => {
  return (
    <div className={styles.container}>
      {activePage === 'profile' ? (
        <div className={styles.activePage}>Profile</div>
      ) : (
        <Link to="/settings/profile/:id" className={styles.link}>
          <div className={styles.page}>Profile</div>
        </Link>
      )}
      {activePage === 'posts' ? (
        <div className={styles.activePage}>Posts</div>
      ) : (
        <Link to="/settings/posts/:id" className={styles.link}>
          <div className={styles.page}>Posts</div>
        </Link>
      )}
      {activePage === 'payments' ? (
        <div className={styles.activePage}>Payments</div>
      ) : (
        <Link to="/settings/payments/:id" className={styles.link}>
          <div className={styles.page}>Payments</div>
        </Link>
      )}
      {activePage === 'library' ? (
        <div className={styles.activePage}>Library</div>
      ) : (
        <Link to="/settings/library/:id" className={styles.link}>
          <div className={styles.page}>Library</div>
        </Link>
      )}
    </div>
  );
};

export default ActiveSettingsPage;
