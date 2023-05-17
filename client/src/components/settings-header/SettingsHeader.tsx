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

      {menuOpen && <SettingsMenu />}
    </>
  );
}

const SettingsMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <MenuOption icon={<MdPayment size="18" />} title="Profile" />
      <MenuOption
        icon={<BsFillFileEarmarkTextFill size="18" />}
        title="Posts"
      />
      <MenuOption icon={<BsGraphUp size="18" />} title="Analytics" />
      <MenuOption icon={<MdPayment size="18" />} title="Payments" />
      <MenuOption
        icon={<BsFillBookmarkHeartFill size="18" />}
        title="Library"
      />
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
