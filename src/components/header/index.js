import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import Button from "../button";
const Index = () => {
  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="container p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className="flex items-center ml-20">
            <li>
              <Link to="/" className="p-3 pb-1  inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="p-3 pb-1  inline-block text-primary-400">
                Game
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid gap-4 grid-flow-col">
          <Button>Mint now</Button>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </header>
  );
};

export default Index;
