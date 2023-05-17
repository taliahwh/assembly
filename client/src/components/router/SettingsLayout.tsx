import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SettingsHeader from '../settings-header/SettingsHeader';

const SettingsLayout = () => {
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <SettingsHeader
        onOpenMenu={openMenu}
        onCloseMenu={closeMenu}
        menuOpen={menuOpen}
      />
      {!menuOpen && <Outlet />}
    </>
  );
};

export default SettingsLayout;
