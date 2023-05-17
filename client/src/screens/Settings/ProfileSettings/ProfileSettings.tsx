import { useState, useCallback } from 'react';

// Components
import ActiveSettingsPage from '../../../components/settings-header/ActiveSettingsPage';

// Styles
import styles from './profile-settings.module.scss';

const ProfileSettings = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <div className={styles.formInputContainer}>
      <ActiveSettingsPage activePage="profile" />
      <div className={styles.container}>
        <div className={styles.header}>Profile</div>

        <form className={styles.form}>
          <div className={styles.formInputContainer}>
            <label htmlFor="username" className={styles.inputLabel}>
              Username
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.textInput}
                placeholder="tonimiller"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <p className={styles.url}>
              View your profile at{' '}
              <span style={{ textDecoration: 'underline' }}>
                {/* {`${username}.theassemblyapp.com`} */}
                {`username.theassemblyapp.com`}
              </span>
            </p>
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="firstName" className={styles.inputLabel}>
              First name
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.textInput}
                placeholder="Toni"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="lastName" className={styles.inputLabel}>
              Last name
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.textInput}
                placeholder="Miller"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="Bio" className={styles.inputLabel}>
              Bio
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                className={styles.textInput}
                placeholder="A little bit about yourself"
                name="Bio"
                // type="textarea"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formInputContainer}>
            <div className={styles.profileImageContainer}>
              <UploadControl
                className={styles.uploadBtn}
                onChange={handleAddBanner}
                accept="image/*"
              >
                Upload
              </UploadControl>
            </div>
          </div>

          <div className={styles.updateBtn}>Update settings</div>
        </form>
      </div>
    </div>
  );
};

// UploadControl.tsx
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

const handleAddBanner = ({ target: { files } }) => {
  const loadedImage = files[0];
  // loadedImage will be a image file.
};

export default ProfileSettings;
