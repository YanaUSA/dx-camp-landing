import React, { useState } from "react";
import Input from "../../kit/Input/Input";
import InputWithIcon from "../../kit/InputWithIcon/InputWithIcon";
import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";
import {
  emailRegEx,
  phoneRegEx,
  passwordRegEx,
} from "../../constants/regExConstants";

import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "phone":
        return setPhone(value);
      case "password":
        return setPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      default:
        return;
    }
  };

  ////////////// start of validation part ////////////

  const validateEmail = () => {
    if (email.trim() === "") {
      setEmailError("Please complete this field");
    } else if (!email.match(emailRegEx)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = () => {
    if (phone.trim() === "") {
      setPhoneError("Please complete this field");
    } else if (!phone.match(phoneRegEx)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setPasswordError("Please complete this field");
    } else if (!password.match(passwordRegEx)) {
      setPasswordError("Invalid password pattern");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Please complete this field");
      } else if (!confirmPassword.toString().match(password.toString())) {
      setConfirmPasswordError("No match with entered password");
    } else {
      setConfirmPasswordError("");
    }
  };

    /////////////// end of validation part ////////////


  const handleBlurChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "password":
        return validatePassword(value);
      case "confirmPassword":
        return validateConfirmPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !phoneError && !passwordError && !confirmPasswordError) {
      // Submit form and send validated data to backend

      alert("You have successfully registered")
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Password:", password);
      console.log("ConfirmPassword:", confirmPassword);
    }
  };

  return (
    <form id="reg-form" className={styles.form} autoComplete="off" onSubmit={handleSubmit} aria-label="Registration form">
      <Input
        name="email"
        placeholder="Enter email"
        type="email"
        value={email}
        labelStyle
        labelTextStyle={styles.regLabelText}
        inputError={emailError}
        handleBlur={handleBlurChange}
        onChange={handleChange}
        ariaLabel="Input to enter email"
        ariaInvalid={emailError ? "true" : "false"}
        ariaDescribedby="email-error"
        required
      />
      <Input
        name="phone"
        placeholder="+38(0__) ___ __ __"
        type="tel"
        value={phone}
        labelStyle={styles.regLabel}
        labelTextStyle={styles.regLabelText}
        inputError={phoneError}
        handleBlur={handleBlurChange}
        onChange={handleChange}
        ariaLabel="Input to enter phone number"
        ariaInvalid={phoneError ? "true" : "false"}
        ariaDescribedby="phone-error"
        required
      />
      <InputWithIcon
        name="password"
        placeholder="Password"
        type={password}
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        value={password}
        labelStyle={styles.regLabel}
        labelTextStyle={styles.regLabelText}
        inputError={passwordError}
        eyeButton
        handleBlur={handleBlurChange}
        onChange={handleChange}
        ariaLabel="Input to enter password"
        ariaInvalid={passwordError ? "true" : "false"}
        ariaDescribedby="password-error"
        required
      />
      <InputWithIcon
        name="confirmPassword"
        placeholder="Confirm Password"
        type={confirmPassword}
        title="Must match password"
        value={confirmPassword}
        labelStyle={styles.regLabel}
        labelTextStyle={styles.regLabelText}
        inputError={confirmPasswordError}
        eyeButton
        handleBlur={handleBlurChange}
        onChange={handleChange}
        ariaLabel="Input to enter password for confirmation"
        ariaInvalid={confirmPasswordError ? "true" : "false"}
        ariaDescribedby="confirm-password-error"
        required
      />        
      <div>
        <Button variant="formBtn" type="submit" ariaLabel="Sent register form Button">
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
