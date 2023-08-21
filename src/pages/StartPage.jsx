// import styles from './StartPage.module.scss';
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import TopNFTsSection from "../components/TopNFTsSection/TopNFTsSection";
import JoinUsSection from "../components/JoinUsSection/JoinUsSection";

const StartPage = () => {
  return (
    <>
         <Layout>
         <HeroSection/>
         <FeaturesSection/>
         <TopNFTsSection/>
         <JoinUsSection/>
      </Layout>
    </>
  );
};

export default StartPage;
