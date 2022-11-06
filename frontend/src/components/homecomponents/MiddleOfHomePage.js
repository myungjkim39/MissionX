import React from 'react'
import './MiddleOfHomePage.css'


function MiddleOfHomePage() {
  return (
    <div >
        <h3 className="MiddleOfHomePage">Teaching Kids Programming and digital skills is MORE that just writing a code.</h3>
        
        <div className="grougImage">
            <img className = "grougImage1"
            src='src-assets/Home/Group 1.png' alt="group1"/>
             <img className = "grougImage2"
            src='src-assets/Home/Group 2.png' alt="group2"/>
             <img className = "grougImage3"
            src='src-assets/Home/Group 3.png' alt="group3"/>
             <img className = "grougImage4"
            src='src-assets/Home/Group 4.png' alt="group4"/>
            </div>

        <h3 className="teachersAndSchools">How our Programme helps teachers and schools</h3>
        <div className="teachersAndSchool">
        <button1>LEARNING PATHWAYS</button1>
        <button1>DIGITAL TECHNOLOGIES</button1>
        <button1>KEY COMPETENCIES</button1>
        <button1>IR4.0</button1>
        </div>
        </div>
  )
  
}
export default MiddleOfHomePage