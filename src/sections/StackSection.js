import React from "react";
import Horse1 from "../assets/images/HORSE1.png";
import Horse2 from "../assets/images/HORSE2.png";
import Horse3 from "../assets/images/HORSE3.png";
import { WhiteButton } from "../components/button";
const StackSection = () => {
  return (
    <section className="stack-section pt-28 pb-20">
      <div className="container ">
        <div className="grid grid-cols-3 gap-5">
          <div>
            <img src={Horse1} alt="" />
          </div>
          <div>
            <img src={Horse2} alt="" />
          </div>
          <div>
            <img src={Horse3} alt="" />
          </div>
        </div>
        <div className="text-center mt-10">
          <WhiteButton>STAKE YOUR HORSE</WhiteButton>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
