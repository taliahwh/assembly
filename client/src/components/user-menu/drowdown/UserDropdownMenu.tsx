import { Link } from 'react-router-dom';

// Assets
import { BsFillPenFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';
import { HiUser } from 'react-icons/hi';

// Styles
import styles from './dropdown.module.scss';

const UserDropdownMenu = () => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.topMenu}>
        <div className={styles.menuItem}>
          <BsFillPenFill className={styles.icon} />
          <div className={styles.title}>Create a Post</div>
        </div>

        <div className={styles.menuItem}>
          <HiUser className={styles.icon} />
          <Link to={`/profile/:id`} className={styles.link}>
            <div className={styles.title}>Profile</div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <BsFillBookmarkHeartFill className={styles.icon} />
          <Link to={`/settings/profile/:id/bookmarks`} className={styles.link}>
            <div className={styles.title}>Bookmarks</div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <IoMdSettings className={styles.icon} />
          <Link to={`/settings/profile/:id`} className={styles.link}>
            <div className={styles.title}>Settings</div>
          </Link>
        </div>
      </div>

      <div className={styles.bottomMenu}>
        <div className={styles.menuItemBottom}>
          <RxExit className={styles.icon} />
          <div className={styles.title}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdownMenu;
