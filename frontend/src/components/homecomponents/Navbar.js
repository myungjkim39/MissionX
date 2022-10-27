import React from "react";
import MyButton from './MyButton';
//git import "./Navbar.css"


function Navbar() {
    return (
        <div className="navbar">
            <div className="navlogo"></div>
            {/* add logo */}
            <div className= "navList">
                
                    <MyButton buttonName="Home" />
                
                    <MyButton buttonName="Features" />
                
                    <MyButton buttonName="Teahers" />
            </div>

            <div className="navrightContainer">
                <div className="languageContainer">Lang

                </div>

                <div className="loginSignupContainer">
  
                    <button className="navItem navLogin">Register</button>
                        <div className="NavloginSignupDivider"></div>
                    <button className="navItem navSignup">Login</button>
            
                </div>
            </div>
                
           
        
        </div>
        /* flex direction */
    )
}
export default Navbar;