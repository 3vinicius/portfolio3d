import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex border-b items-center py-5 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto border-">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Vinícius &nbsp; <span className="sm:block hidden"> Amorim</span>
          </p>
        </Link>
        <ul className="liste-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex justify-end  flex-1 '>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toggle)}
          />
          <div  className={`${!toggle ? 'hidden' : 'flex'} p-6 
          black-gradient absolute top-20 right-0 mx-4 my-2 
          min-w-[140px] z-10 rounded-xl`}>
            <ul className="liste-none flex sm:hidden flex-col justify-end gap-4 items-start">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? "text-white"
                  : "text-secondary"
              } text-[16px] font-poppins font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title)
                setToggle(!toggle)
              
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
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
