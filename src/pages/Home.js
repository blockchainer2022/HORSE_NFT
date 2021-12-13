import React from "react";
import { Layout } from "../components";
import {
  HeroSection,
  StackSection,
  MintSection,
  AboutSection,
  FaqSection,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <StackSection />
        <MintSection />
        <AboutSection />
        <FaqSection />
      </Layout>
    </div>
  );
};

export default Home;
