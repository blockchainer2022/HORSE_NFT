import { useState } from "react";

const accordianData = [
  {
    question: "What is Horse Game?",
    answer:
      " Horse Game is a new, creative P2E game that brings the world of horse racing to the NFT space with utility. Allowing all holders to stake their NFT’s, to earn $HRSE tokens which will be used as an in-game currency to train and improve the speed, strength and stamina of the horses during races. $HRSE tokens will also be used to bet on your own and other Horse races. After the game is launched, non-holders will be able to place bets on your Horse against others. The holder of the winning Horses shall receive a % (TBC) of all bets placed.",
  },
  {
    question: "When is the Pre-Sale mint?",
    answer:
      " On this Horseing trip be prepared to have your patience tested as your friends seem to have way better luck than you with catching different species of Horse. Your friends continue laughing at your empty cooler and tell you to start using $WORMS as your bait. After dropping your line in the same spot you find yourself in a battle for the big kahuna. Let the battle begin. ",
  },
  {
    question: " When is the Public mint?",
    answer: " 22nd December 2021, 3PM EST",
  },
  {
    question: " How much will it cost to mint?",
    answer: "0.057 ETH + gas for Whitelist and 0.07 ETH + gas for public sale",
  },
  {
    question: " How many can I mint?",
    answer: "There will be 3 mints allocated per address",
  },
  {
    question: "How long will you have to mint?",
    answer:
      "You will have 48 hours for the pre-sale mint. We will probably sell out faster so please ensure you’re early Genesis Horses can be staked in order to earn $HRSE will be an in-game currency allowing you to earn, train and bet on your horses",
  },

  {
    question: "What is the supply?",
    answer: "There will be a total of 7,777 Genesis Horses.",
  },
  {
    question: "When will the game be out?",
    answer:
      " We are looking at 2 weeks post mint, allowing all holders to be able to stake and earn a significant amount of $HRSE before launch and ensure the game runs smoothly.",
  },
];

const FaqSection = () => {
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className="py-20 bg-brown " id="faq">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl mb-10 text-center">Faqs</h2>
        <div className="md:mx-20">
          {accordianData.map((v, i) => (
            <div
              key={i}
              className=" border-2 border-primary-400  p-4 px-8 bg-white text-primary-400 mb-6 rounded-2xl"
            >
              <div
                className="flex  justify-between cursor-pointer py-4"
                onClick={() => toggle(i)}
              >
                <h6
                  className="text-3xl md:text-4xl "
                  style={{ userSelect: "none" }}
                >
                  {v.question}
                </h6>
                <span className="transition ease-out duration-500 rounded-md w-6 h-6 md:w-8 md:h-8 bg-primary-400 text-white text-xs md:text-lg flex justify-center items-center">
                  <i
                    className={`fas transition ease-out duration-500 ${
                      clicked === i ? "fa-minus" : "fa-plus"
                    }  `}
                  ></i>
                </span>
              </div>
              <div
                className={` text-xs transition ease-in-out duration-500 ${
                  clicked === i
                    ? "h-auto max-h py-4"
                    : "overflow-hidden max-h-0 h-0"
                }`}
              >
                <p className=" w-full text-2xl md:text-3xl">{v.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
