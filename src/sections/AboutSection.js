/* eslint-disable no-unused-vars */
const textList = [
  "Today begins the Great Rescue of 13,809 Sheep and Wolves.",
  "I introduce you to the new Wolf Game, a full-feature blockchain economy to be released in 2022.",
  "Begin your quest toward farm dominance by sacrificing WOOL to gain a Farmer",
  "The most aggressive actors in Wolf Game, Wolves show no mercy. They'll capture Sheep and the most precious resources from farmers, and they're good at it, too. Breed them to expand your personal wolfpack.",
];
const prelaunch = [
  "- Community Development",
  "- Daily Horse Game Collection Sneak Peaks",
  "- Whitelist Giveaways and Games to Win WL",
  "- Collaborations on Twitter and Discord",
  "- Roadmap and Website Revealed",
  "- Marketing activated",
];
const About = () => {
  return (
    <section className="about-section py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8">
          {/* <div className="bg-brown p-8">
            <h4 className="font-bold text-4xl mb-10">About Horse game</h4>
            <ul className="mt-4">
              {textList.map((v, i) => (
                <li className="text-lg mt-4" key={i}>
                  {v}
                </li>
              ))}
            </ul>
            <ul className="mt-4">
              {textList.map((v, i) => (
                <li className="text-lg mt-4" key={i}>
                  {v}
                </li>
              ))}
            </ul>
          </div> */}
          <div className="roadmap p-8 text-center lg:px-20 lg:mx-20">
            <h4 className="font-bold text-6xl mb-10 uppercase">
              Horse game RoadMap{" "}
            </h4>
            <p className="text-4xl uppercase underline">ART COLLECTION</p>
            <p className="text-3xl my-4">
              - Horse Game consists of a collection of 7,777 Genesis Horses
              where you can stake your Horse to race against other Horses to Win
              $HRSE tokens, which will be used as the currency in Horse Game.
            </p>
            <p className="text-4xl uppercase underline">Pre launch</p>
            <ul className="mt-2">
              {prelaunch.map((v, i) => (
                <li className="text-3xl my-4" key={i}>
                  {v}
                </li>
              ))}
            </ul>
            <p className="text-3xl my-4 uppercase underline">
              PRE-SALE: 24 HOUR WINDOW
            </p>
            <p className="text-3xl my-4 uppercase">LAunch: sold out</p>
            <p className="text-4xl my-6 uppercase underline">
              Phase 1: staking
            </p>
            <p className="text-3xl my-4">
              - Horse Game holders are now able to stake their Horses to earn
              $HRSE tokens. The utility for $HRSE tokens will also allow Horse
              holders to train their Horses and build speed, strength and
              stamina in preparation for the Horse Game races.
            </p>
            <p className="text-4xl my-6 uppercase underline">
              Phase 2: staking
            </p>
            <p className="text-3xl my-4">
              - $HRSE tokens will be used as an in-game currency to allow
              holders to bet on their horse against others in races.
            </p>
            <p className="text-3xl my-4">
              - Non-holders will also be able to bet on horses in game to win
              $HRSE. These bets will be placed on NFT holders as non-holders
              cannot take part in races. The winners of the races will get a %
              (TBC) from the bets placed on them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
