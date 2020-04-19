import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        className="headerImage"
        src="/images/northland-dev-landing-page-min.jpg"
        alt="Mountains"
      ></img>
      <a href="/">
        <h1 className="title">
          <span className="northland">Northland</span>
          <br></br>
          <span className="development">Development</span>
        </h1>
      </a>
      <div className="arrowContainer">
        <div className="downArrow">
          <i class="fas fa-angle-double-down down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
