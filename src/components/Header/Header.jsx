import { Link } from "react-router-dom";
import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";

import styles from "./Header.module.scss";

const Header = () => {
  const clientSite = "https://dexola.com/";

  return (
    <header className={styles.header}>
      <div>
        <nav>
          <Link to={clientSite} target="_blank" className={styles.logoLink}>
            <Icon name="icon-Logo" widthSize="35" heightSize="20" />
          </Link>
          <Button variant="headerBtn" type="button">
            <Icon
              name="icon-arrow"
              widthSize="16"
              heightSize="16"
              iconClass={styles.btnIcon}
            />
            Join Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
