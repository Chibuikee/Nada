import React from "react";
import Unlock from "./nada-logo/Platformicons/Unlock.svg";
import Invest from "./nada-logo/Platformicons/Invest.svg";
import Spend from "./nada-logo/Platformicons/Spend.svg";
import Earn from "./nada-logo/Platformicons/Earn.svg";
export default function PlatformSection() {
  return (
    <div className="Platform-section">
      <div className="Platform-section-container">
        <div className="Platform-intro">
          <p>THE PLATFORM</p>
          <h2>Build your real estate wealth</h2>
        </div>
        <div className="Platform-services-container">
          <div className="Platform-service">
            <img src={Unlock} alt="finance Unlock" />
            <h4>UNLOCK</h4>
            <p>
              Connect your home to track your equity and mortgage rate daily.
            </p>
            <p>Access home equity, without debt and never miss on savings.</p>
          </div>
          <div className="Platform-service">
            <img src={Invest} alt="laptop displaying upward arrow" />
            <h4>INVEST</h4>
            <p>
              Invest directly in the top cities' real estate market, like
              stocks.
            </p>
            <p>Own a piece of a city with as little as $250.</p>
          </div>
          <div className="Platform-service">
            <img src={Spend} alt="Atm card icon" />
            <h4>SPEND</h4>
            <p>
              The first debit card designed to grow your real estate wealth.
            </p>
            <p>Spend home equity anywhere</p>
          </div>
          <div className="Platform-service">
            <img src={Earn} alt="house and dollar icon" />
            <h4>EARN</h4>
            <p>Earn cash back and rewards just for owning real estate.</p>
            <p>Get high yield earnings (coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
