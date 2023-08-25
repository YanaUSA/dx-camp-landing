import Icon from "../../kit/Icon/Icon";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.socialLinksList}>
          <li class={styles.socialLinksItem}>
            <a class={styles.socialLinksItem__link} target="_blank" href="#">
              <Icon
                name="icon-FB"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>
          <li class={styles.socialLinksItem}>
            <a class={styles.socialLinksItem__link} target="_blank" href="#">
              <Icon
                name="icon-Instagram"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>
          <li class={styles.socialLinksItem}>
            <a class={styles.socialLinksItem__link} target="_blank" href="#">
              <Icon
                name="icon-Discord"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
          </li>
          <li class={styles.socialLinksItem}>
            <a class={styles.socialLinksItem__link} target="_blank" href="#">
              <Icon
                name="icon-Telegram"
                widthSize="32"
                heightSize="32"
                iconClass={styles.socialLinksItem}
              />
            </a>
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
