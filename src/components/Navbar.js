import React from "react";
import "../App.css";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="header">
      <img src={logo} className="logo-image" alt="header-logo" />
      <h2 className="header-title">Meme generator </h2>
    </div>
  );
}
export default Navbar;
