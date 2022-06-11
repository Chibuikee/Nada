import React from "react";
import Heroimg from "./nada-logo/Nada-HeroPic.svg";
export default function Herosection() {
  return (
    <section className="Hero-section">
      <div className="Hero-section-texts">
        <p className="p0">UNLOCK REAL ESTATE WEALTH</p>
        <h1>Finance, invest, and bank your real estate.</h1>
        <h3>HOMEOWNER</h3>
        <p className="Hero-section-texts-p1">
          Unlock savings and access home equity to spend on the Nada debit card
        </p>
        <h3>INVESTOR</h3>
        <p>
          Buy and sell pieces of cities, just like stocks-start with just $250.
        </p>
      </div>
      <a href="#" className="Hero-section-img-link">
        <img src={Heroimg} className="Hero-section-img" />
      </a>
    </section>
  );
}
