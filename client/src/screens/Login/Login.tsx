import React, { useState } from 'react';

// Styles
import styles from './login.module.scss';

// Assets
import assembly_logo from '../../assets/assembly_icon.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <img src={assembly_logo} alt="Assembly" className={styles.logo} />
      <div className={styles.welcomeHeader}>
        <h1 className={styles.header}>Welcome back</h1>
        <h6 className={styles.subheader}>Please enter your details.</h6>
      </div>

      <form onSubmit={submitLogin} className={styles.inputContainer}>
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
        {showPasswordInput && (
          <div className={styles.inputWrapper}>
            <input
              className={styles.textInput}
              placeholder="••••••••••"
              name="password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        {showPasswordInput ? (
          <button
            className={styles.darkBtn}
            type="submit"
            onSubmit={submitLogin}
          >
            Login
          </button>
        ) : (
          <div
            className={styles.darkBtn}
            onClick={() => setShowPasswordInput(true)}
          >
            Continue
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
