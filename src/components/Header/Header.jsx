import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        {/* Header */}
        {/* <a href="https://dexola.com/" className={styles.logo}> */}
            <svg
              className="logo-icon"
              width="35"
              height="20"
              aria-label="Dexola logo"
            >
              <use
                href="../../assets/icons/logo.svg"
              ></use>
            </svg>
        {/* </a> */}
        <button></button>
      </nav>
    </header>
  );
};

export default Header;
