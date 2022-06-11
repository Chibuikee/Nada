import React, { useState, useEffect } from "react";
import logo from "./nada-logo/logo-white/Vector.svg";
import logo1 from "./nada-logo/logo-white/Vector-1.svg";
import logo2 from "./nada-logo/logo-white/Vector-2.svg";
import logo3 from "./nada-logo/logo-white/Vector-3.svg";
import logo4 from "./nada-logo/logo-white/Vector-4.svg";
import facebookicon from "./nada-logo/socialmedia-icons/facebook-white-icon.svg";
import twittericon from "./nada-logo/socialmedia-icons/twitter-black-icon.8ec61dd9 1.svg";
import instagramicon from "./nada-logo/socialmedia-icons/istagram-white-icon.svg";
import linkedinicon from "./nada-logo/socialmedia-icons/linkedin-white-icon.svg";
import discordicon from "./nada-logo/socialmedia-icons/discord-icon.svg";
export default function Footer() {
  const smedialogos = [
    { logosvg: facebookicon, src: "facebookicon" },
    { logosvg: twittericon, src: "twittericon" },
    { logosvg: instagramicon, src: "instagramicon" },
    { logosvg: linkedinicon, src: "linkedinicon" },
    { logosvg: discordicon, src: "discordicon" },
  ];
  const smedialogosImgTags = smedialogos.map((logo) => (
    <a>
      <img src={logo.logosvg} alt={logo.src} className={logo.src} />
    </a>
  ));
  return (
    <footer>
      <div>
        <div>
          <div className="Nada-info-section">
            <div className="App-logo-socialmedia-svg">
              <a href="#">
                <img className="App-logo-svg" src={logo} alt="logo" />
                <img src={logo1} alt="logo" />
                <img src={logo2} alt="logo" />
                <img src={logo3} alt="logo" />
                <img src={logo4} alt="logo" />
              </a>
              <p>Unlocking real estate wealth for everyone.</p>
              <div className="smedialogos">{smedialogosImgTags}</div>
            </div>
            <div className="info-container">
              <div className="info product">
                <h3>Products</h3>
                <p>Cityfunds | Investing</p>
                <p>Nada Card | Banking</p>
                <p>Finance | Homeshares</p>
                <p>Finance | Mortgage</p>
                <p>Real Estate | Listing</p>
              </div>
              <div className="info Cityfunds">
                <h3>Cityfunds</h3>
                <p>Austin</p>
                <p>Dallas</p>
                <p>Miami</p>
                <p>Phoenix</p>
                <p>Nashville</p>
                <p>View all Cityfunds</p>
              </div>
              <div className="info Company">
                <h3>Company</h3>
                <p>About</p>
                <p>FAQs</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Contact</p>
                <p>Real Estate Partners</p>
              </div>
              <div className="info Transparency">
                <h3>Transparency</h3>
                <p>Terms</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Consumer Complaints</p>
                <p>NADA SEC Filings</p>
                <p>Cityfunds SEC Filings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="copyrightstatement">
        © 2022 Nada Holdings, Inc. and or its affiliates. All rights reserved.
        Nada is a registered servicemark of Nada Holdings, Inc.
      </p>
    </footer>
  );
}
