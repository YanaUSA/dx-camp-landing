import React, { useState } from 'react';
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic here

    // Clear error messages
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  return (
 
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className={styles}>
              <span className={styles}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleEmailChange}
              onBlur={() => {
                // Validation logic here
              }}
              className={styles}
              aria-invalid={emailError ? 'true' : 'false'}
              aria-describedby="email-error"
              required
            />
            {emailError && (
              <p id="email-error" className={styles} role="alert">
                {emailError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={styles}>
              <span className={styles}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => {
                // Validation logic here
              }}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+38(0__) ___ __ __"
              className={styles}
              aria-invalid={phoneError ? 'true' : 'false'}
              aria-describedby="phone-error"
              required
            />
            {phoneError && (
              <p id="phone-error" className={styles} role="alert">
                {phoneError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className={styles}>
              <span className={styles}>*</span>
            </label>
            <div className={styles}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                onBlur={() => {
                  // Validation logic here
                }}
                className={styles}
                aria-invalid={passwordError ? 'true' : 'false'}
                aria-describedby="password-error"
                required
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={handleShowPassword}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3C5.029 3 1 7.029 1 12a9 9 0 009 9c4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9zm0 16c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12a2 2 0 11-.001 3.999A2 2 0 0110 7z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3C5.029 3 1 7.029 1 12a9 9 0 009 9c4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9zm0 16c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12a2 2 0 100 4 2 2 0 000-4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && (
              <p id="password-error" className={styles} role="alert">
                {passwordError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password" className={styles}>
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                placeholder='Confirm Password'
                onChange={handleConfirmPasswordChange}
                onBlur={() => {
                  // Validation logic here
                }}
                className={styles}
                aria-invalid={confirmPasswordError ? 'true' : 'false'}
                aria-describedby="confirm-password-error"
                required
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={handleShowConfirmPassword}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3C5.029 3 1 7.029 1 12a9 9 0 009 9c4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9zm0 16c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12a2 2 0 11-.001 3.999A2 2 0 0110 7z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3C5.029 3 1 7.029 1 12a9 9 0 009 9c4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9zm0 16c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12a2 2 0 100 4 2 2 0 000-4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            {confirmPasswordError && (
              <p id="confirm-password-error" className={styles} role="alert">
                {confirmPasswordError}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={styles}
            >
              Send it
            </button>
          </div>
        </form>

  );
};

export default RegisterForm;