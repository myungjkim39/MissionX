import React from "react";
import MyButton from './MyButton';


function Navbar() {
    return (
        <div className="Navbar">
            {/* add logo */}
            <ul class= "navList">
                <li class="navItem">
                    <MyButton buttonName="Home" />
                </li>
                <li class="navItem">
                    <MyButton buttonName="Features" />
                </li>
                <li class="navItem">
                    <MyButton buttonName="Teahers" />
                </li>
                <li class="navItem">
                    <MyButton buttonName="Login | Signup" />
                </li>
            </ul>
            {/* add lang */}
        </div>
    )
}
export default Navbar;