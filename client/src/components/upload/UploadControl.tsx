// Styles
import styles from '../../screens/Settings/ProfileSettings/profile-settings.module.scss';

type UploadControlProps = {
  children: any;
  className: any;
  value: string;
  disabled: boolean;
  accept: string;
  // onChange: () => void;
};

const UploadControl = ({
  children,
  value,
  onChange,
  disabled,
  accept,
}: UploadControlProps) => {
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
        onChange={disabled ? () => {} : onChange}
      />
      {children}
    </label>
  );
};

export default UploadControl;
