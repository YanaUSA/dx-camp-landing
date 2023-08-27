import Button from "../../kit/Button/Button";
import Icon from "../../kit/Icon/Icon";
import {cards} from "./cards";
import styles from "./FeaturesCard.module.scss";

const FeaturesCard = () => {
  return (
    cards.map(({ id, title, image_1x, image_alt, description }) => (
        <div key={id}>
          <img src={image_1x} alt={image_alt} />
          <span>{id}</span>
          <h4>{title}</h4>
          <p>
            {description}
          </p>
          <Button>
            <Icon
              name="icon-arrow"
              widthSize="16"
              heightSize="16"
              iconClass={styles.btnIcon}
            />
            discover now
          </Button>
        </div>
      ))
  );
};

export default FeaturesCard;
