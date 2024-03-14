import HeroSection from "./HeroSection";
import FitnessTraining from "../fitnessTraining/FitnessTraining";
import Swiper from "./Swiper";
import QuickInfo from "./QuickInfo";
import ArticlesNews from "./ArticlesNews";

const Home = () => {
  return (
    <div className={` margin-sections `}>
      <HeroSection />
      <Swiper />
      <FitnessTraining />
      <ArticlesNews />
      <QuickInfo />
    </div>
  );
};

export default Home;
