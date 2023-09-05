import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";
import { cards } from "./cards";
import styles from "./FeaturesCard.module.scss";

const FeaturesCard = () => {
  return cards.map(
    ({
      id,
      title,
      imageMob,
      imageTab,
      imageDesc,
      imageDefault,
      image_alt,
      mediaMob,
      mediaTab,
      mediaDesc,
      description,
    }) => (
      <div key={id} className={styles.cardContainer}>

        <picture>
          <source srcSet={imageDesc} media={mediaDesc} />
          <source srcSet={imageTab} media={mediaTab} />
          <source srcSet={imageMob} media={mediaMob} />
          <img src={imageDefault} alt={image_alt} className={styles.cardImage}  />
        </picture>

        <div className={styles.cardContentBox}>
          <div className={styles.cardTitleBox}>
            <span className={styles.cardTitleSpan}>{id}</span>
            <h4 aria-label="Features card title">{title}</h4>
          </div>
          <p className={styles.cardDescription} aria-describedby="Features card description">{description}</p>
          <Button variant="featuresBtn" type="button" ariaLabel={`Discover more about ${title}`}>
            <Icon
              name="icon-arrow"
              widthSize="16"
              heightSize="16"
              iconClass={styles.btnIcon}
            />
            discover now
          </Button>
        </div>
      </div>
    )
  );
};

export default FeaturesCard;
