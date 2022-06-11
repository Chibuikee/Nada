import React from "react";
import ComingSoonimg from "./nada-logo/Mid2SectionImg.png";
export default function ComingSoonSection() {
  return (
    <div className="ComingSoon-section">
      <div className="ComingSoon-section-container">
        <img src={ComingSoonimg} className="ComingSoon-img" />
        <div className="ComingSoon-info">
          <div className="ComingSoon-info-intro">
            <p>SPEND | COMING SOON</p>
            <h2>
              Introducing the <span>Nada debit card</span>
            </h2>
          </div>
          <div className="ComingSoon-info-body">
            <p>
              The first and only debit card designed to reward you for owning
              real estate.
            </p>
            <h3>Fund your Nada card with your home equity</h3>
            <p>Access your equity-no debt, no monthly payment.</p>
            <h3>Spend real estate anywhere</h3>
            <p>Digital and physical debit card to use for everyday purchases</p>
            <h3>Get cash back when you invest in real estatE</h3>
            <p>Cashback rewards for homeowners, investors, everyone</p>
            <h3>Earn with Nada</h3>
            <p>Earn interest with bank savings</p>
            <button className="ComingSoon-info-btn">SIGN UP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
