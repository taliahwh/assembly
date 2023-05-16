import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import styles from './signup.module.scss';

// Assets
import assembly_logo from '../../assets/assembly_icon.png';

// Components
import Alert from '../../components/alert/Alert';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={assembly_logo} alt="Assembly" className={styles.logo} />
      </Link>
      <div className={styles.welcomeHeader}>
        <h1 className={styles.header}>Let's get started</h1>
        <h6 className={styles.subheader}>Please enter your details.</h6>
      </div>

      <form onSubmit={submitLogin} className={styles.inputContainer}>
        {/* <Alert message={'Email address required'} alert_type="warning" /> */}

        <div className={styles.usernameWrapper}>
          <div className={styles.usernameInputWrapper}>
            <input
              className={styles.textInput}
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p className={styles.domain}>.theassemblyapp.com</p>
        </div>

        <div className={styles.flexInputWrapper}>
          <div className={styles.flexInput}>
            <input
              className={styles.textInput}
              placeholder="First name"
              name="firstName"
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={styles.flexInput}>
            <input
              className={styles.textInput}
              placeholder="Last name"
              name="lastName"
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.textInput}
            placeholder="Email address"
            name="email"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.textInput}
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.textInput}
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className={styles.darkBtn} type="submit" onSubmit={submitLogin}>
          Create an account
        </button>

        <p className={styles.prompt}>
          Otherwise..{' '}
          <Link to="/login" className={styles.login}>
            login!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpScreen;
