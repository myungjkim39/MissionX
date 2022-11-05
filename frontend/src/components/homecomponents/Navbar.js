import React from "react";
import MyButton from './MyButton';
import "./Navbar.css"


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
                
                    <MyButton buttonName="Home" />
                
                    <MyButton buttonName="Features" />
                
                    <MyButton buttonName="Teahers" />
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
                    <button className="navItem navLogin">Register | Login</button>
                    </div>
            
                </div>
            </div>
    )
}
export default Navbar;