import React from "react";
import ratings from "./nada-logo/companiesLogo/ratings.png";
export default function Ratings() {
  return (
    <div className="Ratings">
      <div className="Ratings-container">
        <img src={ratings} alt="users ratings from different platforms"></img>
      </div>
    </div>
  );
}
