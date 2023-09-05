import styles from "./Input.module.scss";

const Input = ({
  name,
  labelTitle,
  placeholder,
  type,
  title,
  disabled,
  value,
  labelStyle,
  labelTextStyle,
  inputStyle,
  eyeButton,
  inputError,
  handleBlur,
  onChange,
  ariaLabel,
  ariaInvalid,
  ariaDescribedby,
  required = { required },
}) => {
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
          type={type}
          title={title}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          eyeButton={eyeButton}
          inputError={inputError}
          onBlur={handleBlur}
          onChange={onChange}
          aria-label={ariaLabel}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedby}
          required
        />
        {inputError && (
          <p id={ariaDescribedby} className={styles.inputError}>
            {inputError}
          </p>
        )}
      </div>
    </label>
  );
};

export default Input;
