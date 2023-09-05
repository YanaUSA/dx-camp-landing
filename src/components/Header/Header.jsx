import { Link } from "react-router-dom";
import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";

import { HashLink } from "react-router-hash-link";

import styles from "./Header.module.scss";

const Header = () => {
  const clientSite = "https://dexola.com/";

  return (
    <header className={styles.header}>
      <div>
        <nav role="navigation">
          <Link to={clientSite} target="_blank" className={styles.logoLink} aria-label="Dexola homepage">
            <Icon name="icon-Logo" widthSize="35" heightSize="20" />
          </Link>
          <HashLink
            to="#reg-form"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
          >
            <Button variant="headerBtn" type="button" ariaLabel="Jump to registration form">
              <Icon
                name="icon-arrow"
                widthSize="16"
                heightSize="16"
                iconClass={styles.btnIcon}
              />
              Join Now
            </Button>
          </HashLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
