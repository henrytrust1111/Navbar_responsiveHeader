import React, { useState } from "react";
import logo from "/icons/logo.svg";
import "./NavbarStyles.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = ()=> {
    setClicked(!clicked)
  }
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="">
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              
              <a className="active" href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>


        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
