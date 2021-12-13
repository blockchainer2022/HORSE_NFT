import { useState } from "react";

const accordianData = [
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Lorem ipsum dolor sit amet lorem ipsum?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
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
    <section className="py-16 bg-primary text-dark" id="faq">
      <div className="container">
        <h2 className="font-serif  text-3xl lg:text-4xl mb-10">
          Frequently asked questions
        </h2>
        <div className="">
          {accordianData.map((v, i) => (
            <div
              key={i}
              className=" border-b-2 border-dark border-sloid py-4  transition ease-out duration-500 "
            >
              <div
                className="flex  justify-between cursor-pointer py-4"
                onClick={() => toggle(i)}
              >
                <h6 className="md:text-2xl " style={{ userSelect: "none" }}>
                  {v.question}
                </h6>
                <span className="transition ease-out duration-500">
                  <i
                    className={`fas transition ease-out duration-500 ${
                      clicked === i ? "fa-minus" : "fa-plus"
                    } md:text-2xl `}
                  ></i>
                </span>
              </div>
              <div
                className={` text-xs transition ease-in-out duration-500 ${
                  clicked === i
                    ? "h-auto max-h-72 py-4"
                    : "overflow-hidden max-h-0 h-0"
                }`}
              >
                <p className="max-w-4xl w-full">{v.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
