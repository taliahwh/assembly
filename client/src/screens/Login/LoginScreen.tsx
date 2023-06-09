import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import styles from './login.module.scss';

// Assets
import assembly_logo from '../../assets/assembly_icon.png';

// Components
import Alert from '../../components/alert/Alert';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const validateEmail = (email: string) => {
    if (email.length > 0) setShowPasswordInput(true);
  };

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={assembly_logo} alt="Assembly" className={styles.logo} />
      </Link>
      <div className={styles.welcomeHeader}>
        <h1 className={styles.header}>Welcome back</h1>
        <h6 className={styles.subheader}>Please enter your details.</h6>
      </div>

      <form onSubmit={submitLogin} className={styles.inputContainer}>
        {/* <Alert message={'Email address required'} alert_type="warning" /> */}
        <div className={styles.inputWrapper}>
          <input
            className={styles.textInput}
            placeholder="Enter your email"
            name="email"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* TODO 
        - framer motion animation
        - check that email input isn't empty before displaying password input
        */}
        <AnimatePresence>
          {showPasswordInput && (
            // <div className={styles.inputWrapper}>

            // </div>
            <motion.div
              className={styles.inputWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                className={styles.textInput}
                placeholder="••••••••••"
                name="password"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {showPasswordInput ? (
          <button
            className={styles.darkBtn}
            type="submit"
            onSubmit={submitLogin}
          >
            Login
          </button>
        ) : (
          <div className={styles.darkBtn} onClick={() => validateEmail(email)}>
            Continue
          </div>
        )}

        <p className={styles.prompt}>
          Don't have an account?{' '}
          <Link to="/signup" className={styles.signUp}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
