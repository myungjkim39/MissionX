import React from "react";
import "./Footer.css"

function Footer() {
    return(
        <div className="homeFooter">
            <div className="homeCourses">
            <p>COMPANY</p>
            <br></br>
            <p>About us</p>
            <p>Careers</p>
            <p>Partners</p>
            </div>
            <div className="homeCourses">
            <p>COURSES</p>
            <br></br>
                <p>Register</p>
                <p>Login</p>
                <p>Projects</p>
                <p>Teachers</p>
                <p>Parents</p>
                <p>Resources</p>
                </div>
            <div className="homeCourses">
            <p>SUPPORT</p>
            <br></br>
            <p>FAQ's</p>
            <p>Helpdesk</p>
            <p>Contact Us</p>
            </div>
            <div className="homeCourses">
            <p>LEGAL</p>
            <br></br>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            </div>
            <div className="homeCourses">
            <p>LevelUp Works</p>
            <p className="levelupContact">LevelUp Works is an Auckland based enterprise dedicated to developing groung based learning software
                to help teachers response ti he newzealand Digital Technologies & hangarau Matihiko.
                <br></br><br></br>
                alan@levelupworks.com
                <br></br><br></br>
                (021) 668 185
            </p>
            </div>
        </div>
    );
}
export default Footer;
