// Styles
import styles from '../../screens/Settings/ProfileSettings/profile-settings.module.scss';

const UploadControl = ({ children, value, onChange, disabled, accept }) => {
  return (
    <label htmlFor="contained-button-file" className={styles.uploadBtn}>
      <input
        value={value}
        accept={accept}
        disabled={disabled}
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={disabled ? () => null : onChange}
      />
      {children}
    </label>
  );
};

export default UploadControl;
