import React from "react";
import logo from "./nada-logo/Vector.svg";
import logo1 from "./nada-logo/Vector-1.svg";
import logo2 from "./nada-logo/Vector-2.svg";
import logo3 from "./nada-logo/Vector-3.svg";
import logo4 from "./nada-logo/Vector-4.svg";
export default function Navbar() {
  return (
    <nav className="navigation">
      <div className="App-logo">
        <a href="#">
          <img src={logo} alt="logo" />
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
        </a>
      </div>
      <div className="Nav-keys">
        <div className="navigation-menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/Investors">Investors</a>
            </li>
            <li>
              <a href="/Cityfunds">Cityfunds</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </div>
        <div className="navBtns">
          <button id="signin-btn">Sign in</button>
          <button id="Getstarted-btn">Get started</button>
        </div>
      </div>
    </nav>
  );
}
