import React from 'react';

// Components
import ActiveSettingsPage from '../../../components/settings-header/ActiveSettingsPage';
import { BsStripe } from 'react-icons/bs';
// Styles
import styles from './payments.module.scss';

const PaymentsScreen = () => {
  return (
    <>
      <ActiveSettingsPage activePage="payments" />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Payments</h1>
          <h6 className={styles.subheader}>
            Get paid out to your Stripe account
          </h6>
        </div>

        <div className={styles.stripeBtn}>
          <BsStripe color="white" />
          <div className={styles.btnText}>Connect with stripe</div>
        </div>

        <div className={styles.divider} />
      </div>
    </>
  );
};

export default PaymentsScreen;
