import { useState } from "react";

const accordianData = [
  {
    question: "Q. What is Fish Game?",
    answer:
      "A. Fish Game is a new, creative P2E game that brings the world of fishing to the NFT space with utility. As fishers our team understands the importance of patience, and perseverance. We aren’t here to cheat the process, or the time that is actually required to set this project up and look forward to everyone joining us on this journey. On this fishing trip be prepared to have your patience tested as your friends seem to have way better luck than you with catching different species of fish. Your friends continue laughing at your empty cooler and tell you to start using $WORMS as your bait. After dropping your line in the same spot you find yourself in a battle for the big kahuna. Let the battle begin. ",
  },
  {
    question: "Q. When is the initial mint?",
    answer:
      " On this fishing trip be prepared to have your patience tested as your friends seem to have way better luck than you with catching different species of fish. Your friends continue laughing at your empty cooler and tell you to start using $WORMS as your bait. After dropping your line in the same spot you find yourself in a battle for the big kahuna. Let the battle begin. ",
  },
  {
    question: "Q. When is the initial mint?",
    answer:
      " On this fishing trip be prepared to have your patience tested as your friends seem to have way better luck than you with catching different species of fish. Your friends continue laughing at your empty cooler and tell you to start using $WORMS as your bait. After dropping your line in the same spot you find yourself in a battle for the big kahuna. Let the battle begin.",
  },
  {
    question: "Q. When is the initial mint?",
    answer:
      " On this fishing trip be prepared to have your patience tested as your friends seem to have way better luck than you with catching different species of fish. Your friends continue laughing at your empty cooler and tell you to start using $WORMS as your bait. After dropping your line in the same spot you find yourself in a battle for the big kahuna. Let the battle begin.",
  },
  {
    question: "Q. When is the initial mint?",
    answer:
      " On this fishing trip be prepared to have your patience tested as your friends seem to have way better luck than you with catching different species of fish. Your friends continue laughing at your empty cooler and tell you to start using $WORMS as your bait. After dropping your line in the same spot you find yourself in a battle for the big kahuna. Let the battle begin.",
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
                  className="text-lg md:text-2xl "
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
                <p className=" w-full text-sm md:text-lg">{v.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
