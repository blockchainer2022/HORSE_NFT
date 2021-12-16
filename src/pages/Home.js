import React from "react";
import { Layout } from "../components";
import {
  HeroSection,
  StackSection,
  MintSection,
  AboutSection,
  FaqSection,
} from "../sections";
const Home = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  return (
    <div>
      <Layout account={account} mint={mint} loadWeb3={loadWeb3}>
        <HeroSection />
        <StackSection />
        <MintSection
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
          loadWeb3={loadWeb3}
          maxSupply={maxSupply}
        />
        <AboutSection />
        <FaqSection />
      </Layout>
    </div>
  );
};

export default Home;
