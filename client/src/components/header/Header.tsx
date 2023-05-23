import { useState } from 'react';
import { Link } from 'react-router-dom';
import assembly_logo from '../../assets/assembly_icon.png';

// Components
import UserMenu from '../user-menu/UserMenu';
import UserDropdownMenu from '../user-menu/drowdown/UserDropdownMenu';

// Styles
import styles from './header.module.scss';

function Header() {
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.app_icon} src={assembly_logo} />
        </Link>

        {loggedInUser ? (
          <UserMenu toggleDropdown={toggleDropdown} />
        ) : (
          <div className={styles.btnContainer}>
            <Link to="/login" className={styles.btn}>
              <div className={styles.text}>Login</div>
            </Link>

            <div className={styles.btnDivider} />

            <Link to="/signup" className={styles.btnDark}>
              <div className={styles.lightText}>Become a creator</div>
            </Link>
          </div>
        )}
      </div>

      {showDropdown && <UserDropdownMenu />}
    </>
  );
}

export default Header;
