import React from 'react';

import assembly_logo from '../../assets/assembly_icon.png';

// Styles
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.app_icon} src={assembly_logo} />

      <div className={styles.btnContainer}>
        <div className={styles.btn}>
          <p className={styles.text}>Login</p>
        </div>

        <div className={styles.btnDivider} />

        <div className={styles.btnDark}>
          <p className={styles.lightText}>Become a creator</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
