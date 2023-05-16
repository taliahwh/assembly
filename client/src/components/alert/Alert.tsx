import React from 'react';

// Styles
import styles from './alert.module.scss';

type AlertProps = {
  message: string;
  alert_type: string;
};

function Alert({ message, alert_type }: AlertProps) {
  return <p className={styles.message}>{message}</p>;
}

export default Alert;
