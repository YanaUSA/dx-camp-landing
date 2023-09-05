import styles from './Button.module.scss';

const Button = ({ variant, type, isDisabled, onClick, children, className, ariaLabel }) => {
    const buttonClass = isDisabled
        ? `${styles.button} ${styles.unActive} ${styles[variant]}`
        : `${styles.button} ${styles[variant]}`;

    return (
        <button 
        className={`${buttonClass} ${className}`}
        type={type} 
        onClick={onClick}
        aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;