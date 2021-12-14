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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brown p-8">
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
          </div>
          <div className="roadmap p-8">
            <h4 className="font-bold text-4xl mb-10">Horse game RoadMap </h4>
            <p className="text-2xl">ART COLLECTION</p>
            <p className="text-lg my-4">
              - Horse Game consists of a collection of 7,777 Genesis Horses
              where you can stake your Horse to race against other Horses to Win
              $HRSE tokens, which will be used as the currency in Horse Game.
            </p>
            <p className="text-2xl">Pre launch</p>
            <ul className="mt-2">
              {prelaunch.map((v, i) => (
                <li className="text-lg my-4" key={i}>
                  {v}
                </li>
              ))}
            </ul>
            <p className="text-2xl my-4">PRE-SALE: 24 HOUR WINDOW</p>
            <p className="text-2xl my-4">LAunch: sold out</p>
            <p className="text-2xl my-4">phase 1: stacking</p>
            <p className="text-lg my-4">
              - Horse Game consists of a collection of 7,777 Genesis Horses
              where you can stake your Horse to race against other Horses to Win
              $HRSE tokens, which will be used as the currency in Horse Game.
            </p>
            <p className="text-2xl my-4">phase 2: stacking</p>
            <p className="text-lg my-4">
              - Horse Game consists of a collection of 7,777 Genesis Horses
              where you can stake your Horse to race against other Horses to Win
              $HRSE tokens, which will be used as the currency in Horse Game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
