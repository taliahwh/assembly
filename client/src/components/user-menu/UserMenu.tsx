import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

// Styles
import styles from './user-menu.module.scss';

type UserMenuProps = {
  toggleDropdown: () => void;
};

const UserMenu = ({ toggleDropdown }: UserMenuProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.profileImage}
        src="https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
      />
      <div className={styles.name}>Toni Miller</div>
      <BiChevronDown className={styles.icon} onClick={toggleDropdown} />
    </div>
  );
};

export default UserMenu;
