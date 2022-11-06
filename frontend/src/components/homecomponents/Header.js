import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="Header">
      {/* <img
        className="homeimage"
        src="src-assets/Home/hero.png"
        alt="animation"
      /> */}
      <div className="homeHeading">
      <h1>Prepare young minds for a better{" "}
      <span style={{ color: "#42C0F6" }}>Future</span>
      </h1>
      <br></br>
      <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
      <br></br>
        <div className="homeheader">
            <button1 className="homeLearnMore">LEARN MORE</button1>

            <div className="homeSignup">
            <Link to="/signup"><button className="signup">SIGN UP</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Header;


