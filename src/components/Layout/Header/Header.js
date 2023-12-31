import React, { useState } from "react";
import fbLogo from "../../../assets/bxl-facebook.svg";
import githubLogo from "../../../assets/bxl-github.svg";
import Container from "../../UI/Container/Container";
import classes from "./Header.module.css";
const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [changeNavColor, setChangeNavColor] = useState(false);
  let hamBtnClass = `${classes.hamburger} block self-end z-30 focus:outline-none lg:hidden`;
  let mobileNavOpen = navIsOpen && classes.mobileNavOpen;

  const openNavHandler = () => {
    setNavIsOpen((prevState) => !prevState);
  };

  if (navIsOpen) {
    hamBtnClass = `${classes.hamburger} ${classes.open} block z-30 self-end focus:outline-none lg:hidden`;
  }
  // Change navbar background color
  const changeNavBg = () => {
    if (window.scrollY >= 50) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  };
  window.addEventListener("scroll", changeNavBg);
  return (
    <nav>
      <Container
        className={` fixed min-w-full z-50 flex text-white justify-around md:flex-row`}
      >
        <div
          className={`${
            changeNavColor ? classes.active : classes.inactive
          } min-w-full absolute drop-shadow-md top-0 left-0 h-full`}
        ></div>
        <div className="flex flex-row z-50 space-x-2">
          <span className="font-bold text-5xl flex flex-row">Kyu</span>
          <span className="font-bold text-2xl self-end">profile</span>
        </div>
        {/* Mobile nav */}
        <div
          className={`${mobileNavOpen} hidden absolute z-10 flex-col justify-center items-center space-y-12 min-w-full h-screen bg-black -mt-4`}
        >
          <div className="flex flex-col text-center space-y-4">
            <a
              href="#projects"
              className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
              onClick={openNavHandler}
            >
              Projects
            </a>
            <a
              href="#technologies"
              className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
              onClick={openNavHandler}
            >
              Technologies
            </a>
            <a
              href="#about"
              className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
              onClick={openNavHandler}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
              onClick={openNavHandler}
            >
              Contact
            </a>
          </div>
          <div className="flex-row z-10 space-x-6 flex">
            <a href="https://t.me/kyudevfe">
              <img
                src={fbLogo}
                className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
                alt=""
              />
            </a>
            <a href="https://github.com/kyu0z">
              <img
                src={githubLogo}
                className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* Desktop nav */}
        <div
          data-aos="fade-down"
          className="hidden flex-row space-x-8 z-10 self-end font-medium text-gray-400 my-auto lg:flex"
        >
          <a
            href="#projects"
            className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#technologies"
            className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
          >
            Technologies
          </a>
          <a
            href="#about"
            className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
          >
            Contact
          </a>
        </div>
        <div
          data-aos="fade-down"
          className="hidden flex-row space-x-6 z-10 self-end my-auto lg:flex"
        >
          <a href="https://t.me/kyudevfe" target="_blank" rel="noreferrer">
            <img
              src={fbLogo}
              className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
              alt=""
            />
          </a>
          <a href="https://github.com/kyu0z" target="_blank" rel="noreferrer">
            <img
              src={githubLogo}
              className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
              alt=""
            />
          </a>
        </div>
        {/* <!-- Hamburger Icon --> */}
        <button id="menu-btn" className={hamBtnClass} onClick={openNavHandler}>
          <span className={classes["hamburger-top"]}></span>
          <span className={classes["hamburger-middle"]}></span>
          <span className={classes["hamburger-bottom"]}></span>
        </button>
      </Container>
    </nav>
  );
};

export default Header;
