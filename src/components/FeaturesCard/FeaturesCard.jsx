import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";
import { cards } from "./cards";
import styles from "./FeaturesCard.module.scss";

const FeaturesCard = () => {
  console.log("000000000", `"${cards[0].image_tab}"`);
  // return cards.map(({ id, title, image_1x_pc, image_2x_pc, image_1x_tab, image_2x_tab, image_alt, description }) => (
  return cards.map(
    ({
      id,
      title,
      image_1x_pc,
      image_pc,
      image_tab,
      image_alt,
      description,
    }) => (
      // <div className={styles.cardsContainerBox}>
      <div key={id} className={styles.cardContainer}>
        {/* <div className={styles.cardImageThumb}> */}
        <img src={image_1x_pc} alt={image_alt} />

        {/* <picture>                            

        <source srcSet={(`"${image_pc}"`)}
        media="(min-width: 375px)" />
        
        <source srcSet={`"${image_tab}"`}
        media="(min-width: 744px)" />                     
        
        <source srcSet={image_pc}
        media="(min-width: 1440px)" />

        <img className={styles.cardImage} src={image_1x_pc} alt={image_alt} />                           
    </picture> */}
        {/* </div> */}

        <div className={styles.cardContentBox}>
          <div className={styles.cardTitleBox}>
            <span className={styles.cardTitleSpan}>{id}</span>
            <h4>{title}</h4>
          </div>
          <p className={styles.cardDescription}>{description}</p>
          <Button variant="featuresBtn" type="button">
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
      // </div>
    )
  );
};

export default FeaturesCard;
