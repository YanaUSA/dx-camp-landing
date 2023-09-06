import icons from "@assets/icons/sprite.svg";

const Icon = ({ name, widthSize, heightSize, stroke, fill, iconClass }) => {
  const iconLink = `${icons}#${name}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
      width={widthSize}
      height={heightSize}
      stroke={stroke}
      fill={fill}
    >
      <use href={iconLink}></use>
    </svg>
  );
};

export default Icon;
