import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navlogo">
            <img
                    src="src-assets/NavBar/LevelUpWorks-white.png"
                    alt="animation"
                    />
            </div>
            <div className= "navList">
                
                    <button>Home</button>
                
                    <button>Features</button>
                
                    <button>Teahers</button>
            </div>

            <div className="navrightContainer">
                <div className="languageContainer">Lang
                <img className="flags"
                    src="src-assets/NavBar/NZFlag.png"
                    alt="animation"
                    />
                    <img className="flags"
                    src="src-assets/NavBar/MaoriFlag.png"
                    alt="animation"
                    />
                </div>

                <div className="loginSignupContainer">
                <img
                    className="navAvatar"
                    src="src-assets/NavBar/Avatar-white.png"
                    alt="animation"
                    />
                    <Link to="/signup"><button className="navItem navLogin">Register | Login</button></Link>
                    </div>
            
                </div>
            </div>
    )
}
export default Navbar;