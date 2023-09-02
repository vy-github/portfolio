import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menuHome, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 850) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LogoComponent = (
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <img src={menuHome} alt="logo" className="w-9 h-9 object-contain" />
      {/* <p className='text-txtcolor text-[24px] font-bold cursor-pointer flex '>
            Vaibhav &nbsp;
            <span className='text-[18px] mt-1 sm:block hidden'> | JavaScript Mastery</span>
          </p> */}
    </Link>
  );

  const BtnComponent = ({ displayStatus }) => {
    return (
      <a
        href={`#contact`}
        className={`animated-btn ${displayStatus} justify-center items-center m-0 h-10 w-28 text-[#eee] bg-[#5e1483] font-black text-[16px] font-semibold rounded
      hover:bg-[#915EFF] hover:border hover:border-[#915EFF] hover:tracking-wider`}
        onClick={() => {
          setActive("contact");
          if (toggle) setToggle(false);
        }}
      >
        Hire me
      </a>
    );
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center transition-[padding] ease-in-out delay-150 duration-0 ${
        scrolled ? "py-5" : "py-6"
      } fixed top-0 z-20 ${scrolled ? "bg-primary shadow-class" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {LogoComponent}
        <ul className="list-none hidden sm:flex flex-row gap-2">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className={`group px-4 mt-1 py-0 transition-all ease-in-out duration-300 ${
                active === nav.title ? "text-txtcolormenu" : "text-[#666]"
              } text-[18px] font-medium cursor-pointer 
              hover:text-txtcolormenu`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
              <div
                className={`transition-all ease-in-out delay-0 duration-300 ${
                  active === nav.title ? "w-full" : "w-0"
                } h-[1px] mt-1 bg-txtcolormenu group-hover:w-full`}
              ></div>
            </a>
          ))}
        </ul>

        <BtnComponent displayStatus={"sm:flex hidden"} />

        {/* mobile view */}
        <div
          className="sm:hidden flex justify-end items-center gap-2 py-2 px-4 bg-[#ccc] rounded-3xl cursor-pointer"
          onClick={() => setToggle(true)}
        >
          {/* <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          /> */}

          <p className="text-[#777] font-medium">MENU</p>
          <div className="flex flex-col gap-[3px]">
            <div className="w-5 h-[2px] bg-[#777] rounded"></div>
            <div className="w-5 h-[2px] bg-[#777] rounded"></div>
            <div className="w-5 h-[2px] bg-[#777] rounded"></div>
          </div>
        </div>
      </div>

      {/* backdop element */}
      <div
        className={`absolute ${
          toggle ? "flex" : "hidden"
        } top-0 left-0 h-screen w-full z-10`}
        onClick={() => setToggle(false)}
      ></div>

      {/* mobile slider */}
      <div
        className={`absolute ${
          toggle ? "right-0" : "right-[-300px]"
        } top-0 h-screen w-full max-w-[280px] bg-[#d4d4cc] transition-all ease-in-out duration-300 z-10 shadow-class`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-8 right-6 flex flex-col gap-[3px] w-6 h-7 cursor-pointer"
          onClick={() => setToggle(false)}
        >
          <div className="absolute top-3 left-0 w-6 h-[2px] bg-[#777] rounded rotate-45"></div>
          <div className="absolute top-3 left-0 w-6 h-[2px] bg-[#777] rounded rotate-[135deg]"></div>
        </div>

        <ul className="relative top-24 w-full flex justify-center items-center list-none items-start flex-col gap-4">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className={`group px-4 mt-1 py-0 transition-all ease-in-out duration-300 ${
                active === nav.title ? "text-txtcolormenu" : "text-[#666]"
              } text-[18px] font-medium cursor-pointer 
              hover:text-txtcolormenu`}
              onClick={() => {
                setActive(nav.title);
                setToggle(false);
              }}
            >
              {nav.title}
              <div
                className={`transition-all ease-in-out delay-0 duration-300 ${
                  active === nav.title ? "w-full" : "w-0"
                } h-[1px] mt-1 bg-txtcolormenu group-hover:w-full`}
              ></div>
            </a>
          ))}
          <div className="relative flex mt-4">
            {" "}
            <BtnComponent displayStatus={"flex"} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
