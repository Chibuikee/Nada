import React from "react";
import UpRightarrow from "./nada-logo/Up-right.png";
export default function InvestingSection() {
  return (
    <div className="Investing-section">
      <div className="Investing-section-container">
        <div className="Investing-section-text">
          <p>INVESTING</p>
          <span id="cityfunds">cityfunds</span>
          <p>Invest in cities just like stocks.</p>
          <p>
            Buy and sell pieces of cities, just like stocks--start with just
            $250.
          </p>
          <button id="invest-btn">INVEST NOW</button>
        </div>
        <div className="Investing-section-boxes-container">
          <div className="investing-box-a">
            <p style={{ color: "#FF3A44" }}>austin</p>
            <p>HPI $387,891</p>
            <div className="arrow">
              <img src={UpRightarrow} />
              <p>29.94%</p>
            </div>
          </div>
          <div className="investing-box-b">
            <p style={{ color: "#26397E" }}>tampa</p>
            <p>HPI $387,891</p>
            <div className="arrow">
              <img src={UpRightarrow} />
              <p>29.94%</p>
            </div>
          </div>
          <div className="investing-box-c">
            <p style={{ color: "#0480FC" }}>dallas</p>
            <p>HPI $387,891</p>
            <div className="arrow">
              <img src={UpRightarrow} />
              <p>29.94%</p>
            </div>
          </div>
          <div className="investing-box-d">
            <p style={{ color: "#00833D" }}>nashville</p>
            <p>HPI $387,891</p>
            <div className="arrow">
              <img src={UpRightarrow} />
              <p>29.94%</p>
            </div>
          </div>
          <div className="investing-box-e">
            <p style={{ color: "#C31162" }}>houston</p>
            <p>HPI $387,891</p>
            <div className="arrow">
              <img src={UpRightarrow} />
              <p>29.94%</p>
            </div>
          </div>
          <div className="investing-box-f">
            <p style={{ color: "#C22627" }}>miami</p>
            <p>HPI $387,891</p>
            <div className="arrow">
              <img src={UpRightarrow} />
              <p>29.94%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
