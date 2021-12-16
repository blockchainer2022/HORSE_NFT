import { useState } from "react";
import Image1 from "../assets/images/mint1.png";
import Image2 from "../assets/images/mint2.png";
import Eth from "../assets/images/ETH.png";
import Button from "../components/button";
// import { Link } from "react-router-dom";
const MintSection = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  const [value, setValue] = useState(1);
  const handleChange = (e, newValue) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "") {
      setValue(0);
    } else {
      if (reg.test(Number(e.target.value))) {
        if (Number(e.target.value) <= 20) {
          setValue(e.target.value);
        }
      }
    }
  };
  const increse = () => {
    if (value < 20) {
      setValue((prev) => Number(prev) + 1);
    }
  };
  const decrese = () => {
    if (value > 1) {
      setValue((prev) => Number(prev) - 1);
    }
  };

  const mintHandler = () => {
    if (account) {
      mint(value);
    } else {
      loadWeb3();
    }
  };
  return (
    <section className="py-20 mint-section" id="mint">
      <div className="container">
        <h2 className="text-center font-bold text-5xl mb-1">MINT YOUR HORSE</h2>
        <p className="text-center text-2xl my-4">
          0.057 ETH for Whitelist and 0.07 ETH for Public Sale
        </p>

        <div className="mt-10 bg-white p-8 md:p-16 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-10">
            <div>
              <img src={Image1} alt="" />
            </div>
            <div>
              <img src={Image2} alt="" />
            </div>
          </div>
          <div className="lg:col-span-5  pt-10">
            <div className="flex justify-center items-center">
              <img src={Eth} className="w-auto" alt="" />
              <p className="text-primary-400 text-3xl ml-2">
                <b>{displayPrice}/</b>
                <span className="">Mint</span>
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                className="w-12 h-12 bg-primary-400 rounded-full font-bold text-3xl"
                onClick={decrese}
              >
                -
              </button>
              <div className="h-12 w-48 mx-2  border-4 border-primary-400 rounded-full p-1">
                <input
                  type="text"
                  className="focus:outline-none w-full h-full text-primary-400 font-bold text-center text-3xl border-0 bg-transparent"
                  value={value}
                  onChange={handleChange}
                />
              </div>
              <button
                className="w-12 h-12 bg-primary-400 rounded-full font-bold text-3xl"
                onClick={increse}
              >
                +
              </button>
            </div>
            <div className="h-1 bg-primary-400  rounded-xl mt-8 max-w-sm w-full mx-auto lg:mx-20"></div>
            <div className="flex justify-center items-center my-6">
              <img src={Eth} className="w-auto" alt="" />
              <p className="text-primary-400 text-3xl ml-2">
                <b>{(displayPrice * value).toFixed(4)}</b> Total
              </p>
            </div>
            <div className="font-sans text-center">
              <>
                <Button
                  onClick={mintHandler}
                  style={{
                    paddingRight: "50px",
                    paddingLeft: "50px",
                  }}
                >
                  {account ? "Mint Now" : "Connect Wallet"}
                </Button>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintSection;
