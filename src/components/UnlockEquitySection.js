import React from "react";
import UnlockEquityImg from "./nada-logo/Mid1SectionImg.png";
export default function UnlockEquitySection() {
  return (
    <div className="UnlockEquity-section">
      <div className="UnlockEquity-section-container">
        <img src={UnlockEquityImg} className="UnlockEquity-img" />
        <div className="UnlockEquity-info">
          <div className="UnlockEquity-info-intro">
            <p>UNLOCK</p>
            <h2>Unlock Equity and Savings</h2>
          </div>
          <div className="UnlockEquity-info-body">
            <p>
              Track your home equity and mortgage debt daily. Access your equity
              and know when to save on your mortgage.
            </p>
            <button className="UnlockEquity-btn">SIGN UP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
