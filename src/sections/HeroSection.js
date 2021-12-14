import "./style.css";
import { WhiteButton } from "../components/button";
const HeroSection = () => {
  return (
    <section className="hero-section flex justify-center  items-end py-14">
      <div className="container ">
        <h1 className="font-bold text-3xl  md:text-6xl text-center max-w-3xl mx-auto">
          7,777 UNIQUE HORSES Mint your's, start Racing
        </h1>
        <div className="text-center mt-8">
          <WhiteButton>Mint Now</WhiteButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
