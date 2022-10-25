import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      {/* <img
        className="homeimage"
        src="src-assets/Home/hero.png"
        alt="animation"
      /> */}
      <div className="homeHeading">
      <h1>Prepare young minds for a better future.</h1>
      <br></br>
      <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
      <br></br>
        <div className="homeheader">
            <button className="homeLearnMore">LEARN MORE</button>

            <div className="homeSignup">
            <button className="signup">SIGN UP</button>
            <p>*Basic subscription includes first 15 projects free of</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Header;


