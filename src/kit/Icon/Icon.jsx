import icons from "../../assets/icons/icon-sprite.svg";

const Icon = ({ name, size, stroke, fill, iconClass }) => {
  const iconLink = `${icons}#${name}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
      width={size}
      height={size}
      stroke={stroke}
      fill={fill}
    >
      <use href={iconLink}></use>
    </svg>
  );
};

export default Icon;
