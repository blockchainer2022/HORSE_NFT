import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/Logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Button from "../button";
import "./style.css";
const Index = () => {
  const [show, setShow] = useState(false);

  const menuHandler = () => {
    setShow((prev) => !prev);
  };
  // const loginHandler = () => {
  //   if (!account) {
  //     setShowLogin((prev) => !prev);
  //   }
  //   if (account) {
  //     setShowLogout((prev) => !prev);
  //   }
  // };

  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="container py-8 md:p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className="hidden md:flex items-center ml-20">
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/game">Game</CustomLink>
            </li>
          </ul>
        </div>
        <div className=" gap-4 grid-flow-col hidden md:grid">
          <div className="hidden lg:block">
            <Link to="/game">
              <Button>Mint now</Button>
            </Link>
          </div>
          <Button>Connect Wallet</Button>
        </div>
        <button className="text-lg md:hidden" onClick={menuHandler}>
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div className={`mobile-menu ${show ? "active" : ""}`} ref={menuRef}>
        <div className=" text-right  px-4 py-4 text-2xl">
          <i className="fas fa-times" onClick={menuHandler}></i>
        </div>
        <ul className=" grid grid-flow-row gap-3  text-white">
          <li>
            <CustomLink to="/" className="p-3 pb-1  block text-3xl uppercase">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/game"
              className="p-3 pb-1 block text-3xl uppercase"
            >
              Game
            </CustomLink>
          </li>
          <Link to="/game">
            <Button>Mint now</Button>
          </Link>
          <Button>Connect Wallet</Button>
        </ul>
      </div>
    </header>
  );
};

export default Index;

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`p-3 pb-1 uppercase  block ${
          match ? "text-white" : "text-brown"
        } text-3xl`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
