import Button from '../../kit/Button/Button'
// import Icon from '../../kit/Icon/Icon'

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        {/* <a href="https://dexola.com/" className={styles.logo}> */}
            <svg
              className={styles.logoIcon}
              width="35"
              height="20"
              aria-label="Dexola logo"
            >
              <use
                href="../../assets/icons/logo.svg"
              ></use>
            </svg>
        {/* </a> */}
        <Button variant="headerBtn" type="button">
        <svg
        width="11"
        height="11"
        margin-right="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.888 9.667 9.482 1m0 0v8.32m0-8.32h-8.25"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
          {/* <Icon name="btn-arrow" className={styles.btnIcon} width="9"
              height="9" fill="white"/> */}
          Join Now
        </Button>
      </nav>
    </header>
  );
};

export default Header;
