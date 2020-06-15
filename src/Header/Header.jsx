import React from "react";

import logoHeader from "../assets/Oikya_Front_Logo.png";

import "./style.css";


const Header = (props) => {
  return (
    <div className="Header">
      <div className="imageContainer">
        <img src={logoHeader} alt={logoHeader} />
      </div>
    </div>
  );
};
export default Header;
