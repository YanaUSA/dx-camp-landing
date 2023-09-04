import Icon from "../../kit/Icon/Icon";
import RegisterForm from "../RegisterForm/RegisterForm";
import useMatchMedia from '../../hooks/useMatchMedia'

import styles from "./JoinUsSection.module.scss";

const JoinUsSection = () => {
  const {isDesktop} = useMatchMedia();
  return (
    <section className={styles.sectionJoinUs}>
      <div className={styles.titleBox}>
        <h2>Join Us</h2>
        <span className={styles.sectionTitleSpan}>03</span>
      </div>
      <div className={styles.joinUsContainer}>
        <div className={styles.sectionDescriptionContainer}>
          <h3 className={styles.sectionDescriptionTitle}>
            Experience the Power of StarRunner
          </h3>
          <p className={styles.sectionDescription}>
            Join Our Community and Embark on a Journey of Opportunities.
            Discover the full range of our services that cater to your needs.
            We've got you covered with top-notch solutions.
          </p>
          {isDesktop && <Icon
            name="icon-LongArrow"
            widthSize="64"
            heightSize="14"
            iconClass={styles.btnIcon}
          />}          
        </div>
        <RegisterForm />
      </div>
    </section>
  );
};

export default JoinUsSection;
