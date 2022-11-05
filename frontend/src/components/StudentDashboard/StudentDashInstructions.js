import React from "react";
import StudentSidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";
import { useState, useEffect } from "react";

export default function StudentProject() {
  const [instructionHtml, setInstructionHtml] = useState([]);

  const getInstructionLink = () => {
    fetch("http://localhost:4000/studentdashboard/instructions")
      .then((res) => res.json())

      .then((instructionData) => {
        // console.log(instructionData);

        setInstructionHtml(instructionData);
      });
  };

  useEffect(() => getInstructionLink(), []);

  return (
    <div className="outer-box">
      <StudentSidebar />
      <div className="content-box">
        <div className="inner-box">
          <div className="student-inst-content">
            <div className="instructions-content">
              <div dangerouslySetInnerHTML={{ __html: instructionHtml }} />
              
              {/* Inserted into Database */}
              {/* <div style ="display: flex; font-style: nunito, bold; color: #707070;">
                <h1>1. Join Scratch </h1>
              </div>
              <div style="display: flex; font-size: 16px; line-height: 20px; font-style: Open Sans, Semi-bold; color: #707070;">
                <p> If you haven\'t used Scratch before, you will need to join Scratch first. 
                <br> <br> Go to https://scratch.mit.edu. Click on join Scratch.</p>
              </div>
              <br> <br>
              <img src="/public-images/projects/Project01-instructions.png" alt="instructions" width="931px" height="244px"/>
              <br> <br>
              <div style=" display: flex; font-size: 16px; line-height: 20px; font-style: Open Sans, Semi-bold; color: #707070;">
                <p> Follow the instructions to join. You will need a username and a password that you will remember. If possible, you should
                  also verify your email address so that you can Share projects later. Ask your teacher to help with this step if you don\'t
                  have an email address, or if you are not sure what to do.</p>
              </div> */}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
