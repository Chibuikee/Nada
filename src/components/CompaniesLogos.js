import React from "react";
import florida from "./nada-logo/companiesLogo/florida.png";
import dallas from "./nada-logo/companiesLogo/dallas.png";
import nasdaq from "./nada-logo/companiesLogo/nasdaq.png";
import forbes from "./nada-logo/companiesLogo/forbes.png";
import mo from "./nada-logo/companiesLogo/mo.png";
export default function CompaniesLogos() {
  return (
    <div className="CompaniesLogos">
      <div className="CompaniesLogos-container">
        <img src={dallas} alt=""></img>
        <img src={nasdaq} alt=""></img>
        <img src={florida} alt=""></img>
        <img src={forbes} alt=""></img>
        <img src={mo} alt=""></img>
      </div>
    </div>
  );
}
