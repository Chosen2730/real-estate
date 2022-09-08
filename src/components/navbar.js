import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

const navItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Service", url: "/service" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [base, setBase] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "fixed w-full bg-white shadow-xl z-10" : ""
      } p-6 text-gray-800 transition`}
    >
      {/* TOP MENU BAR */}

      <div className='flex justify-between max-w-6xl mx-auto font-bold items-center'>
        <div className='flex justify-between items-center w-full'>
          <Link
            className={`text-xl font-extrabold hover:text-[#F85A47] transition md:hover:scale-105 md:hover:translate-x-9`}
            to='/'
          >
            SmartSpace
          </Link>
          <i
            className={`${
              navOpen ? "opacity-20" : "opacity-full"
            } text-2xl md:hidden`}
            onClick={() => setNavOpen(true)}
          >
            <CgMenuRight />
          </i>
        </div>

        <div className='md:flex gap-10 hidden'>
          {navItems.map(({ title, url }, i) => {
            return (
              <Link
                key={i}
                className={`${
                  i === base
                    ? "text-[#F85A47] border-b-2 border-b-[#F85A47]"
                    : "text-gray-800"
                } text-sm hover:text-red-300 transition`}
                to={url}
                onClick={() => setBase(i)}
              >
                {title}
              </Link>
            );
          })}
        </div>

        {/* SIDE MENU BAR COMPONENT */}

        <div
          className={`${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } transition fixed md:-translate-x-full top-0 z-10 left-0 p-6 bg-white shadow-xl h-screen`}
        >
          <div className='flex space-x-20 items-center w-full'>
            <Link className='text-xl font-extrabold' to='/'>
              SmartSpace
            </Link>
            <i className='text-2xl md:hidden' onClick={() => setNavOpen(false)}>
              <CgClose />
            </i>
          </div>
          {navItems.map(({ title, url }, i) => {
            return (
              <Link
                key={i}
                className={`${
                  i === base
                    ? "text-[#F85A47] border-b-2 border-b-[#F85A47]"
                    : "text-gray-800"
                } block my-10 py-2 text-sm transition`}
                to={url}
                onClick={() => {
                  setBase(i);
                  setNavOpen(false);
                }}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
