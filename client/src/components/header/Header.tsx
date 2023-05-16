import { Link } from 'react-router-dom';
import assembly_logo from '../../assets/assembly_icon.png';

// Styles
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.app_icon} src={assembly_logo} />
      </Link>

      <div className={styles.btnContainer}>
        <Link to="/login" className={styles.btn}>
          <p className={styles.text}>Login</p>
        </Link>

        <div className={styles.btnDivider} />

        <Link to="/signup" className={styles.btnDark}>
          <p className={styles.lightText}>Become a creator</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
