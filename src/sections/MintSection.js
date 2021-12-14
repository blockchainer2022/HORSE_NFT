import Image1 from "../assets/images/mint1.png";
import Image2 from "../assets/images/mint2.png";
import Eth from "../assets/images/ETH.png";
import Button from "../components/button";
const MintSection = () => {
  return (
    <section className="py-20 mint-section">
      <div className="container">
        <h2 className="text-center font-bold text-5xl mb-1">Mint your horse</h2>
        <p className="text-center text-2xl my-4">
          0.05 ETH for whitelist and 0.075 ETH for public
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
          <div className="lg:col-span-5 font-serif   pt-10">
            <div className="flex justify-center items-center">
              <img src={Eth} className="w-auto" alt="" />
              <p className="text-primary-400 text-2xl ml-2">
                <b>0.075/</b>mint
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button className="w-12 h-12 bg-primary-400 rounded-full font-bold text-2xl">
                -
              </button>
              <div className="h-12 w-48 mx-2  border-4 border-primary-400 rounded-full p-1">
                <input
                  type="text"
                  className="focus:outline-none w-full h-full text-primary-400 font-bold text-center text-xl border-0 bg-transparent"
                  defaultValue={2}
                />
              </div>
              <button className="w-12 h-12 bg-primary-400 rounded-full font-bold text-2xl">
                +
              </button>
            </div>
            <div className="h-1 bg-primary-400  rounded-xl mt-8 max-w-sm w-full mx-auto lg:mx-20"></div>
            <div className="flex justify-center items-center my-6">
              <img src={Eth} className="w-auto" alt="" />
              <p className="text-primary-400 text-2xl ml-2">
                <b>0.1500</b> Total
              </p>
            </div>
            <div className="font-sans text-center">
              <Button
                style={{
                  fontSize: "20px",
                  paddingRight: "40px",
                  paddingLeft: "40px",
                }}
              >
                Mint Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintSection;
