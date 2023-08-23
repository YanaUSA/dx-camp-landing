import icons from "../assets/icons/icon-sprite.svg";

const Icon = ({ name, size, stroke }) => {
  const iconLink = `${icons}#${name}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={stroke}
    >
      <use href={iconLink}></use>
    </svg>
  );
};

export default Icon;
