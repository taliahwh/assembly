import { useState } from 'react';
import { Link } from 'react-router-dom';
import assembly_logo from '../../assets/assembly_icon.png';

// Assets
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import {
  BsFillBookmarkHeartFill,
  BsFillFileEarmarkTextFill,
  BsGraphUp,
} from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';

// Styles
import styles from './settings-header.module.scss';

// TODO - extract types into separate file

type SettingsHeaderProps = {
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  menuOpen: boolean;
};

type MenuOptionProps = {
  icon: any;
  title: string;
};

function SettingsHeader({
  onOpenMenu,
  onCloseMenu,
  menuOpen,
}: SettingsHeaderProps) {
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.app_icon} src={assembly_logo} />
        </Link>

        <h5 className={styles.headerTitle}>Settings</h5>

        {menuOpen ? (
          <IoCloseOutline className={styles.closeIcon} onClick={onCloseMenu} />
        ) : (
          <IoMenuOutline className={styles.menuIcon} onClick={onOpenMenu} />
        )}
      </div>

      {menuOpen && <SettingsMenu closeMenu={onCloseMenu} />}
    </>
  );
}

type SettingsMenuProps = {
  closeMenu: () => void;
};

const SettingsMenu = ({ closeMenu }: SettingsMenuProps) => {
  return (
    <div className={styles.menuContainer}>
      <Link
        to={`/settings/profile/:id`}
        className={styles.link}
        onClick={closeMenu}
      >
        <MenuOption icon={<MdPayment size="18" />} title="Profile" />
      </Link>

      <Link
        to={`/settings/posts/:id`}
        className={styles.link}
        onClick={closeMenu}
      >
        <MenuOption
          icon={<BsFillFileEarmarkTextFill size="18" />}
          title="Posts"
        />
      </Link>

      <Link
        to={`/settings/analytics/:id`}
        className={styles.link}
        onClick={closeMenu}
      >
        <MenuOption icon={<BsGraphUp size="18" />} title="Analytics" />
      </Link>

      <Link
        to={`/settings/payments/:id`}
        className={styles.link}
        onClick={closeMenu}
      >
        <MenuOption icon={<MdPayment size="18" />} title="Payments" />
      </Link>

      <Link to={`/logout`} className={styles.link} onClick={closeMenu}>
        <MenuOption icon={<RxExit size="18" />} title="Logout" />
      </Link>
    </div>
  );
};

const MenuOption = ({ icon, title }: MenuOptionProps) => {
  return (
    <div className={styles.menuOptionContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.optionTitleContainer}>{title}</div>
    </div>
  );
};

export default SettingsHeader;
