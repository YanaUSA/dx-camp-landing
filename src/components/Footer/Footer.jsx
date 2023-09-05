import Icon from "../../kit/Icon/Icon";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer} aria-label="Site footer">
        <div className={styles.footerBox}>
          <ul className={styles.socialLinksList} aria-label="Social links">
          <li className={styles.socialLinksItem}>
            <a className={styles.socialLinksItem__link} target="_blank" href="#" aria-label="Facebook icon link">
              <Icon
                name="icon-FB"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>
          <li className={styles.socialLinksItem}>
            <a className={styles.socialLinksItem__link} target="_blank" href="#" aria-label="Instagram icon link">
              <Icon
                name="icon-Instagram"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>
          <li className={styles.socialLinksItem}>
            <a className={styles.socialLinksItem__link} target="_blank" href="#" aria-label="Discord icon icon link">
              <Icon
                name="icon-Discord"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>
          <li className={styles.socialLinksItem}>
            <a className={styles.socialLinksItem__link} target="_blank" href="#" aria-label="Telegram icon icon link">
              <Icon
                name="icon-Telegram"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>         
        </ul>
        <p className={styles.developedBy} aria-label="footer-description">Designed by Dexola - 2023</p>
        <p className={styles.copywrite} aria-label="footer-description">&#169; All rights reserved</p></div>
        
      </footer>
    </>
  );
};

export default Footer;
