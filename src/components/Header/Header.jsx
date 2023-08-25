import Button from '../../kit/Button/Button'
import Icon from '../../kit/Icon/Icon'

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="https://dexola.com/" target="_blank" className={styles.logoLink}>
        <Icon name="icon-Logo"
                widthSize="35"
                heightSize="20"
                />
        </a>
        <Button variant="headerBtn" type="button">
          <Icon name="icon-arrow"
                widthSize="16"
                heightSize="16"
                iconClass={styles.btnIcon}
                />
          Join Now
        </Button>
      </nav>
    </header>
  );
};

export default Header;
