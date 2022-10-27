import React from "react";
import "./Classroom.css"


function Classroom() {
    return (
        <div className="Classroom">

            <img className = "ClassroomImg"
            src='src-assets/Home/classroom.png' alt="aclassroom"/>
            <div className="callToAction">
                <h3>What are you waiting for?</h3>
                <br></br>
                <h5>Start teaching Digital Technologies today.</h5>
                <br></br>
                <p>if you need more information we are happy to answer any questions you may have.</p>
                <br></br><br></br>
                <button className="signup">SIGN UP</button>


            </div>
  
            
        </div>
    )
}
export default Classroom;
