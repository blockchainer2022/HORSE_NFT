import "./style.css";
import { WhiteButton } from "../components/button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section flex justify-center  items-end py-14">
      <div className="container ">
        <h1 className="font-bold text-3xl  md:text-6xl text-center max-w-3xl mx-auto uppercase">
          7,777 UNIQUE HORSES <br />
          Mint your's, start Racing
        </h1>
        <div className="text-center mt-8">
          <a href="#mint">
            <WhiteButton>Mint Now</WhiteButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
