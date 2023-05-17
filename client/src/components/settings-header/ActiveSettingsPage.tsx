import React from 'react';

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
        <div className={styles.page}>Profile</div>
      )}
      {activePage === 'posts' ? (
        <div className={styles.activePage}>Posts</div>
      ) : (
        <div className={styles.page}>Posts</div>
      )}
      {activePage === 'payments' ? (
        <div className={styles.activePage}>Payments</div>
      ) : (
        <div className={styles.page}>Payments</div>
      )}
      {activePage === 'library' ? (
        <div className={styles.activePage}>Library</div>
      ) : (
        <div className={styles.page}>Library</div>
      )}
    </div>
  );
};

export default ActiveSettingsPage;
