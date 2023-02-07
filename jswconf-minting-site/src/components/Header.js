import React from "react";
import jswLogo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  const categoryStyles = ["EXPLORE", "COLLECTION", "RESOURCES", "ARTIST"];

  return (
    <div className="header">
      <div className="logo">
        <img src={jswLogo} alt="logo" />
      </div>
      <div className="search-bar">
        <div>
          <input type="text" placeholder="Search all the NFTs" />
        </div>
        <div className="search-button">
          <p>Search</p>
        </div>
      </div>
      <div className="menu">
        {categoryStyles.map((category, index) => {
          return (
            <div className="menu-item" key={index}>
              <h2 key={index}>{category}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
