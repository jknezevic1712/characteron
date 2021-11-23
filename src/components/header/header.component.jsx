import React from "react";

import "./header.styles.scss";
import Logo from "../../header-logo.png";

const Header = () => (
  <div className="header-container">
    <div className="header-logo">
      <img src={Logo} alt="Characteron Header Logo" />
    </div>
    <div className="header-title">
      <span>Characteron</span>
    </div>
  </div>
);

export default Header;
