import { useEffect, useState } from "react";
import styles from "./HeroSection.module.scss";

const imgArr = [
  "src/assets/images/1-1-pc.jpg",
  "src/assets/images/1-2-pc.jpg",
  "src/assets/images/1-3-pc.jpg",
  "src/assets/images/1-4-pc.jpg",
  "src/assets/images/1-5-pc.jpg",
];

const HeroSection = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // console.log("hi!!!!!!!!!!!!!!!!!!!", count);

  //   const timer = setInterval(() => {
  //     // cycle prevCount using mod instead of checking for hard-coded length
  //     setCount((prevCount) => (prevCount + 1) % imgArr.length);
  //   }, 4000);
  //   // automatically clear timer the next time this effect is fired or
  //   // the component is unmounted
  //   return () => clearInterval(timer);
  // });

  return (
    <section className={styles.heroContainer}>
      <div>
        <ul>
        {/* <li className={styles.slider}>
            <img src={imgArr[count]} className={styles.images} />
          </li> */}
          <li>
            {/* <picture>
              <source
                srcSet="src/assets/images/1-1-tab.jpg, ./images/team1-pc@2x.jpg 2x"
                media="(min-width: 1200px)"
              />

              <source
                srcSet="./images/team1-tab.jpg 1x, ./images/team1-tab@2x.jpg 2x"
                media="(min-width: 768px)"
              />

              <source
                srcSet="./images/team1-mob.jpg 1x, ./images/team1-mob@2x.jpg 2x"
                media="(max-width: 767px)"
              />

              <img
                className={styles}
                src="./images/team1-tab.jpg"
                alt="Dexola hero picture"
              />
            </picture> */}
          </li>
          {/* <img src="src/assets/images/1-1-tab.jpg" alt="Dexola hero picture" />
        <img src="src/assets/images/1-2-tab.jpg" alt="Dexola hero picture" /> */}
        </ul>
        {/* <h1 className={styles.heroTitle}>dexola camp</h1> */}
        <p className={styles.heroDescription}>
          Prepare to be transported beyond the boundaries of traditional gaming
          with the StarRunner Ecosystem – the beating heart that drives the
          adrenaline-charged galactic P2E odyssey of 'StarRunner.'
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
