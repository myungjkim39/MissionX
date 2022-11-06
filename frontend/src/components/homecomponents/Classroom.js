import React from "react";
import "./Classroom.css"
import {Link} from "react-router-dom"

function Classroom() {
    return (
        <div className="Classroom">

            <img className = "ClassroomImg"
            src='src-assets/Home/classroom.png' alt="aclassroom"/>
            <div className="callToAction">
                <h3 className="classHeading">What are you waiting for?</h3>
                <h4 className="classheader">Start teaching Digital Technologies today.</h4>
                <p className="classpara">If you need more information we are happy to answer any questions you may have.</p>
                <button1>ENQUIRE NOW</button1>
                <Link to="/signup"><button className="signup">SIGN UP</button></Link>
            </div>
  
            
        </div>
    )
}
export default Classroom;
