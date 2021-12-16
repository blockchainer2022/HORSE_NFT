import React from "react";
import Header from "../header";
import Footer from "../footer";

const Index = ({ children, account, mint, loadWeb3 }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header account={account} mint={mint} loadWeb3={loadWeb3} />
      <div className="flex-1 layout ">{children}</div>
      <Footer />
    </div>
  );
};

export default Index;
