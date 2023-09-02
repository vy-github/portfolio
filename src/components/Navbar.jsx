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
      if (scrollTop > 900) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center transition-[padding] ease-in-out delay-150 duration-0 ${
        scrolled ? "py-5" : "py-8"
      } fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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

        <ul className="list-none hidden sm:flex flex-row gap-2">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className={`group px-4 mt-1 py-0 transition-all ease-in-out duration-300 ${
                active === nav.title ? "text-[#333]" : "text-[#666]"
              } text-[18px] font-medium cursor-pointer 
              hover:text-[#333]`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
              <div
                className={`transition-all ease-in-out delay-0 duration-300 ${
                  active === nav.title ? "w-full" : "w-0"
                } h-[1px] mt-1 bg-[#333] group-hover:w-full`}
              ></div>
            </a>
          ))}
        </ul>

        <a
          href={`#contact`}
          className="animated-btn sm:flex justify-center items-center hidden m-0 h-10 w-28 text-[#eee] bg-[#5e1483] font-black text-[16px] font-semibold rounded
          hover:bg-[#915EFF] hover:border hover:border-[#915EFF] hover:tracking-wider"
          onClick={() => setActive("contact")}
        >
          Hire me
        </a>

        {/* mobile view */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-txtcolor" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
