import { Link, useNavigate } from 'react-router-dom';

// Assets
import { BsFillPenFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';
import { HiUser } from 'react-icons/hi';

// Styles
import styles from './dropdown.module.scss';

type UserDropdownMenuProps = {
  closeMenu: () => void;
};

const UserDropdownMenu = ({ closeMenu }: UserDropdownMenuProps) => {
  const navigate = useNavigate();

  const navigateTo = (route: string, id: string) => {
    navigate(`${route}/${id}`);
    closeMenu();
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.topMenu}>
        <div className={styles.menuItem}>
          <BsFillPenFill className={styles.icon} />
          <div
            className={styles.title}
            onClick={() => navigateTo('/create-post', '1')}
          >
            Create a Post
          </div>
        </div>

        <div className={styles.menuItem}>
          <HiUser className={styles.icon} />

          <div
            className={styles.title}
            onClick={() => navigateTo('/profile', '1')}
          >
            Profile
          </div>
        </div>

        <div className={styles.menuItem}>
          <BsFillBookmarkHeartFill className={styles.icon} />

          <div
            className={styles.title}
            onClick={() => navigateTo('/settings/profile/bookmarks', '1')}
          >
            Bookmarks
          </div>
        </div>

        <div className={styles.menuItem}>
          <IoMdSettings className={styles.icon} />

          <div
            className={styles.title}
            onClick={() => navigateTo('/settings/profile', '1')}
          >
            Settings
          </div>
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
