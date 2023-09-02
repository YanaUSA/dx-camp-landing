import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form"
import Input from "../../kit/Input/Input";
import InputWithIcon from "../../kit/InputWithIcon/InputWithIcon";
import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";

import styles from "./RegisterForm.module.scss";

// type Inputs = {
//   example: string
//   exampleRequired: string
// }

const RegisterForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [inputError, setInputError] = useState(null);

// console.log("emailValue", emailValue)
// console.log("phoneValue", phoneValue)
// console.log("passwordValue", passwordValue)
// console.log("confirmPasswordValue", confirmPasswordValue)

  // const handleShowPassword = ({ target: { name, value } }) => {
  //   // setShowPassword(!showPassword);

  //   switch (name) {
  //     case "password":
  //       return setPassword(value);
  //     case "confirm-password":
  //       return confirmPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleShowConfirmPassword = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmailValue(value);
      case "phone":
        return setPhoneValue(value);
      case "password":
        return setPasswordValue(value);
      case "confirm-password":
        return setConfirmPasswordValue(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic here

    // Clear error messages
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setConfirmPasswordError("");

    setInputError("");
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <Input
        name="email"
        // labelTitle
        placeholder="Enter email"
        type="email"
        // disabled
        value={emailValue}
        labelStyle={styles.regLabel}
        // inputStyle
        labelTextStyle={styles.regLabelText}
        inputError="Is not valid email"
        // eyeButton
        // resetButton
        // showValue
        // resetValue
        handleBlur
        // error
        onChange={handleChange}
        ariaLabel="Input to enter email"
        ariaInvalid={inputError ? "true" : "false"}
        ariaDescribedby="email-error"
        // required
      />

      <Input
        name="phone"
        // labelTitle
        placeholder="+38(0__) ___ __ __"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={phoneValue}
        labelStyle={styles.regLabel}
        // inputStyle
        labelTextStyle={styles.regLabelText}
        inputError="Please complete this field"
        // eyeButton
        // resetButton
        // showValue
        // resetValue
        handleBlur
        // error
        onChange={handleChange}
        ariaLabel="Input to enter phone number"
        ariaInvalid={inputError === ""}
        // aria-invalid={phoneError ? "true" : "false"}
        ariaDescribedby="phone-error"
        // required
      />

      {/* <InputWithIcon
        name="password"
        // labelTitle
        placeholder="Password"
        // type={passwordValue ? "text" : "password"}
        type={passwordValue}
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={passwordValue}
        labelStyle={styles.regLabel}
        // inputStyle
        labelTextStyle={styles.regLabelText}
        inputError="Please complete this field"
        eyeButton
        // resetButton
        // showValue
        // resetValue
        handleBlur
        // error
        onChange={handleChange}
        // aria-invalid={passwordError ? "true" : "false"}
        // aria-describedby

        ariaLabel="Input to enter password"
        ariaInvalid={inputError === ""}
        ariaDescribedby="password-error"
        // required
      /> */}
      {/* <InputWithIcon
        name="confirmPassword"
        // labelTitle
        placeholder="Confirm Password"
        type={confirmPasswordValue ? "text" : "password"}
        value={confirmPasswordValue}
        labelStyle={styles.regLabel}
        // inputStyle
        labelTextStyle={styles.regLabelText}
        inputError="Please complete this field"
        eyeButton
        // resetButton
        // showValue
        // resetValue
        handleBlur
        // error
        onChange={handleChange}
        ariaLabel="Input to enter password for confirmation"
        ariaInvalid={inputError === ""}
        // aria-invalid={confirmPasswordError ? "true" : "false"}
        ariaDescribedby="confirm-password-error"
        // required
      /> */}
      {/* <div>
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
          // onBlur={handleBlur}
          className={styles}
          aria-invalid={emailError ? "true" : "false"}
          aria-describedby="email-error"
          required
        />
        {emailError && (
          <p id="email-error" className={styles} role="alert">
            {emailError}
          </p>
        )}
      </div> */}
      {/* <div>
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
          aria-invalid={phoneError ? "true" : "false"}
          aria-describedby="phone-error"
          required
        />
        {phoneError && (
          <p id="phone-error" className={styles} role="alert">
            {phoneError}
          </p>
        )}
      </div> */}
      {/* <div>
        <label htmlFor="password" className={styles}>
          <span className={styles}>*</span>
        </label>
        <div className={styles}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            onBlur={() => {
              // Validation logic here
            }}
            className={styles}
            aria-invalid={passwordError ? "true" : "false"}
            aria-describedby="password-error"
            required
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500"
            onClick={handleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
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
      </div> */}
      {/* <div>
        <label htmlFor="confirm-password" className={styles}>
          <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            onBlur={() => {
              // Validation logic here
            }}
            className={styles}
            aria-invalid={confirmPasswordError ? "true" : "false"}
            aria-describedby="confirm-password-error"
            required
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500"
            onClick={handleShowConfirmPassword}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
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
      </div> */}
      <div>
        <Button variant="formBtn" type="submit">
          <Icon
            name="icon-Line"
            widthSize="24"
            heightSize="2"
            iconClass={styles.btnIcon}
          />
          Send it
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
