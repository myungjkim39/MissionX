import React from 'react'
import './MiddleOfHomePage.css'


function MiddleOfHomePage() {
  return (
    <div className="MiddleOfHomePage">
        <h3>Teaching Kids Programming and digital skills is MORE that just writing a code.</h3>
            <img className = "grougImage"
            src='src-assets/Home/Group 1.png' alt="group1"/>
             <img className = "grougImage"
            src='src-assets/Home/Group 2.png' alt="group2"/>
             <img className = "grougImage"
            src='src-assets/Home/Group 3.png' alt="group3"/>
             <img className = "grougImage"
            src='src-assets/Home/Group 4.png' alt="group4"/>

        <h3>How our Programme helps teachers and schools</h3>
        <button Classname="buttonHome">LEARNING PATHWAYS</button>
        <button Classname="buttonHome">DIGITAL TECHNOLOGIES</button>
        <button Classname="buttonHome">KEY COMPETENCIES</button>
        <button Classname="buttonHome">IR4.0</button>
    </div>
  )
}
export default MiddleOfHomePage