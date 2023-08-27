import FeaturesCard from '../FeaturesCard/FeaturesCard'
// import styles from "./featuresSection.module.scss";

const FeaturesSection = () => {
  return (
    <section>
      <div>
        <h2>Features</h2>
        <span>01</span>
      </div>
      <div>
        <h3>About StarRunner</h3>
        <p>
          The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
          living, evolving entity that adapts to the desires and creativity of
          its players.
        </p>
        </div>
        <FeaturesCard/>      
    </section>
  );
};

export default FeaturesSection;
