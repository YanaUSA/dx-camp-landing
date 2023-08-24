import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.socialIconList}>
          <li className={styles.socialIconItem}>
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
          </li>
          <li className={styles.socialIconItem}>
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
          </li>
          <li className={styles.socialIconItem}>
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
          </li>
          <li className={styles.socialIconItem}>
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
          </li>
        </ul>
        <div className={styles.footerInfoBox}>
          <p className={styles.developedBy}>Designed by Dexola - 2023</p>
          <p className={styles.copywrite}>&#169; All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
