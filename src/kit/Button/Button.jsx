import styles from './Button.module.scss';

const Button = ({ variant, type, isDisabled, onClick, children }) => {
    const buttonClass = isDisabled
        ? `${styles.button} ${styles.unActive} ${styles[variant]}`
        : `${styles.button} ${styles[variant]}`;

    return (
        <button className={buttonClass} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;