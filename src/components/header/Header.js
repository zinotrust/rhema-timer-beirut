import React from "react";
import logoImg from "../../assets/mena.png";
const Header = () => {
  return (
    <div className="--pad header">
      <div className="--flex-between">
        <span>
          <img src={logoImg} alt="logo" style={{ height: "60px" }} />
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Header;
