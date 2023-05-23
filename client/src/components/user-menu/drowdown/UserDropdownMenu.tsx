// Styles
import styles from './dropdown.module.scss';

// Assets
import { BsFillPenFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';

const UserDropdownMenu = () => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.topMenu}>
        <div className={styles.menuItem}>
          <BsFillPenFill className={styles.icon} />
          <div className={styles.title}>Create a Post</div>
        </div>

        <div className={styles.menuItem}>
          <BsFillBookmarkHeartFill className={styles.icon} />
          <div className={styles.title}>Bookmarks</div>
        </div>

        <div className={styles.menuItem}>
          <IoMdSettings className={styles.icon} />
          <div className={styles.title}>Settings</div>
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
