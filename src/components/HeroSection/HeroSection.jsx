import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { imagFirstBox, imagSecondBox } from "./imagesArr";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { mediaMob, mediaTab, mediaDesc } = {
    mediaMob: "(min-width: 375px)",
    mediaTab: "(min-width: 744px)",
    mediaDesc: "(min-width: 1440px)",
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.sliderWrapper} aria-label="Image slider">
          <div className={styles.slideContainer}>
            <Fade
              duration={2000}
              transitionDuration={1500}
              arrows={false}
              pauseOnHover={false}
              canSwipe={false}
              
            >
              {imagFirstBox.map(
                ({
                  id,
                  imageMob,
                  imageTab,
                  imageDesc,
                  imageDefault,
                  image_alt,
                }) => (
                  <div key={id}>
                    <picture>
                      <source srcSet={imageDesc} media={mediaDesc} />
                      <source srcSet={imageTab} media={mediaTab} />
                      <source srcSet={imageMob} media={mediaMob} />
                      <img
                        src={imageDefault}
                        alt={image_alt}
                        style={{ width: "100%", height: "100%"}}                        
                      />
                    </picture>
                  </div>
                )
              )}
            </Fade>
          </div>
          <div className={styles.slideContainer}>
            <Fade
              duration={2000}
              transitionDuration={1500}
              arrows={false}
              pauseOnHover={false}
              canSwipe={false}
              
            >
              {imagSecondBox.map(
                ({
                  id,
                  imageMob,
                  imageTab,
                  imageDesc,
                  imageDefault,
                  image_alt,
                }) => (
                  <div key={id}>
                    <picture>
                      <source srcSet={imageDesc} media={mediaDesc} />
                      <source srcSet={imageTab} media={mediaTab} />
                      <source srcSet={imageMob} media={mediaMob} />
                      <img
                        src={imageDefault}
                        alt={image_alt}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </picture>
                  </div>
                )
              )}
            </Fade>
          </div>
          <div className={styles.heroWrapperBorder}></div>
        </div>
        
        <h1 className={styles.heroTitle} aria-label="Section title">dexola camp</h1>

        <p className={styles.heroDescription} aria-describedby="Hero section description">
          Prepare to be transported beyond the boundaries of traditional gaming
          with the StarRunner Ecosystem - the beating heart that drives the
          adrenaline-charged galactic P2E odyssey of 'StarRunner.'
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
