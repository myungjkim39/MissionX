import React from "react";
import "./Footer.css"

function Footer() {
    return(
        <div className="homeFooter">
            <div className="homeCourses">
            <h5>COMPANY</h5>
            <br></br>
            <p>About us</p>
            <p>Careers</p>
            <p>Partners</p>
            </div>
            <div className="courses">
            <h5>COURSES</h5>
            <br></br>
                <p>Register</p>
                <p>Login</p>
                <p>Projects</p>
                <p>Teachers</p>
                <p>Parents</p>
                <p>Resources</p>
                </div>
            <div className="courses">
            <h5>SUPPORT</h5>
            <br></br>
            <p></p>
            </div>
            <div className="courses">
            <h5>LEGAL</h5>
            <br></br>
            <p></p>
            </div>
            <div className="courses">
            <h5>LevelUp Works</h5>
            <p></p>
            </div>
        </div>
    );
}
export default Footer;
