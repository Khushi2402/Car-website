import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    console.log("Scroll event triggered", window.scrollY); // Check scroll position
    setColor(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  console.log("Color state:", color);

  return (
    <div
      className={color ? "navbar navbar-bg" : "navbar"}
      style={{ backgroundColor: color ? "rgb(87, 87, 87)" : "transparent" }}
    >
      <div className="flex fixed w-full pt-10 px-40 align-middle items-center justify-between text-white z-50">
        <div className="flex gap-2 align-middle items-center font-medium tracking-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="22"
            viewBox="0 0 32 32"
            id="hamburger"
          >
            <g fill="#ffffff">
              <path d="M1 8h30a1 1 0 000-2H1a1 1 0 000 2zM31 15H1a1 1 0 000 2h30a1 1 0 000-2zM31 24H1a1 1 0 000 2h30a1 1 0 000-2z"></path>
            </g>
          </svg>
          <h6>MENU</h6>
        </div>
        <div>
          <img src={logo} className="h-20" />
        </div>
        <div className="flex gap-1 align-middle items-center font-medium tracking-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 101"
            id="Search"
            className="h-8"
          >
            <path
              d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"
              fill="#ffffff"
            ></path>
          </svg>
          <h6 className="">FIND A DEALER</h6>
        </div>
      </div>
      <hr className="absolute top-40 left-1/2 transform -translate-x-1/2 border-t border-white w-10/12" />
    </div>
  );
};

export default Navbar;