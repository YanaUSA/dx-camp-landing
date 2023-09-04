import { useState } from "react";
import styles from "./InputWithIcon.module.scss";
import Icon from "../Icon/Icon";

const InputWithIcon = ({
  name,
  labelTitle,
  placeholder,
  type = { type },
  disabled,
  value = { value },
  labelStyle,
  labelTextStyle,
  inputStyle,
  inputError,
  eyeButton,
  handleBlur,
  onChange = { onChange },
  ariaLabel,
  ariaInvalid = { ariaInvalid },
  ariaDescribedby,
  required = { required },
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log("Password0000000000000:", password);

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
          className={
            inputError
              ? `${styles.inputComponent} ${inputStyle} ${styles.error}`
              : `${styles.inputComponent} ${inputStyle}`
          }
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={password}
          inputError={inputError}
          eyeButton={eyeButton}
          onBlur={handleBlur}
          onChange={handlePasswordChange}
          aria-label={ariaLabel}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedby}
          required
        />
        {eyeButton && (
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
