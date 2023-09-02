import { useState } from "react";
import styles from "./InputWithIcon.module.scss";
import Icon from "../Icon/Icon";

const InputWithIcon = ({
  name,
  labelTitle,
  placeholder,
  type = "text",
  disabled = false,
  value,
  labelStyle,
  labelTextStyle,
  inputStyle,
  inputError,
  eyeButton,
  // resetButton,
  // showInputValue,
  // resetValue,
  handleBlur,
  // error,
  onChange,
  ariaLabel,
  ariaInvalid,
  ariaDescribedby,
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // const [comingValue, setComingValue] = useState(false);

  // const handleShowPassword = ({ target: { name } }) => {
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <label className={`${styles.label} ${labelStyle}`}>
      {labelTitle && (
        <p className={`${styles.labelText} ${labelTextStyle}`}>{labelTitle}</p>
      )}
      <div className={`${styles.inputContainer} ${inputStyle}`}>
        <input
          autoComplete="off"
          className={`${styles.inputComponent} ${inputStyle}`}
          // type={type}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={password}
          inputError={inputError}
          eyeButton={eyeButton}
          // resetbutton={resetButton}
          // showInputValue={showInputValue}
          // resetValue={resetValue}
          onBlur={handleBlur}
          // onChange={onChange}
          onChange={handlePasswordChange}
          aria-label={ariaLabel}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedby}
        />
        {eyeButton && (
          // <div onClick={showValue} className={styles.iconWrapper} eyeButton>
          //   <Icon name="icon-eye-closed" widthSize="24" heightSize="24"/>
          // </div>

          <button
            eyeButton
            type="button"
            className={styles.iconWrapper}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <Icon
                name="icon-eye-opened"
                widthSize="24"
                heightSize="24"
                fill="white"
              />
            ) : (
              <Icon
                name="icon-eye-closed"
                widthSize="24"
                heightSize="24"
                fill="white"
              />
            )}
          </button>
        )}
        {/* {passwordError && (
          <p id={ariaDescribedby} className={styles.inputError}>
            {passwordError}
          </p>
        )} */}
        {inputError && (
          <p id={ariaDescribedby} className={styles.inputError}>
            {inputError}
          </p>
        )}
      </div>
    </label>
  );
};

export default InputWithIcon;
