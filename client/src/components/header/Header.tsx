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
          <div className={styles.text}>Login</div>
        </Link>

        <div className={styles.btnDivider} />

        <Link to="/signup" className={styles.btnDark}>
          <div className={styles.lightText}>Become a creator</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
