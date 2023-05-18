import { useState, useCallback } from 'react';
import { BsUpload } from 'react-icons/bs';

// Components
import ActiveSettingsPage from '../../../components/settings-header/ActiveSettingsPage';
import UploadControl from '../../../components/upload/UploadControl';

// Styles
import styles from './profile-settings.module.scss';

const ProfileSettings = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <>
      <ActiveSettingsPage activePage="profile" />
      <div className={styles.container}>
        <h1 className={styles.header}>Profile</h1>

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
                onChange={(props) => handleAddBanner(props)}
                accept="image/*"
              >
                <BsUpload />
                <div>Upload</div>
              </UploadControl>
            </div>
          </div>
          <p className={styles.imgRequirements}>
            Your image should be at least 200x200px and must be in JPG or PNG
            format.
          </p>

          <div className={styles.updateBtn}>Update settings</div>
        </form>
      </div>
    </>
  );
};

export default ProfileSettings;

const handleAddBanner = (props: any) => {
  // console.log(props);
  const loadedImage = props.target.files[0];
  console.log(loadedImage);
};
