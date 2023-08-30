import FeaturesCard from "../FeaturesCard/FeaturesCard";
import styles from "./FeaturesSection.module.scss";

const FeaturesSection = () => {
  return (
    <section>
      <div className={styles.titleBox}>
        <h2>Features</h2>
        <span className={styles.sectionTitleSpan}>01</span>
      </div>
      <div className={styles.sectionDescriptionContainer}>
        <h3 className={styles.sectionDescriptionTitle}>About StarRunner</h3>
        <p className={styles.sectionDescription}>
          The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
          living, evolving entity that adapts to the desires and creativity of
          its players.
        </p>
      </div>
      <div className={styles.cardsContainerBox}>
        <FeaturesCard />
      </div>
    </section>
  );
};

export default FeaturesSection;
